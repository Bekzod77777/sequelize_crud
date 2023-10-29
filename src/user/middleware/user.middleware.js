import { User } from "../models/user.model.js";

export const userMiddleware = async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { username: req.body.username } });
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }
    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
