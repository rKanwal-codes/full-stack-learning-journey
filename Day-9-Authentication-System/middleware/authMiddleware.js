const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  // Header se token nikalo: "Authorization: Bearer <token>"
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token provided. Access denied." });
  }

  const token = authHeader.split(" ")[1];

  try {
    // Token verify karo
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // user info request mein daal do (id, email)
    next(); // aage badho
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token." });
  }
};

module.exports = authMiddleware;
