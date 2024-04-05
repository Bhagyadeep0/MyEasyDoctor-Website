// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

//modules
import { FreeMode, Pagination, Autoplay } from "swiper/modules";

//import react icons
import { AiFillHeart, } from "react-icons/ai";
import { GiBrokenBone,GiTooth,GiBrain } from "react-icons/gi";
import { RiEye2Fill } from "react-icons/ri";
import { FaLungs,FaVirus } from "react-icons/fa";

export default () => {
  const swiperData = [
    { id: 1, name: "Cardiology", icon: <AiFillHeart /> },
    { id: 2, name: "orthopedic", icon: <GiBrokenBone /> },
    { id: 3, name: "dentist", icon: <GiTooth /> },
    { id: 4, name: "neurology", icon: <GiBrain /> },
    { id: 5, name: "urology", icon: <AiFillHeart /> },
    { id: 6, name: "ophthalmology", icon: <RiEye2Fill /> },
    { id: 7, name: "Cardiology", icon: <FaLungs /> },
    { id: 8, name: "Co-vid", icon: <FaVirus /> },
    { id: 9, name: "Cardiology", icon: <AiFillHeart /> },
    { id: 10, name: "Cardiology", icon: <AiFillHeart /> },
  ];

  return (
    <div className="w-full h-full my-[150px]">
      {/* title */}
      <div className="text-center py-3 px-4 "><h1 className="h1">Our <span className="text-red-600/80">Medical</span> Services.</h1><hr className="max-w-[80%] m-auto" /></div>
      {/* swiper */}
      <div>
        {" "}
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
          }}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          autoplay={true}
          modules={[FreeMode, Pagination, Autoplay]}
          className="h-full container m-auto"
        >
          <div className="">
            {swiperData.map((item) => {
              return (
                <SwiperSlide
                  key={item.id}
                  className="flex justify-center gap-x-5 lg:gap-[100px] p-5 items-center container m-auto"
                >
                  <div
                    className="border-[0.1px] border-gray-500/20 h-max rounded-lg px-2 py-4 flex-1 flex flex-col  items-center sm:gap-x-6 lg:gap-y-6 group
            hover:border-blue-500/60 transition-all duration-300 group"
                  >
                    {/* icon */}
                    <div className="text-[60px] text-red-500 group-hover:text-blue-500 transition-all duration-500 ease-linear">{item.icon}</div>
                    {/* name */}
                    <div className="text-base lg:text-2xl  capitalize break-words break-all">{item.name}</div>
                  </div>
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </div>
      {/* button */}
      <div className="text-center m-9">
       <a href="/doctors"> <button className="btn">Show Me More</button></a>
      </div>
    </div>
  );
};
