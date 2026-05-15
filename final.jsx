import React, { useState, useMemo, useEffect } from 'react';
import { 
  LayoutGrid, Plus, BarChart3, Settings, Eye, EyeOff, TrendingUp, TrendingDown, 
  ChevronRight, Bell, Target, Wallet, ShieldCheck, History, MoreHorizontal, 
  ArrowDownLeft, ArrowUpRight, X, Coffee, ShoppingBag, Car, FileText, 
  DollarSign, Gamepad2, Check, Flame, Award, Lightbulb, Calendar, Edit3,
  RefreshCw, TrendingUp as TrendUpIcon, Zap, Sparkles, WifiOff, Search, SlidersHorizontal,
  FileBox, BoxSelect
} from 'lucide-react';

// --- UTILS & CUSTOM HOOKS ---

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

const OfflineBanner = () => (
  <div className="absolute top-10 left-0 right-0 z-[100] flex justify-center animate-slide-down">
    <div className="bg-slate-800/95 backdrop-blur-md px-4 py-2 rounded-full shadow-lg flex items-center gap-2 border border-slate-700">
      <WifiOff size={14} className="text-amber-400" />
      <span className="text-xs text-white font-medium tracking-wide">Đang ngoại tuyến. Dữ liệu sẽ đồng bộ sau.</span>
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
    const selectedCat = categories.find(c => c.name === cat) || categories[0];
    onSave({
      id: Date.now(),
      type,
      category: cat,
      amount: parseInt(rawAmount),
      date: 'Vừa xong',
      merchant: note || (type === 'expense' ? 'Chi tiêu' : 'Thu nhập'),
      icon: selectedCat.icon,
      color: type === 'expense' ? 'text-slate-700' : 'text-emerald-600',
      bg: type === 'expense' ? 'bg-slate-100' : 'bg-emerald-50'
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
            <button className="flex items-center gap-2 bg-white px-3 py-2.5 rounded-xl shadow-[0_2px_6px_rgba(0,0,0,0.03)] border border-slate-100/50 text-slate-700 hover:bg-slate-50 active:scale-95 transition-all">
              <Wallet size={16} className="text-emerald-500" />
              <span className="text-[13px] font-bold">Ví chính</span>
            </button>
            <button className="flex items-center gap-2 bg-white px-3 py-2.5 rounded-xl shadow-[0_2px_6px_rgba(0,0,0,0.03)] border border-slate-100/50 text-slate-700 hover:bg-slate-50 active:scale-95 transition-all">
              <Calendar size={16} className="text-blue-500" />
              <span className="text-[13px] font-bold">Hôm nay</span>
            </button>
            <div className="flex-1 flex items-center gap-2 bg-white px-3 py-2.5 rounded-xl shadow-[0_2px_6px_rgba(0,0,0,0.03)] border border-slate-100/50">
              <Edit3 size={16} className="text-slate-400 shrink-0" />
              <input 
                type="text" 
                placeholder="Tên người nhận..." 
                className="bg-transparent border-none outline-none text-[13px] font-bold text-slate-700 w-full placeholder:text-slate-400 placeholder:font-medium"
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

const Dashboard = ({ stats, groupedTransactions, isBalanceVisible, setIsBalanceVisible, formatVND, isEmpty, isOffline }) => {
  const animatedBalance = useAnimatedNumber(stats.balance);
  const animatedIncome = useAnimatedNumber(stats.income);
  const animatedExpense = useAnimatedNumber(stats.expense);

  return (
    <div className="animate-page-enter relative h-full overflow-y-auto no-scrollbar">
      {isOffline && <OfflineBanner />}
      
      <header className="px-6 pt-16 pb-6 flex justify-between items-center bg-slate-50/90 backdrop-blur-md sticky top-0 z-20">
        <div>
          <h3 className="text-[26px] font-extrabold text-slate-900 tracking-tight">Chào Minh Anh,</h3>
          <p className="text-slate-500 text-[13px] font-bold mt-1">Thứ Sáu, 06 Tháng 6</p>
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
          desc="Hãy thêm giao dịch đầu tiên của bạn để MoneyCare có thể bắt đầu phân tích dòng tiền."
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
            <h4 className="text-[17px] font-bold text-slate-800 tracking-[0.02em] mb-3 px-1">Sắp đến hạn</h4>
            <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
              <div className="flex-shrink-0 w-[140px] bg-white border border-slate-100 p-3.5 rounded-[20px] shadow-sm flex flex-col gap-3">
                <div className="flex justify-between items-start">
                   <div className="p-2 bg-indigo-50 text-indigo-500 rounded-[12px]"><RefreshCw size={16}/></div>
                   <span className="text-[10px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full">Hôm nay</span>
                </div>
                <div>
                  <p className="text-[14px] font-bold text-slate-800">Netflix</p>
                  <p className="text-[14px] font-semibold text-slate-500">-260k</p>
                </div>
              </div>
              <div className="flex-shrink-0 w-[140px] bg-white border border-slate-100 p-3.5 rounded-[20px] shadow-sm flex flex-col gap-3">
                <div className="flex justify-between items-start">
                   <div className="p-2 bg-amber-50 text-amber-500 rounded-[12px]"><Zap size={16}/></div>
                   <span className="text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full">3 ngày tới</span>
                </div>
                <div>
                  <p className="text-[14px] font-bold text-slate-800">Tiền điện</p>
                  <p className="text-[14px] font-semibold text-slate-500">-1.250k</p>
                </div>
              </div>
            </div>
          </div>

          {/* Grouped Transaction List (Real Product Feel with search) */}
          <div className="mt-8 px-6 animate-slide-up" style={{animationDelay: '0.3s'}}>
            <div className="flex justify-between items-end mb-4 px-1">
              <h4 className="text-[17px] font-bold text-slate-800 tracking-[0.02em]">Giao dịch gần đây</h4>
              <div className="flex items-center gap-3">
                <button className="text-slate-400 hover:text-slate-800 transition-colors p-1"><Search size={18} /></button>
                <button className="text-slate-400 hover:text-slate-800 transition-colors p-1"><SlidersHorizontal size={18} /></button>
              </div>
            </div>
            
            <div className="bg-white rounded-[28px] p-2.5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-slate-100">
              {groupedTransactions.map((group, gIdx) => (
                <div key={group.date}>
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider px-3.5 pt-3 pb-1">{group.date}</p>
                  
                  {group.items.map((t, index) => (
                    <div 
                      key={t.id} 
                      className="flex items-center justify-between p-3.5 rounded-[20px] hover:bg-slate-50 transition-colors cursor-pointer active:scale-[0.98] stagger-item opacity-0 animate-fade-in-up"
                      style={{ animationDelay: `${0.4 + (index * 0.1)}s`, animationFillMode: 'forwards' }}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-[46px] h-[46px] rounded-[16px] flex items-center justify-center ${t.bg} ${t.color}`}>
                          {t.icon}
                        </div>
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
                  {gIdx !== groupedTransactions.length - 1 && <div className="h-px w-auto mx-4 my-1 bg-slate-50"></div>}
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      <div className="h-[140px] w-full shrink-0"></div>
    </div>
  );
};

const Analytics = ({ stats, formatVND, isEmpty }) => {
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
        <div className="px-6 mb-8 animate-slide-up">
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

      {/* Chart Visualization */}
      <div className={`px-6 mb-8 ${isEmpty ? 'opacity-50 pointer-events-none' : 'animate-slide-up'} style={{animationDelay: '0.1s'}}`}>
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

      <div className={`px-6 mb-8 ${isEmpty ? 'opacity-50 pointer-events-none' : 'animate-slide-up'} style={{animationDelay: '0.2s'}}`}>
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
        </div>
      </div>

      <div className="h-[140px] w-full shrink-0"></div>
    </div>
  );
};

const Profile = () => (
  <div className="animate-page-enter relative h-full overflow-y-auto no-scrollbar pt-16">
    <div className="px-6 flex items-center gap-5 mb-8">
      <div className="relative">
        <div className="w-[84px] h-[84px] rounded-[28px] bg-slate-900 flex items-center justify-center text-3xl font-extrabold text-white shadow-[0_8px_20px_rgba(15,23,42,0.2)]">
          MA
        </div>
        <div className="absolute -bottom-2 -right-2 bg-white p-1 rounded-xl shadow-sm border border-slate-50">
          <div className="bg-amber-100 text-amber-500 p-1.5 rounded-lg">
            <ShieldCheck size={16} />
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-[26px] font-extrabold text-slate-900 tracking-tight">Minh Anh</h2>
        <p className="text-slate-500 text-[13px] font-semibold mt-0.5">minhanh@email.com</p>
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

    <div className="w-full px-6 space-y-2">
      <p className="text-[11px] font-extrabold text-slate-500 uppercase tracking-widest pl-2 mb-3 mt-6">Tài khoản</p>
      {[
        { icon: <Wallet size={20}/>, label: 'Quản lý Ví' },
        { icon: <Target size={20}/>, label: 'Mục tiêu & Ngân sách' },
        { icon: <History size={20}/>, label: 'Xuất dữ liệu Excel' },
      ].map((item, i) => (
        <div key={i} className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-[20px] hover:border-slate-200 hover:shadow-sm active:scale-95 transition-all cursor-pointer group">
          <div className="flex items-center gap-4">
            <div className="text-slate-400 group-hover:text-slate-800 transition-colors">{item.icon}</div>
            <span className="text-[15px] font-bold text-slate-800">{item.label}</span>
          </div>
          <ChevronRight className="text-slate-400 group-hover:translate-x-1 transition-transform" size={18} />
        </div>
      ))}
    </div>

    <div className="h-[140px] w-full shrink-0"></div>
  </div>
);

// --- MAIN APP ---

export default function App() {
  const [appState, setAppState] = useState('loading'); 
  const [demoMode, setDemoMode] = useState('normal'); // normal | empty | offline
  const [tab, setTab] = useState('dashboard');
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

  const [groupedTransactions, setGroupedTransactions] = useState(defaultTransactions);

  // Effect to handle Demo Mode changes
  useEffect(() => {
    if (demoMode === 'empty') {
      setGroupedTransactions([]);
    } else {
      setGroupedTransactions(defaultTransactions);
    }
  }, [demoMode]);

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

  const handleSaveTransaction = (newT) => {
    const newGrouped = [...groupedTransactions];
    if (newGrouped.length > 0 && newGrouped[0].date === 'Hôm nay') {
      newGrouped[0].items.unshift(newT);
    } else {
      newGrouped.unshift({ date: 'Hôm nay', items: [newT] });
    }
    setGroupedTransactions(newGrouped);
    
    // Auto switch off empty mode if user adds data
    if (demoMode === 'empty') setDemoMode('normal');

    setToast("Đã lưu giao dịch!");
    setTimeout(() => setToast(null), 3000);
    setTab('dashboard');
  };

  const isEmpty = groupedTransactions.length === 0;
  const isOffline = demoMode === 'offline';

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

      {/* DEV TOOLS (Portfolio Presentation Controls) */}
      <div className="fixed bottom-4 right-4 z-[200] bg-white/90 backdrop-blur-md p-2 rounded-2xl shadow-xl border border-slate-200 flex gap-2">
        <button onClick={() => setDemoMode('normal')} className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all ${demoMode === 'normal' ? 'bg-slate-900 text-white' : 'text-slate-500 hover:bg-slate-100'}`}>Normal</button>
        <button onClick={() => setDemoMode('empty')} className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all ${demoMode === 'empty' ? 'bg-slate-900 text-white' : 'text-slate-500 hover:bg-slate-100'}`}>Empty State</button>
        <button onClick={() => setDemoMode('offline')} className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all ${demoMode === 'offline' ? 'bg-rose-500 text-white' : 'text-slate-500 hover:bg-slate-100'}`}>Offline</button>
      </div>

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
                {tab === 'dashboard' && <Dashboard stats={stats} groupedTransactions={groupedTransactions} isBalanceVisible={isBalanceVisible} setIsBalanceVisible={setIsBalanceVisible} formatVND={formatVND} isEmpty={isEmpty} isOffline={isOffline} />}
                {tab === 'quickadd' && <QuickAdd onSave={handleSaveTransaction} onCancel={() => setTab('dashboard')} />}
                {tab === 'analytics' && <Analytics stats={stats} formatVND={formatVND} isEmpty={isEmpty} />}
                {tab === 'profile' && <Profile />}
              </>
            )}
          </div>

          {/* Refined Elegant Nav Bar */}
          {(tab !== 'quickadd' && appState !== 'loading') && (
            <div className="absolute bottom-6 left-5 right-5 z-40">
              <nav className="w-full bg-white/95 backdrop-blur-xl rounded-[32px] px-6 py-2.5 flex justify-between items-center shadow-[0_15px_40px_-10px_rgba(0,0,0,0.1)] border border-slate-100">
                <button onClick={() => setTab('dashboard')} className={`p-2 transition-all duration-300 touch-manipulation ${tab === 'dashboard' ? 'text-slate-900 scale-110' : 'text-slate-400 hover:text-slate-600'}`}>
                  <LayoutGrid size={24} fill={tab === 'dashboard' ? 'currentColor' : 'none'} />
                </button>
                
                <button onClick={() => setTab('analytics')} className={`p-2 transition-all duration-300 touch-manipulation ${tab === 'analytics' ? 'text-slate-900 scale-110' : 'text-slate-400 hover:text-slate-600'}`}>
                  <BarChart3 size={24} strokeWidth={tab === 'analytics' ? 2.5 : 2} />
                </button>

                {/* FAB */}
                <button 
                  onClick={() => setTab('quickadd')} 
                  className="w-[44px] h-[44px] -mt-5 bg-slate-900 text-white rounded-[16px] flex items-center justify-center shadow-[0_8px_16px_rgba(15,23,42,0.2)] hover:-translate-y-1 active:scale-95 transition-all duration-300 border-[2px] border-white relative group touch-manipulation"
                >
                  <div className="absolute inset-0 bg-slate-800 rounded-[14px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <Plus size={20} strokeWidth={3} className="relative z-10" />
                </button>

                <button onClick={() => setTab('profile')} className={`p-2 transition-all duration-300 touch-manipulation ${tab === 'profile' ? 'text-slate-900 scale-110' : 'text-slate-400 hover:text-slate-600'}`}>
                  <Settings size={24} fill={tab === 'profile' ? 'currentColor' : 'none'} />
                </button>

                <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors touch-manipulation">
                  <MoreHorizontal size={24} />
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
        
        .animate-slide-up { animation: slide-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-slide-down { animation: slide-down 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-fade-in { animation: fade-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-scale-up { animation: scale-up 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
        .animate-page-enter { animation: slide-in-right 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-bounce-soft { animation: bounce-soft 2s infinite; }
        
        .line-draw-animation { animation: draw-line 1.5s ease-out forwards; }
        .chart-spin-animation { animation: spin-chart 1s ease-out forwards; }
        
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
}
