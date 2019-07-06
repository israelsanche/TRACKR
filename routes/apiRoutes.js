var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the Daily_Summarys
  app.get("/api/Daily_Summarys", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Daily_Summary.findAll({}).then(function(dbDaily_Summary) {
      // We have access to the Daily_Summarys as an argument inside of the callback function
      res.json(dbDaily_Summary);
    });
  });

  // POST route for saving a new Daily_Summary
  app.post("/api/Daily_Summarys", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.Daily_Summary.create({
      text: req.body.text,
      complete: req.body.complete
    }).then(function(dbDaily_Summary) {
      // We have access to the new Daily_Summary as an argument inside of the callback function
      res.json(dbDaily_Summary);
    })
      .catch(function(err) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  });

  // DELETE route for deleting Daily_Summarys. We can get the id of the Daily_Summary to be deleted from
  // req.params.id
  app.delete("/api/Daily_Summarys/:id", function(req, res) {
    // We just have to specify which Daily_Summary we want to destroy with "where"
    db.Daily_Summary.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbDaily_Summary) {
      res.json(dbDaily_Summary);
    });

  });

  // PUT route for updating Daily_Summarys. We can get the updated Daily_Summary data from req.body
  app.put("/api/Daily_Summarys", function(req, res) {

    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.Daily_Summary.update({
      text: req.body.text,
      complete: req.body.complete
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbDaily_Summary) {
      res.json(dbDaily_Summary);
    })
      .catch(function(err) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  });
};
