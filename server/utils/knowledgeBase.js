const fs = require("fs");
const path = require("path");

const projectsPath = path.join(__dirname, "data/projects.json");
const certificationsPath = path.join(__dirname, "data/certifications.json");
const skillsPath = path.join(__dirname, "data/skills.json");

const getKnowledgeBase = () => {
    const projects = JSON.parse(fs.readFileSync(projectsPath, "utf-8"));
    const certifications = JSON.parse(fs.readFileSync(certificationsPath, "utf-8"));
    const skills = JSON.parse(fs.readFileSync(skillsPath, "utf-8"));

    return { projects, certifications, skills };
};

module.exports = { getKnowledgeBase };
