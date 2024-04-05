// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

//swiper modules
import { FreeMode, Pagination, Navigation } from "swiper/modules";

const Testimonials = () => {
  const testimonialsData = [
    {
      name: "Mr. Gwen Ryan",
      msg: "MyEasyDoctor has revolutionized my healthcare experience with its user-friendly platform and exceptional virtual care. The doctors are knowledgeable and compassionate, making each consultation feel personal. It’s the perfect blend of convenience and quality care, all from the comfort of home.",
      img: "/t-avt-1.png",
      title: "customer",
    },
    {
      name: "Eda",
      msg: "MyEasyDoctor has revolutionized my healthcare experience with its user-friendly platform and exceptional virtual care. The doctors are knowledgeable and compassionate, making each consultation feel personal. It’s the perfect blend of convenience and quality care, all from the comfort of home.",
      img: "/t-avt-2.png",
      title: "customer",
    },
    {
      name: "Dr. Sherri Fahey",
      msg: "MyEasyDoctor has revolutionized my healthcare experience with its user-friendly platform and exceptional virtual care. The doctors are knowledgeable and compassionate, making each consultation feel personal. It’s the perfect blend of convenience and quality care, all from the comfort of home.",
      img: "/t-avt-3.png",
      title: "doctor",
    },
    {
      name: "Irma Bode",
      msg: "MyEasyDoctor has revolutionized my healthcare experience with its user-friendly platform and exceptional virtual care. The doctors are knowledgeable and compassionate, making each consultation feel personal. It’s the perfect blend of convenience and quality care, all from the comfort of home.",
      img: "/t-avt-1.png",
      title: "Regional Factors Specialist",
    },
    {
      name: "Bergnaum",
      msg: "MyEasyDoctor has revolutionized my healthcare experience with its user-friendly platform and exceptional virtual care. The doctors are knowledgeable and compassionate, making each consultation feel personal. It’s the perfect blend of convenience and quality care, all from the comfort of home.",
      img: "/t-avt-2.png",
      title: "Senior Functionality Director",
    },
  ];

  return (
    <Swiper
    breakpoints={{
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
    }}
    grabCursor={true}
    freeMode={true}
    pagination={{
      clickable: true,
    }}
    navigation={{
      clickable: true,
    }}
    
    modules={[FreeMode, Pagination, Navigation]}
    className="h-full w-full m-[100px] p-[500px] container mx-auto"
    >
        {testimonialsData.map((item, i) => (
          <SwiperSlide
            key={i}
          >
            <div className="flex flex-col lg:flex-row justify-between items-center mx-[50px] lg:py-[50px] lg:px-5">
                     {/*people,name,title */}
            <div className="bg-blue-800/10 flex-1 flex flex-col items-center space-y-3 px-3 py-[6px]">
              <div>
                {/* people */}
                <img src={item.img} alt="img" />
              </div>
              {/* name */}
              <h3 className="h3">{item.name}</h3>
              {/* title */}
              <p>{item.title}</p>
            </div>
            {/* msg */}
            <div className="bg-blue-100 flex-1 lg:px-3 lg:py-[6px]">
              <p>{item.msg}</p>
            </div>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default Testimonials;
