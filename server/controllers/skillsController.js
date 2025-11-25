const fs = require("fs");
const path = require("path");

const skillsFilePath = path.join(__dirname, "../utils/data/skills.json");

const getSkills = (req, res) => {
    try {
        const data = fs.readFileSync(skillsFilePath, "utf-8");
        const skills = JSON.parse(data);
        res.json(skills);
    } catch (error) {
        console.error("Error reading skills.json:", error);
        res.status(500).json({ message: "Failed to load skills" });
    }
};

module.exports = { getSkills };
