const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello from AWS EKS CI/CD Pipeline!");
});

app.get("/health", (req, res) => {
    res.json({
        status: "UP"
    });
});

app.listen(3000, () => {
    console.log("Application running on port 3000");
});