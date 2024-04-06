//import framer-motion
import { motion } from "framer-motion";
//import react icons
import { SiSpeedtest } from "react-icons/si";
import { FaUserDoctor } from "react-icons/fa6";
import { FaRegSave } from "react-icons/fa";


const Hero = () => {
  return (
    <>
   {/* --------------hero section starts--------------- */}
    <section className="w-full h-full xl:h-full bg-indigo-500/30 pt-5 relative">
      {/* hero centered */}
      <div className="flex flex-wrap justify-center w-full h-full ">
        {/* contents */}
        <motion.div className="flex flex-col lg:flex-row justify-between items-center container m-auto">
          {/* text */}
          <div className="flex-1 text-center lg:text-left lg:max-w-[50%] py-3 px-4">
            {/* title */}
            <h1 className="h1 text-wrap">
            Blueprints of Our <span className="text-tiffanyBlue">Vision</span>
              <br />
              Where <i>Appointments</i> Meet <i>Convenience</i>.
            </h1>
            {/* desc */}
            <p className="text-red-500 mb-4 p text-wrap">
            Envisioning Healthier Tomorrows. Delivering Excellence Today.
            </p>
          </div>
          {/*--------------------------- image & animation ------------------------- */}
          <div className=" flex relative pointer-events-none ">
            {/* image */}
            <div className="">
              <img src="/doctor01.png" alt="doctor.png" className="w-[250px] lg:w-fit" />
            </div>
            {/* floating elements */}
            <div className="text-xl">
              <p className="flex items-center gap-2 absolute bottom-[15.5em] left-[-6em] bg-white rounded-full px-2 font-semibold animate-moveY">
                <span>
                  {/* logo */}
                  <SiSpeedtest />
                </span>
                {/* text */}
                <span>Fast & Secure</span>
              </p>
              <p className="flex items-center gap-2 absolute bottom-[5em] left-[1em] bg-white rounded-full px-2 font-semibold animate-moveYRe">
                <span>
                  {/* logo */}
                  <FaUserDoctor />{" "}
                </span>
                {/* text */}
                <span>Talk to Doctor</span>
              </p>
              <p className="flex items-center gap-2 absolute top-[12em] right-[6em] bg-white rounded-full px-2 font-semibold animate-moveYRe">
                <span>
                  {/* logo */}
                  <FaRegSave />{" "}
                </span>
                {/* text */}
                <span>Save Records</span>
              </p>
              <p className="flex items-center gap-2 absolute top-[17.5em] right-[2em] bg-white rounded-full px-2 font-semibold animate-moveY">
                <span>
                  {/* logo */}
                  <SiSpeedtest />
                </span>
                {/* text */}
                <span>Fast & Secure</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
    {/* --------------hero section ends--------------- */}
    </>
  );
};

export default Hero;
