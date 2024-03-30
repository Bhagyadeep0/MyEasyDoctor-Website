//import framer motion
import { easeInOut, motion, useCycle, AnimatePresence } from "framer-motion";

//components
import Register from "../components/Register";
import Link from "./Link";

const Navigation = () => {
  const [toggle, setToggle] = useCycle(false, true);

  return (
    <nav className=" w-full bg-white shadow-md fixed top-0 z-[99]">
      <ul className=" container m-auto w-full h-[90px] px-4 flex justify-between items-center">
        {/* logo */}
        <div className="cursor-pointer">
          <h1 className="text-2xl">Logo</h1>
        </div>
        {/* links */}
        <div>
          {/* small screen */}
          <div className="flex lg:hidden">
            {/* toggle button */}
            <motion.button
              onClick={() => setToggle()} // change toggle value
              animate={toggle ? "open" : "close"}
              className="flex flex-col justify-center space-y-1 border-[6px] py-3 px-2 border-red-400 w-fit h-fit outline-none items-center z-[999]"
            >
              <motion.span
                variants={{
                  close: { rotate: 0, y: 0 },
                  open: { rotate: 50, y: "5px" },
                }}
                className="w-10 h-1 bg-black"
              ></motion.span>
              <motion.span
                variants={{
                  close: { rotate: 0, y: 0 },
                  open: { rotate: -50, width: "40px" },
                }}
                className="w-8 h-1 bg-black"
              ></motion.span>
              <motion.span
                variants={{
                  close: { rotate: 0, opacity: 1 },
                  open: { rotate: 0, opacity: 0 },
                }}
                className="w-5 h-1 bg-black"
              ></motion.span>
            </motion.button>
            {/* show when toggle */}
            <div>
              {/* toggle menu */}
              <AnimatePresence>
                {toggle && (
                  <motion.div
                    initial="close"
                    animate="open"
                    exit="close"
                    variants={{
                      close: {
                        x: "-100%",
                        clipPath: "circle(30px at 50px 50px)",
                        transition: {
                          staggerChildren: 0.25,
                          when: "afterChildren",
                          duration: 1,
                          ease: easeInOut,
                        },
                      },
                      open: {
                        x: "0%",
                        clipPath: "circle(600px at 50px 50px)",
                        transition: {
                          staggerChildren: 0.25,
                          when: "beforeChildren",
                          duration: 1,
                          ease: easeInOut,
                        },
                      },
                    }}
                    className="absolute flex flex-col justify-center items-center top-0 left-0 gap-y-[50px] text-3xl bg-blue-600 h-screen w-full container m-auto"
                  >
                    {/* logo */}
                    <motion.div
                      variants={{
                        close: { y: "-100%", opacity: 0 },
                        open: { y: "0%", opacity: 1 },
                      }}
                    >
                      <h1>LOGO</h1>
                    </motion.div>
                    {/* links */}
                    <motion.div
                      variants={{
                        close: { y: "-20%", opacity: 0 },
                        open: { y: "0%", opacity: 1 },
                      }}
                      className="space-y-10 lg:hidden"
                    >
                      <Link />
                    </motion.div>
                    {/* socials */}
                    <motion.div
                      variants={{
                        close: { y: "-20%", opacity: 0 },
                        open: { y: "0%", opacity: 1 },
                      }}
                    >
                      <Register />
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* large screen  */}
          <div className="flex items-center justify-between gap-x-5">
            {/* links */}
            <div className="lg:flex gap-x-8 hidden">
              <Link />
            </div>
          </div>
        </div>
        {/* social */}
        <div className="hidden lg:flex text-2xl">
          <Register />
        </div>
      </ul>
    </nav>
  );
};

export default Navigation;
