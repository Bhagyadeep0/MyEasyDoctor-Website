//link from react
import { Link } from "react-router-dom";


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
            {/* title */}
            <h2 className="h2">Our Story</h2>
            {/* desc */}
            <p className="break-words">
              We strive to create a community where every individual realizes
              their utmost potential for lifelong health and well-being.
              <br /> Our commitment is to earn the trust of patients, be a
              cherished partner in the community, and be catalysts for positive
              transformation for all.
            </p>
            <Link to="/about"><button className="mt-5 btn">Tell Me More</button></Link>
            <div className="mt-[30px] italic">
          {/* msg */}
          <h2 className="text-[20px] lg:text-[25px]  capitalize ">
            “ <span className="text-red-500">Medicines</span> cure diseases, but only doctors can cure <span className="text-blue-500">patients.</span>”
          </h2>
          {/* name */}
          <p className="break-words text-gray-600/50 font-[600] text-right">-Carl Jung</p>
        </div>
          </div>
        </div>
   </section>
  );
};

export default About;
