var db = require("../models");
var path = require("path");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });
  // routers gets for the pages functions.
  app.get("/about", function (req, res) {
    res.render("about");
  });
  app.get("/signup", function (req, res) {
    res.render("signup");
  });
  app.get("/getstarted", function (req, res) {
    res.render("getstarted");
  });
  app.get("/tracker", function (req, res) {
    res.render("tracker");
  });
  app.get("/summary", function (req, res) {
    res.render("summary");
  });
  // Load example page and pass in an example by id
  app.get("/example/:id", function (req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function (dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
