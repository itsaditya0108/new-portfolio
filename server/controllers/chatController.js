const { basePrompt } = require("../utils/aiPrompts");
const { generateGeminiReply } = require("../utils/geminiClient");

const handleChat = async (req, res) => {
    try {
        const { message, history = [] } = req.body;

        if (!message) {
            return res.status(400).json({ message: "Message is required" });
        }

        const historyText = history
            .map((msg) => {
                const speaker = msg.role === "assistant" ? "Assistant" : "User";
                return `${speaker}: ${msg.content}`;
            })
            .join("\n");

        const fullPrompt = `
${basePrompt}

Conversation so far:
${historyText}

User: ${message}
Assistant:
    `;

        const reply = await generateGeminiReply(fullPrompt);

        return res.json({ reply });
    } catch (error) {
        console.error("Chat error:", error);

        return res.status(500).json({
            reply:
                "Something went wrong with the AI service. But I’m Aditya’s AI assistant. Ask me anything about his skills, projects, or experience.",
        });
    }
};

module.exports = { handleChat };
