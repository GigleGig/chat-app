import jwt from 'jsonwebtoken';
import User from '../modules/user.module.js';

export const protectRoute = async (req, res, next) => {

    try {

        const token = req.cookies.jwt;
        if (!token) return res.status(401).json({message: "Unauthorized - No token provided"});

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) return res.status(401).json({message: "Unauthorized - Invalid token"});

        const user = await User.findById(decoded.userId).select("-password");
        if (!user) return res.status(401).json({message: "Unauthorized - User not found"});

        req.user = user;
        next(); // Call the next function. Here is router.put("/update-profile", protectRoute, updateProfile); So next() will call updateProfile function

    } catch (error) {
        console.log("Error in protectRoute middleware:", error.message);
        res.status(500).json({message: "Internal server error"});
    }

}