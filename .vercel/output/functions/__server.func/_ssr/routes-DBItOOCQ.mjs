import { o as __toESM } from "../_runtime.mjs";
import { a as useFormContext, i as useForm, n as Controller, o as require_react, r as FormProvider, t as u } from "../_libs/@hookform/resolvers+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as require_jsx_runtime, a as Trigger2, i as Root2, n as Header, p as Slot, r as Item, t as Content2 } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { C as Check, E as ArrowRight, S as ChevronDown, T as Brain, _ as Heart, a as Star, b as Compass, c as Quote, d as MapPin, f as Mail, g as Instagram, h as Laptop, i as Sunrise, l as MessageCircle, m as Leaf, n as Users, o as Sparkles, p as LoaderCircle, r as UserRound, s as ShieldCheck, t as X, u as Menu, v as HeartHandshake, w as Calendar, x as Clock3, y as Globe } from "../_libs/lucide-react.mjs";
import { n as AvatarFallback$1, r as AvatarImage$1, t as Avatar$1 } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { a as DialogOverlay, c as DialogTrigger, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as motion, t as useInView } from "../_libs/framer-motion.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DBItOOCQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var Sheet = Dialog;
var SheetTrigger = DialogTrigger;
var SheetClose = DialogClose;
var SheetPortal = DialogPortal;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {
	className: cn("fixed inset-0 z-50 bg-black/20 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
SheetOverlay.displayName = DialogOverlay.displayName;
var sheetVariants = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
	variants: { side: {
		top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
		left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
		right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
	} },
	defaultVariants: { side: "right" }
});
var SheetContent = import_react.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
	ref,
	className: cn(sheetVariants({ side }), className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	}), children]
})] }));
SheetContent.displayName = DialogContent.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
});
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
SheetFooter.displayName = "SheetFooter";
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
	ref,
	className: cn("text-lg font-semibold text-foreground", className),
	...props
}));
SheetTitle.displayName = DialogTitle.displayName;
var SheetDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
SheetDescription.displayName = DialogDescription.displayName;
var links = [
	{
		href: "#sobre",
		label: "Sobre"
	},
	{
		href: "#areas",
		label: "Áreas"
	},
	{
		href: "#processo",
		label: "Processo"
	},
	{
		href: "#depoimentos",
		label: "Depoimentos"
	},
	{
		href: "#faq",
		label: "Dúvidas"
	}
];
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [activeSection, setActiveSection] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`);
			});
		}, {
			threshold: .1,
			rootMargin: "-20% 0px -70% 0px"
		});
		links.forEach((link) => {
			const element = document.querySelector(link.href);
			if (element) observer.observe(element);
		});
		return () => {
			window.removeEventListener("scroll", handleScroll);
			observer.disconnect();
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "pt-4 px-4" : "pt-0 px-0"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: `mx-auto max-w-6xl w-full px-6 h-16 flex items-center justify-between transition-all duration-500 ${scrolled ? "bg-white/70 backdrop-blur-xl shadow-soft border border-white/50 rounded-full" : "bg-transparent border-transparent"}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2 group",
					"aria-label": "Página inicial",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "h-8 w-8 rounded-full bg-sage/15 grid place-items-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-sage" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium tracking-tight",
						children: "Dra. Mariana Oliveira"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "hidden md:flex items-center gap-8 text-sm",
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						className: `transition-colors duration-300 ${activeSection === l.href ? "text-sage-deep font-medium" : "text-muted-foreground hover:text-sage-deep"}`,
						children: l.label
					}) }, l.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden md:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "sm",
						className: "rounded-full px-5 shadow-soft transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#contato",
							children: "Agendar consulta"
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "md:hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							"aria-label": "Abrir menu de navegação",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-6 w-6" })
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetContent, {
						className: "w-full sm:max-w-sm pt-20",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "flex flex-col gap-6",
							children: [
								links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetClose, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: l.href,
										className: "text-xl font-medium text-foreground",
										children: l.label
									})
								}, l.href)),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px bg-border my-2" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetClose, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										size: "lg",
										className: "rounded-full w-full shadow-soft transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#contato",
											children: "Agendar consulta"
										})
									})
								})
							]
						})
					})] })
				})
			]
		})
	});
}
var hero_portrait_default = "/assets/hero-portrait-C7DXi3-L.jpg";
function BlurFade({ children, className, duration = .5, delay = 0, yOffset = 8, blur = "6px", inView = true, inViewMargin = "-50px" }) {
	const ref = (0, import_react.useRef)(null);
	const inViewResult = useInView(ref, {
		once: true,
		margin: inViewMargin
	});
	const isInView = !inView || inViewResult;
	const variants = {
		hidden: {
			y: yOffset,
			opacity: 0,
			filter: `blur(${blur})`
		},
		visible: {
			y: 0,
			opacity: 1,
			filter: "blur(0px)"
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		ref,
		initial: "hidden",
		animate: isInView ? "visible" : "hidden",
		exit: "hidden",
		variants,
		transition: {
			delay,
			duration,
			ease: "easeOut"
		},
		className,
		children
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "absolute inset-0 -z-10",
				style: { background: "linear-gradient(180deg, oklch(0.99 0.008 85) 0%, oklch(0.97 0.015 90) 55%, oklch(0.95 0.02 130) 100%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full -z-10 opacity-70",
				style: {
					background: "radial-gradient(circle, var(--sage-soft) 0%, transparent 70%)",
					filter: "blur(60px)"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute top-40 -right-40 h-[32rem] w-[32rem] rounded-full -z-10 opacity-60",
				style: {
					background: "radial-gradient(circle, var(--beige-deep) 0%, transparent 70%)",
					filter: "blur(80px)"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute bottom-0 left-1/3 h-[22rem] w-[22rem] rounded-full -z-10 opacity-50",
				style: {
					background: "radial-gradient(circle, var(--sage-soft) 0%, transparent 70%)",
					filter: "blur(70px)"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 -z-10 overflow-hidden pointer-events-none",
				"aria-hidden": "true",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					className: "absolute top-1/4 right-0 w-[40%] h-[50%] text-sage-soft/15 stroke-current fill-none opacity-40",
					viewBox: "0 0 400 600",
					preserveAspectRatio: "none",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M400,100 C300,150 250,50 150,150 C50,250 100,400 0,450",
						strokeWidth: "1.5",
						strokeDasharray: "4 4"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M400,150 C320,190 280,110 180,200 C80,290 120,440 0,500",
						strokeWidth: "1"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					className: "absolute bottom-0 left-0 w-[30%] h-[40%] text-beige-deep/20 stroke-current fill-none opacity-30",
					viewBox: "0 0 300 400",
					preserveAspectRatio: "none",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M0,350 C80,300 120,380 200,280 C280,180 180,100 300,50",
						strokeWidth: "1"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6 pt-40 pb-32 md:pt-48 md:pb-44 grid md:grid-cols-12 gap-16 lg:gap-20 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-6 flex flex-col justify-center space-y-10 lg:pr-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlurFade, {
									delay: .05,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.18em] text-sage-deep bg-sage-soft/20 border border-sage/15 backdrop-blur-sm shadow-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "relative flex h-2 w-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-sage opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-sage" })]
										}), "Psicologia Clínica · CRP 06/00000"]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlurFade, {
									delay: .15,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
										className: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.08] tracking-tight text-foreground",
										children: ["Um espaço seguro para", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "block italic font-normal text-sage-deep mt-1",
											children: [" ", "reencontrar você"]
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlurFade, {
									delay: .25,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed font-light",
										children: "Psicoterapia individual para adultos que buscam clareza, equilíbrio emocional e uma vida com mais propósito."
									})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlurFade, {
							delay: .35,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col sm:flex-row gap-4 pt-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									className: "rounded-full px-8 h-12 text-sm md:text-base shadow-md shadow-sage/10 hover:shadow-lg hover:shadow-sage/20 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 cursor-pointer",
									"aria-label": "Agendar primeira sessão com Dra. Mariana Oliveira",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "#contato",
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-4 w-4" }), "Agendar primeira sessão"]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "outline",
									size: "lg",
									className: "group rounded-full px-8 h-12 text-sm md:text-base border-border bg-card/50 backdrop-blur-sm hover:bg-card hover:border-sage/40 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 cursor-pointer",
									"aria-label": "Conhecer trabalho da Dra. Mariana Oliveira",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "#sobre",
										className: "flex items-center gap-2",
										children: ["Conhecer meu trabalho", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 text-muted-foreground group-hover:translate-x-1 transition-transform duration-300" })]
									})
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlurFade, {
							delay: .45,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-x-8 gap-y-3 pt-4 text-sm text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2.5 bg-sage-soft/10 px-3.5 py-1.5 rounded-full border border-sage/5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "h-4 w-4 text-sage" }), "Atendimento online"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2.5 bg-sage-soft/10 px-3.5 py-1.5 rounded-full border border-sage/5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 text-sage" }), "Consultório em São Paulo"]
								})]
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative md:col-span-6 flex justify-center lg:justify-end",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BlurFade, {
						delay: .2,
						className: "relative w-full max-w-[480px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								"aria-hidden": true,
								className: "absolute -inset-6 rounded-[2.5rem] -z-10 animate-pulse duration-[8000ms]",
								style: {
									background: "linear-gradient(135deg, var(--beige-deep) 0%, var(--sage-soft) 100%)",
									filter: "blur(50px)",
									opacity: .6
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-0 border border-sage-deep/15 rounded-[2.2rem] translate-x-4 translate-y-4 -z-10",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-white/40 transition-all duration-500 hover:shadow-2xl",
								style: { boxShadow: "var(--shadow-elegant)" },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: hero_portrait_default,
									alt: "Retrato da Dra. Mariana Oliveira, psicóloga clínica",
									width: 896,
									height: 1152,
									loading: "lazy",
									className: "h-full w-full object-cover transition-transform duration-700 hover:scale-105"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlurFade, {
								delay: .4,
								className: "absolute -bottom-8 -left-6 hidden sm:block max-w-[240px]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "bg-card/95 backdrop-blur-md rounded-2xl p-5 border border-sage/10 shadow-lg",
									style: { boxShadow: "var(--shadow-soft)" },
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground mb-1",
											children: "Próximos horários"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-sm font-medium text-foreground flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "relative flex h-2 w-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-emerald-500" })]
											}), "Esta semana disponível"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-sage-deep font-medium mt-2 bg-sage-soft/20 px-2 py-0.5 rounded inline-block",
											children: "Resposta em até 24h"
										})
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlurFade, {
								delay: .5,
								className: "absolute -top-6 -right-4 hidden sm:block",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3 bg-card/95 backdrop-blur-md rounded-full pl-2 pr-5 py-2 border border-sage/10 shadow-md",
									style: { boxShadow: "var(--shadow-soft)" },
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "h-8 w-8 rounded-full bg-sage-soft flex items-center justify-center text-sage-deep text-xs font-semibold",
										children: "12+"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-muted-foreground font-medium",
										children: "anos de experiência"
									})]
								})
							})
						]
					})
				})]
			})
		]
	});
}
var benefits = [
	{
		icon: Heart,
		title: "Escuta acolhedora",
		description: "Um espaço seguro e reservado onde você pode se expressar sem julgamentos, encontrando acolhimento em cada palavra."
	},
	{
		icon: UserRound,
		title: "Autoconhecimento",
		description: "Compreenda suas emoções, padrões e comportamentos com clareza, construindo uma relação mais honesta consigo mesmo."
	},
	{
		icon: Users,
		title: "Relacionamentos mais saudáveis",
		description: "Fortaleça vínculos, melhore a comunicação e aprenda a estabelecer limites com mais leveza e assertividade."
	},
	{
		icon: Sparkles,
		title: "Desenvolvimento emocional",
		description: "Desenvolva ferramentas para lidar melhor com os desafios do dia a dia, cultivando resiliência e equilíbrio."
	}
];
function Benefits() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "beneficios",
		className: "py-28 md:py-36 bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl mb-20 md:mb-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs uppercase tracking-[0.2em] text-sage-deep block mb-4",
					children: "Por que fazer terapia"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlurFade, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl md:text-5xl font-light leading-tight",
					children: "Um caminho de transformação para a sua vida."
				}) })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8",
				children: benefits.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlurFade, {
					delay: i * .1,
					className: "h-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group relative rounded-[2rem] bg-card border border-border/50 p-8 md:p-10 flex flex-col h-full",
						style: { boxShadow: "var(--shadow-soft)" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-7 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sage-soft/40 text-sage-deep",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {
									size: 22,
									strokeWidth: 1.5
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl font-medium mb-3 leading-snug",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground leading-relaxed",
								children: item.description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								"aria-hidden": true,
								className: "pointer-events-none absolute inset-x-0 bottom-0 h-1 rounded-b-[2rem] bg-gradient-to-r from-sage-soft to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
							})
						]
					})
				}, item.title))
			})]
		})
	});
}
var mariana_portrait_default = "/assets/mariana-portrait-DIbyQnCa.jpg";
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "sobre",
		className: "py-28 md:py-36 bg-beige/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6 grid md:grid-cols-12 gap-12 lg:gap-20 items-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-7 md:pt-6 space-y-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlurFade, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 rounded-full border border-sage/20 bg-white/50 backdrop-blur-sm px-4 py-1.5 text-[11px] md:text-xs text-sage-deep tracking-[0.15em] uppercase font-medium shadow-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Psicóloga Clínica" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sage/40",
									children: "•"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "CRP 06/00000" })
							]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlurFade, {
							delay: .05,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-3xl md:text-5xl font-light leading-tight",
								children: "Há mais de 12 anos acompanhando pessoas em momentos de transformação."
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4 text-muted-foreground leading-relaxed md:pr-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Sou Mariana Oliveira, psicóloga clínica formada pela USP, com especialização em Terapia Cognitivo-Comportamental e formação em Mindfulness aplicado à saúde mental." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Acredito em uma escuta sem julgamentos, onde cada história é acolhida em seu tempo. Meu trabalho é construir, junto com você, um caminho possível em direção ao bem-estar." })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlurFade, {
						delay: .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
							className: "border-l-2 border-sage pl-5 my-8 italic text-sage-deep font-light text-base md:text-lg leading-relaxed",
							children: "\"Acredito que o cuidado psicológico começa quando existe espaço para ser ouvido com respeito e acolhimento.\""
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlurFade, {
						delay: .15,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "grid grid-cols-3 gap-6 md:gap-8 py-8 border-y border-border/50 my-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-4xl md:text-5xl font-light tracking-tight text-sage-deep",
										children: "12+"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "text-sm text-muted-foreground font-medium",
										children: "Anos de prática"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-4xl md:text-5xl font-light tracking-tight text-sage-deep",
										children: "800+"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "text-sm text-muted-foreground font-medium",
										children: "Pacientes atendidos"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-4xl md:text-5xl font-light tracking-tight text-sage-deep",
										children: "CRP"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "text-sm text-muted-foreground font-medium",
										children: "06/00000"
									})]
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlurFade, {
						delay: .2,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative overflow-hidden rounded-[2rem] bg-white/40 backdrop-blur-md border border-white/60 p-8 md:p-10 shadow-elegant",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									"aria-hidden": true,
									className: "absolute -right-10 -top-10 h-32 w-32 rounded-full bg-sage-soft/10 blur-3xl pointer-events-none"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-sm font-semibold tracking-wider text-sage-deep uppercase mb-8",
									children: "Princípios Clínicos"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-8 sm:grid-cols-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "p-2.5 rounded-xl bg-sage-soft/30 text-sage-deep shadow-sm",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
														className: "h-5 w-5",
														strokeWidth: 1.5
													})
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
													className: "font-semibold text-foreground text-base",
													children: "Empatia"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm text-muted-foreground leading-relaxed",
												children: "Acolhimento genuíno que respeita o seu tempo e o seu ritmo, criando uma conexão segura e livre de julgamentos."
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "p-2.5 rounded-xl bg-sage-soft/30 text-sage-deep shadow-sm",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compass, {
														className: "h-5 w-5",
														strokeWidth: 1.5
													})
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
													className: "font-semibold text-foreground text-base",
													children: "Escuta Ativa"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm text-muted-foreground leading-relaxed",
												children: "Presença plena e atenção dedicada a cada detalhe, ajudando você a traduzir e compreender sentimentos complexos."
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "p-2.5 rounded-xl bg-sage-soft/30 text-sage-deep shadow-sm",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
														className: "h-5 w-5",
														strokeWidth: 1.5
													})
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
													className: "font-semibold text-foreground text-base",
													children: "Sigilo & Confidencialidade"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm text-muted-foreground leading-relaxed",
												children: "Compromisso ético inegociável que assegura a segurança e a privacidade de cada palavra compartilhada."
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "p-2.5 rounded-xl bg-sage-soft/30 text-sage-deep shadow-sm",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, {
														className: "h-5 w-5",
														strokeWidth: 1.5
													})
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
													className: "font-semibold text-foreground text-sm",
													children: "Ambiente Acolhedor"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm text-muted-foreground leading-relaxed",
												children: "Espaço físico e digital planejado com sensibilidade para inspirar tranquilidade, conforto e bem-estar absoluto."
											})]
										})
									]
								})
							]
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-5 md:-mt-6 space-y-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative group",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							"aria-hidden": true,
							className: "absolute -inset-8 bg-gradient-to-tr from-sage-soft/20 via-transparent to-beige-deep/10 rounded-[3rem] blur-2xl -z-10 pointer-events-none"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							"aria-hidden": true,
							className: "absolute -top-4 -right-4 hidden md:block h-48 w-48 rounded-[2.5rem] border border-sage/25 -z-10 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							"aria-hidden": true,
							className: "absolute -bottom-4 -left-4 hidden md:block h-24 w-24 rounded-[1.5rem] bg-beige-deep/25 -z-10 transition-transform duration-500 group-hover:-translate-x-1 group-hover:translate-y-1"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: mariana_portrait_default,
							alt: "Dra. Mariana Oliveira, psicóloga clínica",
							width: 896,
							height: 1152,
							loading: "lazy",
							className: "relative rounded-[2rem] object-cover w-full aspect-[4/5] transition-transform duration-500 group-hover:scale-[1.01]",
							style: { boxShadow: "var(--shadow-elegant)" }
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlurFade, {
					delay: .25,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-[2rem] bg-white/40 backdrop-blur-md border border-white/60 p-8 shadow-elegant relative overflow-hidden group",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								"aria-hidden": true,
								className: "absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-sage-soft/10 blur-3xl pointer-events-none"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-semibold text-sage-deep text-lg mb-5 transition-colors duration-300 group-hover:text-sage-deep/80",
								children: "Atendimento Online e Presencial"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "space-y-3.5",
								children: [
									"Terapia Cognitivo-Comportamental",
									"Ansiedade e Estresse",
									"Autoconhecimento",
									"Desenvolvimento Emocional"
								].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-3 text-sm text-muted-foreground transition-all duration-300 hover:translate-x-0.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage/10 text-sage transition-colors duration-300 group-hover:bg-sage/20",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
											className: "h-3 w-3",
											strokeWidth: 3
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-light",
										children: item
									})]
								}, item))
							})
						]
					})
				})]
			})]
		})
	});
}
var areas = [
	{
		icon: Heart,
		title: "Ansiedade",
		desc: "Compreender gatilhos e desenvolver recursos para uma rotina mais leve."
	},
	{
		icon: Brain,
		title: "Depressão",
		desc: "Acolhimento e estratégias para reencontrar sentido e motivação."
	},
	{
		icon: Users,
		title: "Relacionamentos",
		desc: "Conflitos afetivos, vínculos familiares e padrões repetitivos."
	},
	{
		icon: Sunrise,
		title: "Autoestima",
		desc: "Reconstrução da imagem de si e fortalecimento da autoconfiança."
	},
	{
		icon: Leaf,
		title: "Estresse e Burnout",
		desc: "Equilíbrio entre vida profissional, pessoal e cuidado emocional."
	},
	{
		icon: Compass,
		title: "Transições de vida",
		desc: "Maternidade, carreira, luto e outros momentos de redefinição."
	}
];
function Areas() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "areas",
		className: "py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6 grid md:grid-cols-12 gap-12 lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "md:col-span-4 md:sticky md:top-28 md:self-start",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs uppercase tracking-[0.2em] text-sage-deep",
						children: "Áreas de atendimento"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlurFade, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-3xl md:text-4xl lg:text-5xl font-light leading-tight",
						children: "Cuidado especializado para cada momento da sua vida."
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-8 h-px w-16 bg-sage/60" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-sm text-muted-foreground leading-relaxed max-w-xs",
						children: "Cada processo é único. As áreas abaixo são pontos de partida para um trabalho construído a dois."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "md:col-span-8 grid sm:grid-cols-2 gap-5",
				children: areas.map(({ icon: Icon, title, desc }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlurFade, {
					delay: i * .08,
					className: i % 2 === 1 ? "sm:translate-y-8" : "",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "p-8 rounded-3xl bg-card border border-border/70 hover:border-sage/40 transition-all duration-500 h-full hover:-translate-y-2 hover:shadow-lg",
						style: { boxShadow: "var(--shadow-soft)" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-11 w-11 rounded-2xl bg-sage/10 grid place-items-center text-sage-deep mb-5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "h-5 w-5",
									strokeWidth: 1.5
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg font-medium mb-2",
								children: title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground leading-relaxed",
								children: desc
							})
						]
					})
				}, title))
			})]
		})
	});
}
var steps = [
	{
		n: "01",
		title: "Primeiro contato",
		desc: "Uma conversa inicial para compreender sua necessidade e esclarecer dúvidas sobre o atendimento.",
		icon: MessageCircle,
		delay: .05
	},
	{
		n: "02",
		title: "Primeira sessão",
		desc: "Um momento de acolhimento e escuta, onde começamos a construir juntos um espaço de confiança.",
		icon: Calendar,
		delay: .1
	},
	{
		n: "03",
		title: "Processo terapêutico",
		desc: "Ao longo das sessões, trabalhamos emoções, pensamentos e comportamentos com respeito ao seu tempo.",
		icon: HeartHandshake,
		delay: .15
	},
	{
		n: "04",
		title: "Evolução e bem-estar",
		desc: "O objetivo é promover autonomia, autoconhecimento e uma relação mais saudável consigo mesmo.",
		icon: Sparkles,
		delay: .2
	}
];
function Process() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "processo",
		className: "py-32 md:py-36 bg-beige/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center max-w-3xl mx-auto mb-20 md:mb-28",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs uppercase tracking-[0.2em] text-sage-deep block mb-4",
						children: "Como funciona o acompanhamento"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlurFade, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl md:text-5xl font-light leading-tight",
						children: "Cada processo é único, mas você não precisa percorrê-lo sozinho."
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto",
						children: "Um espaço seguro para compreender emoções, desenvolver recursos internos e construir uma vida mais equilibrada."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative max-w-5xl mx-auto mt-16 md:mt-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: "absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-sage/20 -translate-x-1/2"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-12 md:space-y-16",
					children: steps.map((step, idx) => {
						const isEven = idx % 2 === 0;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative grid md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-0 items-center pl-12 md:pl-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute left-4 md:left-1/2 top-8 md:top-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white border border-sage/25 shadow-sm z-10 flex items-center justify-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-semibold tracking-wider text-sage-deep",
									children: step.n
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `flex w-full ${isEven ? "md:justify-end md:col-start-1" : "md:justify-start md:col-start-2"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlurFade, {
									delay: step.delay,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "w-full max-w-md rounded-3xl bg-white/50 backdrop-blur-sm border border-border/60 p-8 shadow-soft relative overflow-hidden group",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												"aria-hidden": true,
												className: "absolute -right-6 -top-6 h-20 w-20 rounded-full bg-sage-soft/10 blur-2xl pointer-events-none transition-transform duration-500 group-hover:scale-150"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-sage-soft/30 text-sage-deep shadow-sm transition-transform duration-500 group-hover:scale-105",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(step.icon, {
													size: 20,
													strokeWidth: 1.5
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "text-xl font-medium mb-3 leading-snug text-foreground",
												children: step.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm text-muted-foreground leading-relaxed",
												children: step.desc
											})
										]
									})
								})
							})]
						}, step.n);
					})
				})]
			})]
		})
	});
}
var Avatar = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar$1, {
	ref,
	className: cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className),
	...props
}));
Avatar.displayName = Avatar$1.displayName;
var AvatarImage = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarImage$1, {
	ref,
	className: cn("aspect-square h-full w-full", className),
	...props
}));
AvatarImage.displayName = AvatarImage$1.displayName;
var AvatarFallback = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback$1, {
	ref,
	className: cn("flex h-full w-full items-center justify-center rounded-full bg-muted", className),
	...props
}));
AvatarFallback.displayName = AvatarFallback$1.displayName;
var testimonials = [
	{
		quote: "Cheguei à terapia em um momento de muita ansiedade e insegurança. Aos poucos, fui aprendendo a compreender minhas emoções e a me tratar com mais gentileza.",
		name: "AC",
		age: "34 anos",
		location: "São Paulo",
		delay: .1
	},
	{
		quote: "Um ambiente leve, respeitoso e sem julgamentos. Hoje consigo lidar melhor com a ansiedade e as relações do dia a dia.",
		name: "MR",
		age: "29 anos",
		location: "Atendimento Online",
		delay: .2
	},
	{
		quote: "Aprendi a olhar para mim com mais gentileza. Foi um processo transformador e fundamental para o meu crescimento profissional.",
		name: "LF",
		age: "41 anos",
		location: "Executiva",
		delay: .3
	}
];
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "depoimentos",
		className: "py-32 md:py-36 bg-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center max-w-3xl mx-auto mb-16 md:mb-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs uppercase tracking-[0.2em] text-sage-deep block mb-4",
							children: "Depoimentos"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlurFade, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl md:text-5xl font-light leading-tight mb-6",
							children: "O cuidado começa pela confiança."
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto",
							children: "Relatos de pessoas que encontraram um espaço seguro para compreender emoções, fortalecer a autoestima e construir uma vida mais equilibrada."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center gap-6 mb-20 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-1 text-sage-deep",
						children: [...Array(5)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
							size: 20,
							fill: "currentColor",
							strokeWidth: 0
						}, i))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 md:grid-cols-3 gap-8 text-sm md:text-base text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Mais de 800 pacientes atendidos" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "12 anos de experiência clínica" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Atendimento online e presencial" })
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
					children: testimonials.map((t, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlurFade, {
						delay: t.delay,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex h-full flex-col rounded-3xl bg-white/50 backdrop-blur-sm border border-border/60 p-8 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-lg",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between items-start mb-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-1 text-sage-deep/50",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
												size: 16,
												fill: "currentColor",
												strokeWidth: 0
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
												size: 16,
												fill: "currentColor",
												strokeWidth: 0
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
												size: 16,
												fill: "currentColor",
												strokeWidth: 0
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
												size: 16,
												fill: "currentColor",
												strokeWidth: 0
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
												size: 16,
												fill: "currentColor",
												strokeWidth: 0
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, {
										className: "text-sage-deep/20",
										size: 32
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex-grow text-lg italic text-foreground leading-relaxed mb-8",
									children: [
										"\"",
										t.quote,
										"\""
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-4 mt-auto",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
										className: "h-12 w-12 bg-sage-deep/10 text-sage-deep",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, {
											className: "text-sm font-semibold",
											children: t.name
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-semibold text-foreground",
										children: t.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-sm text-muted-foreground",
										children: [
											t.age,
											" • ",
											t.location
										]
									})] })]
								})
							]
						})
					}, idx))
				})
			]
		})
	});
}
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
var faqs = [
	{
		q: "Como sei se preciso de terapia?",
		a: "Não há um momento certo. A terapia é um espaço de cuidado para qualquer pessoa que queira se compreender melhor, atravessar uma fase difícil ou desenvolver recursos emocionais."
	},
	{
		q: "Qual a duração e frequência das sessões?",
		a: "As sessões têm 50 minutos e geralmente acontecem uma vez por semana, no mesmo dia e horário. Em alguns casos podemos combinar outra frequência."
	},
	{
		q: "Atendimento online é tão eficaz quanto presencial?",
		a: "Sim. Estudos mostram resultados equivalentes. O atendimento online traz mais flexibilidade e mantém todo o sigilo profissional."
	},
	{
		q: "Como funciona o pagamento?",
		a: "O valor da sessão é combinado no primeiro contato. O pagamento pode ser feito por PIX ou transferência, semanal ou mensalmente."
	},
	{
		q: "Você emite recibo para reembolso?",
		a: "Sim. Emito recibos com todas as informações necessárias para solicitação de reembolso junto ao seu plano de saúde."
	}
];
function Faq() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "faq",
		className: "py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6 grid md:grid-cols-12 gap-12 lg:gap-16 items-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-5 md:sticky md:top-28 md:self-start",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs uppercase tracking-[0.2em] text-sage-deep",
						children: "Perguntas frequentes"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlurFade, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-3xl md:text-5xl font-light leading-tight",
						children: "Dúvidas comuns antes de começar."
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-sm text-muted-foreground leading-relaxed max-w-sm",
						children: "Se restar alguma dúvida, fico à disposição para conversar antes do primeiro encontro."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
				type: "single",
				collapsible: true,
				className: "md:col-span-7 space-y-3",
				children: faqs.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
					value: `item-${i}`,
					className: "border border-border/70 rounded-2xl px-6 bg-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
						className: "text-left text-base font-medium hover:no-underline py-5",
						children: f.q
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
						className: "text-muted-foreground leading-relaxed pb-5",
						children: f.a
					})]
				}, i))
			})]
		})
	});
}
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn(labelVariants(), className),
	...props
}));
Label.displayName = Root.displayName;
var Form = FormProvider;
var FormFieldContext = import_react.createContext(null);
var FormField = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormFieldContext.Provider, {
		value: { name: props.name },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Controller, { ...props })
	});
};
var useFormField = () => {
	const fieldContext = import_react.useContext(FormFieldContext);
	const itemContext = import_react.useContext(FormItemContext);
	const { getFieldState, formState } = useFormContext();
	if (!fieldContext) throw new Error("useFormField should be used within <FormField>");
	if (!itemContext) throw new Error("useFormField should be used within <FormItem>");
	const fieldState = getFieldState(fieldContext.name, formState);
	const { id } = itemContext;
	return {
		id,
		name: fieldContext.name,
		formItemId: `${id}-form-item`,
		formDescriptionId: `${id}-form-item-description`,
		formMessageId: `${id}-form-item-message`,
		...fieldState
	};
};
var FormItemContext = import_react.createContext(null);
var FormItem = import_react.forwardRef(({ className, ...props }, ref) => {
	const id = import_react.useId();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormItemContext.Provider, {
		value: { id },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref,
			className: cn("space-y-2", className),
			...props
		})
	});
});
FormItem.displayName = "FormItem";
var FormLabel = import_react.forwardRef(({ className, ...props }, ref) => {
	const { error, formItemId } = useFormField();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
		ref,
		className: cn(error && "text-destructive", className),
		htmlFor: formItemId,
		...props
	});
});
FormLabel.displayName = "FormLabel";
var FormControl = import_react.forwardRef(({ ...props }, ref) => {
	const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slot, {
		ref,
		id: formItemId,
		"aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
		"aria-invalid": !!error,
		...props
	});
});
FormControl.displayName = "FormControl";
var FormDescription = import_react.forwardRef(({ className, ...props }, ref) => {
	const { formDescriptionId } = useFormField();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		ref,
		id: formDescriptionId,
		className: cn("text-[0.8rem] text-muted-foreground", className),
		...props
	});
});
FormDescription.displayName = "FormDescription";
var FormMessage = import_react.forwardRef(({ className, children, ...props }, ref) => {
	const { error, formMessageId } = useFormField();
	const body = error ? String(error?.message ?? "") : children;
	if (!body) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		ref,
		id: formMessageId,
		className: cn("text-[0.8rem] font-medium text-destructive", className),
		...props,
		children: body
	});
});
FormMessage.displayName = "FormMessage";
var contactSchema = objectType({
	name: stringType().min(2, "Informe seu nome."),
	email: stringType().email("Informe um e-mail válido."),
	message: stringType().min(10, "A mensagem deve possuir pelo menos 10 caracteres.")
});
function Contact() {
	const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
	const form = useForm({
		resolver: u(contactSchema),
		mode: "onBlur",
		defaultValues: {
			name: "",
			email: "",
			message: ""
		}
	});
	async function onSubmit(data) {
		setIsSubmitting(true);
		try {
			await new Promise((resolve) => setTimeout(resolve, 1500));
			console.log(data);
			form.reset();
			toast.success("Mensagem enviada", {
				description: "Obrigado pelo contato. Retornarei em breve.",
				duration: 4e3
			});
		} catch (error) {
			toast.error("Não foi possível enviar a mensagem", {
				description: "Tente novamente em alguns instantes.",
				duration: 4e3
			});
		} finally {
			setIsSubmitting(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contato",
		className: "py-28 md:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center max-w-3xl mx-auto mb-20 md:mb-28",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs uppercase tracking-[0.2em] text-sage-deep block mb-4",
						children: "Contato"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlurFade, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl md:text-5xl font-light leading-tight",
						children: "Vamos conversar?"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-muted-foreground leading-relaxed max-w-2xl mx-auto",
						children: "Se você deseja iniciar sua jornada terapêutica ou possui alguma dúvida, entre em contato. Será um prazer acolher você."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-2 gap-10 items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-6",
					children: [
						{
							icon: MessageCircle,
							title: "WhatsApp",
							text: "Retorno em até 24 horas.",
							sub: "Segunda a sexta, das 09h às 18h."
						},
						{
							icon: Mail,
							title: "E-mail",
							text: "Envie sua mensagem a qualquer momento.",
							sub: "Resposta em horário comercial."
						},
						{
							icon: Clock3,
							title: "Horários",
							text: "Segunda a sexta",
							sub: "09h às 18h."
						}
					].map((card, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-[2rem] bg-white/40 backdrop-blur-md border border-white/60 shadow-soft p-7 transition-all duration-300 hover:-translate-y-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4 mb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "p-3 rounded-2xl bg-sage/10 text-sage-deep",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card.icon, {
										className: "h-6 w-6",
										strokeWidth: 1.5
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-semibold text-foreground text-lg",
									children: card.title
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-foreground font-medium text-base",
								children: card.text
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground text-sm",
								children: card.sub
							})
						]
					}, i))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative rounded-[2rem] bg-white/40 backdrop-blur-md border border-white/60 shadow-elegant p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: "absolute -right-10 -top-10 h-32 w-32 rounded-full bg-sage-soft/10 blur-3xl pointer-events-none"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Form, {
						...form,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: form.handleSubmit(onSubmit),
							className: "space-y-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
									control: form.control,
									name: "name",
									render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
										className: "space-y-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, {
												className: "text-sm font-medium text-foreground",
												children: "Nome"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												placeholder: "Seu nome",
												className: `rounded-2xl border-border/60 bg-background/60 focus-visible:ring-sage ${form.formState.errors.name ? "border-destructive" : ""}`,
												...field,
												disabled: isSubmitting
											}) }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, { className: "text-sm text-destructive" })
										]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
									control: form.control,
									name: "email",
									render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
										className: "space-y-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, {
												className: "text-sm font-medium text-foreground",
												children: "E-mail"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												type: "email",
												placeholder: "seuemail@exemplo.com",
												className: `rounded-2xl border-border/60 bg-background/60 focus-visible:ring-sage ${form.formState.errors.email ? "border-destructive" : ""}`,
												...field,
												disabled: isSubmitting
											}) }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, { className: "text-sm text-destructive" })
										]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
									control: form.control,
									name: "message",
									render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
										className: "space-y-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, {
												className: "text-sm font-medium text-foreground",
												children: "Mensagem"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
												placeholder: "Conte um pouco sobre como posso ajudar.",
												className: `rounded-2xl border-border/60 bg-background/60 focus-visible:ring-sage min-h-[150px] ${form.formState.errors.message ? "border-destructive" : ""}`,
												...field,
												disabled: isSubmitting
											}) }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, { className: "text-sm text-destructive" })
										]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "submit",
									disabled: isSubmitting || !form.formState.isValid,
									className: "rounded-full shadow-soft transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] w-full lg:w-auto h-12 px-8 gap-2 disabled:opacity-50 disabled:pointer-events-none",
									"aria-label": "Enviar formulário de contato",
									children: isSubmitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), "Enviando..."] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Enviar mensagem", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })] })
								})
							]
						})
					})]
				})]
			})]
		})
	});
}
function CtaFinal() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "contato",
		className: "relative py-24 md:py-40 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "absolute inset-0 bg-gradient-to-b from-beige/20 via-transparent to-transparent pointer-events-none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "absolute -top-1/2 -right-1/4 h-[800px] w-[800px] rounded-full bg-sage-deep/5 blur-[120px] pointer-events-none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-4xl px-6 relative",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-[3rem] bg-white/40 backdrop-blur-md border border-white/60 shadow-elegant p-10 md:p-16 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlurFade, {
							delay: .2,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs uppercase tracking-[0.3em] text-sage-deep font-medium",
								children: "PRONTO PARA COMEÇAR?"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlurFade, {
							delay: .3,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-6 text-4xl md:text-6xl font-light leading-tight",
								children: "Um espaço seguro para cuidar da sua saúde emocional."
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlurFade, {
							delay: .4,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 flex flex-col items-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Avatar, {
									className: "h-20 w-20 border-2 border-white shadow-md",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarImage, {
										src: mariana_portrait_default,
										alt: "Dra. Mariana Oliveira"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, { children: "MO" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-semibold text-foreground text-lg",
										children: "Dra. Mariana Oliveira"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground",
										children: "CRP 06/00000 • 12 anos de experiência"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground",
										children: "+800 pacientes atendidos"
									})
								] })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlurFade, {
							delay: .5,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-foreground max-w-xl mx-auto",
								children: [
									"Atendimento online e presencial",
									"Sigilo profissional garantido",
									"Horários flexíveis",
									"Ambiente acolhedor"
								].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 justify-center md:justify-start",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
										className: "text-sage-deep",
										size: 18
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
								}, item))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlurFade, {
							delay: .6,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-12",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									className: "rounded-full px-10 py-8 h-auto bg-sage-deep text-white shadow-soft hover:scale-[1.02] transition-all duration-300 text-lg",
									"aria-label": "Agendar conversa inicial pelo WhatsApp",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "https://wa.me/5500000000000",
										target: "_blank",
										rel: "noopener noreferrer",
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { size: 24 }), "Agendar conversa inicial"]
									})
								})
							})
						})
					]
				})
			})
		]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-beige/40 border-t border-border/50 pt-20 pb-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 pb-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "h-6 w-6 rounded-full bg-sage/20 grid place-items-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-sage" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-foreground tracking-tight",
								children: "Dra. Mariana Oliveira"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-sage-deep",
							children: "Psicóloga Clínica • CRP 06/00000"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground leading-relaxed",
							children: "\"Acolhimento, escuta e cuidado em cada etapa do processo terapêutico.\""
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium text-foreground",
						children: "Menu"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-3 text-sm text-muted-foreground",
						children: [
							{
								href: "#sobre",
								label: "Sobre"
							},
							{
								href: "#areas",
								label: "Áreas de atuação"
							},
							{
								href: "#processo",
								label: "Processo"
							},
							{
								href: "#depoimentos",
								label: "Depoimentos"
							},
							{
								href: "#faq",
								label: "Dúvidas frequentes"
							}
						].map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: link.href,
							className: "transition-colors duration-300 hover:text-sage-deep",
							children: link.label
						}) }, link.href))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium text-foreground",
						children: "Contato"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-3 text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "flex items-center gap-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "https://wa.me/5511999999999",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "flex items-center gap-2 transition-colors duration-300 hover:text-sage-deep",
									"aria-label": "Conversar pelo WhatsApp",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), "WhatsApp"]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "flex items-center gap-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "mailto:contato@dramarianaoliveira.com.br",
									className: "flex items-center gap-2 transition-colors duration-300 hover:text-sage-deep",
									"aria-label": "Enviar um e-mail",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" }), "Email"]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "flex items-center gap-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#",
									className: "flex items-center gap-2 transition-colors duration-300 hover:text-sage-deep",
									"aria-label": "Seguir no Instagram",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-4 w-4" }), "Instagram"]
								})
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium text-foreground",
						children: "Atendimento"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-3 text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Laptop, { className: "h-4 w-4" }), "Atendimento online"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4" }), "Presencial em São Paulo"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, { className: "h-4 w-4" }), "Horários flexíveis"]
							})
						]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl px-6 pt-10 border-t border-border/50",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Dra. Mariana Oliveira. Todos os direitos reservados."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Sigilo profissional garantido conforme o Código de Ética do CFP." })]
			})
		})]
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Benefits, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Areas, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Process, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Faq, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaFinal, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Index as component };
