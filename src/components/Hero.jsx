import Navigation from "./Navigation";

//import framer-motion
import { motion } from "framer-motion";
//import react icons
import { SiSpeedtest } from "react-icons/si";
import { FaUserDoctor } from "react-icons/fa6";
import { FaRegSave } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="w-full h-full mt-[90px] xl:h-[80vh] bg-celeste relative">
      <Navigation />
      {/* hero centered */}
      <div className="flex justify-center w-full h-full "> 
        {/* contents */}
        <motion.div className="flex flex-col lg:flex-row justify-between items-center container m-auto">
          {/* text */}
          <div className="flex-1 text-center lg:max-w-[50%] py-3 px-4">
            <h1 className="h1">
              <span className="text-tiffanyBlue">MyEasyDoctor</span>
              <br />
              Where <i>Appointments</i> Meet <i>Convenience</i>.
            </h1>
            <p className="text-red-500 mb-4 p">
              MyEasyDoctor is like a helpful digital assistant for your health!
              It's a safe and flexible platform that makes it easy for hospitals
              and clinics to support people on their health journeys. With its
              user-friendly design, it helps collect information smoothly and
              improves how doctors and patients talk to each other. It's all
              about making healthcare simpler and better for everyone!
            </p>
              {/* image & animation on small screen */}
          <div className=" lg:hidden flex relative pointer-events-none">
          {/* image */}
            <div className="imageContainer flex-1 flex justify-center rounded-full ">
              <img src="/doctor01.png" alt="doctor.png" width={300}  />
            </div>
            {/* floating elements */}
            <div className="text-xl">
              <p className="flex items-center gap-2 absolute bottom-[15.5em] left-[3em] bg-white rounded-full px-2 font-semibold animate-left-right">
                <span>
                  <SiSpeedtest />{" "}
                </span>
                <span>Fast & Secure</span>
              </p>
              <p className="flex items-center gap-2 absolute bottom-[9em] left-[1em] bg-white rounded-full px-2 font-semibold animate-left-right">
                <span>
                  <FaUserDoctor />{" "}
                </span>
                <span>Talk to Doctor</span>
              </p>
              <p className="flex items-center gap-2 absolute top-[9em] right-[3em] bg-white rounded-full px-2 font-semibold animate-left-right">
                <span>
                  <FaRegSave />{" "}
                </span>
                <span>Save Records</span>
              </p>
              <p className="flex items-center gap-2 absolute top-[15.5em] right-[6em] bg-white rounded-full px-2 font-semibold animate-left-right">
                <span>
                  <SiSpeedtest />{" "}
                </span>
                <span>Fast & Secure</span>
              </p>
            </div>
          </div>
            <button className="bg-red-400 mt-5 py-3 px-5 rounded-md text-xl font-medium hover:bg-red-600 transition-all duration-300 ease-in">
              Watch Intro
            </button>
          </div>
          {/* image & animation on large screen */}
          <div className=" hidden lg:flex relative pointer-events-none ">
          {/* image */}
            <div className="imageContainer">
              <img src="/doctor01.png" alt="doctor.png" />
            </div>
            {/* floating elements */}
            <div className="text-xl">
              <p className="flex items-center gap-2 absolute bottom-[15.5em] left-[-6em] bg-white rounded-full px-2 font-semibold animate-left-right">
                <span>
                  <SiSpeedtest />{" "}
                </span>
                <span>Fast & Secure</span>
              </p>
              <p className="flex items-center gap-2 absolute bottom-[5em] left-[1em] bg-white rounded-full px-2 font-semibold animate-left-right">
                <span>
                  <FaUserDoctor />{" "}
                </span>
                <span>Talk to Doctor</span>
              </p>
              <p className="flex items-center gap-2 absolute top-[12em] right-[6em] bg-white rounded-full px-2 font-semibold animate-left-right">
                <span>
                  <FaRegSave />{" "}
                </span>
                <span>Save Records</span>
              </p>
              <p className="flex items-center gap-2 absolute top-[17.5em] right-[2em] bg-white rounded-full px-2 font-semibold animate-left-right">
                <span>
                  <SiSpeedtest />{" "}
                </span>
                <span>Fast & Secure</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
