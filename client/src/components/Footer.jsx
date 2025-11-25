const Footer = () => {
    return (
        <footer className="mt-16 py-8 border-t border-gray-200 dark:border-neutral-700 bg-gradient-to-r from-white/90 via-slate-100/80 to-white/90 dark:from-indigo-900 dark:via-indigo-950 dark:to-indigo-900 text-gray-900 dark:text-white rounded-t-2xl">
            <div className="max-w-5xl mx-auto px-4 flex flex-col items-center gap-3 text-center">
                <p className="text-sm md:text-base">
                    © {new Date().getFullYear()} Aditya Verma. All rights reserved.
                </p>
                <div className="flex gap-4 text-sm">
                    <a
                        href="https://github.com/itsaditya0108"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline hover:text-blue-600 dark:hover:text-blue-400 transition"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/aditya-verma-86b726304/"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline hover:text-blue-600 dark:hover:text-blue-400 transition"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="#contact"
                        className="hover:underline hover:text-blue-600 dark:hover:text-blue-400 transition"
                    >
                        Contact
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
