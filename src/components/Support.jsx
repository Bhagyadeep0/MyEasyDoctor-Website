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
        duration: 50,
        repeat: Infinity,
        repeatType: "mirror",
      },
  },
};
  
  return (
    <div className=" w-full h-10 py-5 px-[10px]text-blue-500/55 bg-black/40">
      <motion.div variants={sliderVariants} initial="initial" animate="animate" className="flex justify-between items-center w-full h-full container m-auto">
        <h1>"LoGo"</h1>
        <h1>"LoGo"</h1>
        <h1>"LoGo"</h1>
        <h1>"LoGo"</h1>
        <h1>"LoGo"</h1>
      </motion.div>
    </div>
  );
};

export default Support;
