import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

// Protect routes middleware
const protectRoute = asyncHandler(async (req, res, next) => {
  const token = req.cookies.token;
  console.log("Cookies received:", req.cookies);

  if (!token) {
    return res
      .status(401)
      .json({ status: false, message: "Not authorized. Try login again." });
  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    const resp = await User.findById(decodedToken.userId).select("isAdmin email");
    if (!resp) {
      return res
        .status(401)
        .json({ status: false, message: "Not authorized. User not found." });
    }

    req.user = {
      email: resp.email,
      isAdmin: resp.isAdmin,
      userId: decodedToken.userId,
    };
    next();
  } catch (error) {
    console.log("JWT verification failed:", error.message);
    return res
      .status(401)
      .json({ status: false, message: "Not authorized. Try login again." });
  }
});

// Admin-only middleware
const isAdminRoute = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    return res
      .status(401)
      .json({ status: false, message: "Not authorized as admin." });
  }
};

export { protectRoute, isAdminRoute };
