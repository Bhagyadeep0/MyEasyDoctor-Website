import User from "../models/UserSchema.js";
import Doctor from "../models/DoctorSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const genToken = (user) => {
  return jwt.sign(
    { id: user._id, type: user.type },
    process.env.JWT_PRIVATE_KEY,
    { expiresIn: "15d" }
  );
};

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
      user = new Doctor({
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
    console.log(err);
    res
      .status(500)
      .json({ success: false, message: "Server error. Try Again" });
  }
};

export const login = async (req, res) => {
  const { email } = req.body;
  try {
    let user = null;

    const patient = await User.findOne({ email });
    const doctor = await Doctor.findOne({ email });

    if (patient) {
      user = patient;
    }
    if (doctor) {
      user = doctor;
    }
    //
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    //
    const isPasswordMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordMatch) {
      return res
        .status(400)
        .json({ status: false, message: "Invalid Password" });
    }
    const token = genToken(user);

    const { password, type, appointments, ...rest } = user._doc;
    res
      .status(200)
      .json({
        status: true,
        message: "Login Successful",
        token,
        data: { ...rest },
        type,
      });
  } catch (err) {
    res.status(500).json({ status: false, message: "Login Failed" });
  }
};
