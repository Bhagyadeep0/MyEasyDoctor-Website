// react icons
import { MdAddCall } from "react-icons/md";

const About = () => {
  return (
   <section className="pt-[120px]">
         {/*-------------------------aboutUs---------------------- */}
         <div className="flex flex-col md:flex-row flex-wrap justify-between items-center container mx-auto">
          {/* image container */}
          <div className="flex-1">
            <img src="./about.png" alt="about_img" className=" object-cover" />
          </div>
          {/* text container */}
          <div className="flex-1 px-5 md:px-2 ">
            {/* text */}
            <h6 className="text-base capitalize text-blue-400">About our Company</h6>
            {/* title */}
            <h2 className="h2">We Are Always Ensure Best Medical Treatment For Your Health</h2>
            {/* desc */}
            <p className="break-words">
              We strive to create a community where every individual realizes
              their utmost potential for lifelong health and well-being.
              <br /> Our commitment is to earn the trust of patients, be a
              cherished partner in the community, and be catalysts for positive
              transformation for all.
            </p>
            <div className="mt-[30px] text-2xl italic group">
            <a href="/" className="flex items-center gap-x-5"><span className="bg-blue-100 p-3 rounded-full group-hover:bg-blue-200 transition-all duration-300 ease-in"><MdAddCall/></span><span>Need Emergency?</span></a>
        </div>
          </div>
        </div>
   </section>
  );
};

export default About;
