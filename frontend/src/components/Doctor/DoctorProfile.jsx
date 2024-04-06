// react icons
import { MdAddCall,MdLocationCity } from "react-icons/md";

const DoctorProfile = () => {
  return (
    <section className="py-[50px] px-5 lg:py-[150px]">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-5 container mx-auto">
        {/* image */}
        <div className="flex-1 space-y-5 ">
          <img src="/doctor01.png" alt="" />
        </div>
        {/* content */}
        <div className="flex-1 space-y-5">
          {/* name */}
          <h1 className="h1">Dr. Israel Bauch</h1>
          {/* desc */}
          <p className="italic text-red-600 text-[30px]">Infrastructure</p>
          {/* location */}
          <p className="text-[25px] underline flex items-center gap-x-5 group"><span className="bg-blue-100 p-3 rounded-full group-hover:bg-blue-200 transition-all duration-300 ease-in"><MdLocationCity /></span> <span>38979 Emilie Club,Giovani Knoll,GD</span></p>
          {/* other, mobile,mail */}
          <div className="mt-[30px] text-2xl italic group">
            <a href="/" className="flex items-center gap-x-5"><span className="bg-blue-100 p-3 rounded-full group-hover:bg-blue-200 transition-all duration-300 ease-in"><MdAddCall/></span><span>998.244.6316 x495</span></a>
        </div>
          {/* bio */}
          <p>
            Quia ipsa nihil. Dicta in expedita quis delectus ducimus
            necessitatibus occaecati voluptatum. Amet consequatur aut. Deserunt
            rerum nobis qui ea. Maxime quia nihil corporis rerum ea. Eum illo
            neque aspernatur. Cupiditate perspiciatis in cumque velit et
            possimus praesentium aut adipisci. Facere dolor aut hic nobis hic
            unde. Blanditiis sequi eveniet ea. Voluptas porro dolorum et tenetur
            ut. Est ea eaque. Ab ex voluptas dolor sunt quia vel accusamus. Et
            optio quia ut quo. Repellat velit excepturi facilis sint nostrum
            officiis sit.
          </p>
          {/*-------------------- button ------------------------------*/}
          <button className="btn">Book Now</button>
        </div>
      </div>
    </section>
  );
};

export default DoctorProfile;
