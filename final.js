const React = !__vite__cjsImport0_react.__esModule ? __vite__cjsImport0_react : __vite__cjsImport0_react.default; const useState = __vite__cjsImport0_react["useState"]; const useMemo = __vite__cjsImport0_react["useMemo"]; const useEffect = __vite__cjsImport0_react["useEffect"];const _jsxDEV = __vite__cjsImport2_react_jsxDevRuntime["jsxDEV"]; const _Fragment = __vite__cjsImport2_react_jsxDevRuntime["Fragment"];import __vite__cjsImport0_react from "./deps/react.js?v=6842b218";
import { LayoutGrid, Plus, BarChart3, Settings, Eye, EyeOff, TrendingUp, TrendingDown, ChevronRight, Bell, Target, Wallet, ShieldCheck, History, MoreHorizontal, ArrowDownLeft, ArrowUpRight, X, Coffee, ShoppingBag, Car, FileText, DollarSign, Gamepad2, Check, Flame, Award, Lightbulb, Calendar, Edit3, RefreshCw, TrendingUp as TrendUpIcon, Zap, Sparkles, WifiOff, Search, SlidersHorizontal, FileBox, BoxSelect } from "./deps/lucide-react.js?v=4833ddc5";
var _jsxFileName = "/Users/cong/Desktop/01_Tai_Lieu/Thiet ke trai nghiem nguoi dung IT62/BTL_IT62/final.jsx";
import __vite__cjsImport2_react_jsxDevRuntime from "./deps/react_jsx-dev-runtime.js?v=51ad1e1c";
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
const SkeletonDashboard = () => /* @__PURE__ */ _jsxDEV("div", {
	className: "p-6 pt-16 space-y-8 animate-pulse",
	children: [
		/* @__PURE__ */ _jsxDEV("div", {
			className: "flex justify-between items-center",
			children: [/* @__PURE__ */ _jsxDEV("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ _jsxDEV("div", { className: "h-6 w-32 bg-slate-200 rounded-lg" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 41,
					columnNumber: 9
				}, this), /* @__PURE__ */ _jsxDEV("div", { className: "h-3 w-24 bg-slate-200 rounded-lg" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 42,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 40,
				columnNumber: 7
			}, this), /* @__PURE__ */ _jsxDEV("div", { className: "h-11 w-11 bg-slate-200 rounded-full" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 44,
				columnNumber: 7
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 39,
			columnNumber: 5
		}, this),
		/* @__PURE__ */ _jsxDEV("div", { className: "h-48 w-full bg-slate-200 rounded-[32px]" }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 46,
			columnNumber: 5
		}, this),
		/* @__PURE__ */ _jsxDEV("div", {
			className: "space-y-4",
			children: [/* @__PURE__ */ _jsxDEV("div", { className: "h-5 w-40 bg-slate-200 rounded-lg mb-2" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 48,
				columnNumber: 7
			}, this), [1, 2].map((i) => /* @__PURE__ */ _jsxDEV("div", {
				className: "flex gap-4 items-center",
				children: [/* @__PURE__ */ _jsxDEV("div", { className: "h-12 w-12 bg-slate-200 rounded-[16px]" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 51,
					columnNumber: 11
				}, this), /* @__PURE__ */ _jsxDEV("div", {
					className: "space-y-2 flex-1",
					children: [/* @__PURE__ */ _jsxDEV("div", { className: "h-4 w-24 bg-slate-200 rounded" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 53,
						columnNumber: 13
					}, this), /* @__PURE__ */ _jsxDEV("div", { className: "h-3 w-32 bg-slate-200 rounded" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 54,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 52,
					columnNumber: 11
				}, this)]
			}, i, true, {
				fileName: _jsxFileName,
				lineNumber: 50,
				columnNumber: 9
			}, this))]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 47,
			columnNumber: 5
		}, this)
	]
}, void 0, true, {
	fileName: _jsxFileName,
	lineNumber: 38,
	columnNumber: 3
}, this);
const OfflineBanner = () => /* @__PURE__ */ _jsxDEV("div", {
	className: "absolute top-10 left-0 right-0 z-[100] flex justify-center animate-slide-down",
	children: /* @__PURE__ */ _jsxDEV("div", {
		className: "bg-slate-800/95 backdrop-blur-md px-4 py-2 rounded-full shadow-lg flex items-center gap-2 border border-slate-700",
		children: [/* @__PURE__ */ _jsxDEV(WifiOff, {
			size: 14,
			className: "text-amber-400"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 65,
			columnNumber: 7
		}, this), /* @__PURE__ */ _jsxDEV("span", {
			className: "text-xs text-white font-medium tracking-wide",
			children: "Đang ngoại tuyến. Dữ liệu sẽ đồng bộ sau."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 66,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 64,
		columnNumber: 5
	}, this)
}, void 0, false, {
	fileName: _jsxFileName,
	lineNumber: 63,
	columnNumber: 3
}, this);
const EmptyState = ({ title, desc, icon }) => /* @__PURE__ */ _jsxDEV("div", {
	className: "flex flex-col items-center justify-center py-12 px-6 text-center animate-fade-in",
	children: [
		/* @__PURE__ */ _jsxDEV("div", {
			className: "w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mb-5 shadow-inner",
			children: icon
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 73,
			columnNumber: 5
		}, this),
		/* @__PURE__ */ _jsxDEV("h4", {
			className: "text-[17px] font-bold text-slate-800 tracking-tight",
			children: title
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 76,
			columnNumber: 5
		}, this),
		/* @__PURE__ */ _jsxDEV("p", {
			className: "text-[13px] text-slate-500 mt-2 font-medium leading-relaxed max-w-[240px]",
			children: desc
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 77,
			columnNumber: 5
		}, this),
		/* @__PURE__ */ _jsxDEV("div", {
			className: "mt-8 flex flex-col items-center animate-bounce-soft",
			children: [/* @__PURE__ */ _jsxDEV("span", {
				className: "text-[11px] font-bold text-emerald-500 uppercase tracking-widest mb-2",
				children: "Bắt đầu ngay"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 80,
				columnNumber: 7
			}, this), /* @__PURE__ */ _jsxDEV("div", { className: "w-px h-8 bg-gradient-to-b from-emerald-400 to-transparent" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 81,
				columnNumber: 7
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 79,
			columnNumber: 5
		}, this)
	]
}, void 0, true, {
	fileName: _jsxFileName,
	lineNumber: 72,
	columnNumber: 3
}, this);
// --- MAIN VIEWS ---
const QuickAdd = ({ onSave, onCancel }) => {
	const [rawAmount, setRawAmount] = useState("");
	const [type, setType] = useState("expense");
	const [cat, setCat] = useState("Ăn uống");
	const [note, setNote] = useState("");
	const categories = type === "expense" ? [
		{
			name: "Ăn uống",
			icon: /* @__PURE__ */ _jsxDEV(Coffee, { size: 24 }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 96,
				columnNumber: 34
			}, this)
		},
		{
			name: "Di chuyển",
			icon: /* @__PURE__ */ _jsxDEV(Car, { size: 24 }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 97,
				columnNumber: 36
			}, this)
		},
		{
			name: "Mua sắm",
			icon: /* @__PURE__ */ _jsxDEV(ShoppingBag, { size: 24 }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 98,
				columnNumber: 34
			}, this)
		},
		{
			name: "Hóa đơn",
			icon: /* @__PURE__ */ _jsxDEV(FileText, { size: 24 }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 99,
				columnNumber: 34
			}, this)
		},
		{
			name: "Giải trí",
			icon: /* @__PURE__ */ _jsxDEV(Gamepad2, { size: 24 }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 100,
				columnNumber: 35
			}, this)
		}
	] : [
		{
			name: "Lương",
			icon: /* @__PURE__ */ _jsxDEV(DollarSign, { size: 24 }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 103,
				columnNumber: 32
			}, this)
		},
		{
			name: "Thưởng",
			icon: /* @__PURE__ */ _jsxDEV(Target, { size: 24 }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 104,
				columnNumber: 33
			}, this)
		},
		{
			name: "Khác",
			icon: /* @__PURE__ */ _jsxDEV(MoreHorizontal, { size: 24 }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 105,
				columnNumber: 31
			}, this)
		}
	];
	const addToAmount = (val) => {
		if (rawAmount.length < 10) setRawAmount((prev) => prev + val);
	};
	const handleSave = () => {
		if (!rawAmount) return;
		const selectedCat = categories.find((c) => c.name === cat) || categories[0];
		onSave({
			id: Date.now(),
			type,
			category: cat,
			amount: parseInt(rawAmount),
			date: "Vừa xong",
			merchant: note || (type === "expense" ? "Chi tiêu" : "Thu nhập"),
			icon: selectedCat.icon,
			color: type === "expense" ? "text-slate-700" : "text-emerald-600",
			bg: type === "expense" ? "bg-slate-100" : "bg-emerald-50"
		});
	};
	const displayAmount = rawAmount ? parseInt(rawAmount).toLocaleString("vi-VN") : "0";
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "h-full bg-white flex flex-col animate-page-enter relative z-50",
		children: [/* @__PURE__ */ _jsxDEV("div", {
			className: "flex items-center justify-between px-6 pt-12 pb-4",
			children: [
				/* @__PURE__ */ _jsxDEV("button", {
					onClick: onCancel,
					className: "p-2 -ml-2 text-slate-500 hover:text-slate-800 hover:bg-slate-50 rounded-full transition-colors active:scale-90 touch-manipulation",
					children: /* @__PURE__ */ _jsxDEV(X, {
						size: 24,
						strokeWidth: 2.5
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 134,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 133,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "flex bg-slate-100/80 p-1 rounded-full",
					children: [/* @__PURE__ */ _jsxDEV("button", {
						onClick: () => {
							setType("expense");
							setCat("Ăn uống");
						},
						className: `px-5 py-2 rounded-full text-[13px] font-bold transition-all duration-300 ${type === "expense" ? "bg-white text-slate-900 shadow-[0_2px_8px_rgba(0,0,0,0.06)]" : "text-slate-500 hover:text-slate-700"}`,
						children: "Khoản chi"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 137,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("button", {
						onClick: () => {
							setType("income");
							setCat("Lương");
						},
						className: `px-5 py-2 rounded-full text-[13px] font-bold transition-all duration-300 ${type === "income" ? "bg-white text-emerald-600 shadow-[0_2px_8px_rgba(0,0,0,0.06)]" : "text-slate-500 hover:text-slate-700"}`,
						children: "Khoản thu"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 141,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 136,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", { className: "w-8" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 146,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 132,
			columnNumber: 7
		}, this), /* @__PURE__ */ _jsxDEV("div", {
			className: "flex-1 flex flex-col items-center py-2 overflow-y-auto no-scrollbar",
			children: [
				/* @__PURE__ */ _jsxDEV("div", {
					className: "w-full text-center mt-2 mb-6 h-24 flex flex-col justify-center",
					children: [/* @__PURE__ */ _jsxDEV("p", {
						className: "text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2",
						children: "Nhập số tiền"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 152,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("div", {
						className: `flex items-baseline justify-center gap-1 transition-colors duration-300 ${type === "income" ? "text-emerald-500" : "text-slate-900"}`,
						children: [/* @__PURE__ */ _jsxDEV("span", {
							className: "text-[52px] font-extrabold tracking-tighter leading-none animate-scale-up inline-block origin-bottom",
							children: displayAmount
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 154,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV("span", {
							className: "text-2xl font-bold opacity-40",
							children: "đ"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 157,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 153,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 151,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "w-full px-6 mb-8",
					children: /* @__PURE__ */ _jsxDEV("div", {
						className: "bg-slate-50 border border-slate-100 rounded-[20px] p-2 flex items-center justify-between gap-2 shadow-sm",
						children: [
							/* @__PURE__ */ _jsxDEV("button", {
								className: "flex items-center gap-2 bg-white px-3 py-2.5 rounded-xl shadow-[0_2px_6px_rgba(0,0,0,0.03)] border border-slate-100/50 text-slate-700 hover:bg-slate-50 active:scale-95 transition-all",
								children: [/* @__PURE__ */ _jsxDEV(Wallet, {
									size: 16,
									className: "text-emerald-500"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 165,
									columnNumber: 15
								}, this), /* @__PURE__ */ _jsxDEV("span", {
									className: "text-[13px] font-bold",
									children: "Ví chính"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 166,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 164,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("button", {
								className: "flex items-center gap-2 bg-white px-3 py-2.5 rounded-xl shadow-[0_2px_6px_rgba(0,0,0,0.03)] border border-slate-100/50 text-slate-700 hover:bg-slate-50 active:scale-95 transition-all",
								children: [/* @__PURE__ */ _jsxDEV(Calendar, {
									size: 16,
									className: "text-blue-500"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 169,
									columnNumber: 15
								}, this), /* @__PURE__ */ _jsxDEV("span", {
									className: "text-[13px] font-bold",
									children: "Hôm nay"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 170,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 168,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "flex-1 flex items-center gap-2 bg-white px-3 py-2.5 rounded-xl shadow-[0_2px_6px_rgba(0,0,0,0.03)] border border-slate-100/50",
								children: [/* @__PURE__ */ _jsxDEV(Edit3, {
									size: 16,
									className: "text-slate-400 shrink-0"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 173,
									columnNumber: 15
								}, this), /* @__PURE__ */ _jsxDEV("input", {
									type: "text",
									placeholder: "Tên người nhận...",
									className: "bg-transparent border-none outline-none text-[13px] font-bold text-slate-700 w-full placeholder:text-slate-400 placeholder:font-medium",
									value: note,
									onChange: (e) => setNote(e.target.value)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 174,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 172,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 163,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 162,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "w-full px-6 mb-8",
					children: /* @__PURE__ */ _jsxDEV("div", {
						className: "flex gap-4 overflow-x-auto pb-4 no-scrollbar -mx-6 px-6",
						children: categories.map((c) => {
							const isActive = cat === c.name;
							return /* @__PURE__ */ _jsxDEV("button", {
								onClick: () => setCat(c.name),
								className: "flex flex-col items-center gap-2.5 flex-shrink-0 group outline-none",
								children: [/* @__PURE__ */ _jsxDEV("div", {
									className: `w-[56px] h-[56px] rounded-[20px] flex items-center justify-center transition-all duration-300 ease-out border
                    ${isActive ? type === "income" ? "bg-emerald-50/80 border-emerald-200/60 text-emerald-600 scale-105 shadow-[0_6px_16px_rgba(16,185,129,0.08)]" : "bg-white border-slate-200/80 text-slate-800 scale-105 shadow-[0_6px_16px_rgba(0,0,0,0.06)]" : "bg-slate-50/50 border-transparent text-slate-500 group-hover:bg-slate-100 group-active:scale-95"}`,
									children: c.icon
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 196,
									columnNumber: 19
								}, this), /* @__PURE__ */ _jsxDEV("span", {
									className: `text-[12px] font-bold transition-colors ${isActive ? "text-slate-800" : "text-slate-500"}`,
									children: c.name
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 205,
									columnNumber: 19
								}, this)]
							}, c.name, true, {
								fileName: _jsxFileName,
								lineNumber: 191,
								columnNumber: 17
							}, this);
						})
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 187,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 186,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "w-full px-5 pb-8 mt-auto",
					children: /* @__PURE__ */ _jsxDEV("div", {
						className: "bg-slate-50/50 p-2.5 rounded-[32px]",
						children: /* @__PURE__ */ _jsxDEV("div", {
							className: "grid grid-cols-3 gap-2 max-w-[320px] mx-auto",
							children: [
								1,
								2,
								3,
								4,
								5,
								6,
								7,
								8,
								9,
								"C",
								0,
								"OK"
							].map((num) => /* @__PURE__ */ _jsxDEV("button", {
								onClick: () => {
									if (num === "C") setRawAmount("");
									else if (num === "OK") handleSave();
									else addToAmount(num.toString());
								},
								className: `h-[60px] flex items-center justify-center text-[26px] font-medium transition-all duration-75 rounded-[22px] select-none touch-manipulation
                    ${num === "OK" ? type === "income" ? "bg-emerald-500 text-white shadow-[0_6px_16px_rgba(16,185,129,0.25)] hover:bg-emerald-600 active:scale-[0.92]" : "bg-slate-900 text-white shadow-[0_6px_16px_rgba(15,23,42,0.2)] hover:bg-slate-800 active:scale-[0.92]" : num === "C" ? "text-slate-500 bg-transparent hover:bg-slate-200/50 active:bg-slate-200 active:scale-[0.92]" : "text-slate-800 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.03)] border border-slate-100/50 hover:bg-slate-50 active:bg-slate-100 active:scale-[0.92]"}`,
								children: num === "OK" ? /* @__PURE__ */ _jsxDEV(Check, {
									strokeWidth: 3.5,
									size: 26
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 233,
									columnNumber: 35
								}, this) : num
							}, num, false, {
								fileName: _jsxFileName,
								lineNumber: 217,
								columnNumber: 17
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 215,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 214,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 213,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 149,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 131,
		columnNumber: 5
	}, this);
};
const Dashboard = ({ stats, groupedTransactions, isBalanceVisible, setIsBalanceVisible, formatVND, isEmpty, isOffline }) => {
	const animatedBalance = useAnimatedNumber(stats.balance);
	const animatedIncome = useAnimatedNumber(stats.income);
	const animatedExpense = useAnimatedNumber(stats.expense);
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "animate-page-enter relative h-full overflow-y-auto no-scrollbar",
		children: [
			isOffline && /* @__PURE__ */ _jsxDEV(OfflineBanner, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 251,
				columnNumber: 21
			}, this),
			/* @__PURE__ */ _jsxDEV("header", {
				className: "px-6 pt-16 pb-6 flex justify-between items-center bg-slate-50/90 backdrop-blur-md sticky top-0 z-20",
				children: [/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("h3", {
					className: "text-[26px] font-extrabold text-slate-900 tracking-tight",
					children: "Chào Minh Anh,"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 255,
					columnNumber: 11
				}, this), /* @__PURE__ */ _jsxDEV("p", {
					className: "text-slate-500 text-[13px] font-bold mt-1",
					children: "Thứ Sáu, 06 Tháng 6"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 256,
					columnNumber: 11
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 254,
					columnNumber: 9
				}, this), /* @__PURE__ */ _jsxDEV("button", {
					className: "relative w-[44px] h-[44px] bg-white rounded-full flex items-center justify-center text-slate-600 shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100/50 hover:bg-slate-50 transition-colors active:scale-90 touch-manipulation",
					children: [/* @__PURE__ */ _jsxDEV(Bell, {
						size: 22,
						strokeWidth: 2.2
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 259,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("span", { className: "absolute top-3 right-3 w-2.5 h-2.5 bg-rose-500 rounded-full border-2 border-white" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 260,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 258,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 253,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("div", {
				className: "px-6 mt-2",
				children: /* @__PURE__ */ _jsxDEV("div", {
					className: "bg-[#181C25] rounded-[32px] p-7 shadow-[0_16px_32px_-12px_rgba(15,23,42,0.3)] relative overflow-hidden border border-slate-700/30",
					children: [
						/* @__PURE__ */ _jsxDEV("div", { className: "absolute top-[-20%] left-[-10%] w-48 h-48 bg-blue-500/10 rounded-full blur-[40px]" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 267,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("div", { className: "absolute bottom-[-20%] right-[-10%] w-48 h-48 bg-emerald-500/10 rounded-full blur-[40px]" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 268,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "relative z-10 flex flex-col gap-6",
							children: [
								/* @__PURE__ */ _jsxDEV("div", {
									className: "flex justify-between items-start",
									children: [/* @__PURE__ */ _jsxDEV("div", {
										className: "flex items-center gap-2 text-slate-300",
										children: [/* @__PURE__ */ _jsxDEV("span", {
											className: "text-xs font-bold uppercase tracking-widest text-slate-400",
											children: "Tổng tài sản"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 273,
											columnNumber: 17
										}, this), /* @__PURE__ */ _jsxDEV("button", {
											onClick: () => setIsBalanceVisible(!isBalanceVisible),
											className: "p-1 hover:text-white transition-colors active:scale-90 touch-manipulation",
											children: isBalanceVisible ? /* @__PURE__ */ _jsxDEV(EyeOff, { size: 16 }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 275,
												columnNumber: 39
											}, this) : /* @__PURE__ */ _jsxDEV(Eye, { size: 16 }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 275,
												columnNumber: 62
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 274,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 272,
										columnNumber: 15
									}, this), /* @__PURE__ */ _jsxDEV("div", {
										className: "bg-white/10 backdrop-blur-md border border-white/5 px-3 py-1.5 rounded-full flex items-center gap-1.5",
										children: [/* @__PURE__ */ _jsxDEV(Wallet, {
											size: 12,
											className: "text-emerald-400"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 279,
											columnNumber: 17
										}, this), /* @__PURE__ */ _jsxDEV("span", {
											className: "text-[10px] text-white font-extrabold uppercase tracking-wide",
											children: "Ví chính"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 280,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 278,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 271,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("h4", {
									className: "text-[40px] font-extrabold text-white tracking-tighter leading-none font-sans",
									children: isBalanceVisible ? formatVND(animatedBalance) : "••••••••"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 284,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center gap-6 pt-5 border-t border-slate-700/40",
									children: [/* @__PURE__ */ _jsxDEV("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ _jsxDEV("div", {
											className: "p-2 bg-emerald-500/15 rounded-[12px] text-emerald-400",
											children: /* @__PURE__ */ _jsxDEV(ArrowDownLeft, {
												size: 16,
												strokeWidth: 2.5
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 291,
												columnNumber: 19
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 290,
											columnNumber: 17
										}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("p", {
											className: "text-[10px] text-slate-400 uppercase font-bold tracking-wider",
											children: "Thu nhập"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 294,
											columnNumber: 19
										}, this), /* @__PURE__ */ _jsxDEV("p", {
											className: "text-[15px] font-bold text-white mt-0.5",
											children: isBalanceVisible ? formatVND(animatedIncome) : "•••"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 295,
											columnNumber: 19
										}, this)] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 293,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 289,
										columnNumber: 15
									}, this), /* @__PURE__ */ _jsxDEV("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ _jsxDEV("div", {
											className: "p-2 bg-rose-500/15 rounded-[12px] text-rose-400",
											children: /* @__PURE__ */ _jsxDEV(ArrowUpRight, {
												size: 16,
												strokeWidth: 2.5
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 300,
												columnNumber: 19
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 299,
											columnNumber: 17
										}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("p", {
											className: "text-[10px] text-slate-400 uppercase font-bold tracking-wider",
											children: "Chi tiêu"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 303,
											columnNumber: 19
										}, this), /* @__PURE__ */ _jsxDEV("p", {
											className: "text-[15px] font-bold text-white mt-0.5",
											children: isBalanceVisible ? formatVND(animatedExpense) : "•••"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 304,
											columnNumber: 19
										}, this)] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 302,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 298,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 288,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 270,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 266,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 265,
				columnNumber: 7
			}, this),
			isEmpty ? /* @__PURE__ */ _jsxDEV(EmptyState, {
				title: "Chưa có dữ liệu",
				desc: "Hãy thêm giao dịch đầu tiên của bạn để MoneyCare có thể bắt đầu phân tích dòng tiền.",
				icon: /* @__PURE__ */ _jsxDEV(FileBox, {
					size: 40,
					className: "text-slate-300",
					strokeWidth: 1.5
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 316,
					columnNumber: 17
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 313,
				columnNumber: 9
			}, this) : /* @__PURE__ */ _jsxDEV(_Fragment, { children: [
				/* @__PURE__ */ _jsxDEV("div", {
					className: "mx-6 mt-5 bg-emerald-50/60 border border-emerald-100/60 rounded-[20px] p-3.5 flex items-center gap-3.5 shadow-[0_2px_10px_rgba(16,185,129,0.04)] animate-slide-up",
					style: { animationDelay: "0.1s" },
					children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "bg-white p-2 rounded-[14px] text-emerald-500 shadow-sm border border-emerald-50 shrink-0",
						children: /* @__PURE__ */ _jsxDEV(Sparkles, {
							size: 18,
							fill: "currentColor"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 323,
							columnNumber: 16
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 322,
						columnNumber: 13
					}, this), /* @__PURE__ */ _jsxDEV("p", {
						className: "text-[13px] text-slate-600 font-medium leading-snug",
						children: [
							"Tuyệt vời! Tuần này bạn đã tiết kiệm được ",
							/* @__PURE__ */ _jsxDEV("span", {
								className: "font-bold text-emerald-600",
								children: "12%"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 326,
								columnNumber: 57
							}, this),
							" so với tuần trước."
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 325,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 321,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "mt-8 px-6 animate-slide-up",
					style: { animationDelay: "0.2s" },
					children: [/* @__PURE__ */ _jsxDEV("h4", {
						className: "text-[17px] font-bold text-slate-800 tracking-[0.02em] mb-3 px-1",
						children: "Sắp đến hạn"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 332,
						columnNumber: 13
					}, this), /* @__PURE__ */ _jsxDEV("div", {
						className: "flex gap-3 overflow-x-auto no-scrollbar pb-2",
						children: [/* @__PURE__ */ _jsxDEV("div", {
							className: "flex-shrink-0 w-[140px] bg-white border border-slate-100 p-3.5 rounded-[20px] shadow-sm flex flex-col gap-3",
							children: [/* @__PURE__ */ _jsxDEV("div", {
								className: "flex justify-between items-start",
								children: [/* @__PURE__ */ _jsxDEV("div", {
									className: "p-2 bg-indigo-50 text-indigo-500 rounded-[12px]",
									children: /* @__PURE__ */ _jsxDEV(RefreshCw, { size: 16 }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 336,
										columnNumber: 85
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 336,
									columnNumber: 20
								}, this), /* @__PURE__ */ _jsxDEV("span", {
									className: "text-[10px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full",
									children: "Hôm nay"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 337,
									columnNumber: 20
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 335,
								columnNumber: 17
							}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("p", {
								className: "text-[14px] font-bold text-slate-800",
								children: "Netflix"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 340,
								columnNumber: 19
							}, this), /* @__PURE__ */ _jsxDEV("p", {
								className: "text-[14px] font-semibold text-slate-500",
								children: "-260k"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 341,
								columnNumber: 19
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 339,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 334,
							columnNumber: 15
						}, this), /* @__PURE__ */ _jsxDEV("div", {
							className: "flex-shrink-0 w-[140px] bg-white border border-slate-100 p-3.5 rounded-[20px] shadow-sm flex flex-col gap-3",
							children: [/* @__PURE__ */ _jsxDEV("div", {
								className: "flex justify-between items-start",
								children: [/* @__PURE__ */ _jsxDEV("div", {
									className: "p-2 bg-amber-50 text-amber-500 rounded-[12px]",
									children: /* @__PURE__ */ _jsxDEV(Zap, { size: 16 }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 346,
										columnNumber: 83
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 346,
									columnNumber: 20
								}, this), /* @__PURE__ */ _jsxDEV("span", {
									className: "text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full",
									children: "3 ngày tới"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 347,
									columnNumber: 20
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 345,
								columnNumber: 17
							}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("p", {
								className: "text-[14px] font-bold text-slate-800",
								children: "Tiền điện"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 350,
								columnNumber: 19
							}, this), /* @__PURE__ */ _jsxDEV("p", {
								className: "text-[14px] font-semibold text-slate-500",
								children: "-1.250k"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 351,
								columnNumber: 19
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 349,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 344,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 333,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 331,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "mt-8 px-6 animate-slide-up",
					style: { animationDelay: "0.3s" },
					children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "flex justify-between items-end mb-4 px-1",
						children: [/* @__PURE__ */ _jsxDEV("h4", {
							className: "text-[17px] font-bold text-slate-800 tracking-[0.02em]",
							children: "Giao dịch gần đây"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 360,
							columnNumber: 15
						}, this), /* @__PURE__ */ _jsxDEV("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ _jsxDEV("button", {
								className: "text-slate-400 hover:text-slate-800 transition-colors p-1",
								children: /* @__PURE__ */ _jsxDEV(Search, { size: 18 }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 362,
									columnNumber: 95
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 362,
								columnNumber: 17
							}, this), /* @__PURE__ */ _jsxDEV("button", {
								className: "text-slate-400 hover:text-slate-800 transition-colors p-1",
								children: /* @__PURE__ */ _jsxDEV(SlidersHorizontal, { size: 18 }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 363,
									columnNumber: 95
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 363,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 361,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 359,
						columnNumber: 13
					}, this), /* @__PURE__ */ _jsxDEV("div", {
						className: "bg-white rounded-[28px] p-2.5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-slate-100",
						children: groupedTransactions.map((group, gIdx) => /* @__PURE__ */ _jsxDEV("div", { children: [
							/* @__PURE__ */ _jsxDEV("p", {
								className: "text-[11px] font-bold text-slate-500 uppercase tracking-wider px-3.5 pt-3 pb-1",
								children: group.date
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 370,
								columnNumber: 19
							}, this),
							group.items.map((t, index) => /* @__PURE__ */ _jsxDEV("div", {
								className: "flex items-center justify-between p-3.5 rounded-[20px] hover:bg-slate-50 transition-colors cursor-pointer active:scale-[0.98] stagger-item opacity-0 animate-fade-in-up",
								style: {
									animationDelay: `${.4 + index * .1}s`,
									animationFillMode: "forwards"
								},
								children: [/* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center gap-4",
									children: [/* @__PURE__ */ _jsxDEV("div", {
										className: `w-[46px] h-[46px] rounded-[16px] flex items-center justify-center ${t.bg} ${t.color}`,
										children: t.icon
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 379,
										columnNumber: 25
									}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ _jsxDEV("p", {
											className: "text-[15px] font-bold text-slate-800 leading-tight",
											children: t.merchant
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 384,
											columnNumber: 29
										}, this), t.isRecurring && /* @__PURE__ */ _jsxDEV("span", {
											className: "bg-slate-100 text-slate-500 text-[9px] font-bold px-1.5 py-0.5 rounded-md uppercase tracking-wider",
											children: "Định kỳ"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 385,
											columnNumber: 47
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 383,
										columnNumber: 27
									}, this), /* @__PURE__ */ _jsxDEV("p", {
										className: "text-[12px] font-medium text-slate-500 mt-1",
										children: [
											t.category,
											" • ",
											t.note
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 387,
										columnNumber: 27
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 382,
										columnNumber: 25
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 378,
									columnNumber: 23
								}, this), /* @__PURE__ */ _jsxDEV("p", {
									className: `text-[15px] font-bold tracking-tight pr-2 ${t.type === "income" ? "text-emerald-500" : "text-slate-800"}`,
									children: [
										t.type === "income" ? "+" : "-",
										t.amount.toLocaleString(),
										"đ"
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 390,
									columnNumber: 23
								}, this)]
							}, t.id, true, {
								fileName: _jsxFileName,
								lineNumber: 373,
								columnNumber: 21
							}, this)),
							gIdx !== groupedTransactions.length - 1 && /* @__PURE__ */ _jsxDEV("div", { className: "h-px w-auto mx-4 my-1 bg-slate-50" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 395,
								columnNumber: 63
							}, this)
						] }, group.date, true, {
							fileName: _jsxFileName,
							lineNumber: 369,
							columnNumber: 17
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 367,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 358,
					columnNumber: 11
				}, this)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 319,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ _jsxDEV("div", { className: "h-[140px] w-full shrink-0" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 403,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 250,
		columnNumber: 5
	}, this);
};
const Analytics = ({ stats, formatVND, isEmpty }) => {
	const [activeLineIndex, setActiveLineIndex] = useState(3);
	const [activeDonutSlice, setActiveDonutSlice] = useState(null);
	// Fallback data for empty state to show greyed out charts
	const rawData = isEmpty ? [
		0,
		0,
		0,
		0,
		0,
		0,
		0
	] : [
		10,
		45,
		30,
		85,
		40,
		20,
		55
	];
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
	const donutData = isEmpty ? [{
		name: "Chưa có",
		pct: "0%",
		color: "bg-slate-200",
		stroke: "text-slate-200",
		dash: "100, 100",
		offset: "0"
	}] : [
		{
			name: "Ăn uống",
			pct: "50%",
			color: "bg-emerald-500",
			stroke: "text-emerald-500",
			dash: "50, 100",
			offset: "0"
		},
		{
			name: "Mua sắm",
			pct: "30%",
			color: "bg-rose-500",
			stroke: "text-rose-500",
			dash: "30, 100",
			offset: "-50"
		},
		{
			name: "Khác",
			pct: "20%",
			color: "bg-indigo-500",
			stroke: "text-indigo-500",
			dash: "20, 100",
			offset: "-80"
		}
	];
	const strokeColor = isEmpty ? "#e2e8f0" : "#10b981";
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "animate-page-enter relative h-full overflow-y-auto no-scrollbar",
		children: [
			/* @__PURE__ */ _jsxDEV("header", {
				className: "px-6 pt-16 pb-4 bg-slate-50 sticky top-0 z-20",
				children: [/* @__PURE__ */ _jsxDEV("h2", {
					className: "text-[28px] font-extrabold text-slate-900 tracking-tight",
					children: "Thống kê"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 449,
					columnNumber: 9
				}, this), /* @__PURE__ */ _jsxDEV("p", {
					className: "text-slate-500 text-sm font-semibold mt-1",
					children: "Tháng 06, 2025"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 450,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 448,
				columnNumber: 7
			}, this),
			isEmpty ? /* @__PURE__ */ _jsxDEV(EmptyState, {
				title: "Biểu đồ đang trống",
				desc: "Thêm các khoản chi tiêu để xem phân tích tự động tại đây.",
				icon: /* @__PURE__ */ _jsxDEV(BarChart3, {
					size: 40,
					className: "text-slate-300",
					strokeWidth: 1.5
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 457,
					columnNumber: 17
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 454,
				columnNumber: 9
			}, this) : /* @__PURE__ */ _jsxDEV("div", {
				className: "px-6 mb-8 animate-slide-up",
				children: /* @__PURE__ */ _jsxDEV("div", {
					className: "bg-rose-50/80 border border-rose-100/80 rounded-[24px] p-4 flex gap-3.5 items-start shadow-sm",
					children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "bg-white p-2 rounded-xl text-rose-500 shadow-[0_2px_6px_rgba(0,0,0,0.04)] border border-rose-50 shrink-0 mt-0.5",
						children: /* @__PURE__ */ _jsxDEV(TrendingDown, {
							size: 18,
							strokeWidth: 2.5
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 463,
							columnNumber: 16
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 462,
						columnNumber: 13
					}, this), /* @__PURE__ */ _jsxDEV("p", {
						className: "text-[13px] text-slate-700 font-semibold leading-relaxed pt-0.5 pr-2",
						children: [
							"Chi tiêu tuần này cao hơn mức trung bình ",
							/* @__PURE__ */ _jsxDEV("span", {
								className: "font-extrabold text-rose-600 bg-rose-100/80 px-1.5 py-0.5 rounded",
								children: "18%"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 466,
								columnNumber: 56
							}, this),
							". Cần chú ý nhóm ",
							/* @__PURE__ */ _jsxDEV("strong", { children: "Mua sắm" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 466,
								columnNumber: 167
							}, this),
							"."
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 465,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 461,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 460,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ _jsxDEV("div", {
				className: `px-6 mb-8 ${isEmpty ? "opacity-50 pointer-events-none" : "animate-slide-up"} style={{animationDelay: '0.1s'}}`,
				children: /* @__PURE__ */ _jsxDEV("div", {
					className: "bg-white rounded-[32px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100",
					children: [
						/* @__PURE__ */ _jsxDEV("div", {
							className: "flex justify-between items-start mb-8",
							children: [/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("p", {
								className: "text-slate-500 text-xs font-bold uppercase tracking-widest mb-1.5",
								children: "Tuần này"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 477,
								columnNumber: 15
							}, this), /* @__PURE__ */ _jsxDEV("p", {
								className: "text-3xl font-extrabold text-slate-900 tracking-tight",
								children: formatVND(stats.expense)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 478,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 476,
								columnNumber: 13
							}, this), !isEmpty && /* @__PURE__ */ _jsxDEV("div", {
								className: "flex items-center gap-1.5 bg-emerald-50 text-emerald-600 px-2.5 py-1.5 rounded-lg border border-emerald-100",
								children: [/* @__PURE__ */ _jsxDEV(TrendUpIcon, {
									size: 14,
									strokeWidth: 3
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 482,
									columnNumber: 18
								}, this), /* @__PURE__ */ _jsxDEV("span", {
									className: "text-[11px] font-bold",
									children: "12.5%"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 483,
									columnNumber: 18
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 481,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 475,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "relative w-full h-[120px]",
							children: [!isEmpty && activeLineIndex !== null && /* @__PURE__ */ _jsxDEV("div", {
								className: "absolute -top-6 bg-slate-800 text-white text-[11px] font-bold py-1.5 px-2.5 rounded-lg shadow-md transition-all duration-300 transform -translate-x-1/2 z-10 pointer-events-none",
								style: { left: `${activeLineIndex / (rawData.length - 1) * 100}%` },
								children: [
									rawData[activeLineIndex],
									"k",
									/* @__PURE__ */ _jsxDEV("div", { className: "absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 495,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 490,
								columnNumber: 15
							}, this), /* @__PURE__ */ _jsxDEV("svg", {
								viewBox: `0 -10 ${chartWidth} ${chartHeight + 20}`,
								className: "w-full h-full overflow-visible",
								children: [
									!isEmpty && /* @__PURE__ */ _jsxDEV("defs", { children: /* @__PURE__ */ _jsxDEV("linearGradient", {
										id: "chartGradient",
										x1: "0",
										y1: "0",
										x2: "0",
										y2: "1",
										children: [
											/* @__PURE__ */ _jsxDEV("stop", {
												offset: "0%",
												stopColor: "#10b981",
												stopOpacity: "0.2"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 503,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ _jsxDEV("stop", {
												offset: "40%",
												stopColor: "#10b981",
												stopOpacity: "0.08"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 504,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ _jsxDEV("stop", {
												offset: "70%",
												stopColor: "#10b981",
												stopOpacity: "0.01"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 505,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ _jsxDEV("stop", {
												offset: "100%",
												stopColor: "#10b981",
												stopOpacity: "0"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 506,
												columnNumber: 21
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 502,
										columnNumber: 19
									}, this) }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 501,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ _jsxDEV("path", {
										d: fillPathD,
										fill: isEmpty ? "none" : "url(#chartGradient)",
										className: "animate-fade-in",
										style: {
											animationDelay: "0.4s",
											opacity: 0,
											animationFillMode: "forwards"
										}
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 511,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ _jsxDEV("path", {
										d: pathD,
										fill: "none",
										stroke: strokeColor,
										strokeWidth: "2.5",
										strokeLinecap: "round",
										strokeLinejoin: "round",
										className: "line-draw-animation",
										strokeDasharray: isEmpty ? "4 8" : "1000",
										strokeDashoffset: "1000"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 518,
										columnNumber: 15
									}, this),
									!isEmpty && points.map((pt, i) => {
										const isPeak = i === 3;
										const isHovered = activeLineIndex === i;
										return /* @__PURE__ */ _jsxDEV("g", {
											onClick: () => setActiveLineIndex(i),
											className: "cursor-pointer",
											children: [
												/* @__PURE__ */ _jsxDEV("circle", {
													cx: pt.x,
													cy: pt.y,
													r: "20",
													fill: "transparent"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 535,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ _jsxDEV("circle", {
													cx: pt.x,
													cy: pt.y,
													r: isPeak || isHovered ? "4.5" : "3.5",
													fill: isPeak || isHovered ? strokeColor : "white",
													stroke: isPeak || isHovered ? "white" : strokeColor,
													strokeWidth: isPeak || isHovered ? "2" : "2.5",
													className: `transition-all duration-300 animate-scale-up ${isPeak ? "shadow-md" : ""}`,
													style: {
														opacity: 0,
														animationDelay: `${.5 + i * .05}s`,
														animationFillMode: "forwards"
													}
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 536,
													columnNumber: 21
												}, this),
												isPeak && !isHovered && /* @__PURE__ */ _jsxDEV("circle", {
													cx: pt.x,
													cy: pt.y,
													r: "10",
													fill: "none",
													stroke: strokeColor,
													strokeWidth: "1",
													opacity: "0.3",
													className: "animate-ping",
													style: { animationDuration: "3s" }
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 546,
													columnNumber: 24
												}, this)
											]
										}, i, true, {
											fileName: _jsxFileName,
											lineNumber: 534,
											columnNumber: 19
										}, this);
									})
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 499,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 488,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "flex justify-between mt-4 text-[11px] font-bold text-slate-500",
							children: [
								"T2",
								"T3",
								"T4",
								"T5",
								"T6",
								"T7",
								"CN"
							].map((day, i) => /* @__PURE__ */ _jsxDEV("span", {
								className: activeLineIndex === i && !isEmpty ? "text-slate-900 transition-colors" : "",
								children: day
							}, i, false, {
								fileName: _jsxFileName,
								lineNumber: 556,
								columnNumber: 15
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 554,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 474,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 473,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("div", {
				className: `px-6 mb-8 ${isEmpty ? "opacity-50 pointer-events-none" : "animate-slide-up"} style={{animationDelay: '0.2s'}}`,
				children: /* @__PURE__ */ _jsxDEV("div", {
					className: "bg-white rounded-[32px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100",
					children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "flex justify-between items-center mb-6",
						children: [/* @__PURE__ */ _jsxDEV("p", {
							className: "text-slate-800 text-[16px] font-extrabold",
							children: "Cơ cấu chi tiêu"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 565,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV("button", {
							className: "text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-slate-100 transition-colors",
							children: "Tháng này"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 566,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 564,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("div", {
						className: "flex items-center gap-8",
						children: [/* @__PURE__ */ _jsxDEV("div", {
							className: "relative w-[110px] h-[110px] shrink-0",
							children: [/* @__PURE__ */ _jsxDEV("svg", {
								viewBox: "0 0 36 36",
								className: "w-full h-full -rotate-90",
								children: [/* @__PURE__ */ _jsxDEV("path", {
									className: "text-slate-100",
									d: "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "3.5"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 572,
									columnNumber: 17
								}, this), donutData.map((slice, idx) => {
									const isFaded = activeDonutSlice && activeDonutSlice !== slice.name;
									return /* @__PURE__ */ _jsxDEV("path", {
										onClick: () => !isEmpty && setActiveDonutSlice(activeDonutSlice === slice.name ? null : slice.name),
										className: `${slice.stroke} chart-spin-animation transition-opacity duration-300 outline-none ${!isEmpty ? "cursor-pointer" : ""}`,
										style: {
											animationDelay: `${idx * .1}s`,
											opacity: isFaded && !isEmpty ? .2 : 1
										},
										strokeDasharray: slice.dash,
										strokeDashoffset: slice.offset,
										d: "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: activeDonutSlice === slice.name && !isEmpty ? "4.5" : "3.5",
										strokeLinecap: "round"
									}, slice.name, false, {
										fileName: _jsxFileName,
										lineNumber: 577,
										columnNumber: 21
									}, this);
								})]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 571,
								columnNumber: 15
							}, this), /* @__PURE__ */ _jsxDEV("div", {
								className: "absolute inset-0 flex flex-col items-center justify-center pointer-events-none transition-all duration-300",
								children: activeDonutSlice && !isEmpty ? /* @__PURE__ */ _jsxDEV(_Fragment, { children: [/* @__PURE__ */ _jsxDEV("span", {
									className: "text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-0.5",
									children: activeDonutSlice
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 596,
									columnNumber: 21
								}, this), /* @__PURE__ */ _jsxDEV("span", {
									className: "text-[15px] font-black text-slate-900",
									children: donutData.find((d) => d.name === activeDonutSlice).pct
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 597,
									columnNumber: 21
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 595,
									columnNumber: 19
								}, this) : /* @__PURE__ */ _jsxDEV(_Fragment, { children: [/* @__PURE__ */ _jsxDEV("span", {
									className: "text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-0.5",
									children: "Tổng"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 601,
									columnNumber: 21
								}, this), /* @__PURE__ */ _jsxDEV("span", {
									className: "text-[15px] font-black text-slate-900",
									children: isEmpty ? "0đ" : "4.4M"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 602,
									columnNumber: 21
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 600,
									columnNumber: 19
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 593,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 570,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV("div", {
							className: "flex-1 space-y-5 py-2",
							children: donutData.map((item) => {
								const isFaded = activeDonutSlice && activeDonutSlice !== item.name;
								return /* @__PURE__ */ _jsxDEV("div", {
									onClick: () => !isEmpty && setActiveDonutSlice(activeDonutSlice === item.name ? null : item.name),
									className: `flex items-center justify-between transition-opacity duration-300 ${isFaded && !isEmpty ? "opacity-30" : "opacity-100"} ${!isEmpty ? "cursor-pointer" : ""}`,
									children: [/* @__PURE__ */ _jsxDEV("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ _jsxDEV("div", { className: `w-2.5 h-2.5 rounded-full ${item.color}` }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 618,
											columnNumber: 23
										}, this), /* @__PURE__ */ _jsxDEV("span", {
											className: `text-[13px] font-bold ${activeDonutSlice === item.name && !isEmpty ? "text-slate-900" : "text-slate-600"}`,
											children: item.name
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 619,
											columnNumber: 23
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 617,
										columnNumber: 21
									}, this), /* @__PURE__ */ _jsxDEV("span", {
										className: "text-[14px] font-black text-slate-900",
										children: item.pct
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 621,
										columnNumber: 21
									}, this)]
								}, item.name, true, {
									fileName: _jsxFileName,
									lineNumber: 612,
									columnNumber: 19
								}, this);
							})
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 608,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 569,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 563,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 562,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("div", { className: "h-[140px] w-full shrink-0" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 630,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 447,
		columnNumber: 5
	}, this);
};
const Profile = () => /* @__PURE__ */ _jsxDEV("div", {
	className: "animate-page-enter relative h-full overflow-y-auto no-scrollbar pt-16",
	children: [
		/* @__PURE__ */ _jsxDEV("div", {
			className: "px-6 flex items-center gap-5 mb-8",
			children: [/* @__PURE__ */ _jsxDEV("div", {
				className: "relative",
				children: [/* @__PURE__ */ _jsxDEV("div", {
					className: "w-[84px] h-[84px] rounded-[28px] bg-slate-900 flex items-center justify-center text-3xl font-extrabold text-white shadow-[0_8px_20px_rgba(15,23,42,0.2)]",
					children: "MA"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 639,
					columnNumber: 9
				}, this), /* @__PURE__ */ _jsxDEV("div", {
					className: "absolute -bottom-2 -right-2 bg-white p-1 rounded-xl shadow-sm border border-slate-50",
					children: /* @__PURE__ */ _jsxDEV("div", {
						className: "bg-amber-100 text-amber-500 p-1.5 rounded-lg",
						children: /* @__PURE__ */ _jsxDEV(ShieldCheck, { size: 16 }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 644,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 643,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 642,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 638,
				columnNumber: 7
			}, this), /* @__PURE__ */ _jsxDEV("div", { children: [
				/* @__PURE__ */ _jsxDEV("h2", {
					className: "text-[26px] font-extrabold text-slate-900 tracking-tight",
					children: "Minh Anh"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 649,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("p", {
					className: "text-slate-500 text-[13px] font-semibold mt-0.5",
					children: "minhanh@email.com"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 650,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "mt-2.5 inline-flex items-center gap-1.5 bg-emerald-50/80 border border-emerald-100/50 text-emerald-600 px-3 py-1 rounded-lg",
					children: [/* @__PURE__ */ _jsxDEV(Award, {
						size: 14,
						strokeWidth: 2.5
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 652,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("span", {
						className: "text-[10px] font-extrabold uppercase tracking-wider",
						children: "Level 4 Saver"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 653,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 651,
					columnNumber: 9
				}, this)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 648,
				columnNumber: 7
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 637,
			columnNumber: 5
		}, this),
		/* @__PURE__ */ _jsxDEV("div", {
			className: "px-6 grid grid-cols-2 gap-4 mb-8",
			children: [/* @__PURE__ */ _jsxDEV("div", {
				className: "bg-gradient-to-br from-amber-50/50 to-orange-50/30 border border-amber-100/50 p-4.5 rounded-[24px]",
				children: [
					/* @__PURE__ */ _jsxDEV(Flame, {
						size: 24,
						className: "text-amber-400 mb-2",
						strokeWidth: 2.5
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 660,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ _jsxDEV("p", {
						className: "text-[11px] text-amber-600/70 font-extrabold uppercase tracking-wider mb-1",
						children: "Chuỗi tiết kiệm"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 661,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ _jsxDEV("p", {
						className: "text-[20px] font-black text-amber-600",
						children: "4 Tháng"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 662,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 659,
				columnNumber: 7
			}, this), /* @__PURE__ */ _jsxDEV("div", {
				className: "bg-gradient-to-br from-blue-50/50 to-sky-50/30 border border-blue-100/50 p-4.5 rounded-[24px]",
				children: [
					/* @__PURE__ */ _jsxDEV(Lightbulb, {
						size: 24,
						className: "text-blue-400 mb-2",
						strokeWidth: 2.5
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 665,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ _jsxDEV("p", {
						className: "text-[11px] text-blue-600/70 font-extrabold uppercase tracking-wider mb-1",
						children: "Top danh mục"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 666,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ _jsxDEV("p", {
						className: "text-[20px] font-black text-blue-600",
						children: "Ăn uống"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 667,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 664,
				columnNumber: 7
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 658,
			columnNumber: 5
		}, this),
		/* @__PURE__ */ _jsxDEV("div", {
			className: "w-full px-6 space-y-2",
			children: [/* @__PURE__ */ _jsxDEV("p", {
				className: "text-[11px] font-extrabold text-slate-500 uppercase tracking-widest pl-2 mb-3 mt-6",
				children: "Tài khoản"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 672,
				columnNumber: 7
			}, this), [
				{
					icon: /* @__PURE__ */ _jsxDEV(Wallet, { size: 20 }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 674,
						columnNumber: 17
					}, this),
					label: "Quản lý Ví"
				},
				{
					icon: /* @__PURE__ */ _jsxDEV(Target, { size: 20 }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 675,
						columnNumber: 17
					}, this),
					label: "Mục tiêu & Ngân sách"
				},
				{
					icon: /* @__PURE__ */ _jsxDEV(History, { size: 20 }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 676,
						columnNumber: 17
					}, this),
					label: "Xuất dữ liệu Excel"
				}
			].map((item, i) => /* @__PURE__ */ _jsxDEV("div", {
				className: "flex items-center justify-between p-4 bg-white border border-slate-100 rounded-[20px] hover:border-slate-200 hover:shadow-sm active:scale-95 transition-all cursor-pointer group",
				children: [/* @__PURE__ */ _jsxDEV("div", {
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "text-slate-400 group-hover:text-slate-800 transition-colors",
						children: item.icon
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 680,
						columnNumber: 13
					}, this), /* @__PURE__ */ _jsxDEV("span", {
						className: "text-[15px] font-bold text-slate-800",
						children: item.label
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 681,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 679,
					columnNumber: 11
				}, this), /* @__PURE__ */ _jsxDEV(ChevronRight, {
					className: "text-slate-400 group-hover:translate-x-1 transition-transform",
					size: 18
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 683,
					columnNumber: 11
				}, this)]
			}, i, true, {
				fileName: _jsxFileName,
				lineNumber: 678,
				columnNumber: 9
			}, this))]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 671,
			columnNumber: 5
		}, this),
		/* @__PURE__ */ _jsxDEV("div", { className: "h-[140px] w-full shrink-0" }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 688,
			columnNumber: 5
		}, this)
	]
}, void 0, true, {
	fileName: _jsxFileName,
	lineNumber: 636,
	columnNumber: 3
}, this);
// --- MAIN APP ---
export default function App() {
	const [appState, setAppState] = useState("loading");
	const [demoMode, setDemoMode] = useState("normal");
	const [tab, setTab] = useState("dashboard");
	const [isBalanceVisible, setIsBalanceVisible] = useState(true);
	const [toast, setToast] = useState(null);
	// Initial Loading Simulation
	useEffect(() => {
		const timer = setTimeout(() => setAppState("ready"), 1500);
		return () => clearTimeout(timer);
	}, []);
	const defaultTransactions = [{
		date: "Hôm nay",
		items: [{
			id: 1,
			type: "expense",
			merchant: "Highlands Coffee",
			category: "Ăn uống",
			amount: 45e3,
			icon: /* @__PURE__ */ _jsxDEV(Coffee, { size: 18 }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 711,
				columnNumber: 107
			}, this),
			note: "Cafe sáng",
			bg: "bg-amber-50",
			color: "text-amber-600"
		}, {
			id: 2,
			type: "expense",
			merchant: "Netflix",
			category: "Giải trí",
			amount: 26e4,
			icon: /* @__PURE__ */ _jsxDEV(RefreshCw, { size: 18 }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 712,
				columnNumber: 100
			}, this),
			note: "Gói Premium",
			bg: "bg-indigo-50",
			color: "text-indigo-600",
			isRecurring: true
		}]
	}, {
		date: "Hôm qua",
		items: [{
			id: 3,
			type: "expense",
			merchant: "Grab",
			category: "Di chuyển",
			amount: 125e3,
			icon: /* @__PURE__ */ _jsxDEV(Car, { size: 18 }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 718,
				columnNumber: 98
			}, this),
			note: "Đi làm",
			bg: "bg-sky-50",
			color: "text-sky-600"
		}, {
			id: 4,
			type: "income",
			merchant: "Techcombank",
			category: "Lương",
			amount: 25e6,
			icon: /* @__PURE__ */ _jsxDEV(DollarSign, { size: 18 }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 719,
				columnNumber: 102
			}, this),
			note: "Lương T5",
			bg: "bg-emerald-50",
			color: "text-emerald-600"
		}]
	}];
	const [groupedTransactions, setGroupedTransactions] = useState(defaultTransactions);
	// Effect to handle Demo Mode changes
	useEffect(() => {
		if (demoMode === "empty") {
			setGroupedTransactions([]);
		} else {
			setGroupedTransactions(defaultTransactions);
		}
	}, [demoMode]);
	const stats = useMemo(() => {
		let income = 0;
		let expense = 0;
		groupedTransactions.forEach((group) => {
			group.items.forEach((t) => {
				if (t.type === "income") income += t.amount;
				if (t.type === "expense") expense += t.amount;
			});
		});
		return {
			income,
			expense,
			balance: income - expense
		};
	}, [groupedTransactions]);
	const formatVND = (val) => new Intl.NumberFormat("vi-VN", {
		style: "currency",
		currency: "VND"
	}).format(val);
	const handleSaveTransaction = (newT) => {
		const newGrouped = [...groupedTransactions];
		if (newGrouped.length > 0 && newGrouped[0].date === "Hôm nay") {
			newGrouped[0].items.unshift(newT);
		} else {
			newGrouped.unshift({
				date: "Hôm nay",
				items: [newT]
			});
		}
		setGroupedTransactions(newGrouped);
		// Auto switch off empty mode if user adds data
		if (demoMode === "empty") setDemoMode("normal");
		setToast("Đã lưu giao dịch!");
		setTimeout(() => setToast(null), 3e3);
		setTab("dashboard");
	};
	const isEmpty = groupedTransactions.length === 0;
	const isOffline = demoMode === "offline";
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "h-screen bg-slate-100/80 font-['Inter',sans-serif] flex flex-col justify-center items-center overflow-hidden py-2",
		children: [
			toast && /* @__PURE__ */ _jsxDEV("div", {
				className: "fixed top-8 left-1/2 -translate-x-1/2 z-[100] bg-slate-900 text-white px-5 py-3.5 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.2)] flex items-center gap-3 animate-slide-down border border-slate-700",
				children: [/* @__PURE__ */ _jsxDEV("div", {
					className: "bg-emerald-500/20 p-1.5 rounded-full",
					children: /* @__PURE__ */ _jsxDEV(Check, {
						size: 14,
						strokeWidth: 3,
						className: "text-emerald-400"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 776,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 775,
					columnNumber: 11
				}, this), /* @__PURE__ */ _jsxDEV("span", {
					className: "text-[13px] font-bold tracking-wide",
					children: toast
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 778,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 774,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ _jsxDEV("div", {
				className: "fixed bottom-4 right-4 z-[200] bg-white/90 backdrop-blur-md p-2 rounded-2xl shadow-xl border border-slate-200 flex gap-2",
				children: [
					/* @__PURE__ */ _jsxDEV("button", {
						onClick: () => setDemoMode("normal"),
						className: `px-3 py-1.5 text-xs font-bold rounded-xl transition-all ${demoMode === "normal" ? "bg-slate-900 text-white" : "text-slate-500 hover:bg-slate-100"}`,
						children: "Normal"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 784,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ _jsxDEV("button", {
						onClick: () => setDemoMode("empty"),
						className: `px-3 py-1.5 text-xs font-bold rounded-xl transition-all ${demoMode === "empty" ? "bg-slate-900 text-white" : "text-slate-500 hover:bg-slate-100"}`,
						children: "Empty State"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 785,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ _jsxDEV("button", {
						onClick: () => setDemoMode("offline"),
						className: `px-3 py-1.5 text-xs font-bold rounded-xl transition-all ${demoMode === "offline" ? "bg-rose-500 text-white" : "text-slate-500 hover:bg-slate-100"}`,
						children: "Offline"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 786,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 783,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("div", {
				className: "relative w-full max-w-[390px] h-[min(780px,calc(100dvh-16px))] bg-[#12141A] lg:rounded-[48px] shadow-[0_34px_70px_-18px_rgba(0,0,0,0.36)] flex-shrink-0 mx-3",
				children: [
					/* @__PURE__ */ _jsxDEV("div", { className: "hidden lg:block absolute top-[110px] -left-[4px] w-[4px] h-[28px] bg-[#12141A] rounded-l-md shadow-inner" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 792,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ _jsxDEV("div", { className: "hidden lg:block absolute top-[170px] -left-[4px] w-[4px] h-[54px] bg-[#12141A] rounded-l-md shadow-inner" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 793,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ _jsxDEV("div", { className: "hidden lg:block absolute top-[240px] -left-[4px] w-[4px] h-[54px] bg-[#12141A] rounded-l-md shadow-inner" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 794,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ _jsxDEV("div", { className: "hidden lg:block absolute top-[190px] -right-[4px] w-[4px] h-[74px] bg-[#12141A] rounded-r-md shadow-inner" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 795,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ _jsxDEV("div", {
						className: "absolute inset-[11px] bg-slate-50 rounded-[38px] overflow-hidden flex flex-col ring-1 ring-black/5",
						children: [
							/* @__PURE__ */ _jsxDEV("div", {
								className: "hidden lg:flex absolute top-0 left-1/2 -translate-x-1/2 w-[160px] h-[30px] bg-[#12141A] rounded-b-[20px] z-[60] items-center justify-center gap-4 shadow-sm",
								children: [/* @__PURE__ */ _jsxDEV("div", { className: "w-12 h-1.5 rounded-full bg-slate-800 shadow-inner" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 800,
									columnNumber: 14
								}, this), /* @__PURE__ */ _jsxDEV("div", { className: "w-3 h-3 rounded-full bg-[#0a0a0c] shadow-[inset_0_-1px_2px_rgba(255,255,255,0.1)] border border-slate-800" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 801,
									columnNumber: 14
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 799,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "flex-1 overflow-hidden relative z-10 bg-slate-50",
								children: appState === "loading" ? /* @__PURE__ */ _jsxDEV(SkeletonDashboard, {}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 806,
									columnNumber: 15
								}, this) : /* @__PURE__ */ _jsxDEV(_Fragment, { children: [
									tab === "dashboard" && /* @__PURE__ */ _jsxDEV(Dashboard, {
										stats,
										groupedTransactions,
										isBalanceVisible,
										setIsBalanceVisible,
										formatVND,
										isEmpty,
										isOffline
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 809,
										columnNumber: 41
									}, this),
									tab === "quickadd" && /* @__PURE__ */ _jsxDEV(QuickAdd, {
										onSave: handleSaveTransaction,
										onCancel: () => setTab("dashboard")
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 810,
										columnNumber: 40
									}, this),
									tab === "analytics" && /* @__PURE__ */ _jsxDEV(Analytics, {
										stats,
										formatVND,
										isEmpty
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 811,
										columnNumber: 41
									}, this),
									tab === "profile" && /* @__PURE__ */ _jsxDEV(Profile, {}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 812,
										columnNumber: 39
									}, this)
								] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 808,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 804,
								columnNumber: 11
							}, this),
							tab !== "quickadd" && appState !== "loading" && /* @__PURE__ */ _jsxDEV("div", {
								className: "absolute bottom-6 left-5 right-5 z-40",
								children: /* @__PURE__ */ _jsxDEV("nav", {
									className: "w-full bg-white/95 backdrop-blur-xl rounded-[32px] px-6 py-2.5 flex justify-between items-center shadow-[0_15px_40px_-10px_rgba(0,0,0,0.1)] border border-slate-100",
									children: [
										/* @__PURE__ */ _jsxDEV("button", {
											onClick: () => setTab("dashboard"),
											className: `p-2 transition-all duration-300 touch-manipulation ${tab === "dashboard" ? "text-slate-900 scale-110" : "text-slate-400 hover:text-slate-600"}`,
											children: /* @__PURE__ */ _jsxDEV(LayoutGrid, {
												size: 24,
												fill: tab === "dashboard" ? "currentColor" : "none"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 822,
												columnNumber: 19
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 821,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ _jsxDEV("button", {
											onClick: () => setTab("analytics"),
											className: `p-2 transition-all duration-300 touch-manipulation ${tab === "analytics" ? "text-slate-900 scale-110" : "text-slate-400 hover:text-slate-600"}`,
											children: /* @__PURE__ */ _jsxDEV(BarChart3, {
												size: 24,
												strokeWidth: tab === "analytics" ? 2.5 : 2
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 826,
												columnNumber: 19
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 825,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ _jsxDEV("button", {
											onClick: () => setTab("quickadd"),
											className: "w-[44px] h-[44px] -mt-5 bg-slate-900 text-white rounded-[16px] flex items-center justify-center shadow-[0_8px_16px_rgba(15,23,42,0.2)] hover:-translate-y-1 active:scale-95 transition-all duration-300 border-[2px] border-white relative group touch-manipulation",
											children: [/* @__PURE__ */ _jsxDEV("div", { className: "absolute inset-0 bg-slate-800 rounded-[14px] opacity-0 group-hover:opacity-100 transition-opacity" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 834,
												columnNumber: 19
											}, this), /* @__PURE__ */ _jsxDEV(Plus, {
												size: 20,
												strokeWidth: 3,
												className: "relative z-10"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 835,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 830,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ _jsxDEV("button", {
											onClick: () => setTab("profile"),
											className: `p-2 transition-all duration-300 touch-manipulation ${tab === "profile" ? "text-slate-900 scale-110" : "text-slate-400 hover:text-slate-600"}`,
											children: /* @__PURE__ */ _jsxDEV(Settings, {
												size: 24,
												fill: tab === "profile" ? "currentColor" : "none"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 839,
												columnNumber: 19
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 838,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ _jsxDEV("button", {
											className: "p-2 text-slate-400 hover:text-slate-600 transition-colors touch-manipulation",
											children: /* @__PURE__ */ _jsxDEV(MoreHorizontal, { size: 24 }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 843,
												columnNumber: 19
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 842,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 820,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 819,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 797,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 790,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("style", { dangerouslySetInnerHTML: { __html: `
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
      ` } }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 851,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 770,
		columnNumber: 5
	}, this);
}

//# sourceMappingURL=data:application/json;base64,eyJtYXBwaW5ncyI6IkFBQUEsT0FBTyxTQUFTLFVBQVUsU0FBUyxpQkFBaUI7QUFDcEQsU0FDRSxZQUFZLE1BQU0sV0FBVyxVQUFVLEtBQUssUUFBUSxZQUFZLGNBQ2hFLGNBQWMsTUFBTSxRQUFRLFFBQVEsYUFBYSxTQUFTLGdCQUMxRCxlQUFlLGNBQWMsR0FBRyxRQUFRLGFBQWEsS0FBSyxVQUMxRCxZQUFZLFVBQVUsT0FBTyxPQUFPLE9BQU8sV0FBVyxVQUFVLE9BQ2hFLFdBQVcsY0FBYyxhQUFhLEtBQUssVUFBVSxTQUFTLFFBQVEsbUJBQ3RFLFNBQVMsaUJBQ0o7Ozs7QUFJUCxNQUFNLHFCQUFxQixPQUFPLFdBQVcsUUFBUTtDQUNuRCxNQUFNLENBQUMsY0FBYyxtQkFBbUIsU0FBUyxDQUFDO0NBRWxELGdCQUFnQjtFQUNkLElBQUksWUFBWTtFQUNoQixNQUFNLFdBQVcsZ0JBQWdCO0dBQy9CLElBQUksQ0FBQyxXQUFXLFlBQVk7R0FDNUIsTUFBTSxXQUFXLEtBQUssS0FBSyxjQUFjLGFBQWEsVUFBVSxDQUFDO0dBQ2pFLE1BQU0sZUFBZSxJQUFJLEtBQUssSUFBSSxJQUFJLFVBQVUsQ0FBQztHQUNqRCxnQkFBZ0IsS0FBSyxNQUFNLGVBQWUsS0FBSyxDQUFDO0dBQ2hELElBQUksV0FBVyxHQUFHO0lBQ2hCLHNCQUFzQixPQUFPO0dBQy9CLE9BQU87SUFDTCxnQkFBZ0IsS0FBSztHQUN2QjtFQUNGO0VBQ0Esc0JBQXNCLE9BQU87Q0FDL0IsR0FBRyxDQUFDLE9BQU8sUUFBUSxDQUFDO0NBRXBCLE9BQU87QUFDVDs7QUFJQSxNQUFNLDBCQUNKLHdCQUFDLE9BQUQ7Q0FBSyxXQUFVO1dBQWY7RUFDRSx3QkFBQyxPQUFEO0dBQUssV0FBVTthQUFmLENBQ0Usd0JBQUMsT0FBRDtJQUFLLFdBQVU7Y0FBZixDQUNFLHdCQUFDLE9BQUQsRUFBSyxXQUFVLG1DQUF3Qzs7OztjQUN2RCx3QkFBQyxPQUFELEVBQUssV0FBVSxtQ0FBd0M7Ozs7WUFDcEQ7Ozs7O2FBQ0wsd0JBQUMsT0FBRCxFQUFLLFdBQVUsc0NBQTJDOzs7O1dBQ3ZEOzs7Ozs7RUFDTCx3QkFBQyxPQUFELEVBQUssV0FBVSwwQ0FBK0M7Ozs7O0VBQzlELHdCQUFDLE9BQUQ7R0FBSyxXQUFVO2FBQWYsQ0FDRSx3QkFBQyxPQUFELEVBQUssV0FBVSx3Q0FBNkM7Ozs7YUFDM0QsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFJLE1BQ1Ysd0JBQUMsT0FBRDtJQUFhLFdBQVU7Y0FBdkIsQ0FDRSx3QkFBQyxPQUFELEVBQUssV0FBVSx3Q0FBNkM7Ozs7Y0FDNUQsd0JBQUMsT0FBRDtLQUFLLFdBQVU7ZUFBZixDQUNFLHdCQUFDLE9BQUQsRUFBSyxXQUFVLGdDQUFxQzs7OztlQUNwRCx3QkFBQyxPQUFELEVBQUssV0FBVSxnQ0FBcUM7Ozs7YUFDakQ7Ozs7O1lBQ0Y7TUFOSzs7OztVQU1MLENBQ04sQ0FDRTs7Ozs7O0NBQ0Y7Ozs7OztBQUdQLE1BQU0sc0JBQ0osd0JBQUMsT0FBRDtDQUFLLFdBQVU7V0FDYix3QkFBQyxPQUFEO0VBQUssV0FBVTtZQUFmLENBQ0Usd0JBQUMsU0FBRDtHQUFTLE1BQU07R0FBSSxXQUFVO0VBQWtCOzs7O1lBQy9DLHdCQUFDLFFBQUQ7R0FBTSxXQUFVO2FBQStDO0VBQStDOzs7O1VBQzNHOzs7Ozs7QUFDRjs7Ozs7QUFHUCxNQUFNLGNBQWMsRUFBRSxPQUFPLE1BQU0sV0FDakMsd0JBQUMsT0FBRDtDQUFLLFdBQVU7V0FBZjtFQUNFLHdCQUFDLE9BQUQ7R0FBSyxXQUFVO2FBQ1o7RUFDRTs7Ozs7RUFDTCx3QkFBQyxNQUFEO0dBQUksV0FBVTthQUF1RDtFQUFVOzs7OztFQUMvRSx3QkFBQyxLQUFEO0dBQUcsV0FBVTthQUE2RTtFQUFROzs7OztFQUVsRyx3QkFBQyxPQUFEO0dBQUssV0FBVTthQUFmLENBQ0Usd0JBQUMsUUFBRDtJQUFNLFdBQVU7Y0FBd0U7R0FBa0I7Ozs7YUFDMUcsd0JBQUMsT0FBRCxFQUFLLFdBQVUsNERBQWlFOzs7O1dBQzdFOzs7Ozs7Q0FDRjs7Ozs7OztBQUtQLE1BQU0sWUFBWSxFQUFFLFFBQVEsZUFBZTtDQUN6QyxNQUFNLENBQUMsV0FBVyxnQkFBZ0IsU0FBUyxFQUFFO0NBQzdDLE1BQU0sQ0FBQyxNQUFNLFdBQVcsU0FBUyxTQUFTO0NBQzFDLE1BQU0sQ0FBQyxLQUFLLFVBQVUsU0FBUyxTQUFTO0NBQ3hDLE1BQU0sQ0FBQyxNQUFNLFdBQVcsU0FBUyxFQUFFO0NBRW5DLE1BQU0sYUFBYSxTQUFTLFlBQ3hCO0VBQ0U7R0FBRSxNQUFNO0dBQVcsTUFBTSx3QkFBQyxRQUFELEVBQVEsTUFBTSxHQUFJOzs7OztFQUFFO0VBQzdDO0dBQUUsTUFBTTtHQUFhLE1BQU0sd0JBQUMsS0FBRCxFQUFLLE1BQU0sR0FBSTs7Ozs7RUFBRTtFQUM1QztHQUFFLE1BQU07R0FBVyxNQUFNLHdCQUFDLGFBQUQsRUFBYSxNQUFNLEdBQUk7Ozs7O0VBQUU7RUFDbEQ7R0FBRSxNQUFNO0dBQVcsTUFBTSx3QkFBQyxVQUFELEVBQVUsTUFBTSxHQUFJOzs7OztFQUFFO0VBQy9DO0dBQUUsTUFBTTtHQUFZLE1BQU0sd0JBQUMsVUFBRCxFQUFVLE1BQU0sR0FBSTs7Ozs7RUFBRTtDQUNsRCxJQUNBO0VBQ0U7R0FBRSxNQUFNO0dBQVMsTUFBTSx3QkFBQyxZQUFELEVBQVksTUFBTSxHQUFJOzs7OztFQUFFO0VBQy9DO0dBQUUsTUFBTTtHQUFVLE1BQU0sd0JBQUMsUUFBRCxFQUFRLE1BQU0sR0FBSTs7Ozs7RUFBRTtFQUM1QztHQUFFLE1BQU07R0FBUSxNQUFNLHdCQUFDLGdCQUFELEVBQWdCLE1BQU0sR0FBSTs7Ozs7RUFBRTtDQUNwRDtDQUVKLE1BQU0sZUFBZSxRQUFRO0VBQzNCLElBQUksVUFBVSxTQUFTLElBQUksY0FBYSxTQUFRLE9BQU8sR0FBRztDQUM1RDtDQUVBLE1BQU0sbUJBQW1CO0VBQ3ZCLElBQUksQ0FBQyxXQUFXO0VBQ2hCLE1BQU0sY0FBYyxXQUFXLE1BQUssTUFBSyxFQUFFLFNBQVMsR0FBRyxLQUFLLFdBQVc7RUFDdkUsT0FBTztHQUNMLElBQUksS0FBSyxJQUFJO0dBQ2I7R0FDQSxVQUFVO0dBQ1YsUUFBUSxTQUFTLFNBQVM7R0FDMUIsTUFBTTtHQUNOLFVBQVUsU0FBUyxTQUFTLFlBQVksYUFBYTtHQUNyRCxNQUFNLFlBQVk7R0FDbEIsT0FBTyxTQUFTLFlBQVksbUJBQW1CO0dBQy9DLElBQUksU0FBUyxZQUFZLGlCQUFpQjtFQUM1QyxDQUFDO0NBQ0g7Q0FFQSxNQUFNLGdCQUFnQixZQUFZLFNBQVMsU0FBUyxFQUFFLGVBQWUsT0FBTyxJQUFJO0NBRWhGLE9BQ0Usd0JBQUMsT0FBRDtFQUFLLFdBQVU7WUFBZixDQUNFLHdCQUFDLE9BQUQ7R0FBSyxXQUFVO2FBQWY7SUFDRSx3QkFBQyxVQUFEO0tBQVEsU0FBUztLQUFVLFdBQVU7ZUFDbkMsd0JBQUMsR0FBRDtNQUFHLE1BQU07TUFBSSxhQUFhO0tBQU07Ozs7O0lBQzFCOzs7OztJQUNSLHdCQUFDLE9BQUQ7S0FBSyxXQUFVO2VBQWYsQ0FDRSx3QkFBQyxVQUFEO01BQ0UsZUFBZTtPQUFFLFFBQVEsU0FBUztPQUFHLE9BQU8sU0FBUztNQUFHO01BQ3hELFdBQVcsNEVBQTRFLFNBQVMsWUFBWSxnRUFBZ0U7Z0JBQzdLO0tBQWlCOzs7O2VBQ2xCLHdCQUFDLFVBQUQ7TUFDRSxlQUFlO09BQUUsUUFBUSxRQUFRO09BQUcsT0FBTyxPQUFPO01BQUc7TUFDckQsV0FBVyw0RUFBNEUsU0FBUyxXQUFXLGtFQUFrRTtnQkFDOUs7S0FBaUI7Ozs7YUFDZjs7Ozs7O0lBQ0wsd0JBQUMsT0FBRCxFQUFLLFdBQVUsTUFBVzs7Ozs7R0FDdkI7Ozs7O1lBRUwsd0JBQUMsT0FBRDtHQUFLLFdBQVU7YUFBZjtJQUVFLHdCQUFDLE9BQUQ7S0FBSyxXQUFVO2VBQWYsQ0FDRSx3QkFBQyxLQUFEO01BQUcsV0FBVTtnQkFBcUU7S0FBZTs7OztlQUNqRyx3QkFBQyxPQUFEO01BQUssV0FBVywyRUFBMkUsU0FBUyxXQUFXLHFCQUFxQjtnQkFBcEksQ0FDRSx3QkFBQyxRQUFEO09BQU0sV0FBVTtpQkFDYjtNQUNHOzs7O2dCQUNOLHdCQUFDLFFBQUQ7T0FBTSxXQUFVO2lCQUFnQztNQUFPOzs7O2NBQ3BEOzs7OzthQUNGOzs7Ozs7SUFHTCx3QkFBQyxPQUFEO0tBQUssV0FBVTtlQUNiLHdCQUFDLE9BQUQ7TUFBSyxXQUFVO2dCQUFmO09BQ0Usd0JBQUMsVUFBRDtRQUFRLFdBQVU7a0JBQWxCLENBQ0Usd0JBQUMsUUFBRDtTQUFRLE1BQU07U0FBSSxXQUFVO1FBQW9COzs7O2tCQUNoRCx3QkFBQyxRQUFEO1NBQU0sV0FBVTttQkFBd0I7UUFBYzs7OztnQkFDaEQ7Ozs7OztPQUNSLHdCQUFDLFVBQUQ7UUFBUSxXQUFVO2tCQUFsQixDQUNFLHdCQUFDLFVBQUQ7U0FBVSxNQUFNO1NBQUksV0FBVTtRQUFpQjs7OztrQkFDL0Msd0JBQUMsUUFBRDtTQUFNLFdBQVU7bUJBQXdCO1FBQWE7Ozs7Z0JBQy9DOzs7Ozs7T0FDUix3QkFBQyxPQUFEO1FBQUssV0FBVTtrQkFBZixDQUNFLHdCQUFDLE9BQUQ7U0FBTyxNQUFNO1NBQUksV0FBVTtRQUEyQjs7OztrQkFDdEQsd0JBQUMsU0FBRDtTQUNFLE1BQUs7U0FDTCxhQUFZO1NBQ1osV0FBVTtTQUNWLE9BQU87U0FDUCxXQUFXLE1BQU0sUUFBUSxFQUFFLE9BQU8sS0FBSztRQUN4Qzs7OztnQkFDRTs7Ozs7O01BQ0Y7Ozs7OztJQUNGOzs7OztJQUdMLHdCQUFDLE9BQUQ7S0FBSyxXQUFVO2VBQ2Isd0JBQUMsT0FBRDtNQUFLLFdBQVU7Z0JBQ1osV0FBVyxLQUFJLE1BQUs7T0FDbkIsTUFBTSxXQUFXLFFBQVEsRUFBRTtPQUMzQixPQUNFLHdCQUFDLFVBQUQ7UUFFRSxlQUFlLE9BQU8sRUFBRSxJQUFJO1FBQzVCLFdBQVU7a0JBSFosQ0FLRSx3QkFBQyxPQUFEO1NBQUssV0FBVztzQkFDWixXQUNHLFNBQVMsV0FDTixnSEFDQSwrRkFDSjttQkFFSCxFQUFFO1FBQ0E7Ozs7a0JBQ0wsd0JBQUMsUUFBRDtTQUFNLFdBQVcsMkNBQTJDLFdBQVcsbUJBQW1CO21CQUFxQixFQUFFO1FBQVc7Ozs7Z0JBQ3RIO1VBZEQsRUFBRTs7OztjQWNEO01BRVosQ0FBQztLQUNFOzs7OztJQUNGOzs7OztJQUdMLHdCQUFDLE9BQUQ7S0FBSyxXQUFVO2VBQ2Isd0JBQUMsT0FBRDtNQUFLLFdBQVU7Z0JBQ2Isd0JBQUMsT0FBRDtPQUFLLFdBQVU7aUJBQ1o7UUFBQztRQUFHO1FBQUc7UUFBRztRQUFHO1FBQUc7UUFBRztRQUFHO1FBQUc7UUFBRztRQUFLO1FBQUc7T0FBSSxFQUFFLEtBQUksUUFDN0Msd0JBQUMsVUFBRDtRQUVFLGVBQWU7U0FDYixJQUFJLFFBQVEsS0FBSyxhQUFhLEVBQUU7Y0FDM0IsSUFBSSxRQUFRLE1BQU0sV0FBVztjQUM3QixZQUFZLElBQUksU0FBUyxDQUFDO1FBQ2pDO1FBQ0EsV0FBVztzQkFDUCxRQUFRLE9BQ0wsU0FBUyxXQUNOLGlIQUNBLDBHQUNKLFFBQVEsTUFDTixnR0FDQTtrQkFFUCxRQUFRLE9BQU8sd0JBQUMsT0FBRDtTQUFPLGFBQWE7U0FBSyxNQUFNO1FBQUs7Ozs7bUJBQUk7T0FDbEQsR0FoQkQ7Ozs7Y0FnQkMsQ0FDVDtNQUNFOzs7OztLQUNGOzs7OztJQUNGOzs7OztHQUNGOzs7OztVQUNGOzs7Ozs7QUFFVDtBQUVBLE1BQU0sYUFBYSxFQUFFLE9BQU8scUJBQXFCLGtCQUFrQixxQkFBcUIsV0FBVyxTQUFTLGdCQUFnQjtDQUMxSCxNQUFNLGtCQUFrQixrQkFBa0IsTUFBTSxPQUFPO0NBQ3ZELE1BQU0saUJBQWlCLGtCQUFrQixNQUFNLE1BQU07Q0FDckQsTUFBTSxrQkFBa0Isa0JBQWtCLE1BQU0sT0FBTztDQUV2RCxPQUNFLHdCQUFDLE9BQUQ7RUFBSyxXQUFVO1lBQWY7R0FDRyxhQUFhLHdCQUFDLGVBQUQsQ0FBZ0I7Ozs7O0dBRTlCLHdCQUFDLFVBQUQ7SUFBUSxXQUFVO2NBQWxCLENBQ0Usd0JBQUMsT0FBRCxhQUNFLHdCQUFDLE1BQUQ7S0FBSSxXQUFVO2VBQTJEO0lBQWtCOzs7O2NBQzNGLHdCQUFDLEtBQUQ7S0FBRyxXQUFVO2VBQTRDO0lBQXNCOzs7O1lBQzVFOzs7O2NBQ0wsd0JBQUMsVUFBRDtLQUFRLFdBQVU7ZUFBbEIsQ0FDRSx3QkFBQyxNQUFEO01BQU0sTUFBTTtNQUFJLGFBQWE7S0FBTTs7OztlQUNuQyx3QkFBQyxRQUFELEVBQU0sV0FBVSxvRkFBMEY7Ozs7YUFDcEc7Ozs7O1lBQ0Y7Ozs7OztHQUdSLHdCQUFDLE9BQUQ7SUFBSyxXQUFVO2NBQ2Isd0JBQUMsT0FBRDtLQUFLLFdBQVU7ZUFBZjtNQUNFLHdCQUFDLE9BQUQsRUFBSyxXQUFVLG9GQUF5Rjs7Ozs7TUFDeEcsd0JBQUMsT0FBRCxFQUFLLFdBQVUsMkZBQWdHOzs7OztNQUUvRyx3QkFBQyxPQUFEO09BQUssV0FBVTtpQkFBZjtRQUNFLHdCQUFDLE9BQUQ7U0FBSyxXQUFVO21CQUFmLENBQ0Usd0JBQUMsT0FBRDtVQUFLLFdBQVU7b0JBQWYsQ0FDRSx3QkFBQyxRQUFEO1dBQU0sV0FBVTtxQkFBNkQ7VUFBa0I7Ozs7b0JBQy9GLHdCQUFDLFVBQUQ7V0FBUSxlQUFlLG9CQUFvQixDQUFDLGdCQUFnQjtXQUFHLFdBQVU7cUJBQ3RFLG1CQUFtQix3QkFBQyxRQUFELEVBQVEsTUFBTSxHQUFLOzs7O3NCQUFJLHdCQUFDLEtBQUQsRUFBSyxNQUFNLEdBQUs7Ozs7O1VBQ3JEOzs7O2tCQUNMOzs7OzttQkFDTCx3QkFBQyxPQUFEO1VBQUssV0FBVTtvQkFBZixDQUNFLHdCQUFDLFFBQUQ7V0FBUSxNQUFNO1dBQUksV0FBVTtVQUFtQjs7OztvQkFDL0Msd0JBQUMsUUFBRDtXQUFNLFdBQVU7cUJBQWdFO1VBQWM7Ozs7a0JBQzNGOzs7OztpQkFDRjs7Ozs7O1FBRUwsd0JBQUMsTUFBRDtTQUFJLFdBQVU7bUJBQ1gsbUJBQW1CLFVBQVUsZUFBZSxJQUFJO1FBQy9DOzs7OztRQUVKLHdCQUFDLE9BQUQ7U0FBSyxXQUFVO21CQUFmLENBQ0Usd0JBQUMsT0FBRDtVQUFLLFdBQVU7b0JBQWYsQ0FDRSx3QkFBQyxPQUFEO1dBQUssV0FBVTtxQkFDYix3QkFBQyxlQUFEO1lBQWUsTUFBTTtZQUFJLGFBQWE7V0FBTTs7Ozs7VUFDekM7Ozs7b0JBQ0wsd0JBQUMsT0FBRCxhQUNFLHdCQUFDLEtBQUQ7V0FBRyxXQUFVO3FCQUFnRTtVQUFXOzs7O29CQUN4Rix3QkFBQyxLQUFEO1dBQUcsV0FBVTtxQkFBMkMsbUJBQW1CLFVBQVUsY0FBYyxJQUFJO1VBQVM7Ozs7a0JBQzdHOzs7O2tCQUNGOzs7OzttQkFDTCx3QkFBQyxPQUFEO1VBQUssV0FBVTtvQkFBZixDQUNFLHdCQUFDLE9BQUQ7V0FBSyxXQUFVO3FCQUNiLHdCQUFDLGNBQUQ7WUFBYyxNQUFNO1lBQUksYUFBYTtXQUFNOzs7OztVQUN4Qzs7OztvQkFDTCx3QkFBQyxPQUFELGFBQ0Usd0JBQUMsS0FBRDtXQUFHLFdBQVU7cUJBQWdFO1VBQVc7Ozs7b0JBQ3hGLHdCQUFDLEtBQUQ7V0FBRyxXQUFVO3FCQUEyQyxtQkFBbUIsVUFBVSxlQUFlLElBQUk7VUFBUzs7OztrQkFDOUc7Ozs7a0JBQ0Y7Ozs7O2lCQUNGOzs7Ozs7T0FDRjs7Ozs7O0tBQ0Y7Ozs7OztHQUNGOzs7OztHQUVKLFVBQ0Msd0JBQUMsWUFBRDtJQUNFLE9BQU07SUFDTixNQUFLO0lBQ0wsTUFBTSx3QkFBQyxTQUFEO0tBQVMsTUFBTTtLQUFJLFdBQVU7S0FBaUIsYUFBYTtJQUFNOzs7OztHQUN4RTs7OztjQUVEO0lBRUUsd0JBQUMsT0FBRDtLQUFLLFdBQVU7S0FBb0ssT0FBTyxFQUFDLGdCQUFnQixPQUFNO2VBQWpOLENBQ0Usd0JBQUMsT0FBRDtNQUFLLFdBQVU7Z0JBQ1osd0JBQUMsVUFBRDtPQUFVLE1BQU07T0FBSSxNQUFLO01BQWdCOzs7OztLQUN2Qzs7OztlQUNMLHdCQUFDLEtBQUQ7TUFBRyxXQUFVO2dCQUFiO09BQW1FO09BQ3ZCLHdCQUFDLFFBQUQ7UUFBTSxXQUFVO2tCQUE2QjtPQUFTOzs7OztPQUFDO01BQ2hHOzs7OzthQUNBOzs7Ozs7SUFHTCx3QkFBQyxPQUFEO0tBQUssV0FBVTtLQUE2QixPQUFPLEVBQUMsZ0JBQWdCLE9BQU07ZUFBMUUsQ0FDRSx3QkFBQyxNQUFEO01BQUksV0FBVTtnQkFBbUU7S0FBZTs7OztlQUNoRyx3QkFBQyxPQUFEO01BQUssV0FBVTtnQkFBZixDQUNFLHdCQUFDLE9BQUQ7T0FBSyxXQUFVO2lCQUFmLENBQ0Usd0JBQUMsT0FBRDtRQUFLLFdBQVU7a0JBQWYsQ0FDRyx3QkFBQyxPQUFEO1NBQUssV0FBVTttQkFBa0Qsd0JBQUMsV0FBRCxFQUFXLE1BQU0sR0FBSTs7Ozs7UUFBTTs7OztrQkFDNUYsd0JBQUMsUUFBRDtTQUFNLFdBQVU7bUJBQTBFO1FBQWE7Ozs7Z0JBQ3JHOzs7OztpQkFDTCx3QkFBQyxPQUFELGFBQ0Usd0JBQUMsS0FBRDtRQUFHLFdBQVU7a0JBQXVDO09BQVU7Ozs7aUJBQzlELHdCQUFDLEtBQUQ7UUFBRyxXQUFVO2tCQUEyQztPQUFROzs7O2VBQzdEOzs7O2VBQ0Y7Ozs7O2dCQUNMLHdCQUFDLE9BQUQ7T0FBSyxXQUFVO2lCQUFmLENBQ0Usd0JBQUMsT0FBRDtRQUFLLFdBQVU7a0JBQWYsQ0FDRyx3QkFBQyxPQUFEO1NBQUssV0FBVTttQkFBZ0Qsd0JBQUMsS0FBRCxFQUFLLE1BQU0sR0FBSTs7Ozs7UUFBTTs7OztrQkFDcEYsd0JBQUMsUUFBRDtTQUFNLFdBQVU7bUJBQTZFO1FBQWdCOzs7O2dCQUMzRzs7Ozs7aUJBQ0wsd0JBQUMsT0FBRCxhQUNFLHdCQUFDLEtBQUQ7UUFBRyxXQUFVO2tCQUF1QztPQUFZOzs7O2lCQUNoRSx3QkFBQyxLQUFEO1FBQUcsV0FBVTtrQkFBMkM7T0FBVTs7OztlQUMvRDs7OztlQUNGOzs7OztjQUNGOzs7OzthQUNGOzs7Ozs7SUFHTCx3QkFBQyxPQUFEO0tBQUssV0FBVTtLQUE2QixPQUFPLEVBQUMsZ0JBQWdCLE9BQU07ZUFBMUUsQ0FDRSx3QkFBQyxPQUFEO01BQUssV0FBVTtnQkFBZixDQUNFLHdCQUFDLE1BQUQ7T0FBSSxXQUFVO2lCQUF5RDtNQUFxQjs7OztnQkFDNUYsd0JBQUMsT0FBRDtPQUFLLFdBQVU7aUJBQWYsQ0FDRSx3QkFBQyxVQUFEO1FBQVEsV0FBVTtrQkFBNEQsd0JBQUMsUUFBRCxFQUFRLE1BQU0sR0FBSzs7Ozs7T0FBUzs7OztpQkFDMUcsd0JBQUMsVUFBRDtRQUFRLFdBQVU7a0JBQTRELHdCQUFDLG1CQUFELEVBQW1CLE1BQU0sR0FBSzs7Ozs7T0FBUzs7OztlQUNsSDs7Ozs7Y0FDRjs7Ozs7ZUFFTCx3QkFBQyxPQUFEO01BQUssV0FBVTtnQkFDWixvQkFBb0IsS0FBSyxPQUFPLFNBQy9CLHdCQUFDLE9BQUQ7T0FDRSx3QkFBQyxLQUFEO1FBQUcsV0FBVTtrQkFBa0YsTUFBTTtPQUFROzs7OztPQUU1RyxNQUFNLE1BQU0sS0FBSyxHQUFHLFVBQ25CLHdCQUFDLE9BQUQ7UUFFRSxXQUFVO1FBQ1YsT0FBTztTQUFFLGdCQUFnQixHQUFHLEtBQU8sUUFBUSxHQUFLO1NBQUksbUJBQW1CO1FBQVc7a0JBSHBGLENBS0Usd0JBQUMsT0FBRDtTQUFLLFdBQVU7bUJBQWYsQ0FDRSx3QkFBQyxPQUFEO1VBQUssV0FBVyxxRUFBcUUsRUFBRSxHQUFHLEdBQUcsRUFBRTtvQkFDNUYsRUFBRTtTQUNBOzs7O21CQUNMLHdCQUFDLE9BQUQsYUFDRSx3QkFBQyxPQUFEO1VBQUssV0FBVTtvQkFBZixDQUNFLHdCQUFDLEtBQUQ7V0FBRyxXQUFVO3FCQUFzRCxFQUFFO1VBQVk7Ozs7b0JBQ2hGLEVBQUUsZUFBZSx3QkFBQyxRQUFEO1dBQU0sV0FBVTtxQkFBcUc7VUFBYTs7OztrQkFDako7Ozs7O21CQUNMLHdCQUFDLEtBQUQ7VUFBRyxXQUFVO29CQUFiO1dBQTRELEVBQUU7V0FBUztXQUFJLEVBQUU7VUFBUTs7Ozs7aUJBQ2xGOzs7O2lCQUNGOzs7OztrQkFDTCx3QkFBQyxLQUFEO1NBQUcsV0FBVyw2Q0FBNkMsRUFBRSxTQUFTLFdBQVcscUJBQXFCO21CQUF0RztVQUNHLEVBQUUsU0FBUyxXQUFXLE1BQU07VUFBSyxFQUFFLE9BQU8sZUFBZTtVQUFFO1NBQzNEOzs7OztnQkFDQTtVQW5CRSxFQUFFOzs7O2NBbUJKLENBQ047T0FDQSxTQUFTLG9CQUFvQixTQUFTLEtBQUssd0JBQUMsT0FBRCxFQUFLLFdBQVUsb0NBQXlDOzs7OztNQUNqRyxLQTNCSyxNQUFNOzs7O2FBMkJYLENBQ047S0FDRTs7OzthQUNGOzs7Ozs7R0FDTDs7Ozs7R0FHSix3QkFBQyxPQUFELEVBQUssV0FBVSw0QkFBaUM7Ozs7O0VBQzdDOzs7Ozs7QUFFVDtBQUVBLE1BQU0sYUFBYSxFQUFFLE9BQU8sV0FBVyxjQUFjO0NBQ25ELE1BQU0sQ0FBQyxpQkFBaUIsc0JBQXNCLFNBQVMsQ0FBQztDQUN4RCxNQUFNLENBQUMsa0JBQWtCLHVCQUF1QixTQUFTLElBQUk7O0NBRzdELE1BQU0sVUFBVSxVQUFVO0VBQUM7RUFBRztFQUFHO0VBQUc7RUFBRztFQUFHO0VBQUc7Q0FBQyxJQUFJO0VBQUM7RUFBSTtFQUFJO0VBQUk7RUFBSTtFQUFJO0VBQUk7Q0FBRTtDQUM3RSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssSUFBSSxHQUFHLE9BQU87Q0FDbkQsTUFBTSxjQUFjO0NBQ3BCLE1BQU0sYUFBYTtDQUVuQixNQUFNLFNBQVMsUUFBUSxLQUFLLEtBQUssT0FBTztFQUN0QyxHQUFJLEtBQUssUUFBUSxTQUFTLEtBQU07RUFDaEMsR0FBRyxjQUFlLE1BQU0sVUFBVTtDQUNwQyxFQUFFO0NBRUYsTUFBTSxvQkFBb0IsUUFBUTtFQUNoQyxPQUFPLElBQUksUUFBUSxLQUFLLE9BQU8sR0FBRyxNQUFNO0dBQ3RDLElBQUksTUFBTSxHQUFHLE9BQU8sS0FBSyxNQUFNLEVBQUUsR0FBRyxNQUFNO0dBQzFDLE1BQU0sT0FBTyxFQUFFLElBQUk7R0FDbkIsTUFBTSxPQUFPLEtBQUssS0FBSyxNQUFNLElBQUksS0FBSyxLQUFLO0dBQzNDLE1BQU0sT0FBTyxNQUFNLEtBQUssTUFBTSxJQUFJLEtBQUssS0FBSztHQUM1QyxPQUFPLEdBQUcsSUFBSSxLQUFLLEtBQUssR0FBRyxLQUFLLEVBQUUsR0FBRyxLQUFLLEdBQUcsTUFBTSxFQUFFLEdBQUcsTUFBTSxFQUFFLEdBQUcsTUFBTTtFQUMzRSxHQUFHLEVBQUU7Q0FDUDtDQUVBLE1BQU0sUUFBUSxpQkFBaUIsTUFBTTtDQUNyQyxNQUFNLFlBQVksR0FBRyxNQUFNLEtBQUssV0FBVyxHQUFHLFlBQVksT0FBTyxZQUFZO0NBRTdFLE1BQU0sWUFBWSxVQUNkLENBQUM7RUFBRSxNQUFNO0VBQVcsS0FBSztFQUFNLE9BQU87RUFBZ0IsUUFBUTtFQUFrQixNQUFNO0VBQVksUUFBUTtDQUFJLENBQUMsSUFDL0c7RUFDRTtHQUFFLE1BQU07R0FBVyxLQUFLO0dBQU8sT0FBTztHQUFrQixRQUFRO0dBQW9CLE1BQU07R0FBVyxRQUFRO0VBQUk7RUFDakg7R0FBRSxNQUFNO0dBQVcsS0FBSztHQUFPLE9BQU87R0FBZSxRQUFRO0dBQWlCLE1BQU07R0FBVyxRQUFRO0VBQU07RUFDN0c7R0FBRSxNQUFNO0dBQVEsS0FBSztHQUFPLE9BQU87R0FBaUIsUUFBUTtHQUFtQixNQUFNO0dBQVcsUUFBUTtFQUFNO0NBQ2hIO0NBRUosTUFBTSxjQUFjLFVBQVUsWUFBWTtDQUUxQyxPQUNFLHdCQUFDLE9BQUQ7RUFBSyxXQUFVO1lBQWY7R0FDRSx3QkFBQyxVQUFEO0lBQVEsV0FBVTtjQUFsQixDQUNFLHdCQUFDLE1BQUQ7S0FBSSxXQUFVO2VBQTJEO0lBQVk7Ozs7Y0FDckYsd0JBQUMsS0FBRDtLQUFHLFdBQVU7ZUFBNEM7SUFBaUI7Ozs7WUFDcEU7Ozs7OztHQUVQLFVBQ0Msd0JBQUMsWUFBRDtJQUNFLE9BQU07SUFDTixNQUFLO0lBQ0wsTUFBTSx3QkFBQyxXQUFEO0tBQVcsTUFBTTtLQUFJLFdBQVU7S0FBaUIsYUFBYTtJQUFNOzs7OztHQUMxRTs7OztjQUVELHdCQUFDLE9BQUQ7SUFBSyxXQUFVO2NBQ2Isd0JBQUMsT0FBRDtLQUFLLFdBQVU7ZUFBZixDQUNFLHdCQUFDLE9BQUQ7TUFBSyxXQUFVO2dCQUNaLHdCQUFDLGNBQUQ7T0FBYyxNQUFNO09BQUksYUFBYTtNQUFNOzs7OztLQUN6Qzs7OztlQUNMLHdCQUFDLEtBQUQ7TUFBRyxXQUFVO2dCQUFiO09BQW9GO09BQ3pDLHdCQUFDLFFBQUQ7UUFBTSxXQUFVO2tCQUFvRTtPQUFTOzs7OztPQUFDO09BQWlCLHdCQUFDLFVBQUQsWUFBUSxVQUFlOzs7OztPQUFDO01BQy9LOzs7OzthQUNBOzs7Ozs7R0FDRjs7Ozs7R0FJUCx3QkFBQyxPQUFEO0lBQUssV0FBVyxhQUFhLFVBQVUsbUNBQW1DLG1CQUFtQjtjQUMzRix3QkFBQyxPQUFEO0tBQUssV0FBVTtlQUFmO01BQ0Usd0JBQUMsT0FBRDtPQUFLLFdBQVU7aUJBQWYsQ0FDRSx3QkFBQyxPQUFELGFBQ0Usd0JBQUMsS0FBRDtRQUFHLFdBQVU7a0JBQW9FO09BQVc7Ozs7aUJBQzVGLHdCQUFDLEtBQUQ7UUFBRyxXQUFVO2tCQUF5RCxVQUFVLE1BQU0sT0FBTztPQUFLOzs7O2VBQy9GOzs7O2lCQUNKLENBQUMsV0FDQSx3QkFBQyxPQUFEO1FBQUssV0FBVTtrQkFBZixDQUNHLHdCQUFDLGFBQUQ7U0FBYSxNQUFNO1NBQUksYUFBYTtRQUFJOzs7O2tCQUN4Qyx3QkFBQyxRQUFEO1NBQU0sV0FBVTttQkFBd0I7UUFBVzs7OztnQkFDakQ7Ozs7O2VBRUo7Ozs7OztNQUVMLHdCQUFDLE9BQUQ7T0FBSyxXQUFVO2lCQUFmLENBQ0ksQ0FBQyxXQUFXLG9CQUFvQixRQUNoQyx3QkFBQyxPQUFEO1FBQ0UsV0FBVTtRQUNWLE9BQU8sRUFBRSxNQUFNLEdBQUksbUJBQW1CLFFBQVEsU0FBUyxLQUFNLElBQUksR0FBRztrQkFGdEU7U0FJRyxRQUFRO1NBQWlCO1NBQzFCLHdCQUFDLE9BQUQsRUFBSyxXQUFVLDhFQUFtRjs7Ozs7UUFDL0Y7Ozs7O2lCQUdQLHdCQUFDLE9BQUQ7UUFBSyxTQUFTLFNBQVMsV0FBVyxHQUFHLGNBQWM7UUFBTSxXQUFVO2tCQUFuRTtTQUNHLENBQUMsV0FDQSx3QkFBQyxRQUFELFlBQ0Usd0JBQUMsa0JBQUQ7VUFBZ0IsSUFBRztVQUFnQixJQUFHO1VBQUksSUFBRztVQUFJLElBQUc7VUFBSSxJQUFHO29CQUEzRDtXQUNFLHdCQUFDLFFBQUQ7WUFBTSxRQUFPO1lBQUssV0FBVTtZQUFVLGFBQVk7V0FBTzs7Ozs7V0FDekQsd0JBQUMsUUFBRDtZQUFNLFFBQU87WUFBTSxXQUFVO1lBQVUsYUFBWTtXQUFROzs7OztXQUMzRCx3QkFBQyxRQUFEO1lBQU0sUUFBTztZQUFNLFdBQVU7WUFBVSxhQUFZO1dBQVE7Ozs7O1dBQzNELHdCQUFDLFFBQUQ7WUFBTSxRQUFPO1lBQU8sV0FBVTtZQUFVLGFBQVk7V0FBSzs7Ozs7VUFDM0M7Ozs7O2tCQUNaOzs7OztTQUdSLHdCQUFDLFFBQUQ7VUFDRSxHQUFHO1VBQ0gsTUFBTSxVQUFVLFNBQVM7VUFDekIsV0FBVTtVQUNWLE9BQU87V0FBRSxnQkFBZ0I7V0FBUSxTQUFTO1dBQUcsbUJBQW1CO1VBQVc7U0FDNUU7Ozs7O1NBRUQsd0JBQUMsUUFBRDtVQUNFLEdBQUc7VUFDSCxNQUFLO1VBQ0wsUUFBUTtVQUNSLGFBQVk7VUFDWixlQUFjO1VBQ2QsZ0JBQWU7VUFDZixXQUFVO1VBQ1YsaUJBQWlCLFVBQVUsUUFBUTtVQUNuQyxrQkFBaUI7U0FDbEI7Ozs7O1NBRUEsQ0FBQyxXQUFXLE9BQU8sS0FBSyxJQUFJLE1BQU07VUFDakMsTUFBTSxTQUFTLE1BQU07VUFDckIsTUFBTSxZQUFZLG9CQUFvQjtVQUN0QyxPQUNFLHdCQUFDLEtBQUQ7V0FBVyxlQUFlLG1CQUFtQixDQUFDO1dBQUcsV0FBVTtxQkFBM0Q7WUFDRSx3QkFBQyxVQUFEO2FBQVEsSUFBSSxHQUFHO2FBQUcsSUFBSSxHQUFHO2FBQUcsR0FBRTthQUFLLE1BQUs7WUFBZTs7Ozs7WUFDdkQsd0JBQUMsVUFBRDthQUNFLElBQUksR0FBRzthQUFHLElBQUksR0FBRzthQUNqQixHQUFHLFVBQVUsWUFBWSxRQUFRO2FBQ2pDLE1BQU0sVUFBVSxZQUFZLGNBQWM7YUFDMUMsUUFBUSxVQUFVLFlBQVksVUFBVTthQUN4QyxhQUFhLFVBQVUsWUFBWSxNQUFNO2FBQ3pDLFdBQVcsZ0RBQWdELFNBQVMsY0FBYzthQUNsRixPQUFPO2NBQUUsU0FBUztjQUFHLGdCQUFnQixHQUFHLEtBQU0sSUFBRSxJQUFLO2NBQUksbUJBQW1CO2FBQVc7WUFDeEY7Ozs7O1lBQ0EsVUFBVSxDQUFDLGFBQ1Qsd0JBQUMsVUFBRDthQUFRLElBQUksR0FBRzthQUFHLElBQUksR0FBRzthQUFHLEdBQUU7YUFBSyxNQUFLO2FBQU8sUUFBUTthQUFhLGFBQVk7YUFBSSxTQUFRO2FBQU0sV0FBVTthQUFlLE9BQU8sRUFBRSxtQkFBbUIsS0FBSTtZQUFHOzs7OztXQUVoSzthQWRLOzs7O2lCQWNMO1NBRVAsQ0FBQztRQUNFOzs7OztlQUNGOzs7Ozs7TUFFTCx3QkFBQyxPQUFEO09BQUssV0FBVTtpQkFDWjtRQUFDO1FBQU07UUFBTTtRQUFNO1FBQU07UUFBTTtRQUFNO09BQUksRUFBRSxLQUFLLEtBQUssTUFDcEQsd0JBQUMsUUFBRDtRQUFjLFdBQVcsb0JBQW9CLEtBQUssQ0FBQyxVQUFVLHFDQUFxQztrQkFBSztPQUFVLEdBQXRHOzs7O2NBQXNHLENBQ2xIO01BQ0U7Ozs7O0tBQ0Y7Ozs7OztHQUNGOzs7OztHQUVMLHdCQUFDLE9BQUQ7SUFBSyxXQUFXLGFBQWEsVUFBVSxtQ0FBbUMsbUJBQW1CO2NBQzNGLHdCQUFDLE9BQUQ7S0FBSyxXQUFVO2VBQWYsQ0FDRSx3QkFBQyxPQUFEO01BQUssV0FBVTtnQkFBZixDQUNFLHdCQUFDLEtBQUQ7T0FBRyxXQUFVO2lCQUE0QztNQUFrQjs7OztnQkFDM0Usd0JBQUMsVUFBRDtPQUFRLFdBQVU7aUJBQTJHO01BQWlCOzs7O2NBQzNJOzs7OztlQUVMLHdCQUFDLE9BQUQ7TUFBSyxXQUFVO2dCQUFmLENBQ0Usd0JBQUMsT0FBRDtPQUFLLFdBQVU7aUJBQWYsQ0FDRSx3QkFBQyxPQUFEO1FBQUssU0FBUTtRQUFZLFdBQVU7a0JBQW5DLENBQ0Usd0JBQUMsUUFBRDtTQUFNLFdBQVU7U0FBaUIsR0FBRTtTQUFnRixNQUFLO1NBQU8sUUFBTztTQUFlLGFBQVk7UUFBTzs7OztrQkFFdkssVUFBVSxLQUFLLE9BQU8sUUFBUTtTQUM3QixNQUFNLFVBQVUsb0JBQW9CLHFCQUFxQixNQUFNO1NBQy9ELE9BQ0Usd0JBQUMsUUFBRDtVQUVFLGVBQWUsQ0FBQyxXQUFXLG9CQUFvQixxQkFBcUIsTUFBTSxPQUFPLE9BQU8sTUFBTSxJQUFJO1VBQ2xHLFdBQVcsR0FBRyxNQUFNLE9BQU8scUVBQXFFLENBQUMsVUFBVSxtQkFBbUI7VUFDOUgsT0FBTztXQUFFLGdCQUFnQixHQUFHLE1BQU0sR0FBSTtXQUFJLFNBQVMsV0FBVyxDQUFDLFVBQVUsS0FBTTtVQUFFO1VBQ2pGLGlCQUFpQixNQUFNO1VBQ3ZCLGtCQUFrQixNQUFNO1VBQ3hCLEdBQUU7VUFDRixNQUFLO1VBQ0wsUUFBTztVQUNQLGFBQWEscUJBQXFCLE1BQU0sUUFBUSxDQUFDLFVBQVUsUUFBUTtVQUNuRSxlQUFjO1NBQ2YsR0FYTSxNQUFNOzs7O2dCQVdaO1FBRUwsQ0FBQyxDQUNFOzs7OztpQkFDTCx3QkFBQyxPQUFEO1FBQUssV0FBVTtrQkFDWixvQkFBb0IsQ0FBQyxVQUNwQixnREFDRSx3QkFBQyxRQUFEO1NBQU0sV0FBVTttQkFBd0U7UUFBdUI7Ozs7a0JBQy9HLHdCQUFDLFFBQUQ7U0FBTSxXQUFVO21CQUF5QyxVQUFVLE1BQUssTUFBRyxFQUFFLFNBQVMsZ0JBQWdCLEVBQUU7UUFBVTs7OztnQkFDbEg7Ozs7bUJBRUYsZ0RBQ0Usd0JBQUMsUUFBRDtTQUFNLFdBQVU7bUJBQXVFO1FBQVU7Ozs7a0JBQ2pHLHdCQUFDLFFBQUQ7U0FBTSxXQUFVO21CQUF5QyxVQUFVLE9BQU87UUFBYTs7OztnQkFDdkY7Ozs7O09BRUQ7Ozs7ZUFDRjs7Ozs7Z0JBRUwsd0JBQUMsT0FBRDtPQUFLLFdBQVU7aUJBQ1osVUFBVSxLQUFJLFNBQVE7UUFDckIsTUFBTSxVQUFVLG9CQUFvQixxQkFBcUIsS0FBSztRQUM5RCxPQUNFLHdCQUFDLE9BQUQ7U0FFRSxlQUFlLENBQUMsV0FBVyxvQkFBb0IscUJBQXFCLEtBQUssT0FBTyxPQUFPLEtBQUssSUFBSTtTQUNoRyxXQUFXLHFFQUFxRSxXQUFXLENBQUMsVUFBVSxlQUFlLGNBQWMsR0FBRyxDQUFDLFVBQVUsbUJBQW1CO21CQUh0SyxDQUtFLHdCQUFDLE9BQUQ7VUFBSyxXQUFVO29CQUFmLENBQ0Usd0JBQUMsT0FBRCxFQUFLLFdBQVcsNEJBQTRCLEtBQUssUUFBYzs7OztvQkFDL0Qsd0JBQUMsUUFBRDtXQUFNLFdBQVcseUJBQXlCLHFCQUFxQixLQUFLLFFBQVEsQ0FBQyxVQUFVLG1CQUFtQjtxQkFBcUIsS0FBSztVQUFXOzs7O2tCQUM1STs7Ozs7bUJBQ0wsd0JBQUMsUUFBRDtVQUFNLFdBQVU7b0JBQXlDLEtBQUs7U0FBVTs7OztpQkFDckU7V0FURSxLQUFLOzs7O2VBU1A7T0FFVCxDQUFDO01BQ0U7Ozs7Y0FDRjs7Ozs7YUFDRjs7Ozs7O0dBQ0Y7Ozs7O0dBRUwsd0JBQUMsT0FBRCxFQUFLLFdBQVUsNEJBQWlDOzs7OztFQUM3Qzs7Ozs7O0FBRVQ7QUFFQSxNQUFNLGdCQUNKLHdCQUFDLE9BQUQ7Q0FBSyxXQUFVO1dBQWY7RUFDRSx3QkFBQyxPQUFEO0dBQUssV0FBVTthQUFmLENBQ0Usd0JBQUMsT0FBRDtJQUFLLFdBQVU7Y0FBZixDQUNFLHdCQUFDLE9BQUQ7S0FBSyxXQUFVO2VBQTJKO0lBRXJLOzs7O2NBQ0wsd0JBQUMsT0FBRDtLQUFLLFdBQVU7ZUFDYix3QkFBQyxPQUFEO01BQUssV0FBVTtnQkFDYix3QkFBQyxhQUFELEVBQWEsTUFBTSxHQUFLOzs7OztLQUNyQjs7Ozs7SUFDRjs7OztZQUNGOzs7OzthQUNMLHdCQUFDLE9BQUQ7SUFDRSx3QkFBQyxNQUFEO0tBQUksV0FBVTtlQUEyRDtJQUFZOzs7OztJQUNyRix3QkFBQyxLQUFEO0tBQUcsV0FBVTtlQUFrRDtJQUFvQjs7Ozs7SUFDbkYsd0JBQUMsT0FBRDtLQUFLLFdBQVU7ZUFBZixDQUNFLHdCQUFDLE9BQUQ7TUFBTyxNQUFNO01BQUksYUFBYTtLQUFLOzs7O2VBQ25DLHdCQUFDLFFBQUQ7TUFBTSxXQUFVO2dCQUFzRDtLQUFtQjs7OzthQUN0Rjs7Ozs7O0dBQ0Y7Ozs7V0FDRjs7Ozs7O0VBRUwsd0JBQUMsT0FBRDtHQUFLLFdBQVU7YUFBZixDQUNFLHdCQUFDLE9BQUQ7SUFBSyxXQUFVO2NBQWY7S0FDRSx3QkFBQyxPQUFEO01BQU8sTUFBTTtNQUFJLFdBQVU7TUFBc0IsYUFBYTtLQUFNOzs7OztLQUNwRSx3QkFBQyxLQUFEO01BQUcsV0FBVTtnQkFBNkU7S0FBa0I7Ozs7O0tBQzVHLHdCQUFDLEtBQUQ7TUFBRyxXQUFVO2dCQUF3QztLQUFVOzs7OztJQUM1RDs7Ozs7YUFDTCx3QkFBQyxPQUFEO0lBQUssV0FBVTtjQUFmO0tBQ0Usd0JBQUMsV0FBRDtNQUFXLE1BQU07TUFBSSxXQUFVO01BQXFCLGFBQWE7S0FBTTs7Ozs7S0FDdkUsd0JBQUMsS0FBRDtNQUFHLFdBQVU7Z0JBQTRFO0tBQWU7Ozs7O0tBQ3hHLHdCQUFDLEtBQUQ7TUFBRyxXQUFVO2dCQUF1QztLQUFVOzs7OztJQUMzRDs7Ozs7V0FDRjs7Ozs7O0VBRUwsd0JBQUMsT0FBRDtHQUFLLFdBQVU7YUFBZixDQUNFLHdCQUFDLEtBQUQ7SUFBRyxXQUFVO2NBQXFGO0dBQVk7Ozs7YUFDN0c7SUFDQztLQUFFLE1BQU0sd0JBQUMsUUFBRCxFQUFRLE1BQU0sR0FBSTs7Ozs7S0FBRyxPQUFPO0lBQWE7SUFDakQ7S0FBRSxNQUFNLHdCQUFDLFFBQUQsRUFBUSxNQUFNLEdBQUk7Ozs7O0tBQUcsT0FBTztJQUF1QjtJQUMzRDtLQUFFLE1BQU0sd0JBQUMsU0FBRCxFQUFTLE1BQU0sR0FBSTs7Ozs7S0FBRyxPQUFPO0lBQXFCO0dBQzVELEVBQUUsS0FBSyxNQUFNLE1BQ1gsd0JBQUMsT0FBRDtJQUFhLFdBQVU7Y0FBdkIsQ0FDRSx3QkFBQyxPQUFEO0tBQUssV0FBVTtlQUFmLENBQ0Usd0JBQUMsT0FBRDtNQUFLLFdBQVU7Z0JBQStELEtBQUs7S0FBVTs7OztlQUM3Rix3QkFBQyxRQUFEO01BQU0sV0FBVTtnQkFBd0MsS0FBSztLQUFZOzs7O2FBQ3RFOzs7OztjQUNMLHdCQUFDLGNBQUQ7S0FBYyxXQUFVO0tBQWdFLE1BQU07SUFBSzs7OztZQUNoRztNQU5LOzs7O1VBTUwsQ0FDTixDQUNFOzs7Ozs7RUFFTCx3QkFBQyxPQUFELEVBQUssV0FBVSw0QkFBaUM7Ozs7O0NBQzdDOzs7Ozs7O0FBS1AsZUFBZSxTQUFTLE1BQU07Q0FDNUIsTUFBTSxDQUFDLFVBQVUsZUFBZSxTQUFTLFNBQVM7Q0FDbEQsTUFBTSxDQUFDLFVBQVUsZUFBZSxTQUFTLFFBQVE7Q0FDakQsTUFBTSxDQUFDLEtBQUssVUFBVSxTQUFTLFdBQVc7Q0FDMUMsTUFBTSxDQUFDLGtCQUFrQix1QkFBdUIsU0FBUyxJQUFJO0NBQzdELE1BQU0sQ0FBQyxPQUFPLFlBQVksU0FBUyxJQUFJOztDQUd2QyxnQkFBZ0I7RUFDZCxNQUFNLFFBQVEsaUJBQWlCLFlBQVksT0FBTyxHQUFHLElBQUk7RUFDekQsYUFBYSxhQUFhLEtBQUs7Q0FDakMsR0FBRyxDQUFDLENBQUM7Q0FFTCxNQUFNLHNCQUFzQixDQUMxQjtFQUNFLE1BQU07RUFDTixPQUFPLENBQ0w7R0FBRSxJQUFJO0dBQUcsTUFBTTtHQUFXLFVBQVU7R0FBb0IsVUFBVTtHQUFXLFFBQVE7R0FBTyxNQUFNLHdCQUFDLFFBQUQsRUFBUSxNQUFNLEdBQUk7Ozs7O0dBQUcsTUFBTTtHQUFhLElBQUk7R0FBZSxPQUFPO0VBQWlCLEdBQ3JMO0dBQUUsSUFBSTtHQUFHLE1BQU07R0FBVyxVQUFVO0dBQVcsVUFBVTtHQUFZLFFBQVE7R0FBUSxNQUFNLHdCQUFDLFdBQUQsRUFBVyxNQUFNLEdBQUk7Ozs7O0dBQUcsTUFBTTtHQUFlLElBQUk7R0FBZ0IsT0FBTztHQUFtQixhQUFhO0VBQUssQ0FDMU07Q0FDRixHQUNBO0VBQ0UsTUFBTTtFQUNOLE9BQU8sQ0FDTDtHQUFFLElBQUk7R0FBRyxNQUFNO0dBQVcsVUFBVTtHQUFRLFVBQVU7R0FBYSxRQUFRO0dBQVEsTUFBTSx3QkFBQyxLQUFELEVBQUssTUFBTSxHQUFJOzs7OztHQUFHLE1BQU07R0FBVSxJQUFJO0dBQWEsT0FBTztFQUFlLEdBQ2xLO0dBQUUsSUFBSTtHQUFHLE1BQU07R0FBVSxVQUFVO0dBQWUsVUFBVTtHQUFTLFFBQVE7R0FBVSxNQUFNLHdCQUFDLFlBQUQsRUFBWSxNQUFNLEdBQUk7Ozs7O0dBQUcsTUFBTTtHQUFZLElBQUk7R0FBaUIsT0FBTztFQUFtQixDQUN6TDtDQUNGLENBQ0Y7Q0FFQSxNQUFNLENBQUMscUJBQXFCLDBCQUEwQixTQUFTLG1CQUFtQjs7Q0FHbEYsZ0JBQWdCO0VBQ2QsSUFBSSxhQUFhLFNBQVM7R0FDeEIsdUJBQXVCLENBQUMsQ0FBQztFQUMzQixPQUFPO0dBQ0wsdUJBQXVCLG1CQUFtQjtFQUM1QztDQUNGLEdBQUcsQ0FBQyxRQUFRLENBQUM7Q0FFYixNQUFNLFFBQVEsY0FBYztFQUMxQixJQUFJLFNBQVM7RUFDYixJQUFJLFVBQVU7RUFDZCxvQkFBb0IsU0FBUSxVQUFTO0dBQ25DLE1BQU0sTUFBTSxTQUFRLE1BQUs7SUFDdkIsSUFBSSxFQUFFLFNBQVMsVUFBVSxVQUFVLEVBQUU7SUFDckMsSUFBSSxFQUFFLFNBQVMsV0FBVyxXQUFXLEVBQUU7R0FDekMsQ0FBQztFQUNILENBQUM7RUFDRCxPQUFPO0dBQUU7R0FBUTtHQUFTLFNBQVMsU0FBUztFQUFRO0NBQ3RELEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztDQUV4QixNQUFNLGFBQWEsUUFBUSxJQUFJLEtBQUssYUFBYSxTQUFTO0VBQUUsT0FBTztFQUFZLFVBQVU7Q0FBTSxDQUFDLEVBQUUsT0FBTyxHQUFHO0NBRTVHLE1BQU0seUJBQXlCLFNBQVM7RUFDdEMsTUFBTSxhQUFhLENBQUMsR0FBRyxtQkFBbUI7RUFDMUMsSUFBSSxXQUFXLFNBQVMsS0FBSyxXQUFXLEdBQUcsU0FBUyxXQUFXO0dBQzdELFdBQVcsR0FBRyxNQUFNLFFBQVEsSUFBSTtFQUNsQyxPQUFPO0dBQ0wsV0FBVyxRQUFRO0lBQUUsTUFBTTtJQUFXLE9BQU8sQ0FBQyxJQUFJO0dBQUUsQ0FBQztFQUN2RDtFQUNBLHVCQUF1QixVQUFVOztFQUdqQyxJQUFJLGFBQWEsU0FBUyxZQUFZLFFBQVE7RUFFOUMsU0FBUyxtQkFBbUI7RUFDNUIsaUJBQWlCLFNBQVMsSUFBSSxHQUFHLEdBQUk7RUFDckMsT0FBTyxXQUFXO0NBQ3BCO0NBRUEsTUFBTSxVQUFVLG9CQUFvQixXQUFXO0NBQy9DLE1BQU0sWUFBWSxhQUFhO0NBRS9CLE9BQ0Usd0JBQUMsT0FBRDtFQUFLLFdBQVU7WUFBZjtHQUdHLFNBQ0Msd0JBQUMsT0FBRDtJQUFLLFdBQVU7Y0FBZixDQUNFLHdCQUFDLE9BQUQ7S0FBSyxXQUFVO2VBQ2Isd0JBQUMsT0FBRDtNQUFPLE1BQU07TUFBSSxhQUFhO01BQUcsV0FBVTtLQUFvQjs7Ozs7SUFDNUQ7Ozs7Y0FDTCx3QkFBQyxRQUFEO0tBQU0sV0FBVTtlQUF1QztJQUFZOzs7O1lBQ2hFOzs7Ozs7R0FJUCx3QkFBQyxPQUFEO0lBQUssV0FBVTtjQUFmO0tBQ0Usd0JBQUMsVUFBRDtNQUFRLGVBQWUsWUFBWSxRQUFRO01BQUcsV0FBVywyREFBMkQsYUFBYSxXQUFXLDRCQUE0QjtnQkFBdUM7S0FBYzs7Ozs7S0FDN04sd0JBQUMsVUFBRDtNQUFRLGVBQWUsWUFBWSxPQUFPO01BQUcsV0FBVywyREFBMkQsYUFBYSxVQUFVLDRCQUE0QjtnQkFBdUM7S0FBbUI7Ozs7O0tBQ2hPLHdCQUFDLFVBQUQ7TUFBUSxlQUFlLFlBQVksU0FBUztNQUFHLFdBQVcsMkRBQTJELGFBQWEsWUFBWSwyQkFBMkI7Z0JBQXVDO0tBQWU7Ozs7O0lBQzVOOzs7Ozs7R0FHTCx3QkFBQyxPQUFEO0lBQUssV0FBVTtjQUFmO0tBRUUsd0JBQUMsT0FBRCxFQUFLLFdBQVUsMkdBQWdIOzs7OztLQUMvSCx3QkFBQyxPQUFELEVBQUssV0FBVSwyR0FBZ0g7Ozs7O0tBQy9ILHdCQUFDLE9BQUQsRUFBSyxXQUFVLDJHQUFnSDs7Ozs7S0FDL0gsd0JBQUMsT0FBRCxFQUFLLFdBQVUsNEdBQWlIOzs7OztLQUVoSSx3QkFBQyxPQUFEO01BQUssV0FBVTtnQkFBZjtPQUVFLHdCQUFDLE9BQUQ7UUFBSyxXQUFVO2tCQUFmLENBQ0csd0JBQUMsT0FBRCxFQUFLLFdBQVUsb0RBQXlEOzs7O2tCQUN4RSx3QkFBQyxPQUFELEVBQUssV0FBVSw0R0FBaUg7Ozs7Z0JBQzlIOzs7Ozs7T0FFTCx3QkFBQyxPQUFEO1FBQUssV0FBVTtrQkFDWixhQUFhLFlBQ1osd0JBQUMsbUJBQUQsQ0FBb0I7Ozs7bUJBRXBCO1NBQ0csUUFBUSxlQUFlLHdCQUFDLFdBQUQ7VUFBa0I7VUFBNEI7VUFBdUM7VUFBdUM7VUFBZ0M7VUFBb0I7VUFBb0I7U0FBWTs7Ozs7U0FDdk8sUUFBUSxjQUFjLHdCQUFDLFVBQUQ7VUFBVSxRQUFRO1VBQXVCLGdCQUFnQixPQUFPLFdBQVc7U0FBSTs7Ozs7U0FDckcsUUFBUSxlQUFlLHdCQUFDLFdBQUQ7VUFBa0I7VUFBa0I7VUFBb0I7U0FBVTs7Ozs7U0FDekYsUUFBUSxhQUFhLHdCQUFDLFNBQUQsQ0FBVTs7Ozs7UUFDaEM7Ozs7O09BRUQ7Ozs7O09BR0gsUUFBUSxjQUFjLGFBQWEsYUFDbkMsd0JBQUMsT0FBRDtRQUFLLFdBQVU7a0JBQ2Isd0JBQUMsT0FBRDtTQUFLLFdBQVU7bUJBQWY7VUFDRSx3QkFBQyxVQUFEO1dBQVEsZUFBZSxPQUFPLFdBQVc7V0FBRyxXQUFXLHNEQUFzRCxRQUFRLGNBQWMsNkJBQTZCO3FCQUM5Six3QkFBQyxZQUFEO1lBQVksTUFBTTtZQUFJLE1BQU0sUUFBUSxjQUFjLGlCQUFpQjtXQUFTOzs7OztVQUN0RTs7Ozs7VUFFUix3QkFBQyxVQUFEO1dBQVEsZUFBZSxPQUFPLFdBQVc7V0FBRyxXQUFXLHNEQUFzRCxRQUFRLGNBQWMsNkJBQTZCO3FCQUM5Six3QkFBQyxXQUFEO1lBQVcsTUFBTTtZQUFJLGFBQWEsUUFBUSxjQUFjLE1BQU07V0FBSTs7Ozs7VUFDNUQ7Ozs7O1VBR1Isd0JBQUMsVUFBRDtXQUNFLGVBQWUsT0FBTyxVQUFVO1dBQ2hDLFdBQVU7cUJBRlosQ0FJRSx3QkFBQyxPQUFELEVBQUssV0FBVSxvR0FBeUc7Ozs7cUJBQ3hILHdCQUFDLE1BQUQ7WUFBTSxNQUFNO1lBQUksYUFBYTtZQUFHLFdBQVU7V0FBaUI7Ozs7bUJBQ3JEOzs7Ozs7VUFFUix3QkFBQyxVQUFEO1dBQVEsZUFBZSxPQUFPLFNBQVM7V0FBRyxXQUFXLHNEQUFzRCxRQUFRLFlBQVksNkJBQTZCO3FCQUMxSix3QkFBQyxVQUFEO1lBQVUsTUFBTTtZQUFJLE1BQU0sUUFBUSxZQUFZLGlCQUFpQjtXQUFTOzs7OztVQUNsRTs7Ozs7VUFFUix3QkFBQyxVQUFEO1dBQVEsV0FBVTtxQkFDaEIsd0JBQUMsZ0JBQUQsRUFBZ0IsTUFBTSxHQUFLOzs7OztVQUNyQjs7Ozs7U0FDTDs7Ozs7O09BQ0Y7Ozs7O01BRUo7Ozs7OztJQUNGOzs7Ozs7R0FFTCx3QkFBQyxTQUFELEVBQU8seUJBQXlCLEVBQUUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBd0J6QyxFQUFJOzs7OztFQUNGOzs7Ozs7QUFFVCIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJmaW5hbC5qc3giXSwidmVyc2lvbiI6Mywic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VNZW1vLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBcbiAgTGF5b3V0R3JpZCwgUGx1cywgQmFyQ2hhcnQzLCBTZXR0aW5ncywgRXllLCBFeWVPZmYsIFRyZW5kaW5nVXAsIFRyZW5kaW5nRG93biwgXG4gIENoZXZyb25SaWdodCwgQmVsbCwgVGFyZ2V0LCBXYWxsZXQsIFNoaWVsZENoZWNrLCBIaXN0b3J5LCBNb3JlSG9yaXpvbnRhbCwgXG4gIEFycm93RG93bkxlZnQsIEFycm93VXBSaWdodCwgWCwgQ29mZmVlLCBTaG9wcGluZ0JhZywgQ2FyLCBGaWxlVGV4dCwgXG4gIERvbGxhclNpZ24sIEdhbWVwYWQyLCBDaGVjaywgRmxhbWUsIEF3YXJkLCBMaWdodGJ1bGIsIENhbGVuZGFyLCBFZGl0MyxcbiAgUmVmcmVzaEN3LCBUcmVuZGluZ1VwIGFzIFRyZW5kVXBJY29uLCBaYXAsIFNwYXJrbGVzLCBXaWZpT2ZmLCBTZWFyY2gsIFNsaWRlcnNIb3Jpem9udGFsLFxuICBGaWxlQm94LCBCb3hTZWxlY3Rcbn0gZnJvbSAnbHVjaWRlLXJlYWN0JztcblxuLy8gLS0tIFVUSUxTICYgQ1VTVE9NIEhPT0tTIC0tLVxuXG5jb25zdCB1c2VBbmltYXRlZE51bWJlciA9ICh2YWx1ZSwgZHVyYXRpb24gPSA4MDApID0+IHtcbiAgY29uc3QgW2Rpc3BsYXlWYWx1ZSwgc2V0RGlzcGxheVZhbHVlXSA9IHVzZVN0YXRlKDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IHN0YXJ0VGltZSA9IG51bGw7XG4gICAgY29uc3QgYW5pbWF0ZSA9IChjdXJyZW50VGltZSkgPT4ge1xuICAgICAgaWYgKCFzdGFydFRpbWUpIHN0YXJ0VGltZSA9IGN1cnJlbnRUaW1lO1xuICAgICAgY29uc3QgcHJvZ3Jlc3MgPSBNYXRoLm1pbigoY3VycmVudFRpbWUgLSBzdGFydFRpbWUpIC8gZHVyYXRpb24sIDEpO1xuICAgICAgY29uc3QgZWFzZVByb2dyZXNzID0gMSAtIE1hdGgucG93KDEgLSBwcm9ncmVzcywgMyk7XG4gICAgICBzZXREaXNwbGF5VmFsdWUoTWF0aC5mbG9vcihlYXNlUHJvZ3Jlc3MgKiB2YWx1ZSkpO1xuICAgICAgaWYgKHByb2dyZXNzIDwgMSkge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXREaXNwbGF5VmFsdWUodmFsdWUpO1xuICAgICAgfVxuICAgIH07XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICB9LCBbdmFsdWUsIGR1cmF0aW9uXSk7XG5cbiAgcmV0dXJuIGRpc3BsYXlWYWx1ZTtcbn07XG5cbi8vIC0tLSBTVEFURSBDT01QT05FTlRTIC0tLVxuXG5jb25zdCBTa2VsZXRvbkRhc2hib2FyZCA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJwLTYgcHQtMTYgc3BhY2UteS04IGFuaW1hdGUtcHVsc2VcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTYgdy0zMiBiZy1zbGF0ZS0yMDAgcm91bmRlZC1sZ1wiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtMyB3LTI0IGJnLXNsYXRlLTIwMCByb3VuZGVkLWxnXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC0xMSB3LTExIGJnLXNsYXRlLTIwMCByb3VuZGVkLWZ1bGxcIj48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImgtNDggdy1mdWxsIGJnLXNsYXRlLTIwMCByb3VuZGVkLVszMnB4XVwiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtNSB3LTQwIGJnLXNsYXRlLTIwMCByb3VuZGVkLWxnIG1iLTJcIj48L2Rpdj5cbiAgICAgIHtbMSwgMl0ubWFwKGkgPT4gKFxuICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwiZmxleCBnYXAtNCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtMTIgdy0xMiBiZy1zbGF0ZS0yMDAgcm91bmRlZC1bMTZweF1cIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMiBmbGV4LTFcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC00IHctMjQgYmctc2xhdGUtMjAwIHJvdW5kZWRcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC0zIHctMzIgYmctc2xhdGUtMjAwIHJvdW5kZWRcIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBPZmZsaW5lQmFubmVyID0gKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0xMCBsZWZ0LTAgcmlnaHQtMCB6LVsxMDBdIGZsZXgganVzdGlmeS1jZW50ZXIgYW5pbWF0ZS1zbGlkZS1kb3duXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1zbGF0ZS04MDAvOTUgYmFja2Ryb3AtYmx1ci1tZCBweC00IHB5LTIgcm91bmRlZC1mdWxsIHNoYWRvdy1sZyBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMFwiPlxuICAgICAgPFdpZmlPZmYgc2l6ZT17MTR9IGNsYXNzTmFtZT1cInRleHQtYW1iZXItNDAwXCIgLz5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC13aGl0ZSBmb250LW1lZGl1bSB0cmFja2luZy13aWRlXCI+xJBhbmcgbmdv4bqhaSB0dXnhur9uLiBE4buvIGxp4buHdSBz4bq9IMSR4buTbmcgYuG7mSBzYXUuPC9zcGFuPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IEVtcHR5U3RhdGUgPSAoeyB0aXRsZSwgZGVzYywgaWNvbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHktMTIgcHgtNiB0ZXh0LWNlbnRlciBhbmltYXRlLWZhZGUtaW5cIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctMjQgaC0yNCBiZy1zbGF0ZS0xMDAgcm91bmRlZC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1iLTUgc2hhZG93LWlubmVyXCI+XG4gICAgICB7aWNvbn1cbiAgICA8L2Rpdj5cbiAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC1bMTdweF0gZm9udC1ib2xkIHRleHQtc2xhdGUtODAwIHRyYWNraW5nLXRpZ2h0XCI+e3RpdGxlfTwvaDQ+XG4gICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTNweF0gdGV4dC1zbGF0ZS01MDAgbXQtMiBmb250LW1lZGl1bSBsZWFkaW5nLXJlbGF4ZWQgbWF4LXctWzI0MHB4XVwiPntkZXNjfTwvcD5cbiAgICBcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTggZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgYW5pbWF0ZS1ib3VuY2Utc29mdFwiPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gZm9udC1ib2xkIHRleHQtZW1lcmFsZC01MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCBtYi0yXCI+QuG6r3QgxJHhuqd1IG5nYXk8L3NwYW4+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctcHggaC04IGJnLWdyYWRpZW50LXRvLWIgZnJvbS1lbWVyYWxkLTQwMCB0by10cmFuc3BhcmVudFwiPjwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbi8vIC0tLSBNQUlOIFZJRVdTIC0tLVxuXG5jb25zdCBRdWlja0FkZCA9ICh7IG9uU2F2ZSwgb25DYW5jZWwgfSkgPT4ge1xuICBjb25zdCBbcmF3QW1vdW50LCBzZXRSYXdBbW91bnRdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbdHlwZSwgc2V0VHlwZV0gPSB1c2VTdGF0ZSgnZXhwZW5zZScpO1xuICBjb25zdCBbY2F0LCBzZXRDYXRdID0gdXNlU3RhdGUoJ8SCbiB14buRbmcnKTtcbiAgY29uc3QgW25vdGUsIHNldE5vdGVdID0gdXNlU3RhdGUoJycpO1xuICBcbiAgY29uc3QgY2F0ZWdvcmllcyA9IHR5cGUgPT09ICdleHBlbnNlJyBcbiAgICA/IFtcbiAgICAgICAgeyBuYW1lOiAnxIJuIHXhu5FuZycsIGljb246IDxDb2ZmZWUgc2l6ZT17MjR9Lz4gfSxcbiAgICAgICAgeyBuYW1lOiAnRGkgY2h1eeG7g24nLCBpY29uOiA8Q2FyIHNpemU9ezI0fS8+IH0sXG4gICAgICAgIHsgbmFtZTogJ011YSBz4bqvbScsIGljb246IDxTaG9wcGluZ0JhZyBzaXplPXsyNH0vPiB9LFxuICAgICAgICB7IG5hbWU6ICdIw7NhIMSRxqFuJywgaWNvbjogPEZpbGVUZXh0IHNpemU9ezI0fS8+IH0sXG4gICAgICAgIHsgbmFtZTogJ0dp4bqjaSB0csOtJywgaWNvbjogPEdhbWVwYWQyIHNpemU9ezI0fS8+IH1cbiAgICAgIF1cbiAgICA6IFtcbiAgICAgICAgeyBuYW1lOiAnTMawxqFuZycsIGljb246IDxEb2xsYXJTaWduIHNpemU9ezI0fS8+IH0sXG4gICAgICAgIHsgbmFtZTogJ1RoxrDhu59uZycsIGljb246IDxUYXJnZXQgc2l6ZT17MjR9Lz4gfSxcbiAgICAgICAgeyBuYW1lOiAnS2jDoWMnLCBpY29uOiA8TW9yZUhvcml6b250YWwgc2l6ZT17MjR9Lz4gfVxuICAgICAgXTtcblxuICBjb25zdCBhZGRUb0Ftb3VudCA9ICh2YWwpID0+IHtcbiAgICBpZiAocmF3QW1vdW50Lmxlbmd0aCA8IDEwKSBzZXRSYXdBbW91bnQocHJldiA9PiBwcmV2ICsgdmFsKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTYXZlID0gKCkgPT4ge1xuICAgIGlmICghcmF3QW1vdW50KSByZXR1cm47XG4gICAgY29uc3Qgc2VsZWN0ZWRDYXQgPSBjYXRlZ29yaWVzLmZpbmQoYyA9PiBjLm5hbWUgPT09IGNhdCkgfHwgY2F0ZWdvcmllc1swXTtcbiAgICBvblNhdmUoe1xuICAgICAgaWQ6IERhdGUubm93KCksXG4gICAgICB0eXBlLFxuICAgICAgY2F0ZWdvcnk6IGNhdCxcbiAgICAgIGFtb3VudDogcGFyc2VJbnQocmF3QW1vdW50KSxcbiAgICAgIGRhdGU6ICdW4burYSB4b25nJyxcbiAgICAgIG1lcmNoYW50OiBub3RlIHx8ICh0eXBlID09PSAnZXhwZW5zZScgPyAnQ2hpIHRpw6p1JyA6ICdUaHUgbmjhuq1wJyksXG4gICAgICBpY29uOiBzZWxlY3RlZENhdC5pY29uLFxuICAgICAgY29sb3I6IHR5cGUgPT09ICdleHBlbnNlJyA/ICd0ZXh0LXNsYXRlLTcwMCcgOiAndGV4dC1lbWVyYWxkLTYwMCcsXG4gICAgICBiZzogdHlwZSA9PT0gJ2V4cGVuc2UnID8gJ2JnLXNsYXRlLTEwMCcgOiAnYmctZW1lcmFsZC01MCdcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBkaXNwbGF5QW1vdW50ID0gcmF3QW1vdW50ID8gcGFyc2VJbnQocmF3QW1vdW50KS50b0xvY2FsZVN0cmluZygndmktVk4nKSA6ICcwJztcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIGJnLXdoaXRlIGZsZXggZmxleC1jb2wgYW5pbWF0ZS1wYWdlLWVudGVyIHJlbGF0aXZlIHotNTBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB4LTYgcHQtMTIgcGItNFwiPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQ2FuY2VsfSBjbGFzc05hbWU9XCJwLTIgLW1sLTIgdGV4dC1zbGF0ZS01MDAgaG92ZXI6dGV4dC1zbGF0ZS04MDAgaG92ZXI6Ymctc2xhdGUtNTAgcm91bmRlZC1mdWxsIHRyYW5zaXRpb24tY29sb3JzIGFjdGl2ZTpzY2FsZS05MCB0b3VjaC1tYW5pcHVsYXRpb25cIj5cbiAgICAgICAgICA8WCBzaXplPXsyNH0gc3Ryb2tlV2lkdGg9ezIuNX0gLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBiZy1zbGF0ZS0xMDAvODAgcC0xIHJvdW5kZWQtZnVsbFwiPlxuICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IHNldFR5cGUoJ2V4cGVuc2UnKTsgc2V0Q2F0KCfEgm4gdeG7kW5nJyk7IH19XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BweC01IHB5LTIgcm91bmRlZC1mdWxsIHRleHQtWzEzcHhdIGZvbnQtYm9sZCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgJHt0eXBlID09PSAnZXhwZW5zZScgPyAnYmctd2hpdGUgdGV4dC1zbGF0ZS05MDAgc2hhZG93LVswXzJweF84cHhfcmdiYSgwLDAsMCwwLjA2KV0nIDogJ3RleHQtc2xhdGUtNTAwIGhvdmVyOnRleHQtc2xhdGUtNzAwJ31gfVxuICAgICAgICAgID5LaG/huqNuIGNoaTwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IHNldFR5cGUoJ2luY29tZScpOyBzZXRDYXQoJ0zGsMahbmcnKTsgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHB4LTUgcHktMiByb3VuZGVkLWZ1bGwgdGV4dC1bMTNweF0gZm9udC1ib2xkIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCAke3R5cGUgPT09ICdpbmNvbWUnID8gJ2JnLXdoaXRlIHRleHQtZW1lcmFsZC02MDAgc2hhZG93LVswXzJweF84cHhfcmdiYSgwLDAsMCwwLjA2KV0nIDogJ3RleHQtc2xhdGUtNTAwIGhvdmVyOnRleHQtc2xhdGUtNzAwJ31gfVxuICAgICAgICAgID5LaG/huqNuIHRodTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LThcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBweS0yIG92ZXJmbG93LXktYXV0byBuby1zY3JvbGxiYXJcIj5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtY2VudGVyIG10LTIgbWItNiBoLTI0IGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTUwMCB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIG1iLTJcIj5OaOG6rXAgc+G7kSB0aeG7gW48L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BmbGV4IGl0ZW1zLWJhc2VsaW5lIGp1c3RpZnktY2VudGVyIGdhcC0xIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTMwMCAke3R5cGUgPT09ICdpbmNvbWUnID8gJ3RleHQtZW1lcmFsZC01MDAnIDogJ3RleHQtc2xhdGUtOTAwJ31gfT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzUycHhdIGZvbnQtZXh0cmFib2xkIHRyYWNraW5nLXRpZ2h0ZXIgbGVhZGluZy1ub25lIGFuaW1hdGUtc2NhbGUtdXAgaW5saW5lLWJsb2NrIG9yaWdpbi1ib3R0b21cIj5cbiAgICAgICAgICAgICAge2Rpc3BsYXlBbW91bnR9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgb3BhY2l0eS00MFwiPsSRPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogU2NhbGFibGUgQ29udGV4dCBGbG93ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBweC02IG1iLThcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXNsYXRlLTUwIGJvcmRlciBib3JkZXItc2xhdGUtMTAwIHJvdW5kZWQtWzIwcHhdIHAtMiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTIgc2hhZG93LXNtXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIGJnLXdoaXRlIHB4LTMgcHktMi41IHJvdW5kZWQteGwgc2hhZG93LVswXzJweF82cHhfcmdiYSgwLDAsMCwwLjAzKV0gYm9yZGVyIGJvcmRlci1zbGF0ZS0xMDAvNTAgdGV4dC1zbGF0ZS03MDAgaG92ZXI6Ymctc2xhdGUtNTAgYWN0aXZlOnNjYWxlLTk1IHRyYW5zaXRpb24tYWxsXCI+XG4gICAgICAgICAgICAgIDxXYWxsZXQgc2l6ZT17MTZ9IGNsYXNzTmFtZT1cInRleHQtZW1lcmFsZC01MDBcIiAvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxM3B4XSBmb250LWJvbGRcIj5Ww60gY2jDrW5oPC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIGJnLXdoaXRlIHB4LTMgcHktMi41IHJvdW5kZWQteGwgc2hhZG93LVswXzJweF82cHhfcmdiYSgwLDAsMCwwLjAzKV0gYm9yZGVyIGJvcmRlci1zbGF0ZS0xMDAvNTAgdGV4dC1zbGF0ZS03MDAgaG92ZXI6Ymctc2xhdGUtNTAgYWN0aXZlOnNjYWxlLTk1IHRyYW5zaXRpb24tYWxsXCI+XG4gICAgICAgICAgICAgIDxDYWxlbmRhciBzaXplPXsxNn0gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTUwMFwiIC8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzEzcHhdIGZvbnQtYm9sZFwiPkjDtG0gbmF5PC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBiZy13aGl0ZSBweC0zIHB5LTIuNSByb3VuZGVkLXhsIHNoYWRvdy1bMF8ycHhfNnB4X3JnYmEoMCwwLDAsMC4wMyldIGJvcmRlciBib3JkZXItc2xhdGUtMTAwLzUwXCI+XG4gICAgICAgICAgICAgIDxFZGl0MyBzaXplPXsxNn0gY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS00MDAgc2hyaW5rLTBcIiAvPlxuICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlTDqm4gbmfGsOG7nWkgbmjhuq1uLi4uXCIgXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctdHJhbnNwYXJlbnQgYm9yZGVyLW5vbmUgb3V0bGluZS1ub25lIHRleHQtWzEzcHhdIGZvbnQtYm9sZCB0ZXh0LXNsYXRlLTcwMCB3LWZ1bGwgcGxhY2Vob2xkZXI6dGV4dC1zbGF0ZS00MDAgcGxhY2Vob2xkZXI6Zm9udC1tZWRpdW1cIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtub3RlfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Tm90ZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIFJlZmluZWQgQ2F0ZWdvcnkgU2VsZWN0aW9uICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBweC02IG1iLThcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTQgb3ZlcmZsb3cteC1hdXRvIHBiLTQgbm8tc2Nyb2xsYmFyIC1teC02IHB4LTZcIj5cbiAgICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcChjID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgaXNBY3RpdmUgPSBjYXQgPT09IGMubmFtZTtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgICAga2V5PXtjLm5hbWV9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDYXQoYy5uYW1lKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGdhcC0yLjUgZmxleC1zaHJpbmstMCBncm91cCBvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdy1bNTZweF0gaC1bNTZweF0gcm91bmRlZC1bMjBweF0gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGVhc2Utb3V0IGJvcmRlclxuICAgICAgICAgICAgICAgICAgICAke2lzQWN0aXZlIFxuICAgICAgICAgICAgICAgICAgICAgID8gKHR5cGUgPT09ICdpbmNvbWUnIFxuICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdiZy1lbWVyYWxkLTUwLzgwIGJvcmRlci1lbWVyYWxkLTIwMC82MCB0ZXh0LWVtZXJhbGQtNjAwIHNjYWxlLTEwNSBzaGFkb3ctWzBfNnB4XzE2cHhfcmdiYSgxNiwxODUsMTI5LDAuMDgpXScgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2JnLXdoaXRlIGJvcmRlci1zbGF0ZS0yMDAvODAgdGV4dC1zbGF0ZS04MDAgc2NhbGUtMTA1IHNoYWRvdy1bMF82cHhfMTZweF9yZ2JhKDAsMCwwLDAuMDYpXScpIFxuICAgICAgICAgICAgICAgICAgICAgIDogJ2JnLXNsYXRlLTUwLzUwIGJvcmRlci10cmFuc3BhcmVudCB0ZXh0LXNsYXRlLTUwMCBncm91cC1ob3ZlcjpiZy1zbGF0ZS0xMDAgZ3JvdXAtYWN0aXZlOnNjYWxlLTk1J31gfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7Yy5pY29ufVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2B0ZXh0LVsxMnB4XSBmb250LWJvbGQgdHJhbnNpdGlvbi1jb2xvcnMgJHtpc0FjdGl2ZSA/ICd0ZXh0LXNsYXRlLTgwMCcgOiAndGV4dC1zbGF0ZS01MDAnfWB9PntjLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBUYWN0aWxlIE51bXBhZCAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNSBwYi04IG10LWF1dG9cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXNsYXRlLTUwLzUwIHAtMi41IHJvdW5kZWQtWzMycHhdXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTMgZ2FwLTIgbWF4LXctWzMyMHB4XSBteC1hdXRvXCI+XG4gICAgICAgICAgICAgIHtbMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgJ0MnLCAwLCAnT0snXS5tYXAobnVtID0+IChcbiAgICAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgICAga2V5PXtudW19XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChudW0gPT09ICdDJykgc2V0UmF3QW1vdW50KCcnKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobnVtID09PSAnT0snKSBoYW5kbGVTYXZlKCk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgYWRkVG9BbW91bnQobnVtLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGgtWzYwcHhdIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtWzI2cHhdIGZvbnQtbWVkaXVtIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTc1IHJvdW5kZWQtWzIycHhdIHNlbGVjdC1ub25lIHRvdWNoLW1hbmlwdWxhdGlvblxuICAgICAgICAgICAgICAgICAgICAke251bSA9PT0gJ09LJyBcbiAgICAgICAgICAgICAgICAgICAgICA/ICh0eXBlID09PSAnaW5jb21lJyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnYmctZW1lcmFsZC01MDAgdGV4dC13aGl0ZSBzaGFkb3ctWzBfNnB4XzE2cHhfcmdiYSgxNiwxODUsMTI5LDAuMjUpXSBob3ZlcjpiZy1lbWVyYWxkLTYwMCBhY3RpdmU6c2NhbGUtWzAuOTJdJyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnYmctc2xhdGUtOTAwIHRleHQtd2hpdGUgc2hhZG93LVswXzZweF8xNnB4X3JnYmEoMTUsMjMsNDIsMC4yKV0gaG92ZXI6Ymctc2xhdGUtODAwIGFjdGl2ZTpzY2FsZS1bMC45Ml0nKVxuICAgICAgICAgICAgICAgICAgICAgIDogbnVtID09PSAnQycgXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICd0ZXh0LXNsYXRlLTUwMCBiZy10cmFuc3BhcmVudCBob3ZlcjpiZy1zbGF0ZS0yMDAvNTAgYWN0aXZlOmJnLXNsYXRlLTIwMCBhY3RpdmU6c2NhbGUtWzAuOTJdJyBcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJ3RleHQtc2xhdGUtODAwIGJnLXdoaXRlIHNoYWRvdy1bMF8ycHhfOHB4X3JnYmEoMCwwLDAsMC4wMyldIGJvcmRlciBib3JkZXItc2xhdGUtMTAwLzUwIGhvdmVyOmJnLXNsYXRlLTUwIGFjdGl2ZTpiZy1zbGF0ZS0xMDAgYWN0aXZlOnNjYWxlLVswLjkyXSd9YH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7bnVtID09PSAnT0snID8gPENoZWNrIHN0cm9rZVdpZHRoPXszLjV9IHNpemU9ezI2fSAvPiA6IG51bX1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IERhc2hib2FyZCA9ICh7IHN0YXRzLCBncm91cGVkVHJhbnNhY3Rpb25zLCBpc0JhbGFuY2VWaXNpYmxlLCBzZXRJc0JhbGFuY2VWaXNpYmxlLCBmb3JtYXRWTkQsIGlzRW1wdHksIGlzT2ZmbGluZSB9KSA9PiB7XG4gIGNvbnN0IGFuaW1hdGVkQmFsYW5jZSA9IHVzZUFuaW1hdGVkTnVtYmVyKHN0YXRzLmJhbGFuY2UpO1xuICBjb25zdCBhbmltYXRlZEluY29tZSA9IHVzZUFuaW1hdGVkTnVtYmVyKHN0YXRzLmluY29tZSk7XG4gIGNvbnN0IGFuaW1hdGVkRXhwZW5zZSA9IHVzZUFuaW1hdGVkTnVtYmVyKHN0YXRzLmV4cGVuc2UpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhbmltYXRlLXBhZ2UtZW50ZXIgcmVsYXRpdmUgaC1mdWxsIG92ZXJmbG93LXktYXV0byBuby1zY3JvbGxiYXJcIj5cbiAgICAgIHtpc09mZmxpbmUgJiYgPE9mZmxpbmVCYW5uZXIgLz59XG4gICAgICBcbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwicHgtNiBwdC0xNiBwYi02IGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBiZy1zbGF0ZS01MC85MCBiYWNrZHJvcC1ibHVyLW1kIHN0aWNreSB0b3AtMCB6LTIwXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtWzI2cHhdIGZvbnQtZXh0cmFib2xkIHRleHQtc2xhdGUtOTAwIHRyYWNraW5nLXRpZ2h0XCI+Q2jDoG8gTWluaCBBbmgsPC9oMz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTUwMCB0ZXh0LVsxM3B4XSBmb250LWJvbGQgbXQtMVwiPlRo4bupIFPDoXUsIDA2IFRow6FuZyA2PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LVs0NHB4XSBoLVs0NHB4XSBiZy13aGl0ZSByb3VuZGVkLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1zbGF0ZS02MDAgc2hhZG93LVswXzJweF8xMnB4X3JnYmEoMCwwLDAsMC4wNCldIGJvcmRlciBib3JkZXItc2xhdGUtMTAwLzUwIGhvdmVyOmJnLXNsYXRlLTUwIHRyYW5zaXRpb24tY29sb3JzIGFjdGl2ZTpzY2FsZS05MCB0b3VjaC1tYW5pcHVsYXRpb25cIj5cbiAgICAgICAgICA8QmVsbCBzaXplPXsyMn0gc3Ryb2tlV2lkdGg9ezIuMn0gLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMyByaWdodC0zIHctMi41IGgtMi41IGJnLXJvc2UtNTAwIHJvdW5kZWQtZnVsbCBib3JkZXItMiBib3JkZXItd2hpdGVcIj48L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9oZWFkZXI+XG5cbiAgICAgIHsvKiBIZXJvIEJhbGFuY2UgQ2FyZCAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNiBtdC0yXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctWyMxODFDMjVdIHJvdW5kZWQtWzMycHhdIHAtNyBzaGFkb3ctWzBfMTZweF8zMnB4Xy0xMnB4X3JnYmEoMTUsMjMsNDIsMC4zKV0gcmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuIGJvcmRlciBib3JkZXItc2xhdGUtNzAwLzMwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtWy0yMCVdIGxlZnQtWy0xMCVdIHctNDggaC00OCBiZy1ibHVlLTUwMC8xMCByb3VuZGVkLWZ1bGwgYmx1ci1bNDBweF1cIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS1bLTIwJV0gcmlnaHQtWy0xMCVdIHctNDggaC00OCBiZy1lbWVyYWxkLTUwMC8xMCByb3VuZGVkLWZ1bGwgYmx1ci1bNDBweF1cIj48L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMTAgZmxleCBmbGV4LWNvbCBnYXAtNlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1zdGFydFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRleHQtc2xhdGUtMzAwXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCB0ZXh0LXNsYXRlLTQwMFwiPlThu5VuZyB0w6BpIHPhuqNuPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0SXNCYWxhbmNlVmlzaWJsZSghaXNCYWxhbmNlVmlzaWJsZSl9IGNsYXNzTmFtZT1cInAtMSBob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24tY29sb3JzIGFjdGl2ZTpzY2FsZS05MCB0b3VjaC1tYW5pcHVsYXRpb25cIj5cbiAgICAgICAgICAgICAgICAgIHtpc0JhbGFuY2VWaXNpYmxlID8gPEV5ZU9mZiBzaXplPXsxNn0gLz4gOiA8RXllIHNpemU9ezE2fSAvPn1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUvMTAgYmFja2Ryb3AtYmx1ci1tZCBib3JkZXIgYm9yZGVyLXdoaXRlLzUgcHgtMyBweS0xLjUgcm91bmRlZC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjVcIj5cbiAgICAgICAgICAgICAgICA8V2FsbGV0IHNpemU9ezEyfSBjbGFzc05hbWU9XCJ0ZXh0LWVtZXJhbGQtNDAwXCIvPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHRleHQtd2hpdGUgZm9udC1leHRyYWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVcIj5Ww60gY2jDrW5oPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC1bNDBweF0gZm9udC1leHRyYWJvbGQgdGV4dC13aGl0ZSB0cmFja2luZy10aWdodGVyIGxlYWRpbmctbm9uZSBmb250LXNhbnNcIj5cbiAgICAgICAgICAgICAge2lzQmFsYW5jZVZpc2libGUgPyBmb3JtYXRWTkQoYW5pbWF0ZWRCYWxhbmNlKSA6ICfigKLigKLigKLigKLigKLigKLigKLigKInfVxuICAgICAgICAgICAgPC9oND5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNiBwdC01IGJvcmRlci10IGJvcmRlci1zbGF0ZS03MDAvNDBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yIGJnLWVtZXJhbGQtNTAwLzE1IHJvdW5kZWQtWzEycHhdIHRleHQtZW1lcmFsZC00MDBcIj5cbiAgICAgICAgICAgICAgICAgIDxBcnJvd0Rvd25MZWZ0IHNpemU9ezE2fSBzdHJva2VXaWR0aD17Mi41fSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LXNsYXRlLTQwMCB1cHBlcmNhc2UgZm9udC1ib2xkIHRyYWNraW5nLXdpZGVyXCI+VGh1IG5o4bqtcDwvcD5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzE1cHhdIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIG10LTAuNVwiPntpc0JhbGFuY2VWaXNpYmxlID8gZm9ybWF0Vk5EKGFuaW1hdGVkSW5jb21lKSA6ICfigKLigKLigKInfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMiBiZy1yb3NlLTUwMC8xNSByb3VuZGVkLVsxMnB4XSB0ZXh0LXJvc2UtNDAwXCI+XG4gICAgICAgICAgICAgICAgICA8QXJyb3dVcFJpZ2h0IHNpemU9ezE2fSBzdHJva2VXaWR0aD17Mi41fSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LXNsYXRlLTQwMCB1cHBlcmNhc2UgZm9udC1ib2xkIHRyYWNraW5nLXdpZGVyXCI+Q2hpIHRpw6p1PC9wPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTVweF0gZm9udC1ib2xkIHRleHQtd2hpdGUgbXQtMC41XCI+e2lzQmFsYW5jZVZpc2libGUgPyBmb3JtYXRWTkQoYW5pbWF0ZWRFeHBlbnNlKSA6ICfigKLigKLigKInfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAge2lzRW1wdHkgPyAoXG4gICAgICAgIDxFbXB0eVN0YXRlIFxuICAgICAgICAgIHRpdGxlPVwiQ2jGsGEgY8OzIGThu68gbGnhu4d1XCIgXG4gICAgICAgICAgZGVzYz1cIkjDo3kgdGjDqm0gZ2lhbyBk4buLY2ggxJHhuqd1IHRpw6puIGPhu6dhIGLhuqFuIMSR4buDIE1vbmV5Q2FyZSBjw7MgdGjhu4MgYuG6r3QgxJHhuqd1IHBow6JuIHTDrWNoIGTDsm5nIHRp4buBbi5cIlxuICAgICAgICAgIGljb249ezxGaWxlQm94IHNpemU9ezQwfSBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTMwMFwiIHN0cm9rZVdpZHRoPXsxLjV9IC8+fVxuICAgICAgICAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPD5cbiAgICAgICAgICB7LyogQUkgRmluYW5jaWFsIEludGVsbGlnZW5jZSAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTYgbXQtNSBiZy1lbWVyYWxkLTUwLzYwIGJvcmRlciBib3JkZXItZW1lcmFsZC0xMDAvNjAgcm91bmRlZC1bMjBweF0gcC0zLjUgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMuNSBzaGFkb3ctWzBfMnB4XzEwcHhfcmdiYSgxNiwxODUsMTI5LDAuMDQpXSBhbmltYXRlLXNsaWRlLXVwXCIgc3R5bGU9e3thbmltYXRpb25EZWxheTogJzAuMXMnfX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtMiByb3VuZGVkLVsxNHB4XSB0ZXh0LWVtZXJhbGQtNTAwIHNoYWRvdy1zbSBib3JkZXIgYm9yZGVyLWVtZXJhbGQtNTAgc2hyaW5rLTBcIj5cbiAgICAgICAgICAgICAgIDxTcGFya2xlcyBzaXplPXsxOH0gZmlsbD1cImN1cnJlbnRDb2xvclwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzEzcHhdIHRleHQtc2xhdGUtNjAwIGZvbnQtbWVkaXVtIGxlYWRpbmctc251Z1wiPlxuICAgICAgICAgICAgICBUdXnhu4d0IHbhu51pISBUdeG6p24gbsOgeSBi4bqhbiDEkcOjIHRp4bq/dCBraeG7h20gxJHGsOG7o2MgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtZW1lcmFsZC02MDBcIj4xMiU8L3NwYW4+IHNvIHbhu5tpIHR14bqnbiB0csaw4bubYy5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiBRdWljayBBY3Rpb25zIC8gQmlsbHMgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04IHB4LTYgYW5pbWF0ZS1zbGlkZS11cFwiIHN0eWxlPXt7YW5pbWF0aW9uRGVsYXk6ICcwLjJzJ319PlxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtWzE3cHhdIGZvbnQtYm9sZCB0ZXh0LXNsYXRlLTgwMCB0cmFja2luZy1bMC4wMmVtXSBtYi0zIHB4LTFcIj5T4bqvcCDEkeG6v24gaOG6oW48L2g0PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0zIG92ZXJmbG93LXgtYXV0byBuby1zY3JvbGxiYXIgcGItMlwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTAgdy1bMTQwcHhdIGJnLXdoaXRlIGJvcmRlciBib3JkZXItc2xhdGUtMTAwIHAtMy41IHJvdW5kZWQtWzIwcHhdIHNoYWRvdy1zbSBmbGV4IGZsZXgtY29sIGdhcC0zXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1zdGFydFwiPlxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yIGJnLWluZGlnby01MCB0ZXh0LWluZGlnby01MDAgcm91bmRlZC1bMTJweF1cIj48UmVmcmVzaEN3IHNpemU9ezE2fS8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gZm9udC1ib2xkIHRleHQtcm9zZS02MDAgYmctcm9zZS01MCBweC0yIHB5LTAuNSByb3VuZGVkLWZ1bGxcIj5Iw7RtIG5heTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTRweF0gZm9udC1ib2xkIHRleHQtc2xhdGUtODAwXCI+TmV0ZmxpeDwvcD5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzE0cHhdIGZvbnQtc2VtaWJvbGQgdGV4dC1zbGF0ZS01MDBcIj4tMjYwazwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMCB3LVsxNDBweF0gYmctd2hpdGUgYm9yZGVyIGJvcmRlci1zbGF0ZS0xMDAgcC0zLjUgcm91bmRlZC1bMjBweF0gc2hhZG93LXNtIGZsZXggZmxleC1jb2wgZ2FwLTNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLXN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTIgYmctYW1iZXItNTAgdGV4dC1hbWJlci01MDAgcm91bmRlZC1bMTJweF1cIj48WmFwIHNpemU9ezE2fS8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gZm9udC1ib2xkIHRleHQtc2xhdGUtNjAwIGJnLXNsYXRlLTEwMCBweC0yIHB5LTAuNSByb3VuZGVkLWZ1bGxcIj4zIG5nw6B5IHThu5tpPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxNHB4XSBmb250LWJvbGQgdGV4dC1zbGF0ZS04MDBcIj5UaeG7gW4gxJFp4buHbjwvcD5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzE0cHhdIGZvbnQtc2VtaWJvbGQgdGV4dC1zbGF0ZS01MDBcIj4tMS4yNTBrPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIEdyb3VwZWQgVHJhbnNhY3Rpb24gTGlzdCAoUmVhbCBQcm9kdWN0IEZlZWwgd2l0aCBzZWFyY2gpICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOCBweC02IGFuaW1hdGUtc2xpZGUtdXBcIiBzdHlsZT17e2FuaW1hdGlvbkRlbGF5OiAnMC4zcyd9fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtZW5kIG1iLTQgcHgtMVwiPlxuICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC1bMTdweF0gZm9udC1ib2xkIHRleHQtc2xhdGUtODAwIHRyYWNraW5nLVswLjAyZW1dXCI+R2lhbyBk4buLY2ggZ+G6p24gxJHDonk8L2g0PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTQwMCBob3Zlcjp0ZXh0LXNsYXRlLTgwMCB0cmFuc2l0aW9uLWNvbG9ycyBwLTFcIj48U2VhcmNoIHNpemU9ezE4fSAvPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS00MDAgaG92ZXI6dGV4dC1zbGF0ZS04MDAgdHJhbnNpdGlvbi1jb2xvcnMgcC0xXCI+PFNsaWRlcnNIb3Jpem9udGFsIHNpemU9ezE4fSAvPjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtWzI4cHhdIHAtMi41IHNoYWRvdy1bMF8ycHhfMTBweF9yZ2JhKDAsMCwwLDAuMDIpXSBib3JkZXIgYm9yZGVyLXNsYXRlLTEwMFwiPlxuICAgICAgICAgICAgICB7Z3JvdXBlZFRyYW5zYWN0aW9ucy5tYXAoKGdyb3VwLCBnSWR4KSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2dyb3VwLmRhdGV9PlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gZm9udC1ib2xkIHRleHQtc2xhdGUtNTAwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciBweC0zLjUgcHQtMyBwYi0xXCI+e2dyb3VwLmRhdGV9PC9wPlxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICB7Z3JvdXAuaXRlbXMubWFwKCh0LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgICAgICAgIGtleT17dC5pZH0gXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHAtMy41IHJvdW5kZWQtWzIwcHhdIGhvdmVyOmJnLXNsYXRlLTUwIHRyYW5zaXRpb24tY29sb3JzIGN1cnNvci1wb2ludGVyIGFjdGl2ZTpzY2FsZS1bMC45OF0gc3RhZ2dlci1pdGVtIG9wYWNpdHktMCBhbmltYXRlLWZhZGUtaW4tdXBcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGFuaW1hdGlvbkRlbGF5OiBgJHswLjQgKyAoaW5kZXggKiAwLjEpfXNgLCBhbmltYXRpb25GaWxsTW9kZTogJ2ZvcndhcmRzJyB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B3LVs0NnB4XSBoLVs0NnB4XSByb3VuZGVkLVsxNnB4XSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciAke3QuYmd9ICR7dC5jb2xvcn1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3QuaWNvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzE1cHhdIGZvbnQtYm9sZCB0ZXh0LXNsYXRlLTgwMCBsZWFkaW5nLXRpZ2h0XCI+e3QubWVyY2hhbnR9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0LmlzUmVjdXJyaW5nICYmIDxzcGFuIGNsYXNzTmFtZT1cImJnLXNsYXRlLTEwMCB0ZXh0LXNsYXRlLTUwMCB0ZXh0LVs5cHhdIGZvbnQtYm9sZCBweC0xLjUgcHktMC41IHJvdW5kZWQtbWQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyXCI+xJDhu4tuaCBr4buzPC9zcGFuPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzEycHhdIGZvbnQtbWVkaXVtIHRleHQtc2xhdGUtNTAwIG10LTFcIj57dC5jYXRlZ29yeX0g4oCiIHt0Lm5vdGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtgdGV4dC1bMTVweF0gZm9udC1ib2xkIHRyYWNraW5nLXRpZ2h0IHByLTIgJHt0LnR5cGUgPT09ICdpbmNvbWUnID8gJ3RleHQtZW1lcmFsZC01MDAnIDogJ3RleHQtc2xhdGUtODAwJ31gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0LnR5cGUgPT09ICdpbmNvbWUnID8gJysnIDogJy0nfXt0LmFtb3VudC50b0xvY2FsZVN0cmluZygpfcSRXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAge2dJZHggIT09IGdyb3VwZWRUcmFuc2FjdGlvbnMubGVuZ3RoIC0gMSAmJiA8ZGl2IGNsYXNzTmFtZT1cImgtcHggdy1hdXRvIG14LTQgbXktMSBiZy1zbGF0ZS01MFwiPjwvZGl2Pn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgICApfVxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtWzE0MHB4XSB3LWZ1bGwgc2hyaW5rLTBcIj48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IEFuYWx5dGljcyA9ICh7IHN0YXRzLCBmb3JtYXRWTkQsIGlzRW1wdHkgfSkgPT4ge1xuICBjb25zdCBbYWN0aXZlTGluZUluZGV4LCBzZXRBY3RpdmVMaW5lSW5kZXhdID0gdXNlU3RhdGUoMyk7XG4gIGNvbnN0IFthY3RpdmVEb251dFNsaWNlLCBzZXRBY3RpdmVEb251dFNsaWNlXSA9IHVzZVN0YXRlKG51bGwpOyBcblxuICAvLyBGYWxsYmFjayBkYXRhIGZvciBlbXB0eSBzdGF0ZSB0byBzaG93IGdyZXllZCBvdXQgY2hhcnRzXG4gIGNvbnN0IHJhd0RhdGEgPSBpc0VtcHR5ID8gWzAsIDAsIDAsIDAsIDAsIDAsIDBdIDogWzEwLCA0NSwgMzAsIDg1LCA0MCwgMjAsIDU1XTtcbiAgY29uc3QgbWF4RGF0YSA9IGlzRW1wdHkgPyAxMDAgOiBNYXRoLm1heCguLi5yYXdEYXRhKTtcbiAgY29uc3QgY2hhcnRIZWlnaHQgPSAxMDA7XG4gIGNvbnN0IGNoYXJ0V2lkdGggPSAzMDA7XG4gIFxuICBjb25zdCBwb2ludHMgPSByYXdEYXRhLm1hcCgodmFsLCBpKSA9PiAoe1xuICAgIHg6IChpIC8gKHJhd0RhdGEubGVuZ3RoIC0gMSkpICogY2hhcnRXaWR0aCxcbiAgICB5OiBjaGFydEhlaWdodCAtICh2YWwgLyBtYXhEYXRhICogY2hhcnRIZWlnaHQpXG4gIH0pKTtcblxuICBjb25zdCBjcmVhdGVTbW9vdGhQYXRoID0gKHB0cykgPT4ge1xuICAgIHJldHVybiBwdHMucmVkdWNlKChhY2MsIHBvaW50LCBpLCBhKSA9PiB7XG4gICAgICBpZiAoaSA9PT0gMCkgcmV0dXJuIGBNICR7cG9pbnQueH0sJHtwb2ludC55fWA7XG4gICAgICBjb25zdCBwcmV2ID0gYVtpIC0gMV07XG4gICAgICBjb25zdCBjcDF4ID0gcHJldi54ICsgKHBvaW50LnggLSBwcmV2LngpIC8gMjtcbiAgICAgIGNvbnN0IGNwMnggPSBwb2ludC54IC0gKHBvaW50LnggLSBwcmV2LngpIC8gMjtcbiAgICAgIHJldHVybiBgJHthY2N9IEMgJHtjcDF4fSwke3ByZXYueX0gJHtjcDJ4fSwke3BvaW50Lnl9ICR7cG9pbnQueH0sJHtwb2ludC55fWA7XG4gICAgfSwgJycpO1xuICB9O1xuXG4gIGNvbnN0IHBhdGhEID0gY3JlYXRlU21vb3RoUGF0aChwb2ludHMpO1xuICBjb25zdCBmaWxsUGF0aEQgPSBgJHtwYXRoRH0gTCAke2NoYXJ0V2lkdGh9LCR7Y2hhcnRIZWlnaHR9IEwgMCwke2NoYXJ0SGVpZ2h0fSBaYDtcblxuICBjb25zdCBkb251dERhdGEgPSBpc0VtcHR5IFxuICAgID8gW3sgbmFtZTogJ0NoxrBhIGPDsycsIHBjdDogJzAlJywgY29sb3I6ICdiZy1zbGF0ZS0yMDAnLCBzdHJva2U6ICd0ZXh0LXNsYXRlLTIwMCcsIGRhc2g6ICcxMDAsIDEwMCcsIG9mZnNldDogJzAnIH1dXG4gICAgOiBbXG4gICAgICAgIHsgbmFtZTogJ8SCbiB14buRbmcnLCBwY3Q6ICc1MCUnLCBjb2xvcjogJ2JnLWVtZXJhbGQtNTAwJywgc3Ryb2tlOiAndGV4dC1lbWVyYWxkLTUwMCcsIGRhc2g6ICc1MCwgMTAwJywgb2Zmc2V0OiAnMCcgfSxcbiAgICAgICAgeyBuYW1lOiAnTXVhIHPhuq9tJywgcGN0OiAnMzAlJywgY29sb3I6ICdiZy1yb3NlLTUwMCcsIHN0cm9rZTogJ3RleHQtcm9zZS01MDAnLCBkYXNoOiAnMzAsIDEwMCcsIG9mZnNldDogJy01MCcgfSxcbiAgICAgICAgeyBuYW1lOiAnS2jDoWMnLCBwY3Q6ICcyMCUnLCBjb2xvcjogJ2JnLWluZGlnby01MDAnLCBzdHJva2U6ICd0ZXh0LWluZGlnby01MDAnLCBkYXNoOiAnMjAsIDEwMCcsIG9mZnNldDogJy04MCcgfVxuICAgICAgXTtcblxuICBjb25zdCBzdHJva2VDb2xvciA9IGlzRW1wdHkgPyBcIiNlMmU4ZjBcIiA6IFwiIzEwYjk4MVwiO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhbmltYXRlLXBhZ2UtZW50ZXIgcmVsYXRpdmUgaC1mdWxsIG92ZXJmbG93LXktYXV0byBuby1zY3JvbGxiYXJcIj5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwicHgtNiBwdC0xNiBwYi00IGJnLXNsYXRlLTUwIHN0aWNreSB0b3AtMCB6LTIwXCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LVsyOHB4XSBmb250LWV4dHJhYm9sZCB0ZXh0LXNsYXRlLTkwMCB0cmFja2luZy10aWdodFwiPlRo4buRbmcga8OqPC9oMj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS01MDAgdGV4dC1zbSBmb250LXNlbWlib2xkIG10LTFcIj5UaMOhbmcgMDYsIDIwMjU8L3A+XG4gICAgICA8L2hlYWRlcj5cblxuICAgICAge2lzRW1wdHkgPyAoXG4gICAgICAgIDxFbXB0eVN0YXRlIFxuICAgICAgICAgIHRpdGxlPVwiQmnhu4N1IMSR4buTIMSRYW5nIHRy4buRbmdcIiBcbiAgICAgICAgICBkZXNjPVwiVGjDqm0gY8OhYyBraG/huqNuIGNoaSB0acOqdSDEkeG7gyB4ZW0gcGjDom4gdMOtY2ggdOG7sSDEkeG7mW5nIHThuqFpIMSRw6J5LlwiXG4gICAgICAgICAgaWNvbj17PEJhckNoYXJ0MyBzaXplPXs0MH0gY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS0zMDBcIiBzdHJva2VXaWR0aD17MS41fSAvPn1cbiAgICAgICAgLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNiBtYi04IGFuaW1hdGUtc2xpZGUtdXBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXJvc2UtNTAvODAgYm9yZGVyIGJvcmRlci1yb3NlLTEwMC84MCByb3VuZGVkLVsyNHB4XSBwLTQgZmxleCBnYXAtMy41IGl0ZW1zLXN0YXJ0IHNoYWRvdy1zbVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTIgcm91bmRlZC14bCB0ZXh0LXJvc2UtNTAwIHNoYWRvdy1bMF8ycHhfNnB4X3JnYmEoMCwwLDAsMC4wNCldIGJvcmRlciBib3JkZXItcm9zZS01MCBzaHJpbmstMCBtdC0wLjVcIj5cbiAgICAgICAgICAgICAgIDxUcmVuZGluZ0Rvd24gc2l6ZT17MTh9IHN0cm9rZVdpZHRoPXsyLjV9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzEzcHhdIHRleHQtc2xhdGUtNzAwIGZvbnQtc2VtaWJvbGQgbGVhZGluZy1yZWxheGVkIHB0LTAuNSBwci0yXCI+XG4gICAgICAgICAgICAgIENoaSB0acOqdSB0deG6p24gbsOgeSBjYW8gaMahbiBt4bupYyB0cnVuZyBiw6xuaCA8c3BhbiBjbGFzc05hbWU9XCJmb250LWV4dHJhYm9sZCB0ZXh0LXJvc2UtNjAwIGJnLXJvc2UtMTAwLzgwIHB4LTEuNSBweS0wLjUgcm91bmRlZFwiPjE4JTwvc3Bhbj4uIEPhuqduIGNow7ogw70gbmjDs20gPHN0cm9uZz5NdWEgc+G6r208L3N0cm9uZz4uXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAgey8qIENoYXJ0IFZpc3VhbGl6YXRpb24gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YHB4LTYgbWItOCAke2lzRW1wdHkgPyAnb3BhY2l0eS01MCBwb2ludGVyLWV2ZW50cy1ub25lJyA6ICdhbmltYXRlLXNsaWRlLXVwJ30gc3R5bGU9e3thbmltYXRpb25EZWxheTogJzAuMXMnfX1gfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLVszMnB4XSBwLTYgc2hhZG93LVswXzRweF8yMHB4X3JnYmEoMCwwLDAsMC4wMyldIGJvcmRlciBib3JkZXItc2xhdGUtMTAwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1zdGFydCBtYi04XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTUwMCB0ZXh0LXhzIGZvbnQtYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0IG1iLTEuNVwiPlR14bqnbiBuw6B5PC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWV4dHJhYm9sZCB0ZXh0LXNsYXRlLTkwMCB0cmFja2luZy10aWdodFwiPntmb3JtYXRWTkQoc3RhdHMuZXhwZW5zZSl9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7IWlzRW1wdHkgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjUgYmctZW1lcmFsZC01MCB0ZXh0LWVtZXJhbGQtNjAwIHB4LTIuNSBweS0xLjUgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLWVtZXJhbGQtMTAwXCI+XG4gICAgICAgICAgICAgICAgIDxUcmVuZFVwSWNvbiBzaXplPXsxNH0gc3Ryb2tlV2lkdGg9ezN9IC8+XG4gICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzExcHhdIGZvbnQtYm9sZFwiPjEyLjUlPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgaC1bMTIwcHhdXCI+XG4gICAgICAgICAgICB7KCFpc0VtcHR5ICYmIGFjdGl2ZUxpbmVJbmRleCAhPT0gbnVsbCkgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIC10b3AtNiBiZy1zbGF0ZS04MDAgdGV4dC13aGl0ZSB0ZXh0LVsxMXB4XSBmb250LWJvbGQgcHktMS41IHB4LTIuNSByb3VuZGVkLWxnIHNoYWRvdy1tZCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgdHJhbnNmb3JtIC10cmFuc2xhdGUteC0xLzIgei0xMCBwb2ludGVyLWV2ZW50cy1ub25lXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBsZWZ0OiBgJHsoYWN0aXZlTGluZUluZGV4IC8gKHJhd0RhdGEubGVuZ3RoIC0gMSkpICogMTAwfSVgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7cmF3RGF0YVthY3RpdmVMaW5lSW5kZXhdfWtcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIC1ib3R0b20tMSBsZWZ0LTEvMiAtdHJhbnNsYXRlLXgtMS8yIHctMiBoLTIgYmctc2xhdGUtODAwIHJvdGF0ZS00NVwiPjwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIDxzdmcgdmlld0JveD17YDAgLTEwICR7Y2hhcnRXaWR0aH0gJHtjaGFydEhlaWdodCArIDIwfWB9IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgb3ZlcmZsb3ctdmlzaWJsZVwiPlxuICAgICAgICAgICAgICB7IWlzRW1wdHkgJiYgKFxuICAgICAgICAgICAgICAgIDxkZWZzPlxuICAgICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPVwiY2hhcnRHcmFkaWVudFwiIHgxPVwiMFwiIHkxPVwiMFwiIHgyPVwiMFwiIHkyPVwiMVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwJVwiIHN0b3BDb2xvcj1cIiMxMGI5ODFcIiBzdG9wT3BhY2l0eT1cIjAuMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjQwJVwiIHN0b3BDb2xvcj1cIiMxMGI5ODFcIiBzdG9wT3BhY2l0eT1cIjAuMDhcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCI3MCVcIiBzdG9wQ29sb3I9XCIjMTBiOTgxXCIgc3RvcE9wYWNpdHk9XCIwLjAxXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMTAwJVwiIHN0b3BDb2xvcj1cIiMxMGI5ODFcIiBzdG9wT3BhY2l0eT1cIjBcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgICAgICAgICA8L2RlZnM+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8cGF0aCBcbiAgICAgICAgICAgICAgICBkPXtmaWxsUGF0aER9IFxuICAgICAgICAgICAgICAgIGZpbGw9e2lzRW1wdHkgPyBcIm5vbmVcIiA6IFwidXJsKCNjaGFydEdyYWRpZW50KVwifSBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhbmltYXRlLWZhZGUtaW5cIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGFuaW1hdGlvbkRlbGF5OiAnMC40cycsIG9wYWNpdHk6IDAsIGFuaW1hdGlvbkZpbGxNb2RlOiAnZm9yd2FyZHMnIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8cGF0aCBcbiAgICAgICAgICAgICAgICBkPXtwYXRoRH0gXG4gICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIiBcbiAgICAgICAgICAgICAgICBzdHJva2U9e3N0cm9rZUNvbG9yfSBcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjIuNVwiIFxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGluZS1kcmF3LWFuaW1hdGlvblwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlRGFzaGFycmF5PXtpc0VtcHR5ID8gXCI0IDhcIiA6IFwiMTAwMFwifSAvLyBEYXNoZWQgaWYgZW1wdHlcbiAgICAgICAgICAgICAgICBzdHJva2VEYXNob2Zmc2V0PVwiMTAwMFwiXG4gICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgeyFpc0VtcHR5ICYmIHBvaW50cy5tYXAoKHB0LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNQZWFrID0gaSA9PT0gMztcbiAgICAgICAgICAgICAgICBjb25zdCBpc0hvdmVyZWQgPSBhY3RpdmVMaW5lSW5kZXggPT09IGk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxnIGtleT17aX0gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlTGluZUluZGV4KGkpfSBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PXtwdC54fSBjeT17cHQueX0gcj1cIjIwXCIgZmlsbD1cInRyYW5zcGFyZW50XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBcbiAgICAgICAgICAgICAgICAgICAgICBjeD17cHQueH0gY3k9e3B0Lnl9IFxuICAgICAgICAgICAgICAgICAgICAgIHI9e2lzUGVhayB8fCBpc0hvdmVyZWQgPyBcIjQuNVwiIDogXCIzLjVcIn0gXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbD17aXNQZWFrIHx8IGlzSG92ZXJlZCA/IHN0cm9rZUNvbG9yIDogXCJ3aGl0ZVwifSBcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9e2lzUGVhayB8fCBpc0hvdmVyZWQgPyBcIndoaXRlXCIgOiBzdHJva2VDb2xvcn0gXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9e2lzUGVhayB8fCBpc0hvdmVyZWQgPyBcIjJcIiA6IFwiMi41XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGFuaW1hdGUtc2NhbGUtdXAgJHtpc1BlYWsgPyAnc2hhZG93LW1kJyA6ICcnfWB9XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgb3BhY2l0eTogMCwgYW5pbWF0aW9uRGVsYXk6IGAkezAuNSArIGkqMC4wNX1zYCwgYW5pbWF0aW9uRmlsbE1vZGU6ICdmb3J3YXJkcycgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAge2lzUGVhayAmJiAhaXNIb3ZlcmVkICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjeD17cHQueH0gY3k9e3B0Lnl9IHI9XCIxMFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPXtzdHJva2VDb2xvcn0gc3Ryb2tlV2lkdGg9XCIxXCIgb3BhY2l0eT1cIjAuM1wiIGNsYXNzTmFtZT1cImFuaW1hdGUtcGluZ1wiIHN0eWxlPXt7IGFuaW1hdGlvbkR1cmF0aW9uOiAnM3MnfX0vPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBtdC00IHRleHQtWzExcHhdIGZvbnQtYm9sZCB0ZXh0LXNsYXRlLTUwMFwiPlxuICAgICAgICAgICAge1snVDInLCAnVDMnLCAnVDQnLCAnVDUnLCAnVDYnLCAnVDcnLCAnQ04nXS5tYXAoKGRheSwgaSkgPT4gKFxuICAgICAgICAgICAgICA8c3BhbiBrZXk9e2l9IGNsYXNzTmFtZT17YWN0aXZlTGluZUluZGV4ID09PSBpICYmICFpc0VtcHR5ID8gJ3RleHQtc2xhdGUtOTAwIHRyYW5zaXRpb24tY29sb3JzJyA6ICcnfT57ZGF5fTwvc3Bhbj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YHB4LTYgbWItOCAke2lzRW1wdHkgPyAnb3BhY2l0eS01MCBwb2ludGVyLWV2ZW50cy1ub25lJyA6ICdhbmltYXRlLXNsaWRlLXVwJ30gc3R5bGU9e3thbmltYXRpb25EZWxheTogJzAuMnMnfX1gfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLVszMnB4XSBwLTYgc2hhZG93LVswXzRweF8yMHB4X3JnYmEoMCwwLDAsMC4wMyldIGJvcmRlciBib3JkZXItc2xhdGUtMTAwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbWItNlwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS04MDAgdGV4dC1bMTZweF0gZm9udC1leHRyYWJvbGRcIj5DxqEgY+G6pXUgY2hpIHRpw6p1PC9wPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTUwMCBiZy1zbGF0ZS01MCBweC0zIHB5LTEuNSByb3VuZGVkLWxnIHRleHQteHMgZm9udC1ib2xkIGhvdmVyOmJnLXNsYXRlLTEwMCB0cmFuc2l0aW9uLWNvbG9yc1wiPlRow6FuZyBuw6B5PC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtOFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LVsxMTBweF0gaC1bMTEwcHhdIHNocmluay0wXCI+XG4gICAgICAgICAgICAgIDxzdmcgdmlld0JveD1cIjAgMCAzNiAzNlwiIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgLXJvdGF0ZS05MFwiPlxuICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtMTAwXCIgZD1cIk0xOCAyLjA4NDUgYSAxNS45MTU1IDE1LjkxNTUgMCAwIDEgMCAzMS44MzEgYSAxNS45MTU1IDE1LjkxNTUgMCAwIDEgMCAtMzEuODMxXCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD1cIjMuNVwiIC8+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAge2RvbnV0RGF0YS5tYXAoKHNsaWNlLCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGlzRmFkZWQgPSBhY3RpdmVEb251dFNsaWNlICYmIGFjdGl2ZURvbnV0U2xpY2UgIT09IHNsaWNlLm5hbWU7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e3NsaWNlLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gIWlzRW1wdHkgJiYgc2V0QWN0aXZlRG9udXRTbGljZShhY3RpdmVEb251dFNsaWNlID09PSBzbGljZS5uYW1lID8gbnVsbCA6IHNsaWNlLm5hbWUpfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c2xpY2Uuc3Ryb2tlfSBjaGFydC1zcGluLWFuaW1hdGlvbiB0cmFuc2l0aW9uLW9wYWNpdHkgZHVyYXRpb24tMzAwIG91dGxpbmUtbm9uZSAkeyFpc0VtcHR5ID8gJ2N1cnNvci1wb2ludGVyJyA6ICcnfWB9IFxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGFuaW1hdGlvbkRlbGF5OiBgJHtpZHggKiAwLjF9c2AsIG9wYWNpdHk6IGlzRmFkZWQgJiYgIWlzRW1wdHkgPyAwLjIgOiAxIH19XG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlRGFzaGFycmF5PXtzbGljZS5kYXNofSBcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2VEYXNob2Zmc2V0PXtzbGljZS5vZmZzZXR9IFxuICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTggMi4wODQ1IGEgMTUuOTE1NSAxNS45MTU1IDAgMCAxIDAgMzEuODMxIGEgMTUuOTE1NSAxNS45MTU1IDAgMCAxIDAgLTMxLjgzMVwiIFxuICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCIgXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9e2FjdGl2ZURvbnV0U2xpY2UgPT09IHNsaWNlLm5hbWUgJiYgIWlzRW1wdHkgPyBcIjQuNVwiIDogXCIzLjVcIn0gXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHBvaW50ZXItZXZlbnRzLW5vbmUgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwXCI+XG4gICAgICAgICAgICAgICAge2FjdGl2ZURvbnV0U2xpY2UgJiYgIWlzRW1wdHkgPyAoXG4gICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LXNsYXRlLTUwMCBmb250LWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIG1iLTAuNVwiPnthY3RpdmVEb251dFNsaWNlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTVweF0gZm9udC1ibGFjayB0ZXh0LXNsYXRlLTkwMFwiPntkb251dERhdGEuZmluZChkPT5kLm5hbWUgPT09IGFjdGl2ZURvbnV0U2xpY2UpLnBjdH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdGV4dC1zbGF0ZS01MDAgZm9udC1ib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciBtYi0wLjVcIj5U4buVbmc8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzE1cHhdIGZvbnQtYmxhY2sgdGV4dC1zbGF0ZS05MDBcIj57aXNFbXB0eSA/ICcwxJEnIDogJzQuNE0nfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIHNwYWNlLXktNSBweS0yXCI+IFxuICAgICAgICAgICAgICB7ZG9udXREYXRhLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpc0ZhZGVkID0gYWN0aXZlRG9udXRTbGljZSAmJiBhY3RpdmVEb251dFNsaWNlICE9PSBpdGVtLm5hbWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5uYW1lfSBcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gIWlzRW1wdHkgJiYgc2V0QWN0aXZlRG9udXRTbGljZShhY3RpdmVEb251dFNsaWNlID09PSBpdGVtLm5hbWUgPyBudWxsIDogaXRlbS5uYW1lKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHRyYW5zaXRpb24tb3BhY2l0eSBkdXJhdGlvbi0zMDAgJHtpc0ZhZGVkICYmICFpc0VtcHR5ID8gJ29wYWNpdHktMzAnIDogJ29wYWNpdHktMTAwJ30gJHshaXNFbXB0eSA/ICdjdXJzb3ItcG9pbnRlcicgOiAnJ31gfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B3LTIuNSBoLTIuNSByb3VuZGVkLWZ1bGwgJHtpdGVtLmNvbG9yfWB9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YHRleHQtWzEzcHhdIGZvbnQtYm9sZCAke2FjdGl2ZURvbnV0U2xpY2UgPT09IGl0ZW0ubmFtZSAmJiAhaXNFbXB0eSA/ICd0ZXh0LXNsYXRlLTkwMCcgOiAndGV4dC1zbGF0ZS02MDAnfWB9PntpdGVtLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTRweF0gZm9udC1ibGFjayB0ZXh0LXNsYXRlLTkwMFwiPntpdGVtLnBjdH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtWzE0MHB4XSB3LWZ1bGwgc2hyaW5rLTBcIj48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IFByb2ZpbGUgPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiYW5pbWF0ZS1wYWdlLWVudGVyIHJlbGF0aXZlIGgtZnVsbCBvdmVyZmxvdy15LWF1dG8gbm8tc2Nyb2xsYmFyIHB0LTE2XCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJweC02IGZsZXggaXRlbXMtY2VudGVyIGdhcC01IG1iLThcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LVs4NHB4XSBoLVs4NHB4XSByb3VuZGVkLVsyOHB4XSBiZy1zbGF0ZS05MDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC0zeGwgZm9udC1leHRyYWJvbGQgdGV4dC13aGl0ZSBzaGFkb3ctWzBfOHB4XzIwcHhfcmdiYSgxNSwyMyw0MiwwLjIpXVwiPlxuICAgICAgICAgIE1BXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIC1ib3R0b20tMiAtcmlnaHQtMiBiZy13aGl0ZSBwLTEgcm91bmRlZC14bCBzaGFkb3ctc20gYm9yZGVyIGJvcmRlci1zbGF0ZS01MFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYW1iZXItMTAwIHRleHQtYW1iZXItNTAwIHAtMS41IHJvdW5kZWQtbGdcIj5cbiAgICAgICAgICAgIDxTaGllbGRDaGVjayBzaXplPXsxNn0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LVsyNnB4XSBmb250LWV4dHJhYm9sZCB0ZXh0LXNsYXRlLTkwMCB0cmFja2luZy10aWdodFwiPk1pbmggQW5oPC9oMj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS01MDAgdGV4dC1bMTNweF0gZm9udC1zZW1pYm9sZCBtdC0wLjVcIj5taW5oYW5oQGVtYWlsLmNvbTwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yLjUgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjUgYmctZW1lcmFsZC01MC84MCBib3JkZXIgYm9yZGVyLWVtZXJhbGQtMTAwLzUwIHRleHQtZW1lcmFsZC02MDAgcHgtMyBweS0xIHJvdW5kZWQtbGdcIj5cbiAgICAgICAgICA8QXdhcmQgc2l6ZT17MTR9IHN0cm9rZVdpZHRoPXsyLjV9Lz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSBmb250LWV4dHJhYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXJcIj5MZXZlbCA0IFNhdmVyPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJweC02IGdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTQgbWItOFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1iciBmcm9tLWFtYmVyLTUwLzUwIHRvLW9yYW5nZS01MC8zMCBib3JkZXIgYm9yZGVyLWFtYmVyLTEwMC81MCBwLTQuNSByb3VuZGVkLVsyNHB4XVwiPlxuICAgICAgICA8RmxhbWUgc2l6ZT17MjR9IGNsYXNzTmFtZT1cInRleHQtYW1iZXItNDAwIG1iLTJcIiBzdHJva2VXaWR0aD17Mi41fSAvPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSB0ZXh0LWFtYmVyLTYwMC83MCBmb250LWV4dHJhYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgbWItMVwiPkNodeG7l2kgdGnhur90IGtp4buHbTwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMjBweF0gZm9udC1ibGFjayB0ZXh0LWFtYmVyLTYwMFwiPjQgVGjDoW5nPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYWRpZW50LXRvLWJyIGZyb20tYmx1ZS01MC81MCB0by1za3ktNTAvMzAgYm9yZGVyIGJvcmRlci1ibHVlLTEwMC81MCBwLTQuNSByb3VuZGVkLVsyNHB4XVwiPlxuICAgICAgICA8TGlnaHRidWxiIHNpemU9ezI0fSBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNDAwIG1iLTJcIiBzdHJva2VXaWR0aD17Mi41fSAvPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSB0ZXh0LWJsdWUtNjAwLzcwIGZvbnQtZXh0cmFib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciBtYi0xXCI+VG9wIGRhbmggbeG7pWM8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzIwcHhdIGZvbnQtYmxhY2sgdGV4dC1ibHVlLTYwMFwiPsSCbiB14buRbmc8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTYgc3BhY2UteS0yXCI+XG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSBmb250LWV4dHJhYm9sZCB0ZXh0LXNsYXRlLTUwMCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0IHBsLTIgbWItMyBtdC02XCI+VMOgaSBraG/huqNuPC9wPlxuICAgICAge1tcbiAgICAgICAgeyBpY29uOiA8V2FsbGV0IHNpemU9ezIwfS8+LCBsYWJlbDogJ1F14bqjbiBsw70gVsOtJyB9LFxuICAgICAgICB7IGljb246IDxUYXJnZXQgc2l6ZT17MjB9Lz4sIGxhYmVsOiAnTeG7pWMgdGnDqnUgJiBOZ8OibiBzw6FjaCcgfSxcbiAgICAgICAgeyBpY29uOiA8SGlzdG9yeSBzaXplPXsyMH0vPiwgbGFiZWw6ICdYdeG6pXQgZOG7ryBsaeG7h3UgRXhjZWwnIH0sXG4gICAgICBdLm1hcCgoaXRlbSwgaSkgPT4gKFxuICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHAtNCBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLXNsYXRlLTEwMCByb3VuZGVkLVsyMHB4XSBob3Zlcjpib3JkZXItc2xhdGUtMjAwIGhvdmVyOnNoYWRvdy1zbSBhY3RpdmU6c2NhbGUtOTUgdHJhbnNpdGlvbi1hbGwgY3Vyc29yLXBvaW50ZXIgZ3JvdXBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC00XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNDAwIGdyb3VwLWhvdmVyOnRleHQtc2xhdGUtODAwIHRyYW5zaXRpb24tY29sb3JzXCI+e2l0ZW0uaWNvbn08L2Rpdj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzE1cHhdIGZvbnQtYm9sZCB0ZXh0LXNsYXRlLTgwMFwiPntpdGVtLmxhYmVsfTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Q2hldnJvblJpZ2h0IGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNDAwIGdyb3VwLWhvdmVyOnRyYW5zbGF0ZS14LTEgdHJhbnNpdGlvbi10cmFuc2Zvcm1cIiBzaXplPXsxOH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1bMTQwcHhdIHctZnVsbCBzaHJpbmstMFwiPjwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbi8vIC0tLSBNQUlOIEFQUCAtLS1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCBbYXBwU3RhdGUsIHNldEFwcFN0YXRlXSA9IHVzZVN0YXRlKCdsb2FkaW5nJyk7IFxuICBjb25zdCBbZGVtb01vZGUsIHNldERlbW9Nb2RlXSA9IHVzZVN0YXRlKCdub3JtYWwnKTsgLy8gbm9ybWFsIHwgZW1wdHkgfCBvZmZsaW5lXG4gIGNvbnN0IFt0YWIsIHNldFRhYl0gPSB1c2VTdGF0ZSgnZGFzaGJvYXJkJyk7XG4gIGNvbnN0IFtpc0JhbGFuY2VWaXNpYmxlLCBzZXRJc0JhbGFuY2VWaXNpYmxlXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbdG9hc3QsIHNldFRvYXN0XSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIC8vIEluaXRpYWwgTG9hZGluZyBTaW11bGF0aW9uXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHNldEFwcFN0YXRlKCdyZWFkeScpLCAxNTAwKTtcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGRlZmF1bHRUcmFuc2FjdGlvbnMgPSBbXG4gICAge1xuICAgICAgZGF0ZTogJ0jDtG0gbmF5JyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgaWQ6IDEsIHR5cGU6ICdleHBlbnNlJywgbWVyY2hhbnQ6ICdIaWdobGFuZHMgQ29mZmVlJywgY2F0ZWdvcnk6ICfEgm4gdeG7kW5nJywgYW1vdW50OiA0NTAwMCwgaWNvbjogPENvZmZlZSBzaXplPXsxOH0vPiwgbm90ZTogJ0NhZmUgc8OhbmcnLCBiZzogJ2JnLWFtYmVyLTUwJywgY29sb3I6ICd0ZXh0LWFtYmVyLTYwMCcgfSxcbiAgICAgICAgeyBpZDogMiwgdHlwZTogJ2V4cGVuc2UnLCBtZXJjaGFudDogJ05ldGZsaXgnLCBjYXRlZ29yeTogJ0dp4bqjaSB0csOtJywgYW1vdW50OiAyNjAwMDAsIGljb246IDxSZWZyZXNoQ3cgc2l6ZT17MTh9Lz4sIG5vdGU6ICdHw7NpIFByZW1pdW0nLCBiZzogJ2JnLWluZGlnby01MCcsIGNvbG9yOiAndGV4dC1pbmRpZ28tNjAwJywgaXNSZWN1cnJpbmc6IHRydWUgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgZGF0ZTogJ0jDtG0gcXVhJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgaWQ6IDMsIHR5cGU6ICdleHBlbnNlJywgbWVyY2hhbnQ6ICdHcmFiJywgY2F0ZWdvcnk6ICdEaSBjaHV54buDbicsIGFtb3VudDogMTI1MDAwLCBpY29uOiA8Q2FyIHNpemU9ezE4fS8+LCBub3RlOiAnxJBpIGzDoG0nLCBiZzogJ2JnLXNreS01MCcsIGNvbG9yOiAndGV4dC1za3ktNjAwJyB9LFxuICAgICAgICB7IGlkOiA0LCB0eXBlOiAnaW5jb21lJywgbWVyY2hhbnQ6ICdUZWNoY29tYmFuaycsIGNhdGVnb3J5OiAnTMawxqFuZycsIGFtb3VudDogMjUwMDAwMDAsIGljb246IDxEb2xsYXJTaWduIHNpemU9ezE4fS8+LCBub3RlOiAnTMawxqFuZyBUNScsIGJnOiAnYmctZW1lcmFsZC01MCcsIGNvbG9yOiAndGV4dC1lbWVyYWxkLTYwMCcgfVxuICAgICAgXVxuICAgIH1cbiAgXTtcblxuICBjb25zdCBbZ3JvdXBlZFRyYW5zYWN0aW9ucywgc2V0R3JvdXBlZFRyYW5zYWN0aW9uc10gPSB1c2VTdGF0ZShkZWZhdWx0VHJhbnNhY3Rpb25zKTtcblxuICAvLyBFZmZlY3QgdG8gaGFuZGxlIERlbW8gTW9kZSBjaGFuZ2VzXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRlbW9Nb2RlID09PSAnZW1wdHknKSB7XG4gICAgICBzZXRHcm91cGVkVHJhbnNhY3Rpb25zKFtdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0R3JvdXBlZFRyYW5zYWN0aW9ucyhkZWZhdWx0VHJhbnNhY3Rpb25zKTtcbiAgICB9XG4gIH0sIFtkZW1vTW9kZV0pO1xuXG4gIGNvbnN0IHN0YXRzID0gdXNlTWVtbygoKSA9PiB7XG4gICAgbGV0IGluY29tZSA9IDA7XG4gICAgbGV0IGV4cGVuc2UgPSAwO1xuICAgIGdyb3VwZWRUcmFuc2FjdGlvbnMuZm9yRWFjaChncm91cCA9PiB7XG4gICAgICBncm91cC5pdGVtcy5mb3JFYWNoKHQgPT4ge1xuICAgICAgICBpZiAodC50eXBlID09PSAnaW5jb21lJykgaW5jb21lICs9IHQuYW1vdW50O1xuICAgICAgICBpZiAodC50eXBlID09PSAnZXhwZW5zZScpIGV4cGVuc2UgKz0gdC5hbW91bnQ7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4geyBpbmNvbWUsIGV4cGVuc2UsIGJhbGFuY2U6IGluY29tZSAtIGV4cGVuc2UgfTtcbiAgfSwgW2dyb3VwZWRUcmFuc2FjdGlvbnNdKTtcblxuICBjb25zdCBmb3JtYXRWTkQgPSAodmFsKSA9PiBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ3ZpLVZOJywgeyBzdHlsZTogJ2N1cnJlbmN5JywgY3VycmVuY3k6ICdWTkQnIH0pLmZvcm1hdCh2YWwpO1xuXG4gIGNvbnN0IGhhbmRsZVNhdmVUcmFuc2FjdGlvbiA9IChuZXdUKSA9PiB7XG4gICAgY29uc3QgbmV3R3JvdXBlZCA9IFsuLi5ncm91cGVkVHJhbnNhY3Rpb25zXTtcbiAgICBpZiAobmV3R3JvdXBlZC5sZW5ndGggPiAwICYmIG5ld0dyb3VwZWRbMF0uZGF0ZSA9PT0gJ0jDtG0gbmF5Jykge1xuICAgICAgbmV3R3JvdXBlZFswXS5pdGVtcy51bnNoaWZ0KG5ld1QpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdHcm91cGVkLnVuc2hpZnQoeyBkYXRlOiAnSMO0bSBuYXknLCBpdGVtczogW25ld1RdIH0pO1xuICAgIH1cbiAgICBzZXRHcm91cGVkVHJhbnNhY3Rpb25zKG5ld0dyb3VwZWQpO1xuICAgIFxuICAgIC8vIEF1dG8gc3dpdGNoIG9mZiBlbXB0eSBtb2RlIGlmIHVzZXIgYWRkcyBkYXRhXG4gICAgaWYgKGRlbW9Nb2RlID09PSAnZW1wdHknKSBzZXREZW1vTW9kZSgnbm9ybWFsJyk7XG5cbiAgICBzZXRUb2FzdChcIsSQw6MgbMawdSBnaWFvIGThu4tjaCFcIik7XG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXRUb2FzdChudWxsKSwgMzAwMCk7XG4gICAgc2V0VGFiKCdkYXNoYm9hcmQnKTtcbiAgfTtcblxuICBjb25zdCBpc0VtcHR5ID0gZ3JvdXBlZFRyYW5zYWN0aW9ucy5sZW5ndGggPT09IDA7XG4gIGNvbnN0IGlzT2ZmbGluZSA9IGRlbW9Nb2RlID09PSAnb2ZmbGluZSc7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIGJnLXNsYXRlLTEwMC84MCBmb250LVsnSW50ZXInLHNhbnMtc2VyaWZdIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG92ZXJmbG93LWhpZGRlbiBweS0yXCI+XG4gICAgICBcbiAgICAgIHsvKiBUb2FzdCAqL31cbiAgICAgIHt0b2FzdCAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgdG9wLTggbGVmdC0xLzIgLXRyYW5zbGF0ZS14LTEvMiB6LVsxMDBdIGJnLXNsYXRlLTkwMCB0ZXh0LXdoaXRlIHB4LTUgcHktMy41IHJvdW5kZWQtMnhsIHNoYWRvdy1bMF8xMHB4XzMwcHhfcmdiYSgwLDAsMCwwLjIpXSBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMyBhbmltYXRlLXNsaWRlLWRvd24gYm9yZGVyIGJvcmRlci1zbGF0ZS03MDBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWVtZXJhbGQtNTAwLzIwIHAtMS41IHJvdW5kZWQtZnVsbFwiPlxuICAgICAgICAgICAgPENoZWNrIHNpemU9ezE0fSBzdHJva2VXaWR0aD17M30gY2xhc3NOYW1lPVwidGV4dC1lbWVyYWxkLTQwMFwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTNweF0gZm9udC1ib2xkIHRyYWNraW5nLXdpZGVcIj57dG9hc3R9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIHsvKiBERVYgVE9PTFMgKFBvcnRmb2xpbyBQcmVzZW50YXRpb24gQ29udHJvbHMpICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBib3R0b20tNCByaWdodC00IHotWzIwMF0gYmctd2hpdGUvOTAgYmFja2Ryb3AtYmx1ci1tZCBwLTIgcm91bmRlZC0yeGwgc2hhZG93LXhsIGJvcmRlciBib3JkZXItc2xhdGUtMjAwIGZsZXggZ2FwLTJcIj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXREZW1vTW9kZSgnbm9ybWFsJyl9IGNsYXNzTmFtZT17YHB4LTMgcHktMS41IHRleHQteHMgZm9udC1ib2xkIHJvdW5kZWQteGwgdHJhbnNpdGlvbi1hbGwgJHtkZW1vTW9kZSA9PT0gJ25vcm1hbCcgPyAnYmctc2xhdGUtOTAwIHRleHQtd2hpdGUnIDogJ3RleHQtc2xhdGUtNTAwIGhvdmVyOmJnLXNsYXRlLTEwMCd9YH0+Tm9ybWFsPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0RGVtb01vZGUoJ2VtcHR5Jyl9IGNsYXNzTmFtZT17YHB4LTMgcHktMS41IHRleHQteHMgZm9udC1ib2xkIHJvdW5kZWQteGwgdHJhbnNpdGlvbi1hbGwgJHtkZW1vTW9kZSA9PT0gJ2VtcHR5JyA/ICdiZy1zbGF0ZS05MDAgdGV4dC13aGl0ZScgOiAndGV4dC1zbGF0ZS01MDAgaG92ZXI6Ymctc2xhdGUtMTAwJ31gfT5FbXB0eSBTdGF0ZTwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldERlbW9Nb2RlKCdvZmZsaW5lJyl9IGNsYXNzTmFtZT17YHB4LTMgcHktMS41IHRleHQteHMgZm9udC1ib2xkIHJvdW5kZWQteGwgdHJhbnNpdGlvbi1hbGwgJHtkZW1vTW9kZSA9PT0gJ29mZmxpbmUnID8gJ2JnLXJvc2UtNTAwIHRleHQtd2hpdGUnIDogJ3RleHQtc2xhdGUtNTAwIGhvdmVyOmJnLXNsYXRlLTEwMCd9YH0+T2ZmbGluZTwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBSRUFMIERFVklDRSBNT0NLVVAgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbCBtYXgtdy1bMzkwcHhdIGgtW21pbig3ODBweCxjYWxjKDEwMGR2aC0xNnB4KSldIGJnLVsjMTIxNDFBXSBsZzpyb3VuZGVkLVs0OHB4XSBzaGFkb3ctWzBfMzRweF83MHB4Xy0xOHB4X3JnYmEoMCwwLDAsMC4zNildIGZsZXgtc2hyaW5rLTAgbXgtM1wiPlxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbGc6YmxvY2sgYWJzb2x1dGUgdG9wLVsxMTBweF0gLWxlZnQtWzRweF0gdy1bNHB4XSBoLVsyOHB4XSBiZy1bIzEyMTQxQV0gcm91bmRlZC1sLW1kIHNoYWRvdy1pbm5lclwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBsZzpibG9jayBhYnNvbHV0ZSB0b3AtWzE3MHB4XSAtbGVmdC1bNHB4XSB3LVs0cHhdIGgtWzU0cHhdIGJnLVsjMTIxNDFBXSByb3VuZGVkLWwtbWQgc2hhZG93LWlubmVyXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmJsb2NrIGFic29sdXRlIHRvcC1bMjQwcHhdIC1sZWZ0LVs0cHhdIHctWzRweF0gaC1bNTRweF0gYmctWyMxMjE0MUFdIHJvdW5kZWQtbC1tZCBzaGFkb3ctaW5uZXJcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbGc6YmxvY2sgYWJzb2x1dGUgdG9wLVsxOTBweF0gLXJpZ2h0LVs0cHhdIHctWzRweF0gaC1bNzRweF0gYmctWyMxMjE0MUFdIHJvdW5kZWQtci1tZCBzaGFkb3ctaW5uZXJcIj48L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LVsxMXB4XSBiZy1zbGF0ZS01MCByb3VuZGVkLVszOHB4XSBvdmVyZmxvdy1oaWRkZW4gZmxleCBmbGV4LWNvbCByaW5nLTEgcmluZy1ibGFjay81XCI+XG4gICAgICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbGc6ZmxleCBhYnNvbHV0ZSB0b3AtMCBsZWZ0LTEvMiAtdHJhbnNsYXRlLXgtMS8yIHctWzE2MHB4XSBoLVszMHB4XSBiZy1bIzEyMTQxQV0gcm91bmRlZC1iLVsyMHB4XSB6LVs2MF0gaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC00IHNoYWRvdy1zbVwiPlxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMiBoLTEuNSByb3VuZGVkLWZ1bGwgYmctc2xhdGUtODAwIHNoYWRvdy1pbm5lclwiPjwvZGl2PlxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0zIGgtMyByb3VuZGVkLWZ1bGwgYmctWyMwYTBhMGNdIHNoYWRvdy1baW5zZXRfMF8tMXB4XzJweF9yZ2JhKDI1NSwyNTUsMjU1LDAuMSldIGJvcmRlciBib3JkZXItc2xhdGUtODAwXCI+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBvdmVyZmxvdy1oaWRkZW4gcmVsYXRpdmUgei0xMCBiZy1zbGF0ZS01MFwiPlxuICAgICAgICAgICAge2FwcFN0YXRlID09PSAnbG9hZGluZycgPyAoXG4gICAgICAgICAgICAgIDxTa2VsZXRvbkRhc2hib2FyZCAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICB7dGFiID09PSAnZGFzaGJvYXJkJyAmJiA8RGFzaGJvYXJkIHN0YXRzPXtzdGF0c30gZ3JvdXBlZFRyYW5zYWN0aW9ucz17Z3JvdXBlZFRyYW5zYWN0aW9uc30gaXNCYWxhbmNlVmlzaWJsZT17aXNCYWxhbmNlVmlzaWJsZX0gc2V0SXNCYWxhbmNlVmlzaWJsZT17c2V0SXNCYWxhbmNlVmlzaWJsZX0gZm9ybWF0Vk5EPXtmb3JtYXRWTkR9IGlzRW1wdHk9e2lzRW1wdHl9IGlzT2ZmbGluZT17aXNPZmZsaW5lfSAvPn1cbiAgICAgICAgICAgICAgICB7dGFiID09PSAncXVpY2thZGQnICYmIDxRdWlja0FkZCBvblNhdmU9e2hhbmRsZVNhdmVUcmFuc2FjdGlvbn0gb25DYW5jZWw9eygpID0+IHNldFRhYignZGFzaGJvYXJkJyl9IC8+fVxuICAgICAgICAgICAgICAgIHt0YWIgPT09ICdhbmFseXRpY3MnICYmIDxBbmFseXRpY3Mgc3RhdHM9e3N0YXRzfSBmb3JtYXRWTkQ9e2Zvcm1hdFZORH0gaXNFbXB0eT17aXNFbXB0eX0gLz59XG4gICAgICAgICAgICAgICAge3RhYiA9PT0gJ3Byb2ZpbGUnICYmIDxQcm9maWxlIC8+fVxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogUmVmaW5lZCBFbGVnYW50IE5hdiBCYXIgKi99XG4gICAgICAgICAgeyh0YWIgIT09ICdxdWlja2FkZCcgJiYgYXBwU3RhdGUgIT09ICdsb2FkaW5nJykgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tNiBsZWZ0LTUgcmlnaHQtNSB6LTQwXCI+XG4gICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlLzk1IGJhY2tkcm9wLWJsdXIteGwgcm91bmRlZC1bMzJweF0gcHgtNiBweS0yLjUgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHNoYWRvdy1bMF8xNXB4XzQwcHhfLTEwcHhfcmdiYSgwLDAsMCwwLjEpXSBib3JkZXIgYm9yZGVyLXNsYXRlLTEwMFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0VGFiKCdkYXNoYm9hcmQnKX0gY2xhc3NOYW1lPXtgcC0yIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCB0b3VjaC1tYW5pcHVsYXRpb24gJHt0YWIgPT09ICdkYXNoYm9hcmQnID8gJ3RleHQtc2xhdGUtOTAwIHNjYWxlLTExMCcgOiAndGV4dC1zbGF0ZS00MDAgaG92ZXI6dGV4dC1zbGF0ZS02MDAnfWB9PlxuICAgICAgICAgICAgICAgICAgPExheW91dEdyaWQgc2l6ZT17MjR9IGZpbGw9e3RhYiA9PT0gJ2Rhc2hib2FyZCcgPyAnY3VycmVudENvbG9yJyA6ICdub25lJ30gLz5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFRhYignYW5hbHl0aWNzJyl9IGNsYXNzTmFtZT17YHAtMiB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgdG91Y2gtbWFuaXB1bGF0aW9uICR7dGFiID09PSAnYW5hbHl0aWNzJyA/ICd0ZXh0LXNsYXRlLTkwMCBzY2FsZS0xMTAnIDogJ3RleHQtc2xhdGUtNDAwIGhvdmVyOnRleHQtc2xhdGUtNjAwJ31gfT5cbiAgICAgICAgICAgICAgICAgIDxCYXJDaGFydDMgc2l6ZT17MjR9IHN0cm9rZVdpZHRoPXt0YWIgPT09ICdhbmFseXRpY3MnID8gMi41IDogMn0gLz5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgIHsvKiBGQUIgKi99XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRhYigncXVpY2thZGQnKX0gXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LVs0NHB4XSBoLVs0NHB4XSAtbXQtNSBiZy1zbGF0ZS05MDAgdGV4dC13aGl0ZSByb3VuZGVkLVsxNnB4XSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBzaGFkb3ctWzBfOHB4XzE2cHhfcmdiYSgxNSwyMyw0MiwwLjIpXSBob3ZlcjotdHJhbnNsYXRlLXktMSBhY3RpdmU6c2NhbGUtOTUgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGJvcmRlci1bMnB4XSBib3JkZXItd2hpdGUgcmVsYXRpdmUgZ3JvdXAgdG91Y2gtbWFuaXB1bGF0aW9uXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctc2xhdGUtODAwIHJvdW5kZWQtWzE0cHhdIG9wYWNpdHktMCBncm91cC1ob3ZlcjpvcGFjaXR5LTEwMCB0cmFuc2l0aW9uLW9wYWNpdHlcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxQbHVzIHNpemU9ezIwfSBzdHJva2VXaWR0aD17M30gY2xhc3NOYW1lPVwicmVsYXRpdmUgei0xMFwiIC8+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFRhYigncHJvZmlsZScpfSBjbGFzc05hbWU9e2BwLTIgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIHRvdWNoLW1hbmlwdWxhdGlvbiAke3RhYiA9PT0gJ3Byb2ZpbGUnID8gJ3RleHQtc2xhdGUtOTAwIHNjYWxlLTExMCcgOiAndGV4dC1zbGF0ZS00MDAgaG92ZXI6dGV4dC1zbGF0ZS02MDAnfWB9PlxuICAgICAgICAgICAgICAgICAgPFNldHRpbmdzIHNpemU9ezI0fSBmaWxsPXt0YWIgPT09ICdwcm9maWxlJyA/ICdjdXJyZW50Q29sb3InIDogJ25vbmUnfSAvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwLTIgdGV4dC1zbGF0ZS00MDAgaG92ZXI6dGV4dC1zbGF0ZS02MDAgdHJhbnNpdGlvbi1jb2xvcnMgdG91Y2gtbWFuaXB1bGF0aW9uXCI+XG4gICAgICAgICAgICAgICAgICA8TW9yZUhvcml6b250YWwgc2l6ZT17MjR9IC8+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogYFxuICAgICAgICBAa2V5ZnJhbWVzIHNsaWRlLXVwIHsgZnJvbSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTsgb3BhY2l0eTogMDsgfSB0byB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgb3BhY2l0eTogMTsgfSB9XG4gICAgICAgIEBrZXlmcmFtZXMgc2xpZGUtZG93biB7IGZyb20geyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpOyBvcGFjaXR5OiAwOyB9IHRvIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyBvcGFjaXR5OiAxOyB9IH1cbiAgICAgICAgQGtleWZyYW1lcyBmYWRlLWluIHsgZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogc2NhbGUoMC45OCk7IH0gdG8geyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9IH1cbiAgICAgICAgQGtleWZyYW1lcyBmYWRlLWluLXVwIHsgZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTsgfSB0byB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfSB9XG4gICAgICAgIEBrZXlmcmFtZXMgc2NhbGUtdXAgeyAwJSB7IHRyYW5zZm9ybTogc2NhbGUoMC45KTsgb3BhY2l0eTogMDsgfSAxMDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgb3BhY2l0eTogMTsgfSB9XG4gICAgICAgIEBrZXlmcmFtZXMgZHJhdy1saW5lIHsgdG8geyBzdHJva2UtZGFzaG9mZnNldDogMDsgfSB9XG4gICAgICAgIEBrZXlmcmFtZXMgc3Bpbi1jaGFydCB7IGZyb20geyBzdHJva2UtZGFzaGFycmF5OiAwLCAxMDA7IH0gfVxuICAgICAgICBAa2V5ZnJhbWVzIHNsaWRlLWluLXJpZ2h0IHsgZnJvbSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTsgb3BhY2l0eTogMDsgfSB0byB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgb3BhY2l0eTogMTsgfSB9XG4gICAgICAgIEBrZXlmcmFtZXMgYm91bmNlLXNvZnQgeyAwJSwgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfSA1MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7IH0gfVxuICAgICAgICBcbiAgICAgICAgLmFuaW1hdGUtc2xpZGUtdXAgeyBhbmltYXRpb246IHNsaWRlLXVwIDAuNXMgY3ViaWMtYmV6aWVyKDAuMTYsIDEsIDAuMywgMSkgZm9yd2FyZHM7IH1cbiAgICAgICAgLmFuaW1hdGUtc2xpZGUtZG93biB7IGFuaW1hdGlvbjogc2xpZGUtZG93biAwLjRzIGN1YmljLWJlemllcigwLjE2LCAxLCAwLjMsIDEpIGZvcndhcmRzOyB9XG4gICAgICAgIC5hbmltYXRlLWZhZGUtaW4geyBhbmltYXRpb246IGZhZGUtaW4gMC40cyBjdWJpYy1iZXppZXIoMC4xNiwgMSwgMC4zLCAxKSBmb3J3YXJkczsgfVxuICAgICAgICAuYW5pbWF0ZS1mYWRlLWluLXVwIHsgYW5pbWF0aW9uOiBmYWRlLWluLXVwIDAuNXMgY3ViaWMtYmV6aWVyKDAuMTYsIDEsIDAuMywgMSkgZm9yd2FyZHM7IH1cbiAgICAgICAgLmFuaW1hdGUtc2NhbGUtdXAgeyBhbmltYXRpb246IHNjYWxlLXVwIDAuMnMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIGZvcndhcmRzOyB9XG4gICAgICAgIC5hbmltYXRlLXBhZ2UtZW50ZXIgeyBhbmltYXRpb246IHNsaWRlLWluLXJpZ2h0IDAuNHMgY3ViaWMtYmV6aWVyKDAuMTYsIDEsIDAuMywgMSkgZm9yd2FyZHM7IH1cbiAgICAgICAgLmFuaW1hdGUtYm91bmNlLXNvZnQgeyBhbmltYXRpb246IGJvdW5jZS1zb2Z0IDJzIGluZmluaXRlOyB9XG4gICAgICAgIFxuICAgICAgICAubGluZS1kcmF3LWFuaW1hdGlvbiB7IGFuaW1hdGlvbjogZHJhdy1saW5lIDEuNXMgZWFzZS1vdXQgZm9yd2FyZHM7IH1cbiAgICAgICAgLmNoYXJ0LXNwaW4tYW5pbWF0aW9uIHsgYW5pbWF0aW9uOiBzcGluLWNoYXJ0IDFzIGVhc2Utb3V0IGZvcndhcmRzOyB9XG4gICAgICAgIFxuICAgICAgICAubm8tc2Nyb2xsYmFyOjotd2Via2l0LXNjcm9sbGJhciB7IGRpc3BsYXk6IG5vbmU7IH1cbiAgICAgICAgLm5vLXNjcm9sbGJhciB7IC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyB9XG4gICAgICBgfX0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdfQ==