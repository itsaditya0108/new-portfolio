import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const ThemeToggle = () => {
    const [dark, setDark] = useState(() => {
        const saved = localStorage.getItem("theme");
        if (saved) return saved === "dark";
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    });

    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [dark]);

    return (
        <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-lg border border-gray-300 dark:border-neutral-700 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
        >
            {dark ? (
                <SunIcon className="w-5 h-5 text-yellow-400" />
            ) : (
                <MoonIcon className="w-5 h-5 text-gray-800 dark:text-gray-200" />
            )}
        </button>
    );
};

export default ThemeToggle;
