import { motion } from "framer-motion";

const WhyHireMe = () => {
    return (

        <section
            id="why-hire-me"
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

            <div className="max-w-5xl mx-auto space-y-6 text-center md:text-left">
                <motion.h2
                    className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                >
                    Why Should You Hire Me?
                </motion.h2>

                <motion.p
                    className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    I enjoy taking ideas from zero to a working product — from designing the UI,
                    building the frontend, wiring the backend, and recently integrating AI features.
                    I learn fast, write clean code, and I&apos;m comfortable working across both
                    Java-based and MERN-based stacks.
                </motion.p>

                <motion.p
                    className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-8"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                >
                    In this short video, I talk about my background, how I solve problems, and why I’d be a good fit for frontend, backend, and AI-related roles. My voice is a bit unclear because I’ve had a cold recently, but I still wanted to share this.
                </motion.p>

                {/* Video */}
                <motion.div
                    className="w-full max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-lg 
               border border-gray-200 dark:border-neutral-700 bg-black"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {/* Mobile = taller video, Desktop = normal 16:9 */}
                    <div className="relative w-full pt-[120%] md:pt-[56.25%]">
                        <video
                            className="absolute top-0 left-0 w-full h-full rounded-2xl object-cover"
                            controls
                            preload="metadata"
                        >
                            <source src="/video/why-hire-me.mp4" type="video/mp4" />
                        </video>
                    </div>


                </motion.div>



            </div>
        </section>

    );
};

export default WhyHireMe;


// why-hire-me.mp4