const jwt = require("jsonwebtoken");
require("dotenv").config();

const decodeToken = async (req, res, next) => {
  const publicRoutes = ["/users/signup", "/users/login", "/users/verify"];

  if (publicRoutes.includes(req.url)) {
    return next();
  }

  let token = req.headers["authorization"];

  if (token) {
    try {
      token = token.split(" ")[1];
      const decoded = await jwt.verify(token, process.env.private_key);
      req.user = decoded;
      next();
    } catch (error) {
      return res.status(403).send({ message: "Invalid or expired token", error: error.message });
    }
  } else {
    return res.status(403).send({ message: "Authorization token required" });
  }
};

module.exports = decodeToken;
