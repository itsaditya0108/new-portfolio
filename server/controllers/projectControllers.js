const projects = require("../utils/data/projects.json");

const getProjects = (req, res) => {
    return res.json(projects);
};

module.exports = { getProjects };
