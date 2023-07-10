const express = require("express");
const path = require("path");

class TimesheetApp {

    constructor(port){

        this.port = port;
        this.app = express();

        this.app.get("/", function (req, res) {
            res.sendFile(path.join(__dirname, "app.html"));
        });

        this.assets();
        this.styles();
        this.javascript();
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

        this.app.get("/assets/web/icon.png", function (req, res) {
            res.sendFile(path.join(__dirname, "assets/web/icon.png"));
        });

        this.app.get("/assets/web/favicon.png", function (req, res) {
            res.sendFile(path.join(__dirname, "assets/web/favicon.png"));
        });

        this.app.get("/assets/web/logo.png", function (req, res) {
            res.sendFile(path.join(__dirname, "assets/web/logo.png"));
        });

        this.app.get("/assets/web/splash.png", function (req, res) {
            res.sendFile(path.join(__dirname, "assets/web/splash.png"));
        });
    }

    styles(){
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
        this.app.get("/styles/menuBar.css", function (req, res) {
            res.sendFile(path.join(__dirname, "styles/menuBar.css"));
        });
        this.app.get("/styles/sideBar.css", function (req, res) {
            res.sendFile(path.join(__dirname, "styles/sideBar.css"));
        });
        this.app.get("/styles/focus.css", function (req, res) {
            res.sendFile(path.join(__dirname, "styles/focus.css"));
        });
        this.app.get("/styles/transitions.css", function (req, res) {
            res.sendFile(path.join(__dirname, "styles/transitions.css"));
        });
    }

    javascript(){
        this.app.get("/js/appendTime.js", function (req, res) {
            res.sendFile(path.join(__dirname, "js/appendTime.js"));
        });
        this.app.get("/js/menuBar.js", function (req, res) {
          res.sendFile(path.join(__dirname, "js/menuBar.js"));
        });
        this.app.get("/js/sideBar.js", function (req, res) {
          res.sendFile(path.join(__dirname, "js/sideBar.js"));
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
