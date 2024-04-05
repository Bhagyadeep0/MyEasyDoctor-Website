//react icons
import { AiFillHeart } from "react-icons/ai";
const Feature = () => {
  const featureData = [
    {
      name: "Dr. Ruby Perrin",
      desc: "MDS - Periodontology and Oral Implantology, BDS",
      icon: <AiFillHeart />,
      category: "Dentist",
      location: "Bakersfield,GS",
    },
    {
      name: "Dr. Ruby Perrin",
      desc: "BDS, MDS - Oral & Maxillofacial Surgery",
      icon: <AiFillHeart />,
      category: "Dentist",
      location: "Thailand",
    },
    {
      name: "Dr. Ruby Perrin",
      desc: "MBBS, MD - General Medicine, DNB - Cardiology",
      icon: <AiFillHeart />,
      category: "Dentist",
      location: "Cambridgeshire",
    },
    {
      name: "Dr. Ruby Perrin",
      desc: "MBBS, MS - General Surgery, MCh - Urology",
      icon: <AiFillHeart />,
      category: "Dentist",
      location: "Nigeria",
    },
  ];

  return (
    <section className="py-[80px]">
      <div className="flex flex-col justify-center items-center w-full h-full container  mx-auto gap-y-5">
        {featureData.map((item) => (
          <div
            key={item}
            className="flex flex-col items-center justify-between gap-y-10 border border-blue-600 hover:border-red-400 rounded-md transition-all duration-300 ease-in py-5 px-3"
          >
            {/* info */}
            <div className="flex-1 flex flex-col  items-center space-y-5 ">
              {/* img */}
              <div className="w-1/2">
                <img src="/doctor01.png" alt="" className="object-cover" />
              </div>
              {/* text */}
              <div className="capitalize">
                {/* name */}
                <h3 className="h3">{item.name}</h3>
                {/* desc */}
                <p className="text-[15px]">{item.desc}</p>
                {/* category, icon */}
                <div className="flex gap-x-2 text-red-600">
                  {/* icon */}
                  <span>
                    {item.icon}
                    {/* category */}
                  </span>
                  <span>{item.category}</span>
                </div>
                {/* location */}
                <p className="text-blue-400">{item.location}</p>
              </div>
            </div>
            {/* buttons  */}
            <div className="flex-1 flex flex-col mb-3 space-y-5">
              <button className="btn">Open profile</button>
              <button className="btn">Book Appointment</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feature;
