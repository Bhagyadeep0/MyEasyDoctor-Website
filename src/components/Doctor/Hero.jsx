//import framer-motion
import { motion } from "framer-motion";
//import react icons
import {AiOutlineSearch} from "react-icons/ai"


const Hero = () => {
  return (
    <>
   {/* --------------hero section starts--------------- */}
    <section className="w-full h-full xl:h-[82vh] bg-doctor01 bg-no-repeat bg-cover relative">
      {/* hero centered */}
      <div className="flex flex-wrap justify-center items-center w-full h-full ">
        {/* contents */}
        <div className="flex flex-col justify-between items-center container m-auto">
          {/* text */}
          <div className="flex-1 text-center  max-w-[50%] py-3 px-4">
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
          <div className=" flex-1 flex gap-x-5 justify-center items-center relative">
            {/* search input */}
            <div className="max-w-[850px] mb-5 flex items-center gap-x-5">
              <input type="text" className="input w-full bg-blue-800/20 text-2xl py-4 px-5" placeholder="doctor" />
              <span className="bg-white p-2 rounded-full cursor-pointer"><AiOutlineSearch  className="text-[38px]"/></span>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* --------------hero section ends--------------- */}
    </>
  );
};

export default Hero;
