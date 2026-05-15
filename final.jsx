import React, { useState, useMemo, useEffect } from 'react';
import { 
  LayoutGrid, Plus, BarChart3, Settings, Eye, EyeOff, TrendingDown, 
  ChevronRight, Bell, Target, Wallet, ShieldCheck, History, MoreHorizontal, 
  ArrowDownLeft, ArrowUpRight, X, Coffee, ShoppingBag, Car, FileText, 
  DollarSign, Gamepad2, Check, Flame, Award, Lightbulb, Calendar, Edit3,
  RefreshCw, TrendingUp as TrendUpIcon, Zap, Sparkles, Search, SlidersHorizontal,
  FileBox, Lock, Download, LogOut
} from 'lucide-react';

// --- UTILS & CUSTOM HOOKS ---

const APP_NAME = 'MoneyCare';
const STORAGE_KEY = 'moneycare-demo-state-v2';

const categoryMeta = {
  'Ăn uống': { icon: Coffee, bg: 'bg-amber-50', color: 'text-amber-600' },
  'Di chuyển': { icon: Car, bg: 'bg-sky-50', color: 'text-sky-600' },
  'Mua sắm': { icon: ShoppingBag, bg: 'bg-rose-50', color: 'text-rose-600' },
  'Hóa đơn': { icon: FileText, bg: 'bg-indigo-50', color: 'text-indigo-600' },
  'Giải trí': { icon: Gamepad2, bg: 'bg-violet-50', color: 'text-violet-600' },
  'Lương': { icon: DollarSign, bg: 'bg-emerald-50', color: 'text-emerald-600' },
  'Thưởng': { icon: Target, bg: 'bg-emerald-50', color: 'text-emerald-600' },
  'Khác': { icon: MoreHorizontal, bg: 'bg-slate-100', color: 'text-slate-700' }
};

const getTransactionMeta = (transaction) => {
  const fallback = transaction.type === 'income'
    ? { icon: DollarSign, bg: 'bg-emerald-50', color: 'text-emerald-600' }
    : { icon: Wallet, bg: 'bg-slate-100', color: 'text-slate-700' };
  return categoryMeta[transaction.category] || fallback;
};

const getMerchantLogo = (merchant = '') => {
  const key = merchant.toLowerCase();
  if (key.includes('highlands')) return { text: 'H', bg: 'bg-amber-600', color: 'text-white' };
  if (key.includes('netflix')) return { text: 'N', bg: 'bg-red-600', color: 'text-white' };
  if (key.includes('grab')) return { text: 'G', bg: 'bg-emerald-500', color: 'text-white' };
  if (key.includes('techcombank')) return { text: 'T', bg: 'bg-rose-600', color: 'text-white' };
  const first = merchant.trim().charAt(0).toUpperCase() || 'M';
  return { text: first, bg: 'bg-slate-900', color: 'text-white' };
};

const MerchantMark = ({ transaction }) => {
  const logo = getMerchantLogo(transaction.merchant);
  const meta = getTransactionMeta(transaction);
  const Icon = meta.icon;
  return (
    <div className="relative w-[46px] h-[46px] shrink-0">
      <div className={`w-full h-full rounded-[16px] ${logo.bg} ${logo.color} flex items-center justify-center text-[17px] font-black shadow-sm`}>
        {logo.text}
      </div>
      <div className={`absolute -right-1 -bottom-1 w-5 h-5 rounded-lg ${meta.bg} ${meta.color} border-2 border-white flex items-center justify-center`}>
        <Icon size={10} strokeWidth={3} />
      </div>
    </div>
  );
};

const normalizeGroups = (groups) => (Array.isArray(groups) ? groups : []).map(group => ({
  ...group,
  items: (group.items || []).map(item => {
    const meta = getTransactionMeta(item);
    return {
      ...item,
      bg: item.bg || meta.bg,
      color: item.color || meta.color
    };
  })
}));

const flattenTransactions = (groups) => groups.flatMap(group =>
  group.items.map(item => ({ ...item, groupDate: group.date }))
);

const downloadCsv = (transactions) => {
  const headers = ['Ngay', 'Loai', 'Danh muc', 'Ten giao dich', 'Ghi chu', 'So tien'];
  const rows = transactions.map(item => [
    item.groupDate,
    item.type === 'income' ? 'Thu nhap' : 'Chi tieu',
    item.category,
    item.merchant,
    item.note || '',
    item.amount
  ]);
  const csv = [headers, ...rows]
    .map(row => row.map(cell => `"${String(cell).replaceAll('"', '""')}"`).join(','))
    .join('\n');
  const blob = new Blob([`\uFEFF${csv}`], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'MoneyCare_giao_dich.csv';
  link.click();
  URL.revokeObjectURL(url);
};

const useAnimatedNumber = (value, duration = 800) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let startTime = null;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.floor(easeProgress * value));
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };
    requestAnimationFrame(animate);
  }, [value, duration]);

  return displayValue;
};

// --- STATE COMPONENTS ---

const SkeletonDashboard = () => (
  <div className="p-6 pt-16 space-y-8 animate-pulse">
    <div className="flex justify-between items-center">
      <div className="space-y-2">
        <div className="h-6 w-32 bg-slate-200 rounded-lg"></div>
        <div className="h-3 w-24 bg-slate-200 rounded-lg"></div>
      </div>
      <div className="h-11 w-11 bg-slate-200 rounded-full"></div>
    </div>
    <div className="h-48 w-full bg-slate-200 rounded-[32px]"></div>
    <div className="space-y-4">
      <div className="h-5 w-40 bg-slate-200 rounded-lg mb-2"></div>
      {[1, 2].map(i => (
        <div key={i} className="flex gap-4 items-center">
          <div className="h-12 w-12 bg-slate-200 rounded-[16px]"></div>
          <div className="space-y-2 flex-1">
            <div className="h-4 w-24 bg-slate-200 rounded"></div>
            <div className="h-3 w-32 bg-slate-200 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const EmptyState = ({ title, desc, icon }) => (
  <div className="flex flex-col items-center justify-center py-12 px-6 text-center animate-fade-in">
    <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mb-5 shadow-inner">
      {icon}
    </div>
    <h4 className="text-[17px] font-bold text-slate-800 tracking-tight">{title}</h4>
    <p className="text-[13px] text-slate-500 mt-2 font-medium leading-relaxed max-w-[240px]">{desc}</p>
    
    <div className="mt-8 flex flex-col items-center animate-bounce-soft">
      <span className="text-[11px] font-bold text-emerald-500 uppercase tracking-widest mb-2">Bắt đầu ngay</span>
      <div className="w-px h-8 bg-gradient-to-b from-emerald-400 to-transparent"></div>
    </div>
  </div>
);

// --- MAIN VIEWS ---

const QuickAdd = ({ onSave, onCancel }) => {
  const [rawAmount, setRawAmount] = useState('');
  const [type, setType] = useState('expense');
  const [cat, setCat] = useState('Ăn uống');
  const [note, setNote] = useState('');
  
  const categories = type === 'expense' 
    ? [
        { name: 'Ăn uống', icon: <Coffee size={24}/> },
        { name: 'Di chuyển', icon: <Car size={24}/> },
        { name: 'Mua sắm', icon: <ShoppingBag size={24}/> },
        { name: 'Hóa đơn', icon: <FileText size={24}/> },
        { name: 'Giải trí', icon: <Gamepad2 size={24}/> }
      ]
    : [
        { name: 'Lương', icon: <DollarSign size={24}/> },
        { name: 'Thưởng', icon: <Target size={24}/> },
        { name: 'Khác', icon: <MoreHorizontal size={24}/> }
      ];

  const addToAmount = (val) => {
    if (rawAmount.length < 10) setRawAmount(prev => prev + val);
  };

  const handleSave = () => {
    if (!rawAmount) return;
    const meta = categoryMeta[cat] || getTransactionMeta({ type, category: cat });
    onSave({
      id: Date.now(),
      type,
      category: cat,
      amount: parseInt(rawAmount),
      date: 'Vừa xong',
      merchant: note || (type === 'expense' ? 'Chi tiêu' : 'Thu nhập'),
      color: meta.color,
      bg: meta.bg
    });
  };

  const displayAmount = rawAmount ? parseInt(rawAmount).toLocaleString('vi-VN') : '0';

  return (
    <div className="h-full bg-white flex flex-col animate-page-enter relative z-50">
      <div className="flex items-center justify-between px-6 pt-12 pb-4">
        <button onClick={onCancel} className="p-2 -ml-2 text-slate-500 hover:text-slate-800 hover:bg-slate-50 rounded-full transition-colors active:scale-90 touch-manipulation">
          <X size={24} strokeWidth={2.5} />
        </button>
        <div className="flex bg-slate-100/80 p-1 rounded-full">
          <button 
            onClick={() => { setType('expense'); setCat('Ăn uống'); }}
            className={`px-5 py-2 rounded-full text-[13px] font-bold transition-all duration-300 ${type === 'expense' ? 'bg-white text-slate-900 shadow-[0_2px_8px_rgba(0,0,0,0.06)]' : 'text-slate-500 hover:text-slate-700'}`}
          >Khoản chi</button>
          <button 
            onClick={() => { setType('income'); setCat('Lương'); }}
            className={`px-5 py-2 rounded-full text-[13px] font-bold transition-all duration-300 ${type === 'income' ? 'bg-white text-emerald-600 shadow-[0_2px_8px_rgba(0,0,0,0.06)]' : 'text-slate-500 hover:text-slate-700'}`}
          >Khoản thu</button>
        </div>
        <div className="w-8"></div>
      </div>

      <div className="flex-1 flex flex-col items-center py-2 overflow-y-auto no-scrollbar">
        
        <div className="w-full text-center mt-2 mb-6 h-24 flex flex-col justify-center">
          <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">Nhập số tiền</p>
          <div className={`flex items-baseline justify-center gap-1 transition-colors duration-300 ${type === 'income' ? 'text-emerald-500' : 'text-slate-900'}`}>
            <span className="text-[52px] font-extrabold tracking-tighter leading-none animate-scale-up inline-block origin-bottom">
              {displayAmount}
            </span>
            <span className="text-2xl font-bold opacity-40">đ</span>
          </div>
        </div>

        {/* Scalable Context Flow */}
        <div className="w-full px-6 mb-8">
          <div className="bg-slate-50 border border-slate-100 rounded-[20px] p-2 flex items-center justify-between gap-2 shadow-sm">
            <button className="flex items-center gap-2 bg-white px-3 py-2.5 rounded-xl shadow-[0_2px_6px_rgba(0,0,0,0.03)] border border-slate-100/50 text-slate-600 hover:bg-slate-50 active:scale-95 transition-all">
              <Wallet size={16} className="text-emerald-500" />
              <span className="text-[13px] font-medium">Ví chính</span>
            </button>
            <button className="flex items-center gap-2 bg-white px-3 py-2.5 rounded-xl shadow-[0_2px_6px_rgba(0,0,0,0.03)] border border-slate-100/50 text-slate-600 hover:bg-slate-50 active:scale-95 transition-all">
              <Calendar size={16} className="text-blue-500" />
              <span className="text-[13px] font-medium">Hôm nay</span>
            </button>
            <div className="flex-1 flex items-center gap-2 bg-white px-3 py-2.5 rounded-xl shadow-[0_2px_6px_rgba(0,0,0,0.03)] border border-slate-100/50">
              <Edit3 size={16} className="text-slate-400 shrink-0" />
              <input 
                type="text" 
                placeholder="Tên người nhận..." 
                className="bg-transparent border-none outline-none text-[13px] font-medium text-slate-700 w-full placeholder:text-slate-400 placeholder:font-medium"
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Refined Category Selection */}
        <div className="w-full px-6 mb-8">
          <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar -mx-6 px-6">
            {categories.map(c => {
              const isActive = cat === c.name;
              return (
                <button 
                  key={c.name}
                  onClick={() => setCat(c.name)}
                  className="flex flex-col items-center gap-2.5 flex-shrink-0 group outline-none"
                >
                  <div className={`w-[56px] h-[56px] rounded-[20px] flex items-center justify-center transition-all duration-300 ease-out border
                    ${isActive 
                      ? (type === 'income' 
                          ? 'bg-emerald-50/80 border-emerald-200/60 text-emerald-600 scale-105 shadow-[0_6px_16px_rgba(16,185,129,0.08)]' 
                          : 'bg-white border-slate-200/80 text-slate-800 scale-105 shadow-[0_6px_16px_rgba(0,0,0,0.06)]') 
                      : 'bg-slate-50/50 border-transparent text-slate-500 group-hover:bg-slate-100 group-active:scale-95'}`}
                  >
                    {c.icon}
                  </div>
                  <span className={`text-[12px] font-bold transition-colors ${isActive ? 'text-slate-800' : 'text-slate-500'}`}>{c.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tactile Numpad */}
        <div className="w-full px-5 pb-8 mt-auto">
          <div className="bg-slate-50/50 p-2.5 rounded-[32px]">
            <div className="grid grid-cols-3 gap-2 max-w-[320px] mx-auto">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 'C', 0, 'OK'].map(num => (
                <button 
                  key={num}
                  onClick={() => {
                    if (num === 'C') setRawAmount('');
                    else if (num === 'OK') handleSave();
                    else addToAmount(num.toString());
                  }}
                  className={`h-[60px] flex items-center justify-center text-[26px] font-medium transition-all duration-75 rounded-[22px] select-none touch-manipulation
                    ${num === 'OK' 
                      ? (type === 'income' 
                          ? 'bg-emerald-500 text-white shadow-[0_6px_16px_rgba(16,185,129,0.25)] hover:bg-emerald-600 active:scale-[0.92]' 
                          : 'bg-slate-900 text-white shadow-[0_6px_16px_rgba(15,23,42,0.2)] hover:bg-slate-800 active:scale-[0.92]')
                      : num === 'C' 
                        ? 'text-slate-500 bg-transparent hover:bg-slate-200/50 active:bg-slate-200 active:scale-[0.92]' 
                        : 'text-slate-800 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.03)] border border-slate-100/50 hover:bg-slate-50 active:bg-slate-100 active:scale-[0.92]'}`}
                >
                  {num === 'OK' ? <Check strokeWidth={3.5} size={26} /> : num}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Dashboard = ({ stats, filteredGroups, filters, setFilters, isBalanceVisible, setIsBalanceVisible, formatVND, isEmpty }) => {
  const animatedBalance = useAnimatedNumber(stats.balance);
  const animatedIncome = useAnimatedNumber(stats.income);
  const animatedExpense = useAnimatedNumber(stats.expense);
  const hasFilter = filters.search || filters.type !== 'all' || filters.category !== 'all';
  const displayGroups = filteredGroups;
  const dueItems = [
    { title: 'Netflix', amount: '-260k', when: 'Hôm nay', icon: RefreshCw, tone: 'indigo', progress: 92 },
    { title: 'Tiền điện', amount: '-1.250k', when: '3 ngày tới', icon: Zap, tone: 'amber', progress: 58 }
  ];

  return (
    <div className="animate-page-enter relative h-full overflow-y-auto no-scrollbar">
      <header className="px-6 pt-16 pb-6 flex justify-between items-center bg-slate-50/90 backdrop-blur-md sticky top-0 z-20">
        <div>
          <h3 className="text-[26px] font-extrabold text-slate-900 tracking-tight">Chào Minh Anh,</h3>
          <p className="text-slate-500 text-[13px] font-bold mt-1">{APP_NAME} • Bảo mật bằng PIN</p>
        </div>
        <button className="relative w-[44px] h-[44px] bg-white rounded-full flex items-center justify-center text-slate-600 shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100/50 hover:bg-slate-50 transition-colors active:scale-90 touch-manipulation">
          <Bell size={22} strokeWidth={2.2} />
          <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-rose-500 rounded-full border-2 border-white"></span>
        </button>
      </header>

      {/* Hero Balance Card */}
      <div className="px-6 mt-2">
        <div className="bg-[#181C25] rounded-[32px] p-7 shadow-[0_16px_32px_-12px_rgba(15,23,42,0.3)] relative overflow-hidden border border-slate-700/30">
          <div className="absolute top-[-20%] left-[-10%] w-48 h-48 bg-blue-500/10 rounded-full blur-[40px]"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-48 h-48 bg-emerald-500/10 rounded-full blur-[40px]"></div>
          
          <div className="relative z-10 flex flex-col gap-6">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2 text-slate-300">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Tổng tài sản</span>
                <button onClick={() => setIsBalanceVisible(!isBalanceVisible)} className="p-1 hover:text-white transition-colors active:scale-90 touch-manipulation">
                  {isBalanceVisible ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/5 px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <Wallet size={12} className="text-emerald-400"/>
                <span className="text-[10px] text-white font-extrabold uppercase tracking-wide">Ví chính</span>
              </div>
            </div>
            
            <h4 className="text-[40px] font-extrabold text-white tracking-tighter leading-none font-sans">
              {isBalanceVisible ? formatVND(animatedBalance) : '••••••••'}
            </h4>

            <div className="flex items-center gap-6 pt-5 border-t border-slate-700/40">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-500/15 rounded-[12px] text-emerald-400">
                  <ArrowDownLeft size={16} strokeWidth={2.5} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Thu nhập</p>
                  <p className="text-[15px] font-bold text-white mt-0.5">{isBalanceVisible ? formatVND(animatedIncome) : '•••'}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-rose-500/15 rounded-[12px] text-rose-400">
                  <ArrowUpRight size={16} strokeWidth={2.5} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Chi tiêu</p>
                  <p className="text-[15px] font-bold text-white mt-0.5">{isBalanceVisible ? formatVND(animatedExpense) : '•••'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isEmpty ? (
        <EmptyState 
          title="Chưa có dữ liệu" 
          desc={`Hãy thêm giao dịch đầu tiên để ${APP_NAME} bắt đầu phân tích dòng tiền.`}
          icon={<FileBox size={40} className="text-slate-300" strokeWidth={1.5} />}
        />
      ) : (
        <>
          {/* AI Financial Intelligence */}
          <div className="mx-6 mt-5 bg-emerald-50/60 border border-emerald-100/60 rounded-[20px] p-3.5 flex items-center gap-3.5 shadow-[0_2px_10px_rgba(16,185,129,0.04)] animate-slide-up" style={{animationDelay: '0.1s'}}>
            <div className="bg-white p-2 rounded-[14px] text-emerald-500 shadow-sm border border-emerald-50 shrink-0">
               <Sparkles size={18} fill="currentColor" />
            </div>
            <p className="text-[13px] text-slate-600 font-medium leading-snug">
              Tuyệt vời! Tuần này bạn đã tiết kiệm được <span className="font-bold text-emerald-600">12%</span> so với tuần trước.
            </p>
          </div>

          {/* Quick Actions / Bills */}
          <div className="mt-8 px-6 animate-slide-up" style={{animationDelay: '0.2s'}}>
            <div className="flex items-center justify-between mb-3 px-1">
              <h4 className="text-[17px] font-bold text-slate-800 tracking-[0.02em]">Sắp đến hạn</h4>
              <button className="text-[12px] font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full active:scale-95 transition-all">Xem tất cả</button>
            </div>
            <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
              {dueItems.map(item => {
                const Icon = item.icon;
                const color = item.tone === 'indigo' ? 'text-indigo-500 bg-indigo-50' : 'text-amber-500 bg-amber-50';
                const bar = item.tone === 'indigo' ? 'bg-indigo-500' : 'bg-amber-500';
                const badge = item.when === 'Hôm nay' ? 'text-rose-600 bg-rose-50' : 'text-slate-600 bg-slate-100';
                return (
                  <button key={item.title} className="flex-shrink-0 w-[156px] bg-white border border-slate-100 p-3.5 rounded-[20px] shadow-sm flex flex-col gap-3 text-left active:scale-[0.97] hover:border-slate-200 hover:shadow-md transition-all">
                    <div className="flex justify-between items-start">
                       <div className={`p-2 rounded-[12px] ${color}`}><Icon size={16}/></div>
                       <ChevronRight size={17} className="text-slate-300" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-[14px] font-bold text-slate-800">{item.title}</p>
                        <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full whitespace-nowrap ${badge}`}>{item.when}</span>
                      </div>
                      <p className="text-[14px] font-semibold text-slate-500 mt-1">{item.amount}</p>
                    </div>
                    <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${bar}`} style={{ width: `${item.progress}%` }}></div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grouped Transaction List (Real Product Feel with search) */}
          <div className="mt-8 px-6 animate-slide-up" style={{animationDelay: '0.3s'}}>
            <div className="flex justify-between items-end mb-3 px-1">
              <h4 className="text-[17px] font-bold text-slate-800 tracking-[0.02em]">Giao dịch gần đây</h4>
              <div className="flex items-center gap-3">
                <Search size={18} className="text-slate-400" />
                <SlidersHorizontal size={18} className="text-slate-400" />
              </div>
            </div>

            <div className="bg-white rounded-[22px] p-3 border border-slate-100 shadow-sm mb-3 space-y-3">
              <div className="flex items-center gap-2 bg-slate-50 rounded-2xl px-3 py-2.5">
                <Search size={16} className="text-slate-400 shrink-0" />
                <input
                  value={filters.search}
                  onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
                  placeholder="Tìm theo tên, ghi chú..."
                  className="w-full bg-transparent outline-none text-[13px] font-semibold text-slate-700 placeholder:text-slate-400"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <select
                  value={filters.type}
                  onChange={(e) => setFilters(prev => ({ ...prev, type: e.target.value }))}
                  className="bg-slate-50 rounded-xl px-3 py-2 text-[12px] font-bold text-slate-700 outline-none"
                >
                  <option value="all">Tất cả loại</option>
                  <option value="expense">Khoản chi</option>
                  <option value="income">Khoản thu</option>
                </select>
                <select
                  value={filters.category}
                  onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value }))}
                  className="bg-slate-50 rounded-xl px-3 py-2 text-[12px] font-bold text-slate-700 outline-none"
                >
                  <option value="all">Tất cả danh mục</option>
                  {Object.keys(categoryMeta).map(name => <option key={name} value={name}>{name}</option>)}
                </select>
              </div>
            </div>
            
            <div className="bg-white rounded-[28px] p-2.5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-slate-100">
              {displayGroups.length === 0 && (
                <div className="py-10 text-center">
                  <p className="text-[14px] font-bold text-slate-700">Không tìm thấy giao dịch</p>
                  <p className="text-[12px] text-slate-500 mt-1">{hasFilter ? 'Thử đổi bộ lọc hoặc từ khóa.' : 'Hãy thêm giao dịch mới.'}</p>
                </div>
              )}
              {displayGroups.map((group, gIdx) => (
                <div key={group.date}>
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider px-3.5 pt-3 pb-1">{group.date}</p>
                  
                  {group.items.map((t, index) => (
                    <div 
                      key={t.id} 
                      className="flex items-center justify-between p-3.5 rounded-[20px] hover:bg-slate-50 transition-colors cursor-pointer active:scale-[0.98] stagger-item opacity-0 animate-fade-in-up"
                      style={{ animationDelay: `${0.4 + (index * 0.1)}s`, animationFillMode: 'forwards' }}
                    >
                      <div className="flex items-center gap-4">
                        <MerchantMark transaction={t} />
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="text-[15px] font-bold text-slate-800 leading-tight">{t.merchant}</p>
                            {t.isRecurring && <span className="bg-slate-100 text-slate-500 text-[9px] font-bold px-1.5 py-0.5 rounded-md uppercase tracking-wider">Định kỳ</span>}
                          </div>
                          <p className="text-[12px] font-medium text-slate-500 mt-1">{t.category} • {t.note}</p>
                        </div>
                      </div>
                      <p className={`text-[15px] font-bold tracking-tight pr-2 ${t.type === 'income' ? 'text-emerald-500' : 'text-slate-800'}`}>
                        {t.type === 'income' ? '+' : '-'}{t.amount.toLocaleString()}đ
                      </p>
                    </div>
                  ))}
                  {gIdx !== displayGroups.length - 1 && <div className="h-px w-auto mx-4 my-1 bg-slate-50"></div>}
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      <div className="h-[220px] w-full shrink-0"></div>
    </div>
  );
};

const Analytics = ({ stats, formatVND, isEmpty, onFilterCategory }) => {
  const [activeLineIndex, setActiveLineIndex] = useState(3);
  const [activeDonutSlice, setActiveDonutSlice] = useState(null); 

  // Fallback data for empty state to show greyed out charts
  const rawData = isEmpty ? [0, 0, 0, 0, 0, 0, 0] : [10, 45, 30, 85, 40, 20, 55];
  const maxData = isEmpty ? 100 : Math.max(...rawData);
  const chartHeight = 100;
  const chartWidth = 300;
  
  const points = rawData.map((val, i) => ({
    x: (i / (rawData.length - 1)) * chartWidth,
    y: chartHeight - (val / maxData * chartHeight)
  }));

  const createSmoothPath = (pts) => {
    return pts.reduce((acc, point, i, a) => {
      if (i === 0) return `M ${point.x},${point.y}`;
      const prev = a[i - 1];
      const cp1x = prev.x + (point.x - prev.x) / 2;
      const cp2x = point.x - (point.x - prev.x) / 2;
      return `${acc} C ${cp1x},${prev.y} ${cp2x},${point.y} ${point.x},${point.y}`;
    }, '');
  };

  const pathD = createSmoothPath(points);
  const fillPathD = `${pathD} L ${chartWidth},${chartHeight} L 0,${chartHeight} Z`;

  const donutData = isEmpty 
    ? [{ name: 'Chưa có', pct: '0%', color: 'bg-slate-200', stroke: 'text-slate-200', dash: '100, 100', offset: '0' }]
    : [
        { name: 'Ăn uống', pct: '50%', color: 'bg-emerald-500', stroke: 'text-emerald-500', dash: '50, 100', offset: '0' },
        { name: 'Mua sắm', pct: '30%', color: 'bg-rose-500', stroke: 'text-rose-500', dash: '30, 100', offset: '-50' },
        { name: 'Khác', pct: '20%', color: 'bg-indigo-500', stroke: 'text-indigo-500', dash: '20, 100', offset: '-80' }
      ];

  const strokeColor = isEmpty ? "#e2e8f0" : "#10b981";
  const insightCards = [
    { label: 'So với tháng trước', value: '-8.4%', desc: 'Giảm chi tiêu', tone: 'emerald' },
    { label: 'Ngày cao điểm', value: 'T5', desc: '85k phát sinh', tone: 'slate' },
    { label: 'Danh mục nổi bật', value: 'Ăn uống', desc: 'Cần theo dõi nhẹ', tone: 'amber' }
  ];

  return (
    <div className="animate-page-enter relative h-full overflow-y-auto no-scrollbar">
      <header className="px-6 pt-16 pb-4 bg-slate-50 sticky top-0 z-20">
        <h2 className="text-[28px] font-extrabold text-slate-900 tracking-tight">Thống kê</h2>
        <p className="text-slate-500 text-sm font-semibold mt-1">Tháng 06, 2025</p>
      </header>

      {isEmpty ? (
        <EmptyState 
          title="Biểu đồ đang trống" 
          desc="Thêm các khoản chi tiêu để xem phân tích tự động tại đây."
          icon={<BarChart3 size={40} className="text-slate-300" strokeWidth={1.5} />}
        />
      ) : (
        <div className="px-6 mb-5 animate-slide-up">
          <div className="bg-rose-50/80 border border-rose-100/80 rounded-[24px] p-4 flex gap-3.5 items-start shadow-sm">
            <div className="bg-white p-2 rounded-xl text-rose-500 shadow-[0_2px_6px_rgba(0,0,0,0.04)] border border-rose-50 shrink-0 mt-0.5">
               <TrendingDown size={18} strokeWidth={2.5} />
            </div>
            <p className="text-[13px] text-slate-700 font-semibold leading-relaxed pt-0.5 pr-2">
              Chi tiêu tuần này cao hơn mức trung bình <span className="font-extrabold text-rose-600 bg-rose-100/80 px-1.5 py-0.5 rounded">18%</span>. Cần chú ý nhóm <strong>Mua sắm</strong>.
            </p>
          </div>
        </div>
      )}

      {!isEmpty && (
        <div className="px-6 mb-6 grid grid-cols-3 gap-2.5 animate-slide-up" style={{animationDelay: '0.05s'}}>
          {insightCards.map(card => {
            const tone = card.tone === 'emerald'
              ? 'bg-emerald-50/80 border-emerald-100 text-emerald-700'
              : card.tone === 'amber'
                ? 'bg-amber-50/80 border-amber-100 text-amber-700'
                : 'bg-white border-slate-100 text-slate-700';
            return (
              <div key={card.label} className={`rounded-[20px] border p-3 shadow-sm ${tone}`}>
                <p className="text-[9px] font-bold uppercase tracking-wider opacity-70 leading-tight">{card.label}</p>
                <p className="text-[15px] font-black mt-2 leading-tight">{card.value}</p>
                <p className="text-[10px] font-semibold opacity-70 mt-1 leading-tight">{card.desc}</p>
              </div>
            );
          })}
        </div>
      )}

      {/* Chart Visualization */}
      <div className={`px-6 mb-8 ${isEmpty ? 'opacity-50 pointer-events-none' : 'animate-slide-up'}`} style={{animationDelay: '0.1s'}}>
        <div className="bg-white rounded-[32px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100">
          <div className="flex justify-between items-start mb-8">
            <div>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1.5">Tuần này</p>
              <p className="text-3xl font-extrabold text-slate-900 tracking-tight">{formatVND(stats.expense)}</p>
            </div>
            {!isEmpty && (
              <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-600 px-2.5 py-1.5 rounded-lg border border-emerald-100">
                 <TrendUpIcon size={14} strokeWidth={3} />
                 <span className="text-[11px] font-bold">12.5%</span>
              </div>
            )}
          </div>
          
          <div className="relative w-full h-[120px]">
            {(!isEmpty && activeLineIndex !== null) && (
              <div 
                className="absolute -top-6 bg-slate-800 text-white text-[11px] font-bold py-1.5 px-2.5 rounded-lg shadow-md transition-all duration-300 transform -translate-x-1/2 z-10 pointer-events-none"
                style={{ left: `${(activeLineIndex / (rawData.length - 1)) * 100}%` }}
              >
                {rawData[activeLineIndex]}k
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45"></div>
              </div>
            )}

            <svg viewBox={`0 -10 ${chartWidth} ${chartHeight + 20}`} className="w-full h-full overflow-visible">
              {!isEmpty && (
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.2" />
                    <stop offset="40%" stopColor="#10b981" stopOpacity="0.08" />
                    <stop offset="70%" stopColor="#10b981" stopOpacity="0.01" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                  </linearGradient>
                </defs>
              )}
              
              <path 
                d={fillPathD} 
                fill={isEmpty ? "none" : "url(#chartGradient)"} 
                className="animate-fade-in"
                style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}
              />
              
              <path 
                d={pathD} 
                fill="none" 
                stroke={strokeColor} 
                strokeWidth="2.5" 
                strokeLinecap="round"
                strokeLinejoin="round"
                className="line-draw-animation"
                strokeDasharray={isEmpty ? "4 8" : "1000"} // Dashed if empty
                strokeDashoffset="1000"
              />

              {!isEmpty && points.map((pt, i) => {
                const isPeak = i === 3;
                const isHovered = activeLineIndex === i;
                return (
                  <g key={i} onClick={() => setActiveLineIndex(i)} className="cursor-pointer">
                    <circle cx={pt.x} cy={pt.y} r="20" fill="transparent" />
                    <circle 
                      cx={pt.x} cy={pt.y} 
                      r={isPeak || isHovered ? "4.5" : "3.5"} 
                      fill={isPeak || isHovered ? strokeColor : "white"} 
                      stroke={isPeak || isHovered ? "white" : strokeColor} 
                      strokeWidth={isPeak || isHovered ? "2" : "2.5"}
                      className={`transition-all duration-300 animate-scale-up ${isPeak ? 'shadow-md' : ''}`}
                      style={{ opacity: 0, animationDelay: `${0.5 + i*0.05}s`, animationFillMode: 'forwards' }}
                    />
                    {isPeak && !isHovered && (
                       <circle cx={pt.x} cy={pt.y} r="10" fill="none" stroke={strokeColor} strokeWidth="1" opacity="0.3" className="animate-ping" style={{ animationDuration: '3s'}}/>
                    )}
                  </g>
                );
              })}
            </svg>
          </div>
          
          <div className="flex justify-between mt-4 text-[11px] font-bold text-slate-500">
            {['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'].map((day, i) => (
              <span key={i} className={activeLineIndex === i && !isEmpty ? 'text-slate-900 transition-colors' : ''}>{day}</span>
            ))}
          </div>
        </div>
      </div>

      <div className={`px-6 mb-8 ${isEmpty ? 'opacity-50 pointer-events-none' : 'animate-slide-up'}`} style={{animationDelay: '0.2s'}}>
        <div className="bg-white rounded-[32px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100">
          <div className="flex justify-between items-center mb-6">
            <p className="text-slate-800 text-[16px] font-extrabold">Cơ cấu chi tiêu</p>
            <button className="text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-slate-100 transition-colors">Tháng này</button>
          </div>
          
          <div className="flex items-center gap-8">
            <div className="relative w-[110px] h-[110px] shrink-0">
              <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                <path className="text-slate-100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.5" />
                
                {donutData.map((slice, idx) => {
                  const isFaded = activeDonutSlice && activeDonutSlice !== slice.name;
                  return (
                    <path 
                      key={slice.name}
                      onClick={() => !isEmpty && setActiveDonutSlice(activeDonutSlice === slice.name ? null : slice.name)}
                      className={`${slice.stroke} chart-spin-animation transition-opacity duration-300 outline-none ${!isEmpty ? 'cursor-pointer' : ''}`} 
                      style={{ animationDelay: `${idx * 0.1}s`, opacity: isFaded && !isEmpty ? 0.2 : 1 }}
                      strokeDasharray={slice.dash} 
                      strokeDashoffset={slice.offset} 
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth={activeDonutSlice === slice.name && !isEmpty ? "4.5" : "3.5"} 
                      strokeLinecap="round" 
                    />
                  );
                })}
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none transition-all duration-300">
                {activeDonutSlice && !isEmpty ? (
                  <>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-0.5">{activeDonutSlice}</span>
                    <span className="text-[15px] font-black text-slate-900">{donutData.find(d=>d.name === activeDonutSlice).pct}</span>
                  </>
                ) : (
                  <>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-0.5">Tổng</span>
                    <span className="text-[15px] font-black text-slate-900">{isEmpty ? '0đ' : '4.4M'}</span>
                  </>
                )}
              </div>
            </div>

            <div className="flex-1 space-y-5 py-2"> 
              {donutData.map(item => {
                const isFaded = activeDonutSlice && activeDonutSlice !== item.name;
                return (
                  <div 
                    key={item.name} 
                    onClick={() => !isEmpty && setActiveDonutSlice(activeDonutSlice === item.name ? null : item.name)}
                    className={`flex items-center justify-between transition-opacity duration-300 ${isFaded && !isEmpty ? 'opacity-30' : 'opacity-100'} ${!isEmpty ? 'cursor-pointer' : ''}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-2.5 h-2.5 rounded-full ${item.color}`}></div>
                      <span className={`text-[13px] font-bold ${activeDonutSlice === item.name && !isEmpty ? 'text-slate-900' : 'text-slate-600'}`}>{item.name}</span>
                    </div>
                    <span className="text-[14px] font-black text-slate-900">{item.pct}</span>
                  </div>
                );
              })}
            </div>
          </div>
          {activeDonutSlice && !isEmpty && (
            <button
              onClick={() => onFilterCategory(activeDonutSlice)}
              className="mt-5 w-full bg-slate-900 text-white rounded-[18px] py-3 text-[13px] font-extrabold active:scale-95 transition-all"
            >
              Xem giao dịch {activeDonutSlice}
            </button>
          )}
        </div>
      </div>

      {!isEmpty && (
        <div className="px-6 mb-8 animate-slide-up" style={{animationDelay: '0.3s'}}>
          <div className="bg-white rounded-[28px] p-5 border border-slate-100 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <p className="text-[16px] font-extrabold text-slate-900">Xu hướng danh mục</p>
              <span className="text-[11px] font-bold text-slate-500 bg-slate-50 px-2.5 py-1 rounded-full">7 ngày</span>
            </div>
            {[
              ['Ăn uống', 72, 'bg-emerald-500'],
              ['Mua sắm', 48, 'bg-rose-500'],
              ['Di chuyển', 31, 'bg-sky-500']
            ].map(([name, pct, color]) => (
              <div key={name} className="mb-3 last:mb-0">
                <div className="flex justify-between text-[12px] font-bold text-slate-600 mb-1.5">
                  <span>{name}</span>
                  <span>{pct}%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className={`h-full rounded-full ${color} animate-width-in`} style={{ width: `${pct}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="h-[220px] w-full shrink-0"></div>
    </div>
  );
};

const AuthFlow = ({ account, onComplete }) => {
  const [screen, setScreen] = useState(account ? 'login' : 'welcome');
  const [name, setName] = useState(account?.name || '');
  const [email, setEmail] = useState(account?.email || '');
  const [pin, setPin] = useState('');
  const [newPin, setNewPin] = useState('');
  const [monthlyIncome, setMonthlyIncome] = useState('25000000');
  const [walletBalance, setWalletBalance] = useState('5000000');
  const [goalName, setGoalName] = useState('Quỹ du lịch Đà Nẵng');
  const [goalTarget, setGoalTarget] = useState('12000000');
  const [pendingAccount, setPendingAccount] = useState(null);
  const [error, setError] = useState('');

  const validateEmail = (value) => /\S+@\S+\.\S+/.test(value);
  const validatePin = (value) => /^\d{4}$/.test(value);

  const go = (nextScreen) => {
    setError('');
    setScreen(nextScreen);
  };

  const handleRegister = (event) => {
    event.preventDefault();
    if (name.trim().length < 2) return setError('Vui lòng nhập tên của bạn.');
    if (!validateEmail(email)) return setError('Email chưa đúng định dạng.');
    if (!validatePin(pin)) return setError('PIN cần gồm đúng 4 số.');
    setPendingAccount({ name: name.trim(), email: email.trim(), pin });
    go('setup');
  };

  const handleLogin = (event) => {
    event.preventDefault();
    if (!account) return setError('Chưa có tài khoản trên thiết bị này. Hãy đăng ký hoặc xem demo.');
    if (!validatePin(pin)) return setError('Nhập PIN 4 số để đăng nhập.');
    if (pin !== account.pin) return setError('PIN không đúng. Bạn có thể đặt lại PIN bên dưới.');
    onComplete({ user: account, account, onboardingSeen: true });
  };

  const handleRecover = (event) => {
    event.preventDefault();
    if (!account) return setError('Chưa có tài khoản để khôi phục.');
    if (email.trim().toLowerCase() !== account.email.toLowerCase()) return setError('Email khôi phục không trùng với tài khoản.');
    if (!validatePin(newPin)) return setError('PIN mới cần gồm đúng 4 số.');
    const recovered = { ...account, pin: newPin };
    onComplete({ user: recovered, account: recovered, onboardingSeen: true });
  };

  const handleSetup = (event) => {
    event.preventDefault();
    const nextAccount = pendingAccount || { name: name || 'Minh Anh', email: email || 'minhanh@email.com', pin: pin || '1234' };
    const income = Number(monthlyIncome) || 0;
    const balance = Number(walletBalance) || 0;
    const target = Number(goalTarget) || 0;

    onComplete({
      user: nextAccount,
      account: nextAccount,
      onboardingSeen: true,
      wallets: [{ id: Date.now(), name: 'Ví chính', balance }],
      goals: [{ id: Date.now() + 1, name: goalName || 'Mục tiêu tiết kiệm', target: target || 10000000, current: Math.min(balance, target || balance) }],
      groupedTransactions: [
        {
          date: 'Hôm nay',
          items: [
            { id: Date.now() + 2, type: 'income', merchant: 'Thu nhập tháng', category: 'Lương', amount: income, note: 'Thiết lập ban đầu', bg: 'bg-emerald-50', color: 'text-emerald-600' }
          ]
        }
      ]
    });
  };

  const startDemo = () => {
    const demoAccount = { name: 'Minh Anh', email: 'demo@moneycare.app', pin: '1234', isDemo: true };
    onComplete({ user: demoAccount, account: demoAccount, onboardingSeen: true, demo: true });
  };

  const AuthShell = ({ children }) => (
    <div className="h-full bg-slate-50 flex flex-col px-7 pt-14 pb-7 animate-page-enter overflow-y-auto no-scrollbar">
      {screen !== 'welcome' && (
        <button onClick={() => go('welcome')} className="mb-5 w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-600 shadow-sm active:scale-90">
          <X size={19} />
        </button>
      )}
      {children}
    </div>
  );

  const TrustStrip = () => (
    <div className="grid grid-cols-3 gap-2 mt-6">
      {[
        [Lock, 'PIN 4 số'],
        [ShieldCheck, 'Cục bộ'],
        [EyeOff, 'Ẩn số dư']
      ].map(([Icon, label]) => (
        <div key={label} className="bg-white border border-slate-100 rounded-2xl p-3 text-center shadow-sm">
          <Icon size={18} className="mx-auto text-slate-700" />
          <p className="text-[10px] font-bold text-slate-500 mt-2">{label}</p>
        </div>
      ))}
    </div>
  );

  if (screen === 'welcome') {
    return (
      <AuthShell>
        <div className="w-16 h-16 bg-slate-900 rounded-[22px] flex items-center justify-center text-white shadow-xl mb-7">
          <Wallet size={30} />
        </div>
        <p className="text-[11px] font-black text-emerald-600 uppercase tracking-[0.24em] mb-3">Personal finance</p>
        <h1 className="text-[34px] font-black text-slate-900 tracking-tight leading-[1.05]">{APP_NAME}</h1>
        <p className="text-[15px] text-slate-500 font-medium mt-3 leading-relaxed">Quản lý tiền dễ hơn mỗi ngày với ví, ngân sách, mục tiêu và insight tài chính nhẹ nhàng.</p>
        <TrustStrip />
        <div className="mt-auto space-y-3 pt-10">
          <button onClick={() => go('register')} className="w-full bg-slate-900 text-white rounded-[24px] py-4 text-[15px] font-extrabold shadow-[0_12px_24px_rgba(15,23,42,0.22)] active:scale-95 transition-all">
            Bắt đầu miễn phí
          </button>
          <button onClick={() => go('login')} className="w-full bg-white text-slate-800 border border-slate-100 rounded-[24px] py-4 text-[15px] font-extrabold active:scale-95 transition-all">
            Tôi đã có tài khoản
          </button>
          <button onClick={startDemo} className="w-full text-emerald-600 rounded-[20px] py-2.5 text-[13px] font-extrabold active:scale-95 transition-all">
            Trải nghiệm demo
          </button>
        </div>
      </AuthShell>
    );
  }

  if (screen === 'register') {
    return (
      <AuthShell>
        <h2 className="text-[30px] font-black text-slate-900 tracking-tight">Tạo tài khoản</h2>
        <p className="text-[14px] text-slate-500 font-medium mt-2 leading-relaxed">Chỉ cần tên, email và PIN 4 số. Dữ liệu prototype được lưu trên trình duyệt.</p>
        <form onSubmit={handleRegister} className="mt-7 space-y-3">
          <input value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" className="w-full bg-white border border-slate-100 rounded-2xl px-4 py-4 text-[15px] font-bold outline-none focus:border-slate-300" placeholder="Tên của bạn" />
          <input value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" className="w-full bg-white border border-slate-100 rounded-2xl px-4 py-4 text-[15px] font-bold outline-none focus:border-slate-300" placeholder="Email" />
          <input value={pin} onChange={(e) => setPin(e.target.value.replace(/\D/g, '').slice(0, 4))} type="password" inputMode="numeric" autoComplete="new-password" className="w-full bg-white border border-slate-100 rounded-2xl px-4 py-4 text-[15px] font-bold outline-none focus:border-slate-300 tracking-[0.4em]" placeholder="PIN 4 số" />
          {error && <p className="text-[12px] font-bold text-rose-600 bg-rose-50 border border-rose-100 px-3 py-2 rounded-xl">{error}</p>}
          <button type="submit" className="w-full bg-slate-900 text-white rounded-[24px] py-4 text-[15px] font-extrabold shadow-[0_12px_24px_rgba(15,23,42,0.22)] active:scale-95 transition-all">
            Tiếp tục
          </button>
        </form>
      </AuthShell>
    );
  }

  if (screen === 'login') {
    return (
      <AuthShell>
        <div className="w-14 h-14 rounded-[20px] bg-slate-900 text-white flex items-center justify-center mb-6">
          <Lock size={26} />
        </div>
        <h2 className="text-[30px] font-black text-slate-900 tracking-tight">Mở khóa {APP_NAME}</h2>
        <p className="text-[14px] text-slate-500 font-medium mt-2 leading-relaxed">{account ? `Đăng nhập bằng PIN của ${account.email}.` : 'Chưa có tài khoản trên thiết bị này.'}</p>
        <form onSubmit={handleLogin} className="mt-7 space-y-3">
          <input value={pin} onChange={(e) => setPin(e.target.value.replace(/\D/g, '').slice(0, 4))} type="password" inputMode="numeric" autoComplete="current-password" className="w-full bg-white border border-slate-100 rounded-2xl px-4 py-4 text-center text-[26px] font-black outline-none focus:border-slate-300 tracking-[0.55em]" placeholder="••••" />
          <button type="button" onClick={() => account ? onComplete({ user: account, account, onboardingSeen: true }) : setError('Hãy tạo tài khoản trước khi dùng Face ID.')} className="w-full bg-white border border-slate-100 text-slate-700 rounded-[20px] py-3 text-[13px] font-extrabold flex items-center justify-center gap-2 active:scale-95 transition-all">
            <ShieldCheck size={17} />
            Face ID khả dụng
          </button>
          {error && <p className="text-[12px] font-bold text-rose-600 bg-rose-50 border border-rose-100 px-3 py-2 rounded-xl">{error}</p>}
          <button type="submit" className="w-full bg-slate-900 text-white rounded-[24px] py-4 text-[15px] font-extrabold shadow-[0_12px_24px_rgba(15,23,42,0.22)] active:scale-95 transition-all">
            Đăng nhập
          </button>
          <button type="button" onClick={() => go('recover')} className="w-full text-slate-500 rounded-[18px] py-2.5 text-[13px] font-bold">
            Quên PIN?
          </button>
          <div className="pt-2 text-center">
            <span className="text-[13px] font-semibold text-slate-500">Người dùng mới? </span>
            <button type="button" onClick={() => go('register')} className="text-[13px] font-extrabold text-emerald-600">
              Tạo tài khoản
            </button>
          </div>
        </form>
      </AuthShell>
    );
  }

  if (screen === 'recover') {
    return (
      <AuthShell>
        <h2 className="text-[30px] font-black text-slate-900 tracking-tight">Đặt lại PIN</h2>
        <p className="text-[14px] text-slate-500 font-medium mt-2 leading-relaxed">Nhập email tài khoản và tạo PIN mới. Đây là flow khôi phục mẫu cho prototype.</p>
        <form onSubmit={handleRecover} className="mt-7 space-y-3">
          <input value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" className="w-full bg-white border border-slate-100 rounded-2xl px-4 py-4 text-[15px] font-bold outline-none focus:border-slate-300" placeholder="Email tài khoản" />
          <input value={newPin} onChange={(e) => setNewPin(e.target.value.replace(/\D/g, '').slice(0, 4))} type="password" inputMode="numeric" autoComplete="new-password" className="w-full bg-white border border-slate-100 rounded-2xl px-4 py-4 text-[15px] font-bold outline-none focus:border-slate-300 tracking-[0.4em]" placeholder="PIN mới 4 số" />
          {error && <p className="text-[12px] font-bold text-rose-600 bg-rose-50 border border-rose-100 px-3 py-2 rounded-xl">{error}</p>}
          <button type="submit" className="w-full bg-slate-900 text-white rounded-[24px] py-4 text-[15px] font-extrabold shadow-[0_12px_24px_rgba(15,23,42,0.22)] active:scale-95 transition-all">
            Cập nhật PIN
          </button>
        </form>
      </AuthShell>
    );
  }

  return (
    <AuthShell>
      <h2 className="text-[30px] font-black text-slate-900 tracking-tight">Thiết lập tài chính</h2>
      <p className="text-[14px] text-slate-500 font-medium mt-2 leading-relaxed">Một phút để {APP_NAME} hiểu dòng tiền và mục tiêu đầu tiên của bạn.</p>
      <form onSubmit={handleSetup} className="mt-7 space-y-3">
        <input value={monthlyIncome} onChange={(e) => setMonthlyIncome(e.target.value.replace(/\D/g, ''))} inputMode="numeric" className="w-full bg-white border border-slate-100 rounded-2xl px-4 py-4 text-[15px] font-bold outline-none focus:border-slate-300" placeholder="Thu nhập tháng" />
        <input value={walletBalance} onChange={(e) => setWalletBalance(e.target.value.replace(/\D/g, ''))} inputMode="numeric" className="w-full bg-white border border-slate-100 rounded-2xl px-4 py-4 text-[15px] font-bold outline-none focus:border-slate-300" placeholder="Số dư ví chính" />
        <input value={goalName} onChange={(e) => setGoalName(e.target.value)} className="w-full bg-white border border-slate-100 rounded-2xl px-4 py-4 text-[15px] font-bold outline-none focus:border-slate-300" placeholder="Bạn muốn tiết kiệm cho điều gì?" />
        <input value={goalTarget} onChange={(e) => setGoalTarget(e.target.value.replace(/\D/g, ''))} inputMode="numeric" className="w-full bg-white border border-slate-100 rounded-2xl px-4 py-4 text-[15px] font-bold outline-none focus:border-slate-300" placeholder="Số tiền mục tiêu" />
        <div className="bg-emerald-50/80 border border-emerald-100 rounded-2xl p-3 flex gap-3">
          <Sparkles size={18} className="text-emerald-600 shrink-0 mt-0.5" />
          <p className="text-[12px] font-semibold text-emerald-700 leading-relaxed">Dashboard sẽ cá nhân hóa số dư, mục tiêu và insight đầu tiên từ các thông tin này.</p>
        </div>
        <button type="submit" className="w-full bg-emerald-500 text-white rounded-[24px] py-4 text-[15px] font-extrabold shadow-[0_12px_24px_rgba(16,185,129,0.22)] active:scale-95 transition-all">
          Vào dashboard
        </button>
      </form>
    </AuthShell>
  );
};

const FinanceTools = ({ section, setSection, wallets, setWallets, budgets, setBudgets, goals, setGoals, transactions, onExport, formatVND }) => {
  const [walletName, setWalletName] = useState('');
  const [walletAmount, setWalletAmount] = useState('');
  const [budgetCategory, setBudgetCategory] = useState('Ăn uống');
  const [budgetLimit, setBudgetLimit] = useState('');
  const [goalName, setGoalName] = useState('');
  const [goalTarget, setGoalTarget] = useState('');

  const spentByCategory = useMemo(() => {
    return transactions.reduce((acc, item) => {
      if (item.type === 'expense') acc[item.category] = (acc[item.category] || 0) + item.amount;
      return acc;
    }, {});
  }, [transactions]);

  const addWallet = () => {
    if (!walletName || !walletAmount) return;
    setWallets(prev => [...prev, { id: Date.now(), name: walletName, balance: Number(walletAmount) }]);
    setWalletName('');
    setWalletAmount('');
  };

  const addBudget = () => {
    if (!budgetLimit) return;
    setBudgets(prev => [...prev, { id: Date.now(), category: budgetCategory, limit: Number(budgetLimit) }]);
    setBudgetLimit('');
  };

  const addGoal = () => {
    if (!goalName || !goalTarget) return;
    setGoals(prev => [...prev, { id: Date.now(), name: goalName, target: Number(goalTarget), current: 0 }]);
    setGoalName('');
    setGoalTarget('');
  };

  return (
    <div className="animate-page-enter relative h-full overflow-y-auto no-scrollbar pt-14 px-6">
      <button onClick={() => setSection(null)} className="mb-5 w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-600 shadow-sm active:scale-90">
        <X size={20} />
      </button>
      <h2 className="text-[28px] font-black text-slate-900 tracking-tight">Quản lý tài chính</h2>
      <p className="text-[13px] text-slate-500 font-semibold mt-1">Dữ liệu được lưu cục bộ trên trình duyệt.</p>

      <div className="flex gap-2 mt-5 overflow-x-auto no-scrollbar pb-2">
        {[
          ['wallets', 'Ví'],
          ['budgets', 'Ngân sách'],
          ['goals', 'Mục tiêu'],
          ['export', 'Xuất file']
        ].map(([key, label]) => (
          <button key={key} onClick={() => setSection(key)} className={`px-4 py-2 rounded-full text-[12px] font-extrabold whitespace-nowrap ${section === key ? 'bg-slate-900 text-white' : 'bg-white text-slate-600 border border-slate-100'}`}>
            {label}
          </button>
        ))}
      </div>

      {section === 'wallets' && (
        <div className="mt-5 space-y-3">
          {wallets.map(wallet => (
            <div key={wallet.id} className="bg-white border border-slate-100 rounded-[22px] p-4 flex justify-between items-center shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center"><Wallet size={20} /></div>
                <div><p className="text-[15px] font-extrabold text-slate-900">{wallet.name}</p><p className="text-[12px] text-slate-500 font-semibold">Số dư ví</p></div>
              </div>
              <p className="text-[14px] font-black text-slate-900">{formatVND(wallet.balance)}</p>
            </div>
          ))}
          <div className="bg-slate-50 border border-slate-100 rounded-[22px] p-3 grid grid-cols-2 gap-2">
            <input value={walletName} onChange={(e) => setWalletName(e.target.value)} placeholder="Tên ví" className="bg-white rounded-xl px-3 py-2 text-[13px] font-bold outline-none" />
            <input value={walletAmount} onChange={(e) => setWalletAmount(e.target.value)} placeholder="Số dư" inputMode="numeric" className="bg-white rounded-xl px-3 py-2 text-[13px] font-bold outline-none" />
            <button onClick={addWallet} className="col-span-2 bg-slate-900 text-white rounded-xl py-2.5 text-[13px] font-extrabold">Thêm ví</button>
          </div>
        </div>
      )}

      {section === 'budgets' && (
        <div className="mt-5 space-y-3">
          {budgets.map(budget => {
            const spent = spentByCategory[budget.category] || 0;
            const pct = Math.min((spent / budget.limit) * 100, 100);
            return (
              <div key={budget.id} className="bg-white border border-slate-100 rounded-[22px] p-4 shadow-sm">
                <div className="flex justify-between mb-3"><p className="text-[15px] font-extrabold text-slate-900">{budget.category}</p><p className="text-[12px] font-bold text-slate-500">{formatVND(spent)} / {formatVND(budget.limit)}</p></div>
                <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden"><div className={`h-full rounded-full ${pct > 85 ? 'bg-rose-500' : 'bg-emerald-500'}`} style={{ width: `${pct}%` }}></div></div>
              </div>
            );
          })}
          <div className="bg-slate-50 border border-slate-100 rounded-[22px] p-3 grid grid-cols-2 gap-2">
            <select value={budgetCategory} onChange={(e) => setBudgetCategory(e.target.value)} className="bg-white rounded-xl px-3 py-2 text-[13px] font-bold outline-none">
              {Object.keys(categoryMeta).map(name => <option key={name}>{name}</option>)}
            </select>
            <input value={budgetLimit} onChange={(e) => setBudgetLimit(e.target.value)} placeholder="Hạn mức" inputMode="numeric" className="bg-white rounded-xl px-3 py-2 text-[13px] font-bold outline-none" />
            <button onClick={addBudget} className="col-span-2 bg-slate-900 text-white rounded-xl py-2.5 text-[13px] font-extrabold">Thêm ngân sách</button>
          </div>
        </div>
      )}

      {section === 'goals' && (
        <div className="mt-5 space-y-3">
          {goals.map(goal => {
            const pct = Math.min((goal.current / goal.target) * 100, 100);
            return (
              <div key={goal.id} className="bg-white border border-slate-100 rounded-[22px] p-4 shadow-sm">
                <div className="flex justify-between mb-3"><p className="text-[15px] font-extrabold text-slate-900">{goal.name}</p><p className="text-[12px] font-bold text-slate-500">{Math.round(pct)}%</p></div>
                <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-blue-500 rounded-full" style={{ width: `${pct}%` }}></div></div>
                <p className="text-[12px] text-slate-500 font-semibold mt-2">{formatVND(goal.current)} / {formatVND(goal.target)}</p>
              </div>
            );
          })}
          <div className="bg-slate-50 border border-slate-100 rounded-[22px] p-3 grid grid-cols-2 gap-2">
            <input value={goalName} onChange={(e) => setGoalName(e.target.value)} placeholder="Tên mục tiêu" className="bg-white rounded-xl px-3 py-2 text-[13px] font-bold outline-none" />
            <input value={goalTarget} onChange={(e) => setGoalTarget(e.target.value)} placeholder="Số tiền" inputMode="numeric" className="bg-white rounded-xl px-3 py-2 text-[13px] font-bold outline-none" />
            <button onClick={addGoal} className="col-span-2 bg-slate-900 text-white rounded-xl py-2.5 text-[13px] font-extrabold">Thêm mục tiêu</button>
          </div>
        </div>
      )}

      {section === 'export' && (
        <div className="mt-5 bg-white border border-slate-100 rounded-[26px] p-5 shadow-sm">
          <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-[20px] flex items-center justify-center mb-4"><Download size={24} /></div>
          <p className="text-[18px] font-black text-slate-900">Xuất dữ liệu Excel</p>
          <p className="text-[13px] text-slate-500 font-medium mt-2 leading-relaxed">Tải file CSV chứa toàn bộ giao dịch hiện có. File này mở được bằng Excel hoặc Google Sheets.</p>
          <button onClick={onExport} className="mt-5 w-full bg-emerald-500 text-white rounded-[18px] py-3 text-[13px] font-extrabold active:scale-95 transition-all">Tải CSV</button>
        </div>
      )}

      <div className="h-[120px]"></div>
    </div>
  );
};

const Profile = ({ user, wallets, goals, stats, onOpenSection, onExport, onLogout, onUtilityAction }) => {
  const primaryGoal = goals?.[0];
  const totalWalletBalance = (wallets || []).reduce((sum, wallet) => sum + wallet.balance, 0);
  const goalProgress = primaryGoal ? Math.min((primaryGoal.current / primaryGoal.target) * 100, 100) : 0;

  return (
  <div className="animate-page-enter relative h-full overflow-y-auto no-scrollbar pt-16">
    <div className="px-6 flex items-center gap-5 mb-8">
      <div className="relative">
        <div className="w-[84px] h-[84px] rounded-[28px] bg-slate-900 flex items-center justify-center text-3xl font-extrabold text-white shadow-[0_8px_20px_rgba(15,23,42,0.2)]">
          {(user?.name || 'Minh Anh').split(' ').map(part => part[0]).join('').slice(0, 2).toUpperCase()}
        </div>
        <div className="absolute -bottom-2 -right-2 bg-white p-1 rounded-xl shadow-sm border border-slate-50">
          <div className="bg-amber-100 text-amber-500 p-1.5 rounded-lg">
            <ShieldCheck size={16} />
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-[26px] font-extrabold text-slate-900 tracking-tight">{user?.name || 'Minh Anh'}</h2>
        <p className="text-slate-500 text-[13px] font-semibold mt-0.5">{user?.email || 'minhanh@email.com'}</p>
        <div className="mt-2.5 inline-flex items-center gap-1.5 bg-emerald-50/80 border border-emerald-100/50 text-emerald-600 px-3 py-1 rounded-lg">
          <Award size={14} strokeWidth={2.5}/>
          <span className="text-[10px] font-extrabold uppercase tracking-wider">Level 4 Saver</span>
        </div>
      </div>
    </div>

    <div className="px-6 grid grid-cols-2 gap-4 mb-8">
      <div className="bg-gradient-to-br from-amber-50/50 to-orange-50/30 border border-amber-100/50 p-4.5 rounded-[24px]">
        <Flame size={24} className="text-amber-400 mb-2" strokeWidth={2.5} />
        <p className="text-[11px] text-amber-600/70 font-extrabold uppercase tracking-wider mb-1">Chuỗi tiết kiệm</p>
        <p className="text-[20px] font-black text-amber-600">4 Tháng</p>
      </div>
      <div className="bg-gradient-to-br from-blue-50/50 to-sky-50/30 border border-blue-100/50 p-4.5 rounded-[24px]">
        <Lightbulb size={24} className="text-blue-400 mb-2" strokeWidth={2.5} />
        <p className="text-[11px] text-blue-600/70 font-extrabold uppercase tracking-wider mb-1">Top danh mục</p>
        <p className="text-[20px] font-black text-blue-600">Ăn uống</p>
      </div>
    </div>

    <div className="px-6 mb-6">
      <div className="bg-white border border-slate-100 rounded-[28px] p-5 shadow-sm">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Thành tựu tháng</p>
            <h3 className="text-[20px] font-black text-slate-900 mt-1">Dòng tiền +{((stats?.balance || 0) / 1000000).toFixed(1)}M</h3>
          </div>
          <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <Award size={21} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-slate-50 rounded-2xl p-3">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Ví liên kết</p>
            <p className="text-[17px] font-black text-slate-900 mt-1">{wallets?.length || 0} ví</p>
          </div>
          <div className="bg-slate-50 rounded-2xl p-3">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Số dư ví</p>
            <p className="text-[17px] font-black text-slate-900 mt-1">{(totalWalletBalance / 1000000).toFixed(1)}M</p>
          </div>
        </div>
        <div className="mt-4 rounded-2xl bg-blue-50/70 border border-blue-100 p-3">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[12px] font-extrabold text-blue-700">{primaryGoal?.name || 'Mục tiêu tiết kiệm'}</p>
            <span className="text-[11px] font-black text-blue-700">{Math.round(goalProgress)}%</span>
          </div>
          <div className="h-2 bg-white rounded-full overflow-hidden">
            <div className="h-full bg-blue-500 rounded-full" style={{ width: `${goalProgress}%` }}></div>
          </div>
        </div>
      </div>
    </div>

    <div className="w-full px-6 space-y-2">
      <p className="text-[11px] font-extrabold text-slate-500 uppercase tracking-widest pl-2 mb-3 mt-6">Tài khoản</p>
      {[
        { icon: <Wallet size={20}/>, label: 'Quản lý Ví', action: () => onOpenSection('wallets') },
        { icon: <Target size={20}/>, label: 'Mục tiêu & Ngân sách', action: () => onOpenSection('budgets') },
        { icon: <History size={20}/>, label: 'Xuất dữ liệu Excel', action: onExport },
        { icon: <FileText size={20}/>, label: 'Lịch sử xuất dữ liệu', action: () => onOpenSection('export') },
        { icon: <DollarSign size={20}/>, label: 'Tiền tệ: VND', action: () => onUtilityAction('Đơn vị tiền tệ hiện là VND') },
        { icon: <Bell size={20}/>, label: 'Thông báo nhắc hóa đơn', action: () => onUtilityAction('Đã bật nhắc hóa đơn mẫu') },
        { icon: <ShieldCheck size={20}/>, label: 'Face ID & PIN', action: () => onUtilityAction('Face ID/PIN đang được mô phỏng') },
        { icon: <RefreshCw size={20}/>, label: 'Giao dịch định kỳ', action: () => onUtilityAction('Đã mở thiết lập giao dịch định kỳ mẫu') },
        { icon: <Download size={20}/>, label: 'Sao lưu cục bộ', action: () => onUtilityAction('Dữ liệu đang được lưu trong localStorage') },
        { icon: <LogOut size={20}/>, label: 'Đăng xuất', action: onLogout },
      ].map((item, i) => (
        <button key={i} onClick={item.action} className="w-full flex items-center justify-between p-4 bg-white border border-slate-100 rounded-[20px] hover:border-slate-200 hover:shadow-sm active:scale-95 transition-all cursor-pointer group text-left">
          <div className="flex items-center gap-4">
            <div className="text-slate-400 group-hover:text-slate-800 transition-colors">{item.icon}</div>
            <span className="text-[15px] font-bold text-slate-800">{item.label}</span>
          </div>
          <ChevronRight className="text-slate-400 group-hover:translate-x-1 transition-transform" size={18} />
        </button>
      ))}
    </div>

    <div className="h-[220px] w-full shrink-0"></div>
  </div>
  );
};

// --- MAIN APP ---

export default function App() {
  const [appState, setAppState] = useState('loading'); 
  const [tab, setTab] = useState('dashboard');
  const [section, setSection] = useState(null);
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);
  const [toast, setToast] = useState(null);

  // Initial Loading Simulation
  useEffect(() => {
    const timer = setTimeout(() => setAppState('ready'), 1500);
    return () => clearTimeout(timer);
  }, []);

  const defaultTransactions = [
    {
      date: 'Hôm nay',
      items: [
        { id: 1, type: 'expense', merchant: 'Highlands Coffee', category: 'Ăn uống', amount: 45000, icon: <Coffee size={18}/>, note: 'Cafe sáng', bg: 'bg-amber-50', color: 'text-amber-600' },
        { id: 2, type: 'expense', merchant: 'Netflix', category: 'Giải trí', amount: 260000, icon: <RefreshCw size={18}/>, note: 'Gói Premium', bg: 'bg-indigo-50', color: 'text-indigo-600', isRecurring: true }
      ]
    },
    {
      date: 'Hôm qua',
      items: [
        { id: 3, type: 'expense', merchant: 'Grab', category: 'Di chuyển', amount: 125000, icon: <Car size={18}/>, note: 'Đi làm', bg: 'bg-sky-50', color: 'text-sky-600' },
        { id: 4, type: 'income', merchant: 'Techcombank', category: 'Lương', amount: 25000000, icon: <DollarSign size={18}/>, note: 'Lương T5', bg: 'bg-emerald-50', color: 'text-emerald-600' }
      ]
    }
  ];

  const defaultWallets = [
    { id: 1, name: 'Ví chính', balance: 23940000 },
    { id: 2, name: 'Tiết kiệm', balance: 8000000 }
  ];

  const defaultBudgets = [
    { id: 1, category: 'Ăn uống', limit: 2500000 },
    { id: 2, category: 'Mua sắm', limit: 1800000 }
  ];

  const defaultGoals = [
    { id: 1, name: 'Quỹ du lịch Đà Nẵng', target: 12000000, current: 5200000 },
    { id: 2, name: 'Laptop mới', target: 22000000, current: 9000000 }
  ];

  const storedState = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    } catch {
      return {};
    }
  }, []);

  const [user, setUser] = useState(storedState.user || null);
  const [account, setAccount] = useState(storedState.account || (storedState.user ? { ...storedState.user, pin: storedState.user.pin || '1234' } : null));
  const [onboardingSeen, setOnboardingSeen] = useState(Boolean(storedState.onboardingSeen));
  const [groupedTransactions, setGroupedTransactions] = useState(normalizeGroups(storedState.groupedTransactions || defaultTransactions));
  const [wallets, setWallets] = useState(storedState.wallets || defaultWallets);
  const [budgets, setBudgets] = useState(storedState.budgets || defaultBudgets);
  const [goals, setGoals] = useState(storedState.goals || defaultGoals);
  const [filters, setFilters] = useState({ search: '', type: 'all', category: 'all' });

  useEffect(() => {
    const cleanGroups = groupedTransactions.map(group => ({
      date: group.date,
      items: group.items.map(({ icon, ...item }) => item)
    }));
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      user,
      account,
      onboardingSeen,
      groupedTransactions: cleanGroups,
      wallets,
      budgets,
      goals
    }));
  }, [user, account, onboardingSeen, groupedTransactions, wallets, budgets, goals]);

  const stats = useMemo(() => {
    let income = 0;
    let expense = 0;
    groupedTransactions.forEach(group => {
      group.items.forEach(t => {
        if (t.type === 'income') income += t.amount;
        if (t.type === 'expense') expense += t.amount;
      });
    });
    return { income, expense, balance: income - expense };
  }, [groupedTransactions]);

  const formatVND = (val) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(val);

  const filteredGroups = useMemo(() => {
    const query = filters.search.trim().toLowerCase();
    return groupedTransactions
      .map(group => ({
        ...group,
        items: group.items.filter(item => {
          const text = `${item.merchant} ${item.category} ${item.note || ''}`.toLowerCase();
          const matchesSearch = !query || text.includes(query);
          const matchesType = filters.type === 'all' || item.type === filters.type;
          const matchesCategory = filters.category === 'all' || item.category === filters.category;
          return matchesSearch && matchesType && matchesCategory;
        })
      }))
      .filter(group => group.items.length > 0);
  }, [groupedTransactions, filters]);

  const allTransactions = useMemo(() => flattenTransactions(groupedTransactions), [groupedTransactions]);

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  };

  const handleSaveTransaction = (newT) => {
    const newGrouped = [...groupedTransactions];
    if (newGrouped.length > 0 && newGrouped[0].date === 'Hôm nay') {
      newGrouped[0].items.unshift(newT);
    } else {
      newGrouped.unshift({ date: 'Hôm nay', items: [newT] });
    }
    setGroupedTransactions(newGrouped);
    
    showToast("Đã lưu giao dịch!");
    setTab('dashboard');
  };

  const handleExport = () => {
    downloadCsv(allTransactions);
    showToast('Đã xuất file CSV!');
  };

  const handleAuthComplete = (payload) => {
    if (payload.account) setAccount(payload.account);
    if (payload.user) setUser(payload.user);
    if (typeof payload.onboardingSeen === 'boolean') setOnboardingSeen(payload.onboardingSeen);
    if (payload.wallets) setWallets(payload.wallets);
    if (payload.goals) setGoals(payload.goals);
    if (payload.groupedTransactions) setGroupedTransactions(normalizeGroups(payload.groupedTransactions));
    showToast(payload.demo ? 'Đã mở chế độ demo!' : 'Chào mừng đến MoneyCare!');
  };

  const handleLogout = () => {
    setUser(null);
    showToast('Đã đăng xuất!');
  };

  const handleFilterCategory = (category) => {
    setFilters({ search: '', type: 'all', category });
    setTab('dashboard');
  };

  const isEmpty = groupedTransactions.length === 0;

  if (appState !== 'loading' && !user) {
    return (
      <div className="h-screen bg-slate-100/80 font-['Inter',sans-serif] flex flex-col justify-center items-center overflow-hidden py-2">
        <div className="relative w-full max-w-[390px] h-[min(780px,calc(100dvh-16px))] bg-[#12141A] lg:rounded-[48px] shadow-[0_34px_70px_-18px_rgba(0,0,0,0.36)] flex-shrink-0 mx-3">
          <div className="hidden lg:block absolute top-[110px] -left-[4px] w-[4px] h-[28px] bg-[#12141A] rounded-l-md shadow-inner"></div>
          <div className="hidden lg:block absolute top-[170px] -left-[4px] w-[4px] h-[54px] bg-[#12141A] rounded-l-md shadow-inner"></div>
          <div className="hidden lg:block absolute top-[240px] -left-[4px] w-[4px] h-[54px] bg-[#12141A] rounded-l-md shadow-inner"></div>
          <div className="hidden lg:block absolute top-[190px] -right-[4px] w-[4px] h-[74px] bg-[#12141A] rounded-r-md shadow-inner"></div>

          <div className="absolute inset-[11px] bg-slate-50 rounded-[38px] overflow-hidden flex flex-col ring-1 ring-black/5">
            <div className="hidden lg:flex absolute top-0 left-1/2 -translate-x-1/2 w-[160px] h-[30px] bg-[#12141A] rounded-b-[20px] z-[60] items-center justify-center gap-4 shadow-sm">
              <div className="w-12 h-1.5 rounded-full bg-slate-800 shadow-inner"></div>
              <div className="w-3 h-3 rounded-full bg-[#0a0a0c] shadow-[inset_0_-1px_2px_rgba(255,255,255,0.1)] border border-slate-800"></div>
            </div>
            <AuthFlow account={account} onComplete={handleAuthComplete} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-slate-100/80 font-['Inter',sans-serif] flex flex-col justify-center items-center overflow-hidden py-2">
      
      {/* Toast */}
      {toast && (
        <div className="fixed top-8 left-1/2 -translate-x-1/2 z-[100] bg-slate-900 text-white px-5 py-3.5 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.2)] flex items-center gap-3 animate-slide-down border border-slate-700">
          <div className="bg-emerald-500/20 p-1.5 rounded-full">
            <Check size={14} strokeWidth={3} className="text-emerald-400" />
          </div>
          <span className="text-[13px] font-bold tracking-wide">{toast}</span>
        </div>
      )}

      {/* REAL DEVICE MOCKUP */}
      <div className="relative w-full max-w-[390px] h-[min(780px,calc(100dvh-16px))] bg-[#12141A] lg:rounded-[48px] shadow-[0_34px_70px_-18px_rgba(0,0,0,0.36)] flex-shrink-0 mx-3">
        
        <div className="hidden lg:block absolute top-[110px] -left-[4px] w-[4px] h-[28px] bg-[#12141A] rounded-l-md shadow-inner"></div>
        <div className="hidden lg:block absolute top-[170px] -left-[4px] w-[4px] h-[54px] bg-[#12141A] rounded-l-md shadow-inner"></div>
        <div className="hidden lg:block absolute top-[240px] -left-[4px] w-[4px] h-[54px] bg-[#12141A] rounded-l-md shadow-inner"></div>
        <div className="hidden lg:block absolute top-[190px] -right-[4px] w-[4px] h-[74px] bg-[#12141A] rounded-r-md shadow-inner"></div>

        <div className="absolute inset-[11px] bg-slate-50 rounded-[38px] overflow-hidden flex flex-col ring-1 ring-black/5">
          
          <div className="hidden lg:flex absolute top-0 left-1/2 -translate-x-1/2 w-[160px] h-[30px] bg-[#12141A] rounded-b-[20px] z-[60] items-center justify-center gap-4 shadow-sm">
             <div className="w-12 h-1.5 rounded-full bg-slate-800 shadow-inner"></div>
             <div className="w-3 h-3 rounded-full bg-[#0a0a0c] shadow-[inset_0_-1px_2px_rgba(255,255,255,0.1)] border border-slate-800"></div>
          </div>

          <div className="flex-1 overflow-hidden relative z-10 bg-slate-50">
            {appState === 'loading' ? (
              <SkeletonDashboard />
            ) : (
              <>
                {section && <FinanceTools section={section} setSection={setSection} wallets={wallets} setWallets={setWallets} budgets={budgets} setBudgets={setBudgets} goals={goals} setGoals={setGoals} transactions={allTransactions} onExport={handleExport} formatVND={formatVND} />}
                {!section && tab === 'dashboard' && <Dashboard stats={stats} filteredGroups={filteredGroups} filters={filters} setFilters={setFilters} isBalanceVisible={isBalanceVisible} setIsBalanceVisible={setIsBalanceVisible} formatVND={formatVND} isEmpty={isEmpty} />}
                {tab === 'quickadd' && <QuickAdd onSave={handleSaveTransaction} onCancel={() => setTab('dashboard')} />}
                {!section && tab === 'analytics' && <Analytics stats={stats} formatVND={formatVND} isEmpty={isEmpty} onFilterCategory={handleFilterCategory} />}
                {!section && tab === 'profile' && <Profile user={user} wallets={wallets} goals={goals} stats={stats} onOpenSection={setSection} onExport={handleExport} onLogout={handleLogout} onUtilityAction={showToast} />}
              </>
            )}
          </div>

          {/* Refined Elegant Nav Bar */}
          {(tab !== 'quickadd' && appState !== 'loading' && !section) && (
            <div className="absolute bottom-3 left-5 right-5 z-40">
              <nav className="w-full bg-white/95 backdrop-blur-xl rounded-[30px] px-5 py-2 flex justify-between items-center shadow-[0_12px_32px_-12px_rgba(15,23,42,0.18)] border border-slate-100">
                <button onClick={() => setTab('dashboard')} className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-300 touch-manipulation ${tab === 'dashboard' ? 'bg-slate-900 text-white shadow-[0_8px_18px_rgba(15,23,42,0.2)]' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'}`}>
                  <LayoutGrid size={21} strokeWidth={tab === 'dashboard' ? 2.6 : 2.2} />
                </button>
                
                <button onClick={() => setTab('analytics')} className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-300 touch-manipulation ${tab === 'analytics' ? 'bg-slate-900 text-white shadow-[0_8px_18px_rgba(15,23,42,0.2)]' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'}`}>
                  <BarChart3 size={21} strokeWidth={tab === 'analytics' ? 2.6 : 2.2} />
                </button>

                {/* FAB */}
                <button 
                  onClick={() => setTab('quickadd')} 
                  className="w-[44px] h-[44px] -mt-4 bg-slate-900 text-white rounded-[16px] flex items-center justify-center shadow-[0_8px_16px_rgba(15,23,42,0.2)] hover:-translate-y-0.5 active:scale-95 transition-all duration-300 border-[2px] border-white relative group touch-manipulation"
                >
                  <div className="absolute inset-0 bg-slate-800 rounded-[14px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <Plus size={20} strokeWidth={3} className="relative z-10" />
                </button>

                <button onClick={() => setTab('profile')} className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-300 touch-manipulation ${tab === 'profile' ? 'bg-slate-900 text-white shadow-[0_8px_18px_rgba(15,23,42,0.2)]' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'}`}>
                  <Settings size={21} strokeWidth={tab === 'profile' ? 2.6 : 2.2} />
                </button>

                <button onClick={() => setSection('export')} className="w-10 h-10 rounded-2xl flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors touch-manipulation">
                  <MoreHorizontal size={21} />
                </button>
              </nav>
            </div>
          )}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slide-up { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        @keyframes slide-down { from { transform: translateY(-20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        @keyframes fade-in { from { opacity: 0; transform: scale(0.98); } to { opacity: 1; transform: scale(1); } }
        @keyframes fade-in-up { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes scale-up { 0% { transform: scale(0.9); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
        @keyframes draw-line { to { stroke-dashoffset: 0; } }
        @keyframes spin-chart { from { stroke-dasharray: 0, 100; } }
        @keyframes slide-in-right { from { transform: translateX(20px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        @keyframes bounce-soft { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
        @keyframes width-in { from { width: 0; } }
        
        .animate-slide-up { animation: slide-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-slide-down { animation: slide-down 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-fade-in { animation: fade-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-scale-up { animation: scale-up 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
        .animate-page-enter { animation: slide-in-right 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-bounce-soft { animation: bounce-soft 2s infinite; }
        .animate-width-in { animation: width-in 0.9s cubic-bezier(0.16, 1, 0.3, 1) both; }
        
        .line-draw-animation { animation: draw-line 1.5s ease-out forwards; }
        .chart-spin-animation { animation: spin-chart 1s ease-out forwards; }
        
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
}
