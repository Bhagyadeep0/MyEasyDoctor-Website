//import framer motion
import {motion} from 'framer-motion';

const Support = () => {
//sliding logo anim
const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-50%",
      transition: {
        delay: 1.2,
        duration: 200,
        repeat: Infinity,
        repeatType: "mirror",
      },
  },
};
  
  return (
    <div className=" w-full h-fit py-2 px-[10px]text-blue-500/55 bg-black/40">
      <motion.div variants={sliderVariants} initial="initial" animate="animate" className="flex justify-between items-center w-full h-full container m-auto">
        <img src="./jeevan_rekha_hospital.jpg" alt="img" className='logo'/>
        <img src="./jeevan_rekha_hospital.jpg" alt="img" className='logo'/>
        <img src="./jeevan_rekha_hospital.jpg" alt="img" className='logo'/>
        <img src="./jeevan_rekha_hospital.jpg" alt="img" className='logo'/>
        <img src="./jeevan_rekha_hospital.jpg" alt="img" className='logo'/>
        <img src="./jeevan_rekha_hospital.jpg" alt="img" className='logo'/>
        <img src="./jeevan_rekha_hospital.jpg" alt="img" className='logo'/>
        <img src="./jeevan_rekha_hospital.jpg" alt="img" className='logo'/>
      </motion.div>
    </div>
  );
};

export default Support;
