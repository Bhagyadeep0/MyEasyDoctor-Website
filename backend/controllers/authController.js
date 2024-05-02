import User from "../models/UserSchema.js";
import Doctor from "../models/DoctorSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
export const register = async (req, res) => {
  const { name, email, password, type, gender } = req.body;

  try {
    let user = null;
    if (type === "patient") {
      user = await User.findOne({ email });
    } else if (type === "doctors") {
      user = await Doctor.findOne({ email });
    }

    // check if user exist
    if (user) {
      return res.status(400).json({ message: "User already exist" });
    }

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    if (type === "patient") {
      user = new User({
        name,
        email,
        password: hashPassword,
        gender,
        type,
      });
    }

    if (type === "doctor") {
      user = new User({
        name,
        email,
        password: hashPassword,
        gender,
        type,
      });
    }

    await user.save();
    res
      .status(200)
      .json({ success: true, message: "user successfully created" });
  } catch (err) {
    console.log(err)
    res
      .status(500)
      .json({ success: false, message: "Server error. Try Again" });
  }
};

export const login = async (req, res) => {
  try {
  } catch (err) {}
};
