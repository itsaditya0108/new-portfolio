import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import api from "../utils/api";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await api.get("/projects");
                setProjects(res.data);
            } catch (err) {
                console.error(err);
                setError("Failed to load projects");
            } finally {
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    if (loading)
        return <p className="text-center py-12 text-gray-700 dark:text-gray-300">Loading projects...</p>;
    if (error)
        return <p className="text-center py-12 text-red-500">{error}</p>;

    return (
        <section
            id="projects"
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

            <motion.h2
                className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center md:text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
            >
                Projects
            </motion.h2>

            <motion.div
                className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
            >
                {projects.map((p) => (
                    <motion.div
                        key={p.id}
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        className="rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition min-h-[320px]"
                    >
                        <ProjectCard {...p} />
                    </motion.div>
                ))}
            </motion.div>
        </section>

    );
};

export default Projects;
