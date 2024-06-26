// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

//swiper modules
import { FreeMode, Pagination, Navigation } from "swiper/modules";

// react icons
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Testimonials = () => {
  const testimonialsData = [
    {
      name: "Mr. Gwen Ryan",
      msg: "MyEasyDoctor has revolutionized my healthcare experience with its user-friendly platform and exceptional virtual care. The doctors are knowledgeable and compassionate, making each consultation feel personal. It’s the perfect blend of convenience and quality care, all from the comfort of home.",
      img: "/t-avt-1.png",
      title: "patient",
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
      img: "/t-avt-4.png",
      title: "Regional Factors Specialist",
    },
    {
      name: "Miss Casey Bartoletti",
      msg: "MyEasyDoctor has revolutionized my healthcare experience with its user-friendly platform and exceptional virtual care. The doctors are knowledgeable and compassionate, making each consultation feel personal. It’s the perfect blend of convenience and quality care, all from the comfort of home.",
      img: "/t-avt-5.png",
      title: "Global Web Agent",
    },
    {
      name: "Gladys Bode",
      msg: "MyEasyDoctor has revolutionized my healthcare experience with its user-friendly platform and exceptional virtual care. The doctors are knowledgeable and compassionate, making each consultation feel personal. It’s the perfect blend of convenience and quality care, all from the comfort of home.",
      img: "/t-avt-6.png",
      title: "Human Solutions Designer",
    },
    {
      name: "William Gorczany",
      msg: "MyEasyDoctor has revolutionized my healthcare experience with its user-friendly platform and exceptional virtual care. The doctors are knowledgeable and compassionate, making each consultation feel personal. It’s the perfect blend of convenience and quality care, all from the comfort of home.",
      img: "/t-avt-7.png",
      title: "Senior Functionality Director",
    },
  ];

  return (
    <section className="pt-[80px]">
      <div className="flex flex-col justify-center items-center container mx-auto ">
        {/* text */}
        <div className="flex flex-col text-center items-center container mx-auto ">
          <h1 className="h1">
            Voices of <span className="text-red-400">Trust</span>
          <hr className="max-w-[100%] bg-blue-600 m-auto" />
          </h1>
          <p>Entrusted with your well-being, we shoulder the promise of health with unwavering dedication.</p>
        </div>
        {/* --------------------------slider------------------------------- */}
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
            <SwiperSlide key={i}>
              <div className="flex flex-col lg:flex-row justify-between items-center mx-[50px] lg:py-[50px] lg:px-5">
                {/*----------people,name,title-------------------- */}
                <div className="flex-1 flex flex-col items-center space-y-3 px-3 py-[6px]">
                  <div className="w-[100px] self-center">
                    {/* people */}
                    <img src={item.img} alt="img" className="rounded-full object-cover" />
                  </div>
                  {/* name */}
                  <h3 className="h3 capitalize">{item.name}</h3>
                  {/* title */}
                  <p className="capitalize">{item.title}</p>
                </div>
                {/* ------------------msg------------------ */}
                <div className="bg-blue-100 flex-1 flex flex-col px-3 py-[6px] rounded-md capitalize">
                  <p className="text-3xl text-red-800/30 self-center">
                    <FaQuoteLeft />
                  </p>
                  <p className="my-5">{item.msg}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
