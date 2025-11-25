import { useState, useRef, useEffect } from "react";
import api from "../utils/api";

/* eslint-disable react/prop-types */
const ChatWindow = ({ onClose }) => {
    const [messages, setMessages] = useState([
        {
            role: "assistant",
            content:
                "Hi! I'm Aditya's AI assistant. Ask me anything about his projects, skills, or experience.",
        },
    ]);

    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const scrollRef = useRef(null);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = { role: "user", content: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setLoading(true);

        try {
            const res = await api.post("/chat", {
                message: userMessage.content,
                history: messages,
            });

            const botMessage = {
                role: "assistant",
                content: res.data.reply,
            };

            setMessages((prev) => [...prev, botMessage]);
        } catch (error) {
            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content: "Sorry, something went wrong.",
                },
            ]);
        }

        setLoading(false);
    };

    // Scroll to bottom on new message
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, loading]);

    return (
        <div className="fixed bottom-24 right-6 w-80 md:w-96 bg-white/95 dark:bg-neutral-900/95 rounded-xl shadow-2xl border border-gray-200 dark:border-neutral-700 z-50 flex flex-col overflow-hidden backdrop-blur-md">

            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 flex justify-between items-center">
                <h3 className="font-semibold text-sm md:text-base">Aditya's Assistant</h3>
                <button
                    onClick={onClose}
                    className="text-white text-xl hover:text-gray-200 transition"
                >
                    ×
                </button>
            </div>

            {/* Messages */}
            <div
                ref={scrollRef}
                className="flex-1 overflow-y-auto p-4 flex flex-col gap-2 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-neutral-700 scrollbar-track-gray-100 dark:scrollbar-track-neutral-900"
            >
                {messages.map((msg, idx) => (
                    <div
                        key={idx}
                        className={`max-w-[80%] px-3 py-2 rounded-xl text-sm break-words ${msg.role === "assistant"
                                ? "bg-gray-100 dark:bg-neutral-800 self-start text-gray-800 dark:text-gray-200"
                                : "bg-blue-600 text-white self-end ml-auto"
                            }`}
                    >
                        {msg.content}
                    </div>
                ))}
                {loading && (
                    <div className="self-start text-gray-500 dark:text-gray-400 text-sm animate-pulse">
                        Thinking...
                    </div>
                )}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-gray-200 dark:border-neutral-700 flex gap-2 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md">
                <input
                    className="flex-1 px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Type a message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                />
                <button
                    onClick={handleSend}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-500 text-white rounded-lg text-sm hover:scale-105 active:scale-95 transition transform"
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default ChatWindow;
