import Doctor from "../models/DoctorSchema.js";

export const updateDoctor = async (req, res) => {
  const id = req.params.id;

  try {
    const updateDoctor = await Doctor.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    res
      .status(200)
      .json({ success: true, message: "Update Successful", data: updateDoctor });
  } catch (e) {
    res.status(500).json({ success: false, message: "Update Failed" });
  }
};
export const deleteDoctor = async (req, res) => {
  const id = req.params.id;

  try {
    await Doctor.findByIdAndDelete(id);

    res.status(200).json({ success: true, message: "Delete Successful" });
  } catch (e) {
    res.status(500).json({ success: false, message: "Failed to Delete" });
  }
};

export const getSingleDoctor = async (req, res) => {
  const id = req.params.id;

  try {
    const doctor = await Doctor.findById(id).select("-password");

    res.status(200).json({ success: true, message: "Doctor Found", data: doctor });
  } catch (e) {
    res.status(404).json({ success: false, message: "Doctor Not Found" });
  }
};


export const getAllDoctor = async (req, res) => {
  
    try {
      const doctors = await Doctor.find({}).select("-password");
  
      res.status(200).json({ success: true, message: "Doctors Found", data: doctors });
    } catch (e) {
      res.status(404).json({ success: false, message: "Not Found" , });
    }
  };