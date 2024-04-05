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
    <section className="w-full h-full xl:h-[82vh] bg-doctor01 bg-no-repeat bg-cover relative">
      {/* hero centered */}
      <div className="flex flex-wrap justify-center w-full h-full ">
        {/* contents */}
        <motion.div className="flex flex-col justify-between items-center container m-auto">
          {/* text */}
          <div className="flex-1 text-center lg:text-left lg:max-w-[50%] py-3 px-4">
            {/* title */}
            <h1 className="h1 text-wrap">
              <span className="text-tiffanyBlue">Search Doctor</span>, Make an Appointment.
            </h1>
            {/* desc */}
            <p className="text-red-500 mb-4 p text-wrap">
            Discover the best doctors, clinic & hospital the city nearest to you.
            </p>
          </div>
          {/*---------------------------- image & animation on large screen------------------------------------ */}
          <div className=" hidden lg:flex relative pointer-events-none ">
            {/* location */}
            {/* search input */}
          </div>
        </motion.div>
      </div>
    </section>
    {/* --------------hero section ends--------------- */}
    </>
  );
};

export default Hero;
