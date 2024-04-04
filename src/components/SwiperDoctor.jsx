// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

//modules
import { FreeMode, Pagination, Autoplay } from "swiper/modules";

//import react icons
import { AiFillHeart } from "react-icons/ai";

export default () => {
  const swiperData = [
    { id: 1, name: "Cardiology", icon: <AiFillHeart /> },
    { id: 2, name: "Cardiology", icon: <AiFillHeart /> },
    { id: 3, name: "Cardiology", icon: <AiFillHeart /> },
    { id: 4, name: "Cardiology", icon: <AiFillHeart /> },
    { id: 5, name: "Cardiology", icon: <AiFillHeart /> },
    { id: 6, name: "Cardiology", icon: <AiFillHeart /> },
    { id: 7, name: "Cardiology", icon: <AiFillHeart /> },
    { id: 8, name: "Cardiology", icon: <AiFillHeart /> },
    { id: 9, name: "Cardiology", icon: <AiFillHeart /> },
    { id: 10, name: "Cardiology", icon: <AiFillHeart /> },
  ];

  return (
    <div className="py-8 mt-3">
      {/* title */}
      <div className="text-center py-3 px-4 "><h1 className="h1">Specialities</h1><hr className="max-w-[80%] m-auto" /></div>
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
          navigation={{
            clickable: true,
          }}
          pagination={{
            clickable: true,
          }}
          autoplay={true}
          modules={[FreeMode, Pagination, Autoplay]}
          className="h-full w-[80%] container m-auto"
        >
          <div className="">
            {swiperData.map((item) => {
              return (
                <SwiperSlide
                  key={item.id}
                  className="flex justify-center gap-[100px] p-5 items-center container m-auto"
                >
                  <div
                    className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-2 py-4 flex-1 flex flex-col  items-center sm:gap-x-6 lg:gap-y-6 group
            hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300"
                  >
                    {/* icon */}
                    <div className="text-[60px]">{item.icon}</div>
                    {/* name */}
                    <div className="text-2xl">{item.name}</div>
                  </div>
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </div>
      {/* button */}
      <div className="text-center m-9">
       <a href="/doctors"> <button className="btn">See All</button></a>
      </div>
    </div>
  );
};
