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
    <section className="w-full h-full xl:h-[82vh]  bg-cyan-400/30 relative">
      {/* hero centered */}
      <div className="flex flex-wrap justify-center w-full h-full ">
        {/* contents */}
        <motion.div className="flex flex-col lg:flex-row justify-between items-center container m-auto">
          {/* text */}
          <div className="flex-1 text-center lg:text-left lg:max-w-[50%] py-3 px-4">
            {/* title */}
            <h1 className="h1 text-wrap">
              <span className="text-red-500">MyEasyDoctor</span>
              <br />
              Where <i>Appointments</i> Meet <i>Convenience</i>.
            </h1>
            {/* desc */}
            <p className="text-red-500 mb-4 p text-wrap">
              MyEasyDoctor is like a helpful digital assistant for your health!
              It's a safe and flexible platform that makes it easy for hospitals
              and clinics to support people on their health journeys. With its
              user-friendly design, it helps collect information smoothly and
              improves how doctors and patients talk to each other. It's all
              about making healthcare simpler and better for everyone!
            </p>
            {/* ------------------------------------------ image & animation on small screen ------------------------------------------- */}
            <div className=" lg:hidden flex relative pointer-events-none">
              {/* image */}
              <div className="imageContainer flex-1 flex justify-center rounded-full ">
                <img src="/doctor01.png" alt="doctor.png" width={300} />
              </div>
              {/* floating elements */}
              <div className="text-sm leading-3">
                <p className="flex items-center gap-2 absolute top-[.5em] left-0 bg-white rounded-full px-2 font-semibold animate-moveX">
                  <span>
                    <SiSpeedtest />{" "}
                  </span>
                  <span>Fast & Secure</span>
                </p>
                <p className="flex items-center gap-2 absolute bottom-[10em] left-[2em] bg-white rounded-full px-2 font-semibold animate-moveXRe">
                  <span>
                    <FaUserDoctor />{" "}
                  </span>
                  <span>Talk to Doctor</span>
                </p>
                <p className="flex items-center gap-2 absolute top-[12.5em] right-[3em] bg-white rounded-full px-2 font-semibold animate-moveX">
                  <span>
                    <FaRegSave />{" "}
                  </span>
                  <span>Save Records</span>
                </p>
                <p className="flex items-center gap-2 absolute bottom-[.5em] right-0 bg-white rounded-full px-2 font-semibold animate-moveXRe">
                  <span>
                    <SiSpeedtest />{" "}
                  </span>
                  <span>Fast & Secure</span>
                </p>
              </div>
            </div>
            {/* button */}
            <div className=" space-x-3">
              <a href="/doctors">
                <button className="btn">Book Appointment</button>
              </a>
              <a
                href="https://youtu.be/w4o1bsGnjlQ?si=zrdSJttGhysTk_p8"
                target="_blank"
              >
                <button className="btn">Watch Intro</button>
              </a>
            </div>
          </div>
          {/* image & animation on large screen */}
          <div className=" hidden lg:flex relative pointer-events-none ">
            {/* image */}
            <div className="imageContainer">
              <img src="/doctor01.png" alt="doctor.png" />
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
