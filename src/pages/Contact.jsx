// react icons
import { MdLocationPin, MdPhone, MdMail,} from "react-icons/md";
// import framer motion
import { motion } from "framer-motion";

//components
import Form from "../components/Contact/Form";
import Loader from "../components/Loader";

const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center container mx-auto gap-5">
      {/* --------------content----------------- */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 4, duration: 3 }}
        className="flex-1 gap-y-5 space-y-5 px-3"
      >
        {/* title-small */}
        <h6 className="text-[15px] text-blue-600">Get in touch</h6>
        {/* title */}
        <h1 className="h1">Have Any Question?</h1>
        {/*--------- location-------- */}
        <div className="flex items-center gap-x-5 border border-solid rounded-md border-blue-500/30 px-4 py-2 ">
          {/* icon */}
          <div className="bg-blue-300 rounded-full p-3">
            <MdLocationPin className="text-[40px]" />
          </div>
          {/* text */}
          <div>
            <h2 className="h2 mb-2 leading-none">Address</h2>
            <p className="text-[25px] underline italic">
              8432 Mante Highway, Aminaport, USA
            </p>
          </div>
        </div>
        {/*--------- Phone-------- */}
        <div className="flex items-center gap-x-5 border border-solid rounded-md border-blue-500/30 px-4 py-2 ">
          {/* icon */}
          <div className="bg-blue-300 rounded-full p-3">
            <MdPhone className="text-[40px]" />
          </div>
          {/* text */}
          <div>
            <h2 className="h2 mb-2 leading-none">Phone Number</h2>
            <p className="text-[25px] underline italic">0123456789</p>
          </div>
        </div>
        {/*--------- mail-------- */}
        <div className="flex items-center gap-x-5 border border-solid rounded-md border-blue-500/30 px-4 py-2 ">
          {/* icon */}
          <div className="bg-blue-300 rounded-full p-3">
            <MdMail className="text-[40px]" />
          </div>
          {/* text */}
          <div>
            <h2 className="h2 mb-2 leading-none">Email</h2>
            <p className="text-[25px] underline italic">med@mail</p>
          </div>
        </div>
      </motion.div>
      {/*------------------- form-------------------- */}
      <div className="flex-1">
        <Form />
        <Loader />
      </div>
    </div>
  );
};

export default Contact;
