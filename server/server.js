const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const projectRoutes = require("./routes/projects");
const certificationRoutes = require("./routes/certifications");
const chatRoutes = require("./routes/chat");
const skillRoutes = require("./routes/skills");

const app = express(); // <-- define app first
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/projects", projectRoutes);
app.use("/api/certifications", certificationRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/skills", skillRoutes); // <-- move after app definition

// Root route
app.get("/", (req, res) => {
    res.json({ message: "API is running 🚀" });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
