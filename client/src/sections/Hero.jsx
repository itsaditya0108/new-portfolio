import { motion } from "framer-motion";

const techTags = [
    "React & Tailwind",
    "Node.js & Express",
    "MongoDB & MySQL",
    "AI / Gemini Chatbot",
];

const Hero = () => {
    return (
        <section
            id="hero"
            className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8
             bg-gradient-to-br from-white/90 via-slate-50/80 to-white/90
             dark:from-neutral-800 dark:via-neutral-850 dark:to-neutral-800
             text-gray-900 dark:text-gray-100 overflow-hidden rounded-2xl"
        >
            {/* Decorative floating blobs */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute w-72 h-72 bg-blue-400/20 rounded-full top-10 left-[-4rem] animate-blob" />
                <div className="absolute w-96 h-96 bg-purple-400/20 rounded-full top-20 right-[-6rem] animate-blob animation-delay-2000" />
            </div>

            <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center md:justify-between gap-12 md:gap-16">
                {/* Left side text */}
                <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
                    {/* ROLE PILL */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-indigo-800 text-xs md:text-sm text-blue-700 dark:text-blue-300"
                    >
                        <span className="w-2 h-2 rounded-full bg-green-500" />
                        Full Stack Developer • MERN & Java
                    </motion.div>

                    {/* NAME */}
                    <motion.h1
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.6 }}
                    >
                        Hi, I&apos;m{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Aditya
                        </span>
                    </motion.h1>

                    {/* SUBTEXT */}
                    <motion.p
                        className="text-sm md:text-base text-gray-700 dark:text-gray-300 max-w-lg leading-relaxed"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        I build responsive, modern web applications using{" "}
                        <span className="font-semibold text-blue-600 dark:text-blue-400">
                            React, Node.js, and MongoDB
                        </span>
                        , and also work with{" "}
                        <span className="font-semibold text-purple-500 dark:text-purple-400">
                            Core Java
                        </span>
                        . Recently, I&apos;ve been integrating AI (Gemini) into my projects.
                    </motion.p>

                    {/* TECH TAGS */}
                    <motion.div
                        className="flex flex-wrap justify-center md:justify-start gap-2 text-xs md:text-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.25, duration: 0.5 }}
                    >
                        {techTags.map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 rounded-full bg-gray-100 dark:bg-neutral-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition"
                            >
                                {tag}
                            </span>
                        ))}
                    </motion.div>

                    {/* BUTTONS */}
                    <motion.div
                        className="mt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <a
                            href="#projects"
                            className="px-7 py-3 bg-gradient-to-r from-blue-600 to-purple-500 text-white rounded-xl text-sm md:text-base font-medium shadow-md hover:scale-105 active:scale-95 transition transform"
                        >
                            View Projects
                        </a>
                        <a
                            href="#contact"
                            className="px-7 py-3 rounded-xl bg-white/40 dark:bg-white/10 backdrop-blur-md text-gray-900 dark:text-white text-sm md:text-base font-medium shadow-sm hover:scale-105 active:scale-95 transition transform"
                        >
                            Contact Me
                        </a>
                    </motion.div>
                </div>

                {/* Right side floating image */}
                <motion.div
                    className="flex-1 w-64 md:w-96 lg:w-[28rem] relative mb-6 md:mb-0"
                    initial={{ y: 0 }}
                    animate={{ y: [0, -15, 0] }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                    }}
                >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 blur-3xl opacity-50 md:animate-pulseGlow" />
                    <div className="relative w-full h-full rounded-full overflow-hidden border border-gray-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 shadow-xl">
                        <img
                            src="/aditya.jpg"
                            alt="Aditya Verma"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
