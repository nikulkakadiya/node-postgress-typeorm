const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    // Check if the Authorization header exists
    if (!authHeader) {
        return res.status(401).json({ message: "Authorization token missing" });
    }

    // Extract the token (Bearer <token>)
    const token = authHeader.split(" ")[1];
    

    if (!token) {
        return res.status(401).json({ message: "Token not found" });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Pass the decoded token payload to the request object
        req.user = decoded;

        next(); // Proceed to the next middleware or route handler
    } catch (err) {
        console.error("Token verification failed:", err);
        return res.status(403).json({ message: "Unauthorized or invalid token" });
    }
};

module.exports = authMiddleware;
