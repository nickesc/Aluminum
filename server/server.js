const express = require("express");
const path = require("path");
const TimesheetApp = require("../app/app").TimesheetApp

// URL
const url = "http://localhost"

// Setup server
const server = express();
const port = 44444;

// Setup app
const appPort = 33333;
const app = new TimesheetApp(appPort);

// Server routes
server.get("/", (req, res) => {
    res.send("Hello, world!");
});

// Start the server
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(`  • Access the server through ${url}:${port}\n`);
    app.start(url);
});
