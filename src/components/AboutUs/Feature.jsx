//react icons
import { AiOutlineArrowRight } from "react-icons/ai";
const Feature = () => {
  const featureData = [
    {
      id: 1,
      title: "Qualified Staff of Doctors",
      desc: "World class treatment for everyone. Our health system offers unmatched, expert health care.",
      img: "/find_doctor.jpg",
    },
    {
      id: 2,
      title: "Qualified Staff of Doctors",
      desc: "World class treatment for everyone. Our health system offers unmatched, expert health care.",
      img: "/gps.jpg",
    },
    {
      id: 3,
      title: "Book an appointment",
      desc: "World class treatment for everyone. Our health system offers unmatched, expert health care.",
      img: "/appointment.jpg",
    },
  ];

  return (
    <section className="pt-[80px]">
      <div className="flex justify-center items-center w-full h-full container  mx-auto">
        <div className="w-full h-full flex flex-col gap-5 lg:gap-[50px] justify-between items-center ">
          {/* text */}
          <div className="text-center pt-5 pb-8 lg:pb-4 capitalize">
            {/* title */}
            <h1 className="h1">
              Why Choose <span className="text-blue-400">Us.</span>
            </h1>
            <hr className="max-w-[100%] bg-black m-auto" />
            {/* desc */}
            <p className="p">
              World class treatment for everyone. Our health system offers
              unmatched, expert health care.
            </p>
          </div>
          {/* feature info box */}
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-3">
            {/* container */}
            {featureData.map((item) => (
              <div className="py-2 px-4 rounded flex-1 flex flex-col text-center items-center justify-between border border-blue-400/20 hover:border-blue-400 transition-all duration-300 ease-in-out">
                {/* textContainer */}
                <div className="" key={item.id}>
                  <h2 className="h2 capitalize">{item.title}</h2>
                  {/* desc */}
                  <p className="p">{item.desc} </p>
                </div>
                {/* imgContainer */}
                <div className="rounded self-center w-1/2">
                  <img src={item.img} alt="" className="w-100% object-cover" />
                </div>
                {/* button */}
                <div>
                  <a href="/doctors">
                    <button className="flex gap-1 group rounded-full bg-blue-800/10 p-2 leading-none">
                      <span className="text-[16.5px]">Go</span>
                      <span className="group-hover:translate-x-1 transition-all duration-500 ease-in">
                        <AiOutlineArrowRight />
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
