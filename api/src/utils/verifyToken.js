const jwt = require("jsonwebtoken");
const errorHandler = require("./error");
const { User } = require("../models");

const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token || req.headers["authorization"];

  if (!token) {
    return next(errorHandler(401, "Unauthorized"));
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return next(errorHandler(403, "Forbidden"));

    req.user = user;
    next();
  });
};

const verifyAdmin = (req, res, next) => {
  const token = req.cookies.access_token || req.headers["authorization"];

  if (!token) {
    return next(errorHandler(401, "Unauthorized"));
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return next(errorHandler(403, "Forbidden"));

    // get user role from user.id
    User.findByPk(user.id).then((user) => {
      if (user == null || user.role !== "admin") {
        return next(errorHandler(403, "Forbidden"));
      }
    });

    req.user = user;
    next();
  });
}

module.exports = { verifyToken , verifyAdmin};
