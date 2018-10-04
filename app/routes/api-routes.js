var db = require("../models");
var router = require("express").Router();
var passport = require("../config/passport/passport");

module.exports = function (app) {
  

  app.get("/test", function(req, res) {
    res.sendFile(path.join(__dirname, "../../test.html"));
  });

  //Login an existing user
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    res.json("/members");
  });


  //Creates a new user
  app.post("/api/signup", function (req, res) {
    console.log(req.body);
    db.Users.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
      favorite_genre: req.body.favorite_genre,
      location: req.body.location

    }).then(function () {
      res.redirect(307, "/api/login");

    }).catch(function (err) {
      console.log(err);
      res.json(err);

    });
  });


  //Add row to Profile table. This includes:
  // - user_id (current user, int)
  // - movie id (from api, int)
  // - movie name (from api, string)
  // - favorited (true if button clicked, boolean)
  // - user_rating (if user rated, int)
  //!!!!!!!!!!!!Needs work with associations
  app.post("/api/profile", function (req, res) {
    console.log(req.body);
    db.Users.create({
      user_id: req.user.id,
      media_id: req.body.media_id,
      media_name: req.body.media_name,
      favorited: req.body.favorite,
      user_rating: request.body.user_rating

    }).catch(function (err) {
      console.log(err);
      res.json(err);

    });
  });


  //Logout user
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });


  //GET current user's first name to display, email to display if no
  //first name is provided, favorite_genre to make api request for 
  //favorite genre, and location to find showings in their area.
  app.get("/api/user_data", function (req, res) {
    if (!req.users) {
      res.json({});

    } else {
      res.json({
        id: req.users.id,
        first_name: req.users.first_name,
        email: req.users.email,
        favorite_genre: req.users.favorite_genre,
        location: req.users.location

      });
    }
  });


  //!!!!!!!!!!!!in progress: GET All Movies that user has favorited
  app.get("/api/favorited/:user_id", function (req, res) {
    if (!req.users) {
      res.json({});

    } else {
      res.json({
        favorited: req.profile.favorited

      });
    }
  });


  //!!!!!!!!!!!!in progress: GET user's rating for movie
  app.get("/api/user_rating/:user_id", function (req, res) {
    if (!req.users) {
      res.json({});

    } else {
      res.json({
        favorited: req.profile.user_rating

      });
    }
  });


  //!!!!!!!!!!!in progress: GET average rating for movie
  //IDK what to do with this one
  app.get("/api/user_rating/:user_id", function (req, res) {
    if (!req.users) {
      res.json({});

    } else {
      res.json({
        favorited: req.profile.user_rating

      });
    }
  });


  //UPDATE current user's information
  router.put("/user/:id", function (req, res, err) {
    db.User.update({
        title: req.body.title,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        password: req.body.password,
        favorite_genre: req.body.favorite_genre,
        location: req.body.location

      }, {
        where: req.params.id

      })
      .then(function ([rowsUpdate, [updated]]) {
        res.json(updated)

      })
      .catch(err)
  })

};