import { useState } from "react";

const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.name || !form.email || !form.message) {
            setStatus("Please fill out all fields.");
            return;
        }

        setStatus("Message sent! I’ll get back to you soon.");
        setForm({ name: "", email: "", message: "" });
    };

    return (
        <section
            id="contact"
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

            <div className="max-w-3xl mx-auto space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center md:text-left">
                    Contact
                </h2>

                <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 text-center md:text-left">
                    Want to talk about an opportunity, internship, or project? Send me a
                    message and I&apos;ll get back to you as soon as I can.
                </p>

                <form
                    className="grid gap-5 bg-white dark:bg-neutral-900/70 p-6 rounded-2xl shadow-md dark:shadow-none backdrop-blur-sm border border-gray-200 dark:border-neutral-700"
                    onSubmit={handleSubmit}
                >
                    <div className="grid gap-1">
                        <label
                            htmlFor="name"
                            className="text-sm font-medium text-gray-800 dark:text-gray-100"
                        >
                            Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            className="px-4 py-2 rounded-lg border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-sm md:text-base outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
                        />
                    </div>

                    <div className="grid gap-1">
                        <label
                            htmlFor="email"
                            className="text-sm font-medium text-gray-800 dark:text-gray-100"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            className="px-4 py-2 rounded-lg border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-sm md:text-base outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
                        />
                    </div>

                    <div className="grid gap-1">
                        <label
                            htmlFor="message"
                            className="text-sm font-medium text-gray-800 dark:text-gray-100"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Tell me a bit about what you have in mind..."
                            className="px-4 py-2 rounded-lg border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-sm md:text-base outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition resize-y"
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-2 w-full inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-500 text-white text-sm md:text-base font-medium hover:scale-105 active:scale-95 transition shadow-md"
                    >
                        Send Message
                    </button>

                    {status && (
                        <p className="text-xs md:text-sm mt-2 text-gray-700 dark:text-gray-300 text-center">
                            {status}
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
};

export default Contact;
