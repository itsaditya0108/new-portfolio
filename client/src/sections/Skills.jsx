import { motion } from "framer-motion";

const skillsData = [
    { title: "Languages", items: ["Java", "JavaScript (ES6+)", "SQL"] },
    { title: "Frontend", items: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "jQuery"] },
    { title: "Backend", items: ["Node.js", "Express.js"] },
    { title: "Databases", items: ["MongoDB", "MySQL"] },
    { title: "Tools", items: ["Git", "GitHub", "Postman"] },
    { title: "Concepts", items: ["REST APIs", "JWT Authentication", "Responsive Web Design", "Object-Oriented Programming"] },
];

const Skills = () => {
    return (
        <section
            id="skills"
            className="relative py-16 px-4 sm:px-6 lg:px-8
             bg-gradient-to-br from-white/90 via-slate-50/80 to-white/90
             dark:from-neutral-800 dark:via-neutral-850 dark:to-neutral-800
             text-gray-900 dark:text-gray-100 overflow-hidden rounded-2xl"
        >
            {/* Decorative blobs */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute w-64 h-64 bg-blue-400/10 rounded-full top-10 left-[-4rem] animate-blob" />
                <div className="absolute w-96 h-96 bg-purple-400/10 rounded-full bottom-0 right-[-6rem] animate-blob animation-delay-2000" />
            </div>

            {/* Heading */}
            <motion.h2
                className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
            >
                Skills
            </motion.h2>

            <motion.p
                className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-8 max-w-2xl"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                Here are the core technologies and concepts I work with across frontend,
                backend, and databases.
            </motion.p>

            {/* Skills grid */}
            <motion.div
                className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
            >
                {skillsData.map((group) => (
                    <motion.div
                        key={group.title}
                        variants={{
                            hidden: { opacity: 0, y: 10 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        className="border border-gray-200 dark:border-neutral-700 rounded-xl p-6 bg-white/70 dark:bg-neutral-900/70 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition"
                    >
                        <h3 className="text-base md:text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                            {group.title}
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {group.items.map((skill) => (
                                <span
                                    key={skill}
                                    className="text-xs md:text-sm px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium shadow-sm"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Skills;
