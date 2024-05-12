import User from "../models/UserSchema.js";

export const updateUser = async (req, res) => {
  const id = req.params.id;

  try {
    const updateUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    res
      .status(200)
      .json({ success: true, message: "Update Successful", data: updateUser });
  } catch (e) {
    res.status(500).json({ success: false, message: "Update Failed" });
  }
};
export const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    await User.findByIdAndDelete(id);

    res.status(200).json({ success: true, message: "Delete Successful" });
  } catch (e) {
    res.status(500).json({ success: false, message: "Failed to Delete" });
  }
};

export const getSingleUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id).select("-password");

    res.status(200).json({ success: true, message: "User Found", data: user });
  } catch (e) {
    res.status(404).json({ success: false, message: "User Not Found" });
  }
};


export const getAllUser = async (req, res) => {
  
    try {
      const users = await User.find({}).select("-password");
  
      res.status(200).json({ success: true, message: "Users Found", data: users });
    } catch (e) {
      res.status(404).json({ success: false, message: "Not Found" , });
    }
  };