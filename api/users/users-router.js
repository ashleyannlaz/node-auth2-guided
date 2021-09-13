const router = require("express").Router();

const Users = require("./users-model.js");
const restricted = require("../auth/restricted-middleware.js");

// Higher order function takes in a role and checks if the users role matches
//
//
//
const only = (role) => (req, res, next) => {
  if (req.decodedJwt.role === role) {
    next();
  } else {
    next({ message: "you have no power here!", status: 403 });
  }
};

router.get("/", restricted, only("admin"), (req, res, next) => {
  Users.find()
    .then((users) => {
      res.json(users);
    })
    .catch(next); // our custom err handling middleware in server.js will trap this
});

module.exports = router;
