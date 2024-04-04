//import framer motion
import {motion} from 'framer-motion';

const Hospitals = () => {
//sliding logo anim
const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-50%",
      transition: {
        delay: 1.5,
        duration: 100,
        repeat: Infinity,
        repeatType: "mirror",
        repeatDelay: 0.2,
        ease: "linear",
      },
  },
};
  
  return (
    <div className=" w-full h-fit py-2 px-[10px]text-blue-500/55 bg-blue-400/10">
      <motion.div variants={sliderVariants} initial="initial" animate="animate" className="flex justify-between items-center w-full h-full container m-auto">
        <img src="./jeevan_rekha_hospital.jpg" alt="img" className='logo'/>
        <img src="./jeevan_rekha_hospital.jpg" alt="img" className='logo'/>
        <img src="./jeevan_rekha_hospital.jpg" alt="img" className='logo'/>
        <img src="./jeevan_rekha_hospital.jpg" alt="img" className='logo'/>
        <img src="./jeevan_rekha_hospital.jpg" alt="img" className='logo'/>
      </motion.div>
    </div>
  );
};

export default Hospitals;
