const { GoogleGenerativeAI } = require("@google/generative-ai");
const { getKnowledgeBase } = require("./knowledgeBase");

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
    console.warn("⚠️ GEMINI_API_KEY is missing. AI responses will be fallback.");
}

const getModel = () => {
    if (!apiKey) return null;
    const genAI = new GoogleGenerativeAI(apiKey);
    return genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
};

/**
 * Generates a short, accurate response from Gemini AI using knowledge base
 * @param {string} userPrompt - The user question
 */
const generateGeminiReply = async (userPrompt) => {
    const model = getModel();
    if (!model) return "Gemini API key is not configured. But I’m Aditya’s AI assistant!";

    const { projects, certifications, skills } = getKnowledgeBase();

    // Build dynamic prompt with actual data
    const basePrompt = `
You are an AI assistant representing Aditya Verma, a Full Stack Developer.

Here is his knowledge base:

Skills:
${skills.map(s => `- ${s.name}: ${s.level}`).join("\n")}

Projects:
${projects.map(p => `- ${p.title}: ${p.description} (Tech: ${p.tech.join(", ")})`).join("\n")}

Certifications:
${certifications.map(c => `- ${c.title}: ${c.description}`).join("\n")}

Your job:
- Answer questions about his skills, projects, certifications, and experience.
- Keep your answers short (1-3 sentences) unless explicitly asked for details.
- Maintain a friendly, helpful, and professional tone.
- Avoid Markdown unless specifically requested.
`;

    const prompt = `${basePrompt}\n\nUser: ${userPrompt}\nAI:`;

    try {
        const result = await model.generateContent(prompt, {
            maxOutputTokens: 120,
            temperature: 0.7,
        });

        // Clean up any Markdown formatting
        return result.response.text().trim().replace(/[*_]/g, "");
    } catch (error) {
        console.error("Gemini API error:", error);
        return "Sorry, something went wrong. Please try again.";
    }
};

module.exports = { generateGeminiReply };
