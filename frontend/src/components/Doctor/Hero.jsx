//import framer-motion
import { motion } from "framer-motion";
//import react icons
import {AiOutlineSearch} from "react-icons/ai"


const Hero = () => {
  return (
    <>
   {/* --------------hero section starts--------------- */}
    <section className="w-full h-full xl:h-screen bg-doctor01 bg-no-repeat bg-cover relative">
      {/* hero centered */}
      <div className="flex flex-wrap justify-center items-center w-full h-full ">
        {/* contents */}
        <div className="flex flex-wrap  flex-col justify-between items-center container m-auto">
          {/* text */}
          <div className="flex-1 text-center py-3 px-4">
            {/* title */}
            <h1 className="h1 text-wrap text-center">
              <span className="text-tiffanyBlue">Search Doctor</span>, Make an Appointment.
            </h1>
            {/* desc */}
            <p className="text-red-500 mb-4 p text-wrap">
            Discover the best doctors, clinic & hospital the city nearest to you.
            </p>
          </div>
          {/*---------------------------- search filed------------------------------------ */}
          <div className=" flex-1 flex w-full gap-x-5 justify-center items-center relative">
            {/* search input */}
            <div className="w-[80%] max-w-5xl mb-5 flex items-center gap-x-5">
              <input type="text" className="input w-full bg-blue-800/50 text-2xl py-4 px-5" placeholder="type doctor,clinic,hospital....name" />
              <span className="bg-white p-2 rounded-full cursor-pointer"><AiOutlineSearch  className="text-2xl lg:text-[38px]"/></span>
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
