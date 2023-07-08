const express = require("express");
const path = require("path");

class TimesheetApp {

    constructor(port){

        this.port = port;
        this.app = express();

        this.app.get("/", function (req, res) {
            res.sendFile(path.join(__dirname, "app.html"));
        });

        this.app.get("/styles/colors.css", function (req, res) {
            res.sendFile(path.join(__dirname, "styles/colors.css"));
        });
        this.app.get("/styles/fonts.css", function (req, res) {
            res.sendFile(path.join(__dirname, "styles/fonts.css"));
        });
        this.app.get("/styles/main.css", function (req, res) {
            res.sendFile(path.join(__dirname, "styles/main.css"));
        });
        this.app.get("/styles/appendTime.css", function (req, res) {
            res.sendFile(path.join(__dirname, "styles/appendTime.css"));
        });

        this.app.get("/js/appendTime.js", function (req, res) {
            res.sendFile(path.join(__dirname, "js/appendTime.js"));
        });

        this.assets()
    }

    assets(){
        this.app.get("/assets/svg/clock.svg", function (req, res) {
            res.sendFile(path.join(__dirname, "assets/svg/clock.svg"));
        });

        this.app.get("/assets/svg/clock-off.svg", function (req, res) {
            res.sendFile(path.join(__dirname, "assets/svg/clock-off.svg"));
        });

        this.app.get("/assets/svg/calendar.svg", function (req, res) {
            res.sendFile(path.join(__dirname, "assets/svg/calendar.svg"));
        });
    }

    start(url) {
        this.app.listen(this.port, () => {
            console.log(`App is running on port ${this.port}`);
            console.log(`  • Access the app through ${url}:${this.port}\n`);
        });
    }

}

module.exports.TimesheetApp = TimesheetApp;
