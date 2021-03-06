var db = require("../models");
var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });



  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  app.get("/input", function(req, res) {
    res.render(path.join(__dirname, "../views/input.handlebars"));
  });

<<<<<<< HEAD:project_2_temp/routes/htmlRoutes.js
=======
  app.get("/newpage", function(req, res) {
    res.render(path.join(__dirname, "../views/newpage.handlebars"));
  });


>>>>>>> 6a55c021c02480e876965037cf029fbf46d740c5:routes/htmlRoutes.js
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
