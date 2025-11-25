import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaCode, FaTools } from "react-icons/fa";

const cards = [
    { title: "Location", value: "Mumbai, Maharashtra", icon: <FaMapMarkerAlt className="text-blue-500 dark:text-blue-400 w-6 h-6" /> },
    { title: "Focus", value: "Full Stack, AI features, clean UI", icon: <FaCode className="text-purple-500 dark:text-purple-400 w-6 h-6" /> },
    { title: "Tech Stack", value: "React, Node.js, Express, MongoDB, Java", icon: <FaTools className="text-green-500 dark:text-green-400 w-6 h-6" /> },
];

const About = () => {
    return (
        <section
            id="about"
            className="relative py-16 px-4 sm:px-6 lg:px-8
             bg-gradient-to-br from-white/90 via-slate-50/80 to-white/90
             dark:from-neutral-800 dark:via-neutral-850 dark:to-neutral-800
             text-gray-900 dark:text-gray-100 overflow-hidden rounded-2xl"
        >
            {/* Decorative blobs */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute w-72 h-72 bg-blue-400/10 rounded-full top-10 left-[-4rem] animate-blob" />
                <div className="absolute w-96 h-96 bg-purple-400/10 rounded-full bottom-0 right-[-6rem] animate-blob animation-delay-2000" />
            </div>

            <div className="max-w-5xl mx-auto flex flex-col items-center md:items-start space-y-6">
                {/* Heading */}
                <motion.h2
                    className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                >
                    About Me
                </motion.h2>

                {/* Paragraphs */}
                <motion.div
                    className="space-y-4 text-center md:text-left"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                        I&apos;m <span className="font-semibold">Aditya Verma</span>, a Full
                        Stack Developer with experience in both <span className="font-semibold">MERN</span> and{" "}
                        <span className="font-semibold">Core Java</span>. I enjoy taking ideas
                        from concept to working product with clean UI, reliable backend, and smooth UX.
                    </p>

                    <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                        I&apos;ve built projects like a job portal, AI-powered UI generator, and a Java-based book marketplace. Focused on maintainable code and modern UX across frontend, backend, and AI.
                    </p>
                </motion.div>

                {/* Quick info cards with icons */}
                <motion.div
                    className="grid gap-6 sm:grid-cols-3 mt-8 w-full"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.15 } },
                    }}
                >
                    {cards.map((card) => (
                        <motion.div
                            key={card.title}
                            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                            className="rounded-xl border border-gray-200 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900/70 px-5 py-4 text-xs md:text-sm flex flex-col items-center gap-2 justify-center min-h-[120px] transition transform hover:-translate-y-1 hover:shadow-lg"
                        >
                            <div className="mb-1">{card.icon}</div>
                            <div className="font-semibold text-gray-900 dark:text-white text-sm md:text-base text-center">{card.title}</div>
                            <div className="text-gray-700 dark:text-gray-300 text-sm md:text-base text-center">{card.value}</div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Buttons */}
                <motion.div
                    className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <a
                        href="https://github.com/itsaditya0108"
                        target="_blank"
                        rel="noreferrer"
                        className="px-5 py-2.5 rounded-xl border border-gray-300 dark:border-neutral-700 text-sm md:text-base hover:bg-gray-100 dark:hover:bg-neutral-800 transition"
                    >
                        GitHub Profile
                    </a>
                    <a
                        href="#projects"
                        className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-500 text-white text-sm md:text-base font-medium hover:scale-105 active:scale-95 transition shadow-sm"
                    >
                        View My Work
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
