/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const ProjectCard = ({ title, description, tech, github, live, image }) => {
    // Click handler for the entire card
    const handleCardClick = () => {
        if (live && live.trim() !== "") {
            window.open(live, "_blank"); // open live link in new tab
        }
    };

    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            className="border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transform transition bg-white/80 dark:bg-neutral-900/80 flex flex-col h-full cursor-pointer"
            onClick={handleCardClick}
        >
            {/* Image with fixed height */}
            {image && (
                <div className="w-full h-56 md:h-64 relative overflow-hidden flex-shrink-0">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                </div>
            )}

            {/* Content */}
            <div className="p-4 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 flex-1">{description}</p>

                {/* Tech badges */}
                {tech?.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                        {tech.map((t) => (
                            <span
                                key={t}
                                className="text-xs md:text-sm px-2 py-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                )}

                {/* Links */}
                <div className="flex gap-3 text-sm mt-3">
                    {github && (
                        <a
                            href={github}
                            target="_blank"
                            rel="noreferrer"
                            className="underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            onClick={(e) => e.stopPropagation()} // Prevent card click
                        >
                            GitHub
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
