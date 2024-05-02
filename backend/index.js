//import packages
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.js"

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

const corsOptions = {
  origin: true,
};

app.get("/", (req, res) => {
  res.send("We are live myesaydoctor");
});

//database
mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
  await mongoose.connect(process.env.MONGODB_URI)
    console.log("MonogoDB connected");
} catch (error) {
console.log(error)
    console.log("MonogoDB connection failed");
}
};

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use('/api/v1/auth',authRoute); //domain/api/v1/auth/register

app.listen(port, () => {
    connectDB();
  console.log("isRunning", port);
});
