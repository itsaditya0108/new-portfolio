const express = require("express");
const { getProjects } = require("../controllers/projectControllers");

const router = express.Router();

router.get("/", getProjects);

module.exports = router;
