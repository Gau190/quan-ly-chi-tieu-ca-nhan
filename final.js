import React from "./deps/react.js?v=6842b218";
const { useState, useMemo, useEffect } = React;
import {
  LayoutGrid,
  Plus,
  BarChart3,
  Settings,
  Eye,
  EyeOff,
  TrendingUp,
  TrendingDown,
  ChevronRight,
  Bell,
  Target,
  Wallet,
  ShieldCheck,
  History,
  MoreHorizontal,
  ArrowDownLeft,
  ArrowUpRight,
  X,
  Coffee,
  ShoppingBag,
  Car,
  FileText,
  DollarSign,
  Gamepad2,
  Check,
  Flame,
  Award,
  Lightbulb,
  Calendar,
  Edit3,
  RefreshCw,
  TrendingUp as TrendUpIcon,
  Zap,
  Sparkles,
  Search,
  SlidersHorizontal,
  FileBox,
  Lock,
  Download,
  LogOut
} from "./deps/lucide-react.js?v=4833ddc5";
const APP_NAME = "MoneyCare";
const STORAGE_KEY = "moneycare-demo-state-v2";
const categoryMeta = {
  "\u0102n u\u1ED1ng": { icon: Coffee, bg: "bg-amber-50", color: "text-amber-600" },
  "Di chuy\u1EC3n": { icon: Car, bg: "bg-sky-50", color: "text-sky-600" },
  "Mua s\u1EAFm": { icon: ShoppingBag, bg: "bg-rose-50", color: "text-rose-600" },
  "H\xF3a \u0111\u01A1n": { icon: FileText, bg: "bg-indigo-50", color: "text-indigo-600" },
  "Gi\u1EA3i tr\xED": { icon: Gamepad2, bg: "bg-violet-50", color: "text-violet-600" },
  "L\u01B0\u01A1ng": { icon: DollarSign, bg: "bg-emerald-50", color: "text-emerald-600" },
  "Th\u01B0\u1EDFng": { icon: Target, bg: "bg-emerald-50", color: "text-emerald-600" },
  "Kh\xE1c": { icon: MoreHorizontal, bg: "bg-slate-100", color: "text-slate-700" }
};
const getTransactionMeta = (transaction) => {
  const fallback = transaction.type === "income" ? { icon: DollarSign, bg: "bg-emerald-50", color: "text-emerald-600" } : { icon: Wallet, bg: "bg-slate-100", color: "text-slate-700" };
  return categoryMeta[transaction.category] || fallback;
};
const TransactionIcon = ({ transaction, size = 18 }) => {
  const meta = getTransactionMeta(transaction);
  const Icon = meta.icon;
  return /* @__PURE__ */ React.createElement(Icon, { size });
};
const normalizeGroups = (groups) => (Array.isArray(groups) ? groups : []).map((group) => ({
  ...group,
  items: (group.items || []).map((item) => {
    const meta = getTransactionMeta(item);
    return {
      ...item,
      bg: item.bg || meta.bg,
      color: item.color || meta.color
    };
  })
}));
const flattenTransactions = (groups) => groups.flatMap(
  (group) => group.items.map((item) => ({ ...item, groupDate: group.date }))
);
const downloadCsv = (transactions) => {
  const headers = ["Ngay", "Loai", "Danh muc", "Ten giao dich", "Ghi chu", "So tien"];
  const rows = transactions.map((item) => [
    item.groupDate,
    item.type === "income" ? "Thu nhap" : "Chi tieu",
    item.category,
    item.merchant,
    item.note || "",
    item.amount
  ]);
  const csv = [headers, ...rows].map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(",")).join("\n");
  const blob = new Blob([`\uFEFF${csv}`], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "MoneyCare_giao_dich.csv";
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
const SkeletonDashboard = () => /* @__PURE__ */ React.createElement("div", { className: "p-6 pt-16 space-y-8 animate-pulse" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-center" }, /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement("div", { className: "h-6 w-32 bg-slate-200 rounded-lg" }), /* @__PURE__ */ React.createElement("div", { className: "h-3 w-24 bg-slate-200 rounded-lg" })), /* @__PURE__ */ React.createElement("div", { className: "h-11 w-11 bg-slate-200 rounded-full" })), /* @__PURE__ */ React.createElement("div", { className: "h-48 w-full bg-slate-200 rounded-[32px]" }), /* @__PURE__ */ React.createElement("div", { className: "space-y-4" }, /* @__PURE__ */ React.createElement("div", { className: "h-5 w-40 bg-slate-200 rounded-lg mb-2" }), [1, 2].map((i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "flex gap-4 items-center" }, /* @__PURE__ */ React.createElement("div", { className: "h-12 w-12 bg-slate-200 rounded-[16px]" }), /* @__PURE__ */ React.createElement("div", { className: "space-y-2 flex-1" }, /* @__PURE__ */ React.createElement("div", { className: "h-4 w-24 bg-slate-200 rounded" }), /* @__PURE__ */ React.createElement("div", { className: "h-3 w-32 bg-slate-200 rounded" }))))));
const EmptyState = ({ title, desc, icon }) => /* @__PURE__ */ React.createElement("div", { className: "flex flex-col items-center justify-center py-12 px-6 text-center animate-fade-in" }, /* @__PURE__ */ React.createElement("div", { className: "w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mb-5 shadow-inner" }, icon), /* @__PURE__ */ React.createElement("h4", { className: "text-[17px] font-bold text-slate-800 tracking-tight" }, title), /* @__PURE__ */ React.createElement("p", { className: "text-[13px] text-slate-500 mt-2 font-medium leading-relaxed max-w-[240px]" }, desc), /* @__PURE__ */ React.createElement("div", { className: "mt-8 flex flex-col items-center animate-bounce-soft" }, /* @__PURE__ */ React.createElement("span", { className: "text-[11px] font-bold text-emerald-500 uppercase tracking-widest mb-2" }, "B\u1EAFt \u0111\u1EA7u ngay"), /* @__PURE__ */ React.createElement("div", { className: "w-px h-8 bg-gradient-to-b from-emerald-400 to-transparent" })));
const QuickAdd = ({ onSave, onCancel }) => {
  const [rawAmount, setRawAmount] = useState("");
  const [type, setType] = useState("expense");
  const [cat, setCat] = useState("\u0102n u\u1ED1ng");
  const [note, setNote] = useState("");
  const categories = type === "expense" ? [
    { name: "\u0102n u\u1ED1ng", icon: /* @__PURE__ */ React.createElement(Coffee, { size: 24 }) },
    { name: "Di chuy\u1EC3n", icon: /* @__PURE__ */ React.createElement(Car, { size: 24 }) },
    { name: "Mua s\u1EAFm", icon: /* @__PURE__ */ React.createElement(ShoppingBag, { size: 24 }) },
    { name: "H\xF3a \u0111\u01A1n", icon: /* @__PURE__ */ React.createElement(FileText, { size: 24 }) },
    { name: "Gi\u1EA3i tr\xED", icon: /* @__PURE__ */ React.createElement(Gamepad2, { size: 24 }) }
  ] : [
    { name: "L\u01B0\u01A1ng", icon: /* @__PURE__ */ React.createElement(DollarSign, { size: 24 }) },
    { name: "Th\u01B0\u1EDFng", icon: /* @__PURE__ */ React.createElement(Target, { size: 24 }) },
    { name: "Kh\xE1c", icon: /* @__PURE__ */ React.createElement(MoreHorizontal, { size: 24 }) }
  ];
  const addToAmount = (val) => {
    if (rawAmount.length < 10) setRawAmount((prev) => prev + val);
  };
  const handleSave = () => {
    if (!rawAmount) return;
    const meta = categoryMeta[cat] || getTransactionMeta({ type, category: cat });
    onSave({
      id: Date.now(),
      type,
      category: cat,
      amount: parseInt(rawAmount),
      date: "V\u1EEBa xong",
      merchant: note || (type === "expense" ? "Chi ti\xEAu" : "Thu nh\u1EADp"),
      color: meta.color,
      bg: meta.bg
    });
  };
  const displayAmount = rawAmount ? parseInt(rawAmount).toLocaleString("vi-VN") : "0";
  return /* @__PURE__ */ React.createElement("div", { className: "h-full bg-white flex flex-col animate-page-enter relative z-50" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between px-6 pt-12 pb-4" }, /* @__PURE__ */ React.createElement("button", { onClick: onCancel, className: "p-2 -ml-2 text-slate-500 hover:text-slate-800 hover:bg-slate-50 rounded-full transition-colors active:scale-90 touch-manipulation" }, /* @__PURE__ */ React.createElement(X, { size: 24, strokeWidth: 2.5 })), /* @__PURE__ */ React.createElement("div", { className: "flex bg-slate-100/80 p-1 rounded-full" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => {
        setType("expense");
        setCat("\u0102n u\u1ED1ng");
      },
      className: `px-5 py-2 rounded-full text-[13px] font-bold transition-all duration-300 ${type === "expense" ? "bg-white text-slate-900 shadow-[0_2px_8px_rgba(0,0,0,0.06)]" : "text-slate-500 hover:text-slate-700"}`
    },
    "Kho\u1EA3n chi"
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => {
        setType("income");
        setCat("L\u01B0\u01A1ng");
      },
      className: `px-5 py-2 rounded-full text-[13px] font-bold transition-all duration-300 ${type === "income" ? "bg-white text-emerald-600 shadow-[0_2px_8px_rgba(0,0,0,0.06)]" : "text-slate-500 hover:text-slate-700"}`
    },
    "Kho\u1EA3n thu"
  )), /* @__PURE__ */ React.createElement("div", { className: "w-8" })), /* @__PURE__ */ React.createElement("div", { className: "flex-1 flex flex-col items-center py-2 overflow-y-auto no-scrollbar" }, /* @__PURE__ */ React.createElement("div", { className: "w-full text-center mt-2 mb-6 h-24 flex flex-col justify-center" }, /* @__PURE__ */ React.createElement("p", { className: "text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2" }, "Nh\u1EADp s\u1ED1 ti\u1EC1n"), /* @__PURE__ */ React.createElement("div", { className: `flex items-baseline justify-center gap-1 transition-colors duration-300 ${type === "income" ? "text-emerald-500" : "text-slate-900"}` }, /* @__PURE__ */ React.createElement("span", { className: "text-[52px] font-extrabold tracking-tighter leading-none animate-scale-up inline-block origin-bottom" }, displayAmount), /* @__PURE__ */ React.createElement("span", { className: "text-2xl font-bold opacity-40" }, "\u0111"))), /* @__PURE__ */ React.createElement("div", { className: "w-full px-6 mb-8" }, /* @__PURE__ */ React.createElement("div", { className: "bg-slate-50 border border-slate-100 rounded-[20px] p-2 flex items-center justify-between gap-2 shadow-sm" }, /* @__PURE__ */ React.createElement("button", { className: "flex items-center gap-2 bg-white px-3 py-2.5 rounded-xl shadow-[0_2px_6px_rgba(0,0,0,0.03)] border border-slate-100/50 text-slate-700 hover:bg-slate-50 active:scale-95 transition-all" }, /* @__PURE__ */ React.createElement(Wallet, { size: 16, className: "text-emerald-500" }), /* @__PURE__ */ React.createElement("span", { className: "text-[13px] font-bold" }, "V\xED ch\xEDnh")), /* @__PURE__ */ React.createElement("button", { className: "flex items-center gap-2 bg-white px-3 py-2.5 rounded-xl shadow-[0_2px_6px_rgba(0,0,0,0.03)] border border-slate-100/50 text-slate-700 hover:bg-slate-50 active:scale-95 transition-all" }, /* @__PURE__ */ React.createElement(Calendar, { size: 16, className: "text-blue-500" }), /* @__PURE__ */ React.createElement("span", { className: "text-[13px] font-bold" }, "H\xF4m nay")), /* @__PURE__ */ React.createElement("div", { className: "flex-1 flex items-center gap-2 bg-white px-3 py-2.5 rounded-xl shadow-[0_2px_6px_rgba(0,0,0,0.03)] border border-slate-100/50" }, /* @__PURE__ */ React.createElement(Edit3, { size: 16, className: "text-slate-400 shrink-0" }), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      placeholder: "T\xEAn ng\u01B0\u1EDDi nh\u1EADn...",
      className: "bg-transparent border-none outline-none text-[13px] font-bold text-slate-700 w-full placeholder:text-slate-400 placeholder:font-medium",
      value: note,
      onChange: (e) => setNote(e.target.value)
    }
  )))), /* @__PURE__ */ React.createElement("div", { className: "w-full px-6 mb-8" }, /* @__PURE__ */ React.createElement("div", { className: "flex gap-4 overflow-x-auto pb-4 no-scrollbar -mx-6 px-6" }, categories.map((c) => {
    const isActive = cat === c.name;
    return /* @__PURE__ */ React.createElement(
      "button",
      {
        key: c.name,
        onClick: () => setCat(c.name),
        className: "flex flex-col items-center gap-2.5 flex-shrink-0 group outline-none"
      },
      /* @__PURE__ */ React.createElement(
        "div",
        {
          className: `w-[56px] h-[56px] rounded-[20px] flex items-center justify-center transition-all duration-300 ease-out border
                    ${isActive ? type === "income" ? "bg-emerald-50/80 border-emerald-200/60 text-emerald-600 scale-105 shadow-[0_6px_16px_rgba(16,185,129,0.08)]" : "bg-white border-slate-200/80 text-slate-800 scale-105 shadow-[0_6px_16px_rgba(0,0,0,0.06)]" : "bg-slate-50/50 border-transparent text-slate-500 group-hover:bg-slate-100 group-active:scale-95"}`
        },
        c.icon
      ),
      /* @__PURE__ */ React.createElement("span", { className: `text-[12px] font-bold transition-colors ${isActive ? "text-slate-800" : "text-slate-500"}` }, c.name)
    );
  }))), /* @__PURE__ */ React.createElement("div", { className: "w-full px-5 pb-8 mt-auto" }, /* @__PURE__ */ React.createElement("div", { className: "bg-slate-50/50 p-2.5 rounded-[32px]" }, /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-3 gap-2 max-w-[320px] mx-auto" }, [1, 2, 3, 4, 5, 6, 7, 8, 9, "C", 0, "OK"].map((num) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: num,
      onClick: () => {
        if (num === "C") setRawAmount("");
        else if (num === "OK") handleSave();
        else addToAmount(num.toString());
      },
      className: `h-[60px] flex items-center justify-center text-[26px] font-medium transition-all duration-75 rounded-[22px] select-none touch-manipulation
                    ${num === "OK" ? type === "income" ? "bg-emerald-500 text-white shadow-[0_6px_16px_rgba(16,185,129,0.25)] hover:bg-emerald-600 active:scale-[0.92]" : "bg-slate-900 text-white shadow-[0_6px_16px_rgba(15,23,42,0.2)] hover:bg-slate-800 active:scale-[0.92]" : num === "C" ? "text-slate-500 bg-transparent hover:bg-slate-200/50 active:bg-slate-200 active:scale-[0.92]" : "text-slate-800 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.03)] border border-slate-100/50 hover:bg-slate-50 active:bg-slate-100 active:scale-[0.92]"}`
    },
    num === "OK" ? /* @__PURE__ */ React.createElement(Check, { strokeWidth: 3.5, size: 26 }) : num
  )))))));
};
const Dashboard = ({ stats, filteredGroups, filters, setFilters, isBalanceVisible, setIsBalanceVisible, formatVND, isEmpty }) => {
  const animatedBalance = useAnimatedNumber(stats.balance);
  const animatedIncome = useAnimatedNumber(stats.income);
  const animatedExpense = useAnimatedNumber(stats.expense);
  const hasFilter = filters.search || filters.type !== "all" || filters.category !== "all";
  const displayGroups = filteredGroups;
  return /* @__PURE__ */ React.createElement("div", { className: "animate-page-enter relative h-full overflow-y-auto no-scrollbar" }, /* @__PURE__ */ React.createElement("header", { className: "px-6 pt-16 pb-6 flex justify-between items-center bg-slate-50/90 backdrop-blur-md sticky top-0 z-20" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "text-[26px] font-extrabold text-slate-900 tracking-tight" }, "Ch\xE0o Minh Anh,"), /* @__PURE__ */ React.createElement("p", { className: "text-slate-500 text-[13px] font-bold mt-1" }, APP_NAME, " \u2022 B\u1EA3o m\u1EADt b\u1EB1ng PIN")), /* @__PURE__ */ React.createElement("button", { className: "relative w-[44px] h-[44px] bg-white rounded-full flex items-center justify-center text-slate-600 shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100/50 hover:bg-slate-50 transition-colors active:scale-90 touch-manipulation" }, /* @__PURE__ */ React.createElement(Bell, { size: 22, strokeWidth: 2.2 }), /* @__PURE__ */ React.createElement("span", { className: "absolute top-3 right-3 w-2.5 h-2.5 bg-rose-500 rounded-full border-2 border-white" }))), /* @__PURE__ */ React.createElement("div", { className: "px-6 mt-2" }, /* @__PURE__ */ React.createElement("div", { className: "bg-[#181C25] rounded-[32px] p-7 shadow-[0_16px_32px_-12px_rgba(15,23,42,0.3)] relative overflow-hidden border border-slate-700/30" }, /* @__PURE__ */ React.createElement("div", { className: "absolute top-[-20%] left-[-10%] w-48 h-48 bg-blue-500/10 rounded-full blur-[40px]" }), /* @__PURE__ */ React.createElement("div", { className: "absolute bottom-[-20%] right-[-10%] w-48 h-48 bg-emerald-500/10 rounded-full blur-[40px]" }), /* @__PURE__ */ React.createElement("div", { className: "relative z-10 flex flex-col gap-6" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-start" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 text-slate-300" }, /* @__PURE__ */ React.createElement("span", { className: "text-xs font-bold uppercase tracking-widest text-slate-400" }, "T\u1ED5ng t\xE0i s\u1EA3n"), /* @__PURE__ */ React.createElement("button", { onClick: () => setIsBalanceVisible(!isBalanceVisible), className: "p-1 hover:text-white transition-colors active:scale-90 touch-manipulation" }, isBalanceVisible ? /* @__PURE__ */ React.createElement(EyeOff, { size: 16 }) : /* @__PURE__ */ React.createElement(Eye, { size: 16 }))), /* @__PURE__ */ React.createElement("div", { className: "bg-white/10 backdrop-blur-md border border-white/5 px-3 py-1.5 rounded-full flex items-center gap-1.5" }, /* @__PURE__ */ React.createElement(Wallet, { size: 12, className: "text-emerald-400" }), /* @__PURE__ */ React.createElement("span", { className: "text-[10px] text-white font-extrabold uppercase tracking-wide" }, "V\xED ch\xEDnh"))), /* @__PURE__ */ React.createElement("h4", { className: "text-[40px] font-extrabold text-white tracking-tighter leading-none font-sans" }, isBalanceVisible ? formatVND(animatedBalance) : "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-6 pt-5 border-t border-slate-700/40" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3" }, /* @__PURE__ */ React.createElement("div", { className: "p-2 bg-emerald-500/15 rounded-[12px] text-emerald-400" }, /* @__PURE__ */ React.createElement(ArrowDownLeft, { size: 16, strokeWidth: 2.5 })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-[10px] text-slate-400 uppercase font-bold tracking-wider" }, "Thu nh\u1EADp"), /* @__PURE__ */ React.createElement("p", { className: "text-[15px] font-bold text-white mt-0.5" }, isBalanceVisible ? formatVND(animatedIncome) : "\u2022\u2022\u2022"))), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3" }, /* @__PURE__ */ React.createElement("div", { className: "p-2 bg-rose-500/15 rounded-[12px] text-rose-400" }, /* @__PURE__ */ React.createElement(ArrowUpRight, { size: 16, strokeWidth: 2.5 })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-[10px] text-slate-400 uppercase font-bold tracking-wider" }, "Chi ti\xEAu"), /* @__PURE__ */ React.createElement("p", { className: "text-[15px] font-bold text-white mt-0.5" }, isBalanceVisible ? formatVND(animatedExpense) : "\u2022\u2022\u2022"))))))), isEmpty ? /* @__PURE__ */ React.createElement(
    EmptyState,
    {
      title: "Ch\u01B0a c\xF3 d\u1EEF li\u1EC7u",
      desc: `H\xE3y th\xEAm giao d\u1ECBch \u0111\u1EA7u ti\xEAn \u0111\u1EC3 ${APP_NAME} b\u1EAFt \u0111\u1EA7u ph\xE2n t\xEDch d\xF2ng ti\u1EC1n.`,
      icon: /* @__PURE__ */ React.createElement(FileBox, { size: 40, className: "text-slate-300", strokeWidth: 1.5 })
    }
  ) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "mx-6 mt-5 bg-emerald-50/60 border border-emerald-100/60 rounded-[20px] p-3.5 flex items-center gap-3.5 shadow-[0_2px_10px_rgba(16,185,129,0.04)] animate-slide-up", style: { animationDelay: "0.1s" } }, /* @__PURE__ */ React.createElement("div", { className: "bg-white p-2 rounded-[14px] text-emerald-500 shadow-sm border border-emerald-50 shrink-0" }, /* @__PURE__ */ React.createElement(Sparkles, { size: 18, fill: "currentColor" })), /* @__PURE__ */ React.createElement("p", { className: "text-[13px] text-slate-600 font-medium leading-snug" }, "Tuy\u1EC7t v\u1EDDi! Tu\u1EA7n n\xE0y b\u1EA1n \u0111\xE3 ti\u1EBFt ki\u1EC7m \u0111\u01B0\u1EE3c ", /* @__PURE__ */ React.createElement("span", { className: "font-bold text-emerald-600" }, "12%"), " so v\u1EDBi tu\u1EA7n tr\u01B0\u1EDBc.")), /* @__PURE__ */ React.createElement("div", { className: "mt-8 px-6 animate-slide-up", style: { animationDelay: "0.2s" } }, /* @__PURE__ */ React.createElement("h4", { className: "text-[17px] font-bold text-slate-800 tracking-[0.02em] mb-3 px-1" }, "S\u1EAFp \u0111\u1EBFn h\u1EA1n"), /* @__PURE__ */ React.createElement("div", { className: "flex gap-3 overflow-x-auto no-scrollbar pb-2" }, /* @__PURE__ */ React.createElement("div", { className: "flex-shrink-0 w-[140px] bg-white border border-slate-100 p-3.5 rounded-[20px] shadow-sm flex flex-col gap-3" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-start" }, /* @__PURE__ */ React.createElement("div", { className: "p-2 bg-indigo-50 text-indigo-500 rounded-[12px]" }, /* @__PURE__ */ React.createElement(RefreshCw, { size: 16 })), /* @__PURE__ */ React.createElement("span", { className: "text-[10px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full" }, "H\xF4m nay")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-[14px] font-bold text-slate-800" }, "Netflix"), /* @__PURE__ */ React.createElement("p", { className: "text-[14px] font-semibold text-slate-500" }, "-260k"))), /* @__PURE__ */ React.createElement("div", { className: "flex-shrink-0 w-[140px] bg-white border border-slate-100 p-3.5 rounded-[20px] shadow-sm flex flex-col gap-3" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-start" }, /* @__PURE__ */ React.createElement("div", { className: "p-2 bg-amber-50 text-amber-500 rounded-[12px]" }, /* @__PURE__ */ React.createElement(Zap, { size: 16 })), /* @__PURE__ */ React.createElement("span", { className: "text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full" }, "3 ng\xE0y t\u1EDBi")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-[14px] font-bold text-slate-800" }, "Ti\u1EC1n \u0111i\u1EC7n"), /* @__PURE__ */ React.createElement("p", { className: "text-[14px] font-semibold text-slate-500" }, "-1.250k"))))), /* @__PURE__ */ React.createElement("div", { className: "mt-8 px-6 animate-slide-up", style: { animationDelay: "0.3s" } }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-end mb-3 px-1" }, /* @__PURE__ */ React.createElement("h4", { className: "text-[17px] font-bold text-slate-800 tracking-[0.02em]" }, "Giao d\u1ECBch g\u1EA7n \u0111\xE2y"), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3" }, /* @__PURE__ */ React.createElement(Search, { size: 18, className: "text-slate-400" }), /* @__PURE__ */ React.createElement(SlidersHorizontal, { size: 18, className: "text-slate-400" }))), /* @__PURE__ */ React.createElement("div", { className: "bg-white rounded-[22px] p-3 border border-slate-100 shadow-sm mb-3 space-y-3" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 bg-slate-50 rounded-2xl px-3 py-2.5" }, /* @__PURE__ */ React.createElement(Search, { size: 16, className: "text-slate-400 shrink-0" }), /* @__PURE__ */ React.createElement(
    "input",
    {
      value: filters.search,
      onChange: (e) => setFilters((prev) => ({ ...prev, search: e.target.value })),
      placeholder: "T\xECm theo t\xEAn, ghi ch\xFA...",
      className: "w-full bg-transparent outline-none text-[13px] font-semibold text-slate-700 placeholder:text-slate-400"
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 gap-2" }, /* @__PURE__ */ React.createElement(
    "select",
    {
      value: filters.type,
      onChange: (e) => setFilters((prev) => ({ ...prev, type: e.target.value })),
      className: "bg-slate-50 rounded-xl px-3 py-2 text-[12px] font-bold text-slate-700 outline-none"
    },
    /* @__PURE__ */ React.createElement("option", { value: "all" }, "T\u1EA5t c\u1EA3 lo\u1EA1i"),
    /* @__PURE__ */ React.createElement("option", { value: "expense" }, "Kho\u1EA3n chi"),
    /* @__PURE__ */ React.createElement("option", { value: "income" }, "Kho\u1EA3n thu")
  ), /* @__PURE__ */ React.createElement(
    "select",
    {
      value: filters.category,
      onChange: (e) => setFilters((prev) => ({ ...prev, category: e.target.value })),
      className: "bg-slate-50 rounded-xl px-3 py-2 text-[12px] font-bold text-slate-700 outline-none"
    },
    /* @__PURE__ */ React.createElement("option", { value: "all" }, "T\u1EA5t c\u1EA3 danh m\u1EE5c"),
    Object.keys(categoryMeta).map((name) => /* @__PURE__ */ React.createElement("option", { key: name, value: name }, name))
  ))), /* @__PURE__ */ React.createElement("div", { className: "bg-white rounded-[28px] p-2.5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-slate-100" }, displayGroups.length === 0 && /* @__PURE__ */ React.createElement("div", { className: "py-10 text-center" }, /* @__PURE__ */ React.createElement("p", { className: "text-[14px] font-bold text-slate-700" }, "Kh\xF4ng t\xECm th\u1EA5y giao d\u1ECBch"), /* @__PURE__ */ React.createElement("p", { className: "text-[12px] text-slate-500 mt-1" }, hasFilter ? "Th\u1EED \u0111\u1ED5i b\u1ED9 l\u1ECDc ho\u1EB7c t\u1EEB kh\xF3a." : "H\xE3y th\xEAm giao d\u1ECBch m\u1EDBi.")), displayGroups.map((group, gIdx) => /* @__PURE__ */ React.createElement("div", { key: group.date }, /* @__PURE__ */ React.createElement("p", { className: "text-[11px] font-bold text-slate-500 uppercase tracking-wider px-3.5 pt-3 pb-1" }, group.date), group.items.map((t, index) => /* @__PURE__ */ React.createElement(
    "div",
    {
      key: t.id,
      className: "flex items-center justify-between p-3.5 rounded-[20px] hover:bg-slate-50 transition-colors cursor-pointer active:scale-[0.98] stagger-item opacity-0 animate-fade-in-up",
      style: { animationDelay: `${0.4 + index * 0.1}s`, animationFillMode: "forwards" }
    },
    /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-4" }, /* @__PURE__ */ React.createElement("div", { className: `w-[46px] h-[46px] rounded-[16px] flex items-center justify-center ${t.bg} ${t.color}` }, /* @__PURE__ */ React.createElement(TransactionIcon, { transaction: t })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement("p", { className: "text-[15px] font-bold text-slate-800 leading-tight" }, t.merchant), t.isRecurring && /* @__PURE__ */ React.createElement("span", { className: "bg-slate-100 text-slate-500 text-[9px] font-bold px-1.5 py-0.5 rounded-md uppercase tracking-wider" }, "\u0110\u1ECBnh k\u1EF3")), /* @__PURE__ */ React.createElement("p", { className: "text-[12px] font-medium text-slate-500 mt-1" }, t.category, " \u2022 ", t.note))),
    /* @__PURE__ */ React.createElement("p", { className: `text-[15px] font-bold tracking-tight pr-2 ${t.type === "income" ? "text-emerald-500" : "text-slate-800"}` }, t.type === "income" ? "+" : "-", t.amount.toLocaleString(), "\u0111")
  )), gIdx !== displayGroups.length - 1 && /* @__PURE__ */ React.createElement("div", { className: "h-px w-auto mx-4 my-1 bg-slate-50" })))))), /* @__PURE__ */ React.createElement("div", { className: "h-[140px] w-full shrink-0" }));
};
const Analytics = ({ stats, formatVND, isEmpty }) => {
  const [activeLineIndex, setActiveLineIndex] = useState(3);
  const [activeDonutSlice, setActiveDonutSlice] = useState(null);
  const rawData = isEmpty ? [0, 0, 0, 0, 0, 0, 0] : [10, 45, 30, 85, 40, 20, 55];
  const maxData = isEmpty ? 100 : Math.max(...rawData);
  const chartHeight = 100;
  const chartWidth = 300;
  const points = rawData.map((val, i) => ({
    x: i / (rawData.length - 1) * chartWidth,
    y: chartHeight - val / maxData * chartHeight
  }));
  const createSmoothPath = (pts) => {
    return pts.reduce((acc, point, i, a) => {
      if (i === 0) return `M ${point.x},${point.y}`;
      const prev = a[i - 1];
      const cp1x = prev.x + (point.x - prev.x) / 2;
      const cp2x = point.x - (point.x - prev.x) / 2;
      return `${acc} C ${cp1x},${prev.y} ${cp2x},${point.y} ${point.x},${point.y}`;
    }, "");
  };
  const pathD = createSmoothPath(points);
  const fillPathD = `${pathD} L ${chartWidth},${chartHeight} L 0,${chartHeight} Z`;
  const donutData = isEmpty ? [{ name: "Ch\u01B0a c\xF3", pct: "0%", color: "bg-slate-200", stroke: "text-slate-200", dash: "100, 100", offset: "0" }] : [
    { name: "\u0102n u\u1ED1ng", pct: "50%", color: "bg-emerald-500", stroke: "text-emerald-500", dash: "50, 100", offset: "0" },
    { name: "Mua s\u1EAFm", pct: "30%", color: "bg-rose-500", stroke: "text-rose-500", dash: "30, 100", offset: "-50" },
    { name: "Kh\xE1c", pct: "20%", color: "bg-indigo-500", stroke: "text-indigo-500", dash: "20, 100", offset: "-80" }
  ];
  const strokeColor = isEmpty ? "#e2e8f0" : "#10b981";
  return /* @__PURE__ */ React.createElement("div", { className: "animate-page-enter relative h-full overflow-y-auto no-scrollbar" }, /* @__PURE__ */ React.createElement("header", { className: "px-6 pt-16 pb-4 bg-slate-50 sticky top-0 z-20" }, /* @__PURE__ */ React.createElement("h2", { className: "text-[28px] font-extrabold text-slate-900 tracking-tight" }, "Th\u1ED1ng k\xEA"), /* @__PURE__ */ React.createElement("p", { className: "text-slate-500 text-sm font-semibold mt-1" }, "Th\xE1ng 06, 2025")), isEmpty ? /* @__PURE__ */ React.createElement(
    EmptyState,
    {
      title: "Bi\u1EC3u \u0111\u1ED3 \u0111ang tr\u1ED1ng",
      desc: "Th\xEAm c\xE1c kho\u1EA3n chi ti\xEAu \u0111\u1EC3 xem ph\xE2n t\xEDch t\u1EF1 \u0111\u1ED9ng t\u1EA1i \u0111\xE2y.",
      icon: /* @__PURE__ */ React.createElement(BarChart3, { size: 40, className: "text-slate-300", strokeWidth: 1.5 })
    }
  ) : /* @__PURE__ */ React.createElement("div", { className: "px-6 mb-8 animate-slide-up" }, /* @__PURE__ */ React.createElement("div", { className: "bg-rose-50/80 border border-rose-100/80 rounded-[24px] p-4 flex gap-3.5 items-start shadow-sm" }, /* @__PURE__ */ React.createElement("div", { className: "bg-white p-2 rounded-xl text-rose-500 shadow-[0_2px_6px_rgba(0,0,0,0.04)] border border-rose-50 shrink-0 mt-0.5" }, /* @__PURE__ */ React.createElement(TrendingDown, { size: 18, strokeWidth: 2.5 })), /* @__PURE__ */ React.createElement("p", { className: "text-[13px] text-slate-700 font-semibold leading-relaxed pt-0.5 pr-2" }, "Chi ti\xEAu tu\u1EA7n n\xE0y cao h\u01A1n m\u1EE9c trung b\xECnh ", /* @__PURE__ */ React.createElement("span", { className: "font-extrabold text-rose-600 bg-rose-100/80 px-1.5 py-0.5 rounded" }, "18%"), ". C\u1EA7n ch\xFA \xFD nh\xF3m ", /* @__PURE__ */ React.createElement("strong", null, "Mua s\u1EAFm"), "."))), /* @__PURE__ */ React.createElement("div", { className: `px-6 mb-8 ${isEmpty ? "opacity-50 pointer-events-none" : "animate-slide-up"} style={{animationDelay: '0.1s'}}` }, /* @__PURE__ */ React.createElement("div", { className: "bg-white rounded-[32px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-start mb-8" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-slate-500 text-xs font-bold uppercase tracking-widest mb-1.5" }, "Tu\u1EA7n n\xE0y"), /* @__PURE__ */ React.createElement("p", { className: "text-3xl font-extrabold text-slate-900 tracking-tight" }, formatVND(stats.expense))), !isEmpty && /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-1.5 bg-emerald-50 text-emerald-600 px-2.5 py-1.5 rounded-lg border border-emerald-100" }, /* @__PURE__ */ React.createElement(TrendUpIcon, { size: 14, strokeWidth: 3 }), /* @__PURE__ */ React.createElement("span", { className: "text-[11px] font-bold" }, "12.5%"))), /* @__PURE__ */ React.createElement("div", { className: "relative w-full h-[120px]" }, !isEmpty && activeLineIndex !== null && /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "absolute -top-6 bg-slate-800 text-white text-[11px] font-bold py-1.5 px-2.5 rounded-lg shadow-md transition-all duration-300 transform -translate-x-1/2 z-10 pointer-events-none",
      style: { left: `${activeLineIndex / (rawData.length - 1) * 100}%` }
    },
    rawData[activeLineIndex],
    "k",
    /* @__PURE__ */ React.createElement("div", { className: "absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45" })
  ), /* @__PURE__ */ React.createElement("svg", { viewBox: `0 -10 ${chartWidth} ${chartHeight + 20}`, className: "w-full h-full overflow-visible" }, !isEmpty && /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", { id: "chartGradient", x1: "0", y1: "0", x2: "0", y2: "1" }, /* @__PURE__ */ React.createElement("stop", { offset: "0%", stopColor: "#10b981", stopOpacity: "0.2" }), /* @__PURE__ */ React.createElement("stop", { offset: "40%", stopColor: "#10b981", stopOpacity: "0.08" }), /* @__PURE__ */ React.createElement("stop", { offset: "70%", stopColor: "#10b981", stopOpacity: "0.01" }), /* @__PURE__ */ React.createElement("stop", { offset: "100%", stopColor: "#10b981", stopOpacity: "0" }))), /* @__PURE__ */ React.createElement(
    "path",
    {
      d: fillPathD,
      fill: isEmpty ? "none" : "url(#chartGradient)",
      className: "animate-fade-in",
      style: { animationDelay: "0.4s", opacity: 0, animationFillMode: "forwards" }
    }
  ), /* @__PURE__ */ React.createElement(
    "path",
    {
      d: pathD,
      fill: "none",
      stroke: strokeColor,
      strokeWidth: "2.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: "line-draw-animation",
      strokeDasharray: isEmpty ? "4 8" : "1000",
      strokeDashoffset: "1000"
    }
  ), !isEmpty && points.map((pt, i) => {
    const isPeak = i === 3;
    const isHovered = activeLineIndex === i;
    return /* @__PURE__ */ React.createElement("g", { key: i, onClick: () => setActiveLineIndex(i), className: "cursor-pointer" }, /* @__PURE__ */ React.createElement("circle", { cx: pt.x, cy: pt.y, r: "20", fill: "transparent" }), /* @__PURE__ */ React.createElement(
      "circle",
      {
        cx: pt.x,
        cy: pt.y,
        r: isPeak || isHovered ? "4.5" : "3.5",
        fill: isPeak || isHovered ? strokeColor : "white",
        stroke: isPeak || isHovered ? "white" : strokeColor,
        strokeWidth: isPeak || isHovered ? "2" : "2.5",
        className: `transition-all duration-300 animate-scale-up ${isPeak ? "shadow-md" : ""}`,
        style: { opacity: 0, animationDelay: `${0.5 + i * 0.05}s`, animationFillMode: "forwards" }
      }
    ), isPeak && !isHovered && /* @__PURE__ */ React.createElement("circle", { cx: pt.x, cy: pt.y, r: "10", fill: "none", stroke: strokeColor, strokeWidth: "1", opacity: "0.3", className: "animate-ping", style: { animationDuration: "3s" } }));
  }))), /* @__PURE__ */ React.createElement("div", { className: "flex justify-between mt-4 text-[11px] font-bold text-slate-500" }, ["T2", "T3", "T4", "T5", "T6", "T7", "CN"].map((day, i) => /* @__PURE__ */ React.createElement("span", { key: i, className: activeLineIndex === i && !isEmpty ? "text-slate-900 transition-colors" : "" }, day))))), /* @__PURE__ */ React.createElement("div", { className: `px-6 mb-8 ${isEmpty ? "opacity-50 pointer-events-none" : "animate-slide-up"} style={{animationDelay: '0.2s'}}` }, /* @__PURE__ */ React.createElement("div", { className: "bg-white rounded-[32px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-center mb-6" }, /* @__PURE__ */ React.createElement("p", { className: "text-slate-800 text-[16px] font-extrabold" }, "C\u01A1 c\u1EA5u chi ti\xEAu"), /* @__PURE__ */ React.createElement("button", { className: "text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-slate-100 transition-colors" }, "Th\xE1ng n\xE0y")), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-8" }, /* @__PURE__ */ React.createElement("div", { className: "relative w-[110px] h-[110px] shrink-0" }, /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 36 36", className: "w-full h-full -rotate-90" }, /* @__PURE__ */ React.createElement("path", { className: "text-slate-100", d: "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831", fill: "none", stroke: "currentColor", strokeWidth: "3.5" }), donutData.map((slice, idx) => {
    const isFaded = activeDonutSlice && activeDonutSlice !== slice.name;
    return /* @__PURE__ */ React.createElement(
      "path",
      {
        key: slice.name,
        onClick: () => !isEmpty && setActiveDonutSlice(activeDonutSlice === slice.name ? null : slice.name),
        className: `${slice.stroke} chart-spin-animation transition-opacity duration-300 outline-none ${!isEmpty ? "cursor-pointer" : ""}`,
        style: { animationDelay: `${idx * 0.1}s`, opacity: isFaded && !isEmpty ? 0.2 : 1 },
        strokeDasharray: slice.dash,
        strokeDashoffset: slice.offset,
        d: "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: activeDonutSlice === slice.name && !isEmpty ? "4.5" : "3.5",
        strokeLinecap: "round"
      }
    );
  })), /* @__PURE__ */ React.createElement("div", { className: "absolute inset-0 flex flex-col items-center justify-center pointer-events-none transition-all duration-300" }, activeDonutSlice && !isEmpty ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", { className: "text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-0.5" }, activeDonutSlice), /* @__PURE__ */ React.createElement("span", { className: "text-[15px] font-black text-slate-900" }, donutData.find((d) => d.name === activeDonutSlice).pct)) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", { className: "text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-0.5" }, "T\u1ED5ng"), /* @__PURE__ */ React.createElement("span", { className: "text-[15px] font-black text-slate-900" }, isEmpty ? "0\u0111" : "4.4M")))), /* @__PURE__ */ React.createElement("div", { className: "flex-1 space-y-5 py-2" }, donutData.map((item) => {
    const isFaded = activeDonutSlice && activeDonutSlice !== item.name;
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        key: item.name,
        onClick: () => !isEmpty && setActiveDonutSlice(activeDonutSlice === item.name ? null : item.name),
        className: `flex items-center justify-between transition-opacity duration-300 ${isFaded && !isEmpty ? "opacity-30" : "opacity-100"} ${!isEmpty ? "cursor-pointer" : ""}`
      },
      /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3" }, /* @__PURE__ */ React.createElement("div", { className: `w-2.5 h-2.5 rounded-full ${item.color}` }), /* @__PURE__ */ React.createElement("span", { className: `text-[13px] font-bold ${activeDonutSlice === item.name && !isEmpty ? "text-slate-900" : "text-slate-600"}` }, item.name)),
      /* @__PURE__ */ React.createElement("span", { className: "text-[14px] font-black text-slate-900" }, item.pct)
    );
  }))))), /* @__PURE__ */ React.createElement("div", { className: "h-[140px] w-full shrink-0" }));
};
const AuthScreen = ({ onLogin }) => {
  const [name, setName] = useState("Minh Anh");
  const [pin, setPin] = useState("1234");
  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin({ name: name || "Minh Anh", email: "minhanh@email.com" });
  };
  return /* @__PURE__ */ React.createElement("form", { onSubmit: handleSubmit, className: "h-full bg-slate-50 flex flex-col px-7 pt-20 pb-8 animate-page-enter" }, /* @__PURE__ */ React.createElement("div", { className: "w-16 h-16 bg-slate-900 rounded-[22px] flex items-center justify-center text-white shadow-xl mb-8" }, /* @__PURE__ */ React.createElement(Lock, { size: 28 })), /* @__PURE__ */ React.createElement("h1", { className: "text-[32px] font-black text-slate-900 tracking-tight leading-tight" }, APP_NAME), /* @__PURE__ */ React.createElement("p", { className: "text-[14px] text-slate-500 font-semibold mt-2 leading-relaxed" }, "\u0110\u0103ng nh\u1EADp m\u1EABu \u0111\u1EC3 b\u1EA3o v\u1EC7 d\u1EEF li\u1EC7u t\xE0i ch\xEDnh c\xE1 nh\xE2n trong tr\xECnh duy\u1EC7t."), /* @__PURE__ */ React.createElement("div", { className: "mt-10 space-y-3" }, /* @__PURE__ */ React.createElement("input", { value: name, onChange: (e) => setName(e.target.value), autoComplete: "name", className: "w-full bg-white border border-slate-100 rounded-2xl px-4 py-4 text-[15px] font-bold outline-none focus:border-slate-300", placeholder: "T\xEAn ng\u01B0\u1EDDi d\xF9ng" }), /* @__PURE__ */ React.createElement("input", { value: pin, onChange: (e) => setPin(e.target.value), type: "password", inputMode: "numeric", autoComplete: "current-password", className: "w-full bg-white border border-slate-100 rounded-2xl px-4 py-4 text-[15px] font-bold outline-none focus:border-slate-300", placeholder: "M\xE3 PIN" })), /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "submit",
      className: "mt-auto w-full bg-slate-900 text-white rounded-[24px] py-4 text-[15px] font-extrabold shadow-[0_12px_24px_rgba(15,23,42,0.22)] active:scale-95 transition-all"
    },
    "\u0110\u0103ng nh\u1EADp"
  ));
};
const Onboarding = ({ onDone }) => /* @__PURE__ */ React.createElement("div", { className: "h-full bg-white flex flex-col px-7 pt-16 pb-8 animate-page-enter" }, /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-3 gap-3 mb-8" }, [Wallet, Target, BarChart3].map((Icon, index) => /* @__PURE__ */ React.createElement("div", { key: index, className: "h-24 bg-slate-50 rounded-[24px] flex items-center justify-center text-slate-800 border border-slate-100" }, /* @__PURE__ */ React.createElement(Icon, { size: 28 })))), /* @__PURE__ */ React.createElement("h2", { className: "text-[30px] font-black text-slate-900 tracking-tight leading-tight" }, "Qu\u1EA3n l\xFD chi ti\xEAu trong 3 thao t\xE1c"), /* @__PURE__ */ React.createElement("div", { className: "mt-8 space-y-4" }, [
  ["Th\xEAm nhanh", "Nh\u1EADp s\u1ED1 ti\u1EC1n, ch\u1ECDn danh m\u1EE5c v\xE0 l\u01B0u ngay."],
  ["Theo d\xF5i ng\xE2n s\xE1ch", "Xem v\xED, m\u1EE5c ti\xEAu v\xE0 c\u1EA3nh b\xE1o v\u01B0\u1EE3t h\u1EA1n m\u1EE9c."],
  ["Xu\u1EA5t d\u1EEF li\u1EC7u", "T\u1EA3i file CSV c\xF3 th\u1EC3 m\u1EDF b\u1EB1ng Excel."]
].map(([title, desc], index) => /* @__PURE__ */ React.createElement("div", { key: title, className: "flex gap-4" }, /* @__PURE__ */ React.createElement("div", { className: "w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-[13px] font-black shrink-0" }, index + 1), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-[15px] font-extrabold text-slate-900" }, title), /* @__PURE__ */ React.createElement("p", { className: "text-[13px] text-slate-500 font-medium mt-0.5 leading-relaxed" }, desc))))), /* @__PURE__ */ React.createElement("button", { onClick: onDone, className: "mt-auto w-full bg-emerald-500 text-white rounded-[24px] py-4 text-[15px] font-extrabold shadow-[0_12px_24px_rgba(16,185,129,0.22)] active:scale-95 transition-all" }, "B\u1EAFt \u0111\u1EA7u s\u1EED d\u1EE5ng"));
const FinanceTools = ({ section, setSection, wallets, setWallets, budgets, setBudgets, goals, setGoals, transactions, onExport, formatVND }) => {
  const [walletName, setWalletName] = useState("");
  const [walletAmount, setWalletAmount] = useState("");
  const [budgetCategory, setBudgetCategory] = useState("\u0102n u\u1ED1ng");
  const [budgetLimit, setBudgetLimit] = useState("");
  const [goalName, setGoalName] = useState("");
  const [goalTarget, setGoalTarget] = useState("");
  const spentByCategory = useMemo(() => {
    return transactions.reduce((acc, item) => {
      if (item.type === "expense") acc[item.category] = (acc[item.category] || 0) + item.amount;
      return acc;
    }, {});
  }, [transactions]);
  const addWallet = () => {
    if (!walletName || !walletAmount) return;
    setWallets((prev) => [...prev, { id: Date.now(), name: walletName, balance: Number(walletAmount) }]);
    setWalletName("");
    setWalletAmount("");
  };
  const addBudget = () => {
    if (!budgetLimit) return;
    setBudgets((prev) => [...prev, { id: Date.now(), category: budgetCategory, limit: Number(budgetLimit) }]);
    setBudgetLimit("");
  };
  const addGoal = () => {
    if (!goalName || !goalTarget) return;
    setGoals((prev) => [...prev, { id: Date.now(), name: goalName, target: Number(goalTarget), current: 0 }]);
    setGoalName("");
    setGoalTarget("");
  };
  return /* @__PURE__ */ React.createElement("div", { className: "animate-page-enter relative h-full overflow-y-auto no-scrollbar pt-14 px-6" }, /* @__PURE__ */ React.createElement("button", { onClick: () => setSection(null), className: "mb-5 w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-600 shadow-sm active:scale-90" }, /* @__PURE__ */ React.createElement(X, { size: 20 })), /* @__PURE__ */ React.createElement("h2", { className: "text-[28px] font-black text-slate-900 tracking-tight" }, "Qu\u1EA3n l\xFD t\xE0i ch\xEDnh"), /* @__PURE__ */ React.createElement("p", { className: "text-[13px] text-slate-500 font-semibold mt-1" }, "D\u1EEF li\u1EC7u \u0111\u01B0\u1EE3c l\u01B0u c\u1EE5c b\u1ED9 tr\xEAn tr\xECnh duy\u1EC7t."), /* @__PURE__ */ React.createElement("div", { className: "flex gap-2 mt-5 overflow-x-auto no-scrollbar pb-2" }, [
    ["wallets", "V\xED"],
    ["budgets", "Ng\xE2n s\xE1ch"],
    ["goals", "M\u1EE5c ti\xEAu"],
    ["export", "Xu\u1EA5t file"]
  ].map(([key, label]) => /* @__PURE__ */ React.createElement("button", { key, onClick: () => setSection(key), className: `px-4 py-2 rounded-full text-[12px] font-extrabold whitespace-nowrap ${section === key ? "bg-slate-900 text-white" : "bg-white text-slate-600 border border-slate-100"}` }, label))), section === "wallets" && /* @__PURE__ */ React.createElement("div", { className: "mt-5 space-y-3" }, wallets.map((wallet) => /* @__PURE__ */ React.createElement("div", { key: wallet.id, className: "bg-white border border-slate-100 rounded-[22px] p-4 flex justify-between items-center shadow-sm" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3" }, /* @__PURE__ */ React.createElement("div", { className: "w-11 h-11 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center" }, /* @__PURE__ */ React.createElement(Wallet, { size: 20 })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-[15px] font-extrabold text-slate-900" }, wallet.name), /* @__PURE__ */ React.createElement("p", { className: "text-[12px] text-slate-500 font-semibold" }, "S\u1ED1 d\u01B0 v\xED"))), /* @__PURE__ */ React.createElement("p", { className: "text-[14px] font-black text-slate-900" }, formatVND(wallet.balance)))), /* @__PURE__ */ React.createElement("div", { className: "bg-slate-50 border border-slate-100 rounded-[22px] p-3 grid grid-cols-2 gap-2" }, /* @__PURE__ */ React.createElement("input", { value: walletName, onChange: (e) => setWalletName(e.target.value), placeholder: "T\xEAn v\xED", className: "bg-white rounded-xl px-3 py-2 text-[13px] font-bold outline-none" }), /* @__PURE__ */ React.createElement("input", { value: walletAmount, onChange: (e) => setWalletAmount(e.target.value), placeholder: "S\u1ED1 d\u01B0", inputMode: "numeric", className: "bg-white rounded-xl px-3 py-2 text-[13px] font-bold outline-none" }), /* @__PURE__ */ React.createElement("button", { onClick: addWallet, className: "col-span-2 bg-slate-900 text-white rounded-xl py-2.5 text-[13px] font-extrabold" }, "Th\xEAm v\xED"))), section === "budgets" && /* @__PURE__ */ React.createElement("div", { className: "mt-5 space-y-3" }, budgets.map((budget) => {
    const spent = spentByCategory[budget.category] || 0;
    const pct = Math.min(spent / budget.limit * 100, 100);
    return /* @__PURE__ */ React.createElement("div", { key: budget.id, className: "bg-white border border-slate-100 rounded-[22px] p-4 shadow-sm" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between mb-3" }, /* @__PURE__ */ React.createElement("p", { className: "text-[15px] font-extrabold text-slate-900" }, budget.category), /* @__PURE__ */ React.createElement("p", { className: "text-[12px] font-bold text-slate-500" }, formatVND(spent), " / ", formatVND(budget.limit))), /* @__PURE__ */ React.createElement("div", { className: "h-2.5 bg-slate-100 rounded-full overflow-hidden" }, /* @__PURE__ */ React.createElement("div", { className: `h-full rounded-full ${pct > 85 ? "bg-rose-500" : "bg-emerald-500"}`, style: { width: `${pct}%` } })));
  }), /* @__PURE__ */ React.createElement("div", { className: "bg-slate-50 border border-slate-100 rounded-[22px] p-3 grid grid-cols-2 gap-2" }, /* @__PURE__ */ React.createElement("select", { value: budgetCategory, onChange: (e) => setBudgetCategory(e.target.value), className: "bg-white rounded-xl px-3 py-2 text-[13px] font-bold outline-none" }, Object.keys(categoryMeta).map((name) => /* @__PURE__ */ React.createElement("option", { key: name }, name))), /* @__PURE__ */ React.createElement("input", { value: budgetLimit, onChange: (e) => setBudgetLimit(e.target.value), placeholder: "H\u1EA1n m\u1EE9c", inputMode: "numeric", className: "bg-white rounded-xl px-3 py-2 text-[13px] font-bold outline-none" }), /* @__PURE__ */ React.createElement("button", { onClick: addBudget, className: "col-span-2 bg-slate-900 text-white rounded-xl py-2.5 text-[13px] font-extrabold" }, "Th\xEAm ng\xE2n s\xE1ch"))), section === "goals" && /* @__PURE__ */ React.createElement("div", { className: "mt-5 space-y-3" }, goals.map((goal) => {
    const pct = Math.min(goal.current / goal.target * 100, 100);
    return /* @__PURE__ */ React.createElement("div", { key: goal.id, className: "bg-white border border-slate-100 rounded-[22px] p-4 shadow-sm" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between mb-3" }, /* @__PURE__ */ React.createElement("p", { className: "text-[15px] font-extrabold text-slate-900" }, goal.name), /* @__PURE__ */ React.createElement("p", { className: "text-[12px] font-bold text-slate-500" }, Math.round(pct), "%")), /* @__PURE__ */ React.createElement("div", { className: "h-2.5 bg-slate-100 rounded-full overflow-hidden" }, /* @__PURE__ */ React.createElement("div", { className: "h-full bg-blue-500 rounded-full", style: { width: `${pct}%` } })), /* @__PURE__ */ React.createElement("p", { className: "text-[12px] text-slate-500 font-semibold mt-2" }, formatVND(goal.current), " / ", formatVND(goal.target)));
  }), /* @__PURE__ */ React.createElement("div", { className: "bg-slate-50 border border-slate-100 rounded-[22px] p-3 grid grid-cols-2 gap-2" }, /* @__PURE__ */ React.createElement("input", { value: goalName, onChange: (e) => setGoalName(e.target.value), placeholder: "T\xEAn m\u1EE5c ti\xEAu", className: "bg-white rounded-xl px-3 py-2 text-[13px] font-bold outline-none" }), /* @__PURE__ */ React.createElement("input", { value: goalTarget, onChange: (e) => setGoalTarget(e.target.value), placeholder: "S\u1ED1 ti\u1EC1n", inputMode: "numeric", className: "bg-white rounded-xl px-3 py-2 text-[13px] font-bold outline-none" }), /* @__PURE__ */ React.createElement("button", { onClick: addGoal, className: "col-span-2 bg-slate-900 text-white rounded-xl py-2.5 text-[13px] font-extrabold" }, "Th\xEAm m\u1EE5c ti\xEAu"))), section === "export" && /* @__PURE__ */ React.createElement("div", { className: "mt-5 bg-white border border-slate-100 rounded-[26px] p-5 shadow-sm" }, /* @__PURE__ */ React.createElement("div", { className: "w-14 h-14 bg-emerald-50 text-emerald-600 rounded-[20px] flex items-center justify-center mb-4" }, /* @__PURE__ */ React.createElement(Download, { size: 24 })), /* @__PURE__ */ React.createElement("p", { className: "text-[18px] font-black text-slate-900" }, "Xu\u1EA5t d\u1EEF li\u1EC7u Excel"), /* @__PURE__ */ React.createElement("p", { className: "text-[13px] text-slate-500 font-medium mt-2 leading-relaxed" }, "T\u1EA3i file CSV ch\u1EE9a to\xE0n b\u1ED9 giao d\u1ECBch hi\u1EC7n c\xF3. File n\xE0y m\u1EDF \u0111\u01B0\u1EE3c b\u1EB1ng Excel ho\u1EB7c Google Sheets."), /* @__PURE__ */ React.createElement("button", { onClick: onExport, className: "mt-5 w-full bg-emerald-500 text-white rounded-[18px] py-3 text-[13px] font-extrabold active:scale-95 transition-all" }, "T\u1EA3i CSV")), /* @__PURE__ */ React.createElement("div", { className: "h-[120px]" }));
};
const Profile = ({ user, onOpenSection, onExport, onLogout }) => /* @__PURE__ */ React.createElement("div", { className: "animate-page-enter relative h-full overflow-y-auto no-scrollbar pt-16" }, /* @__PURE__ */ React.createElement("div", { className: "px-6 flex items-center gap-5 mb-8" }, /* @__PURE__ */ React.createElement("div", { className: "relative" }, /* @__PURE__ */ React.createElement("div", { className: "w-[84px] h-[84px] rounded-[28px] bg-slate-900 flex items-center justify-center text-3xl font-extrabold text-white shadow-[0_8px_20px_rgba(15,23,42,0.2)]" }, (user?.name || "Minh Anh").split(" ").map((part) => part[0]).join("").slice(0, 2).toUpperCase()), /* @__PURE__ */ React.createElement("div", { className: "absolute -bottom-2 -right-2 bg-white p-1 rounded-xl shadow-sm border border-slate-50" }, /* @__PURE__ */ React.createElement("div", { className: "bg-amber-100 text-amber-500 p-1.5 rounded-lg" }, /* @__PURE__ */ React.createElement(ShieldCheck, { size: 16 })))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", { className: "text-[26px] font-extrabold text-slate-900 tracking-tight" }, user?.name || "Minh Anh"), /* @__PURE__ */ React.createElement("p", { className: "text-slate-500 text-[13px] font-semibold mt-0.5" }, user?.email || "minhanh@email.com"), /* @__PURE__ */ React.createElement("div", { className: "mt-2.5 inline-flex items-center gap-1.5 bg-emerald-50/80 border border-emerald-100/50 text-emerald-600 px-3 py-1 rounded-lg" }, /* @__PURE__ */ React.createElement(Award, { size: 14, strokeWidth: 2.5 }), /* @__PURE__ */ React.createElement("span", { className: "text-[10px] font-extrabold uppercase tracking-wider" }, "Level 4 Saver")))), /* @__PURE__ */ React.createElement("div", { className: "px-6 grid grid-cols-2 gap-4 mb-8" }, /* @__PURE__ */ React.createElement("div", { className: "bg-gradient-to-br from-amber-50/50 to-orange-50/30 border border-amber-100/50 p-4.5 rounded-[24px]" }, /* @__PURE__ */ React.createElement(Flame, { size: 24, className: "text-amber-400 mb-2", strokeWidth: 2.5 }), /* @__PURE__ */ React.createElement("p", { className: "text-[11px] text-amber-600/70 font-extrabold uppercase tracking-wider mb-1" }, "Chu\u1ED7i ti\u1EBFt ki\u1EC7m"), /* @__PURE__ */ React.createElement("p", { className: "text-[20px] font-black text-amber-600" }, "4 Th\xE1ng")), /* @__PURE__ */ React.createElement("div", { className: "bg-gradient-to-br from-blue-50/50 to-sky-50/30 border border-blue-100/50 p-4.5 rounded-[24px]" }, /* @__PURE__ */ React.createElement(Lightbulb, { size: 24, className: "text-blue-400 mb-2", strokeWidth: 2.5 }), /* @__PURE__ */ React.createElement("p", { className: "text-[11px] text-blue-600/70 font-extrabold uppercase tracking-wider mb-1" }, "Top danh m\u1EE5c"), /* @__PURE__ */ React.createElement("p", { className: "text-[20px] font-black text-blue-600" }, "\u0102n u\u1ED1ng"))), /* @__PURE__ */ React.createElement("div", { className: "w-full px-6 space-y-2" }, /* @__PURE__ */ React.createElement("p", { className: "text-[11px] font-extrabold text-slate-500 uppercase tracking-widest pl-2 mb-3 mt-6" }, "T\xE0i kho\u1EA3n"), [
  { icon: /* @__PURE__ */ React.createElement(Wallet, { size: 20 }), label: "Qu\u1EA3n l\xFD V\xED", action: () => onOpenSection("wallets") },
  { icon: /* @__PURE__ */ React.createElement(Target, { size: 20 }), label: "M\u1EE5c ti\xEAu & Ng\xE2n s\xE1ch", action: () => onOpenSection("budgets") },
  { icon: /* @__PURE__ */ React.createElement(History, { size: 20 }), label: "Xu\u1EA5t d\u1EEF li\u1EC7u Excel", action: onExport },
  { icon: /* @__PURE__ */ React.createElement(LogOut, { size: 20 }), label: "\u0110\u0103ng xu\u1EA5t", action: onLogout }
].map((item, i) => /* @__PURE__ */ React.createElement("button", { key: i, onClick: item.action, className: "w-full flex items-center justify-between p-4 bg-white border border-slate-100 rounded-[20px] hover:border-slate-200 hover:shadow-sm active:scale-95 transition-all cursor-pointer group text-left" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-4" }, /* @__PURE__ */ React.createElement("div", { className: "text-slate-400 group-hover:text-slate-800 transition-colors" }, item.icon), /* @__PURE__ */ React.createElement("span", { className: "text-[15px] font-bold text-slate-800" }, item.label)), /* @__PURE__ */ React.createElement(ChevronRight, { className: "text-slate-400 group-hover:translate-x-1 transition-transform", size: 18 })))), /* @__PURE__ */ React.createElement("div", { className: "h-[140px] w-full shrink-0" }));
function App() {
  const [appState, setAppState] = useState("loading");
  const [tab, setTab] = useState("dashboard");
  const [section, setSection] = useState(null);
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);
  const [toast, setToast] = useState(null);
  useEffect(() => {
    const timer = setTimeout(() => setAppState("ready"), 1500);
    return () => clearTimeout(timer);
  }, []);
  const defaultTransactions = [
    {
      date: "H\xF4m nay",
      items: [
        { id: 1, type: "expense", merchant: "Highlands Coffee", category: "\u0102n u\u1ED1ng", amount: 45e3, icon: /* @__PURE__ */ React.createElement(Coffee, { size: 18 }), note: "Cafe s\xE1ng", bg: "bg-amber-50", color: "text-amber-600" },
        { id: 2, type: "expense", merchant: "Netflix", category: "Gi\u1EA3i tr\xED", amount: 26e4, icon: /* @__PURE__ */ React.createElement(RefreshCw, { size: 18 }), note: "G\xF3i Premium", bg: "bg-indigo-50", color: "text-indigo-600", isRecurring: true }
      ]
    },
    {
      date: "H\xF4m qua",
      items: [
        { id: 3, type: "expense", merchant: "Grab", category: "Di chuy\u1EC3n", amount: 125e3, icon: /* @__PURE__ */ React.createElement(Car, { size: 18 }), note: "\u0110i l\xE0m", bg: "bg-sky-50", color: "text-sky-600" },
        { id: 4, type: "income", merchant: "Techcombank", category: "L\u01B0\u01A1ng", amount: 25e6, icon: /* @__PURE__ */ React.createElement(DollarSign, { size: 18 }), note: "L\u01B0\u01A1ng T5", bg: "bg-emerald-50", color: "text-emerald-600" }
      ]
    }
  ];
  const defaultWallets = [
    { id: 1, name: "V\xED ch\xEDnh", balance: 2394e4 },
    { id: 2, name: "Ti\u1EBFt ki\u1EC7m", balance: 8e6 }
  ];
  const defaultBudgets = [
    { id: 1, category: "\u0102n u\u1ED1ng", limit: 25e5 },
    { id: 2, category: "Mua s\u1EAFm", limit: 18e5 }
  ];
  const defaultGoals = [
    { id: 1, name: "Qu\u1EF9 du l\u1ECBch \u0110\xE0 N\u1EB5ng", target: 12e6, current: 52e5 },
    { id: 2, name: "Laptop m\u1EDBi", target: 22e6, current: 9e6 }
  ];
  const storedState = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    } catch {
      return {};
    }
  }, []);
  const [user, setUser] = useState(storedState.user || null);
  const [onboardingSeen, setOnboardingSeen] = useState(Boolean(storedState.onboardingSeen));
  const [groupedTransactions, setGroupedTransactions] = useState(normalizeGroups(storedState.groupedTransactions || defaultTransactions));
  const [wallets, setWallets] = useState(storedState.wallets || defaultWallets);
  const [budgets, setBudgets] = useState(storedState.budgets || defaultBudgets);
  const [goals, setGoals] = useState(storedState.goals || defaultGoals);
  const [filters, setFilters] = useState({ search: "", type: "all", category: "all" });
  useEffect(() => {
    const cleanGroups = groupedTransactions.map((group) => ({
      date: group.date,
      items: group.items.map(({ icon, ...item }) => item)
    }));
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      user,
      onboardingSeen,
      groupedTransactions: cleanGroups,
      wallets,
      budgets,
      goals
    }));
  }, [user, onboardingSeen, groupedTransactions, wallets, budgets, goals]);
  const stats = useMemo(() => {
    let income = 0;
    let expense = 0;
    groupedTransactions.forEach((group) => {
      group.items.forEach((t) => {
        if (t.type === "income") income += t.amount;
        if (t.type === "expense") expense += t.amount;
      });
    });
    return { income, expense, balance: income - expense };
  }, [groupedTransactions]);
  const formatVND = (val) => new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(val);
  const filteredGroups = useMemo(() => {
    const query = filters.search.trim().toLowerCase();
    return groupedTransactions.map((group) => ({
      ...group,
      items: group.items.filter((item) => {
        const text = `${item.merchant} ${item.category} ${item.note || ""}`.toLowerCase();
        const matchesSearch = !query || text.includes(query);
        const matchesType = filters.type === "all" || item.type === filters.type;
        const matchesCategory = filters.category === "all" || item.category === filters.category;
        return matchesSearch && matchesType && matchesCategory;
      })
    })).filter((group) => group.items.length > 0);
  }, [groupedTransactions, filters]);
  const allTransactions = useMemo(() => flattenTransactions(groupedTransactions), [groupedTransactions]);
  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(null), 3e3);
  };
  const handleSaveTransaction = (newT) => {
    const newGrouped = [...groupedTransactions];
    if (newGrouped.length > 0 && newGrouped[0].date === "H\xF4m nay") {
      newGrouped[0].items.unshift(newT);
    } else {
      newGrouped.unshift({ date: "H\xF4m nay", items: [newT] });
    }
    setGroupedTransactions(newGrouped);
    showToast("\u0110\xE3 l\u01B0u giao d\u1ECBch!");
    setTab("dashboard");
  };
  const handleExport = () => {
    downloadCsv(allTransactions);
    showToast("\u0110\xE3 xu\u1EA5t file CSV!");
  };
  const handleLogout = () => {
    setUser(null);
    showToast("\u0110\xE3 \u0111\u0103ng xu\u1EA5t!");
  };
  const isEmpty = groupedTransactions.length === 0;
  if (appState !== "loading" && !user) {
    return /* @__PURE__ */ React.createElement("div", { className: "h-screen bg-slate-100/80 font-['Inter',sans-serif] flex flex-col justify-center items-center overflow-hidden py-2" }, /* @__PURE__ */ React.createElement("div", { className: "relative w-full max-w-[390px] h-[min(780px,calc(100dvh-16px))] bg-[#12141A] lg:rounded-[48px] shadow-[0_34px_70px_-18px_rgba(0,0,0,0.36)] flex-shrink-0 mx-3" }, /* @__PURE__ */ React.createElement("div", { className: "absolute inset-[11px] bg-slate-50 rounded-[38px] overflow-hidden flex flex-col ring-1 ring-black/5" }, /* @__PURE__ */ React.createElement(AuthScreen, { onLogin: (nextUser) => {
      setUser(nextUser);
      showToast("\u0110\u0103ng nh\u1EADp th\xE0nh c\xF4ng!");
    } }))));
  }
  if (appState !== "loading" && user && !onboardingSeen) {
    return /* @__PURE__ */ React.createElement("div", { className: "h-screen bg-slate-100/80 font-['Inter',sans-serif] flex flex-col justify-center items-center overflow-hidden py-2" }, /* @__PURE__ */ React.createElement("div", { className: "relative w-full max-w-[390px] h-[min(780px,calc(100dvh-16px))] bg-[#12141A] lg:rounded-[48px] shadow-[0_34px_70px_-18px_rgba(0,0,0,0.36)] flex-shrink-0 mx-3" }, /* @__PURE__ */ React.createElement("div", { className: "absolute inset-[11px] bg-slate-50 rounded-[38px] overflow-hidden flex flex-col ring-1 ring-black/5" }, /* @__PURE__ */ React.createElement(Onboarding, { onDone: () => {
      setOnboardingSeen(true);
      showToast("S\u1EB5n s\xE0ng qu\u1EA3n l\xFD chi ti\xEAu!");
    } }))));
  }
  return /* @__PURE__ */ React.createElement("div", { className: "h-screen bg-slate-100/80 font-['Inter',sans-serif] flex flex-col justify-center items-center overflow-hidden py-2" }, toast && /* @__PURE__ */ React.createElement("div", { className: "fixed top-8 left-1/2 -translate-x-1/2 z-[100] bg-slate-900 text-white px-5 py-3.5 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.2)] flex items-center gap-3 animate-slide-down border border-slate-700" }, /* @__PURE__ */ React.createElement("div", { className: "bg-emerald-500/20 p-1.5 rounded-full" }, /* @__PURE__ */ React.createElement(Check, { size: 14, strokeWidth: 3, className: "text-emerald-400" })), /* @__PURE__ */ React.createElement("span", { className: "text-[13px] font-bold tracking-wide" }, toast)), /* @__PURE__ */ React.createElement("div", { className: "relative w-full max-w-[390px] h-[min(780px,calc(100dvh-16px))] bg-[#12141A] lg:rounded-[48px] shadow-[0_34px_70px_-18px_rgba(0,0,0,0.36)] flex-shrink-0 mx-3" }, /* @__PURE__ */ React.createElement("div", { className: "hidden lg:block absolute top-[110px] -left-[4px] w-[4px] h-[28px] bg-[#12141A] rounded-l-md shadow-inner" }), /* @__PURE__ */ React.createElement("div", { className: "hidden lg:block absolute top-[170px] -left-[4px] w-[4px] h-[54px] bg-[#12141A] rounded-l-md shadow-inner" }), /* @__PURE__ */ React.createElement("div", { className: "hidden lg:block absolute top-[240px] -left-[4px] w-[4px] h-[54px] bg-[#12141A] rounded-l-md shadow-inner" }), /* @__PURE__ */ React.createElement("div", { className: "hidden lg:block absolute top-[190px] -right-[4px] w-[4px] h-[74px] bg-[#12141A] rounded-r-md shadow-inner" }), /* @__PURE__ */ React.createElement("div", { className: "absolute inset-[11px] bg-slate-50 rounded-[38px] overflow-hidden flex flex-col ring-1 ring-black/5" }, /* @__PURE__ */ React.createElement("div", { className: "hidden lg:flex absolute top-0 left-1/2 -translate-x-1/2 w-[160px] h-[30px] bg-[#12141A] rounded-b-[20px] z-[60] items-center justify-center gap-4 shadow-sm" }, /* @__PURE__ */ React.createElement("div", { className: "w-12 h-1.5 rounded-full bg-slate-800 shadow-inner" }), /* @__PURE__ */ React.createElement("div", { className: "w-3 h-3 rounded-full bg-[#0a0a0c] shadow-[inset_0_-1px_2px_rgba(255,255,255,0.1)] border border-slate-800" })), /* @__PURE__ */ React.createElement("div", { className: "flex-1 overflow-hidden relative z-10 bg-slate-50" }, appState === "loading" ? /* @__PURE__ */ React.createElement(SkeletonDashboard, null) : /* @__PURE__ */ React.createElement(React.Fragment, null, section && /* @__PURE__ */ React.createElement(FinanceTools, { section, setSection, wallets, setWallets, budgets, setBudgets, goals, setGoals, transactions: allTransactions, onExport: handleExport, formatVND }), !section && tab === "dashboard" && /* @__PURE__ */ React.createElement(Dashboard, { stats, filteredGroups, filters, setFilters, isBalanceVisible, setIsBalanceVisible, formatVND, isEmpty }), tab === "quickadd" && /* @__PURE__ */ React.createElement(QuickAdd, { onSave: handleSaveTransaction, onCancel: () => setTab("dashboard") }), !section && tab === "analytics" && /* @__PURE__ */ React.createElement(Analytics, { stats, formatVND, isEmpty }), !section && tab === "profile" && /* @__PURE__ */ React.createElement(Profile, { user, onOpenSection: setSection, onExport: handleExport, onLogout: handleLogout }))), tab !== "quickadd" && appState !== "loading" && !section && /* @__PURE__ */ React.createElement("div", { className: "absolute bottom-6 left-5 right-5 z-40" }, /* @__PURE__ */ React.createElement("nav", { className: "w-full bg-white/95 backdrop-blur-xl rounded-[32px] px-6 py-2.5 flex justify-between items-center shadow-[0_15px_40px_-10px_rgba(0,0,0,0.1)] border border-slate-100" }, /* @__PURE__ */ React.createElement("button", { onClick: () => setTab("dashboard"), className: `p-2 transition-all duration-300 touch-manipulation ${tab === "dashboard" ? "text-slate-900 scale-110" : "text-slate-400 hover:text-slate-600"}` }, /* @__PURE__ */ React.createElement(LayoutGrid, { size: 24, fill: tab === "dashboard" ? "currentColor" : "none" })), /* @__PURE__ */ React.createElement("button", { onClick: () => setTab("analytics"), className: `p-2 transition-all duration-300 touch-manipulation ${tab === "analytics" ? "text-slate-900 scale-110" : "text-slate-400 hover:text-slate-600"}` }, /* @__PURE__ */ React.createElement(BarChart3, { size: 24, strokeWidth: tab === "analytics" ? 2.5 : 2 })), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setTab("quickadd"),
      className: "w-[44px] h-[44px] -mt-5 bg-slate-900 text-white rounded-[16px] flex items-center justify-center shadow-[0_8px_16px_rgba(15,23,42,0.2)] hover:-translate-y-1 active:scale-95 transition-all duration-300 border-[2px] border-white relative group touch-manipulation"
    },
    /* @__PURE__ */ React.createElement("div", { className: "absolute inset-0 bg-slate-800 rounded-[14px] opacity-0 group-hover:opacity-100 transition-opacity" }),
    /* @__PURE__ */ React.createElement(Plus, { size: 20, strokeWidth: 3, className: "relative z-10" })
  ), /* @__PURE__ */ React.createElement("button", { onClick: () => setTab("profile"), className: `p-2 transition-all duration-300 touch-manipulation ${tab === "profile" ? "text-slate-900 scale-110" : "text-slate-400 hover:text-slate-600"}` }, /* @__PURE__ */ React.createElement(Settings, { size: 24, fill: tab === "profile" ? "currentColor" : "none" })), /* @__PURE__ */ React.createElement("button", { onClick: () => setSection("export"), className: "p-2 text-slate-400 hover:text-slate-600 transition-colors touch-manipulation" }, /* @__PURE__ */ React.createElement(MoreHorizontal, { size: 24 })))))), /* @__PURE__ */ React.createElement("style", { dangerouslySetInnerHTML: { __html: `
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
      ` } }));
}
export {
  App as default
};
