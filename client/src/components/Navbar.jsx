import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Why Hire Me", href: "#why-hire-me" },
    { label: "Contact", href: "#contact" },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("#hero");

    useEffect(() => {
        const handleScroll = () => {
            let current = "#hero";
            navLinks.forEach((link) => {
                const section = document.querySelector(link.href);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= 120 && rect.bottom >= 120) {
                        current = link.href;
                    }
                }
            });
            setActive(current);
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (href) => {
        setOpen(false);
        setTimeout(() => {
            setActive(href);
            const el = document.querySelector(href);
            if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }, 250);
    };



    return (
        <nav className="fixed top-0 left-0 w-full z-50">
            {/* Navbar background */}
            <div className="bg-gradient-to-b from-slate-100/80 via-slate-100/70 to-slate-100/80 dark:from-neutral-900/80 dark:via-neutral-850/80 dark:to-neutral-900/80 backdrop-blur-xl border-b border-gray-200/40 dark:border-neutral-700 shadow-sm">
                <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

                    {/* Logo */}
                    <motion.div
                        className="font-bold text-2xl tracking-tight select-none"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
                            Aditya
                        </span>{" "}
                        Verma
                    </motion.div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-10 text-[15px] font-medium">
                        {navLinks.map((link) => (
                            <button
                                key={link.href}
                                onClick={() => handleNavClick(link.href)}
                                className={`relative pb-1 transition-colors ${active === link.href
                                    ? "text-blue-600 dark:text-blue-400"
                                    : "text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
                                    }`}
                            >
                                {link.label}
                                <span
                                    className={`absolute left-0 -bottom-0.5 h-[3px] rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ${active === link.href ? "w-full" : "w-0 group-hover:w-full"
                                        }`}
                                />
                            </button>
                        ))}
                    </div>

                    {/* Desktop Theme Toggle */}
                    <div className="hidden md:block">
                        <ThemeToggle />
                    </div>

                    {/* Mobile Controls */}
                    <div className="md:hidden flex items-center gap-3">
                        <ThemeToggle />
                        <button
                            onClick={() => setOpen(!open)}
                            className="flex flex-col gap-[4px] p-2 rounded-lg border border-gray-300 dark:border-neutral-700 hover:bg-gray-200 dark:hover:bg-neutral-800 transition"
                        >
                            <span
                                className={`h-[2px] w-6 bg-gray-800 dark:bg-gray-100 transition-transform ${open ? "rotate-45 translate-y-[6px]" : ""
                                    }`}
                            />
                            <span
                                className={`h-[2px] w-6 bg-gray-800 dark:bg-gray-100 transition-opacity ${open ? "opacity-0" : ""
                                    }`}
                            />
                            <span
                                className={`h-[2px] w-6 bg-gray-800 dark:bg-gray-100 transition-transform ${open ? "-rotate-45 -translate-y-[6px]" : ""
                                    }`}
                            />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        className="md:hidden bg-gradient-to-b from-slate-100/95 via-slate-100/80 to-slate-100/95 dark:from-neutral-900/95 dark:via-neutral-850/80 dark:to-neutral-900/95 backdrop-blur border-b border-gray-200 dark:border-neutral-700 shadow-lg"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                    >
                        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-4 text-[16px] font-medium">
                            {navLinks.map((link) => (
                                <button
                                    key={link.href}
                                    onClick={() => handleNavClick(link.href)}
                                    className={`relative pb-1 transition-colors group ${active === link.href
                                        ? "text-blue-600 dark:text-blue-400"
                                        : "text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
                                        }`}
                                >
                                    {link.label}
                                    <span
                                        className={`absolute left-0 -bottom-0.5 h-[3px] rounded-full bg-gradient-to-r transition-all duration-300 ${active === link.href ? "w-full" : "w-0 group-hover:w-full"
                                            }`}
                                    />
                                </button>

                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
