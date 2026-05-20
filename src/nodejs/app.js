const express = require("express");
const { execSync } = require("child_process");
const fs = require("fs");

const app = express();

app.get("/exec", (req, res) => {
    // Potential command injection vulnerability for testing
    const output = execSync(`echo ${req.query.cmd}`);
    res.send(output.toString());
});

app.get("/read", (req, res) => {
    // Potential path traversal vulnerability for testing
    const content = fs.readFileSync(`./files/${req.query.file}`);
    res.send(content);
});

app.listen(3000, () => console.log("Server running on port 3000"));
