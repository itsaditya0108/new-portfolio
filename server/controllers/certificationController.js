const certifications = require("../utils/data/certifications.json");

const getCertifications = (req, res) => {
    return res.json(certifications);
};

module.exports = { getCertifications };
