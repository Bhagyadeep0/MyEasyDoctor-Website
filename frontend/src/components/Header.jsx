//import framer motion
import { easeInOut, motion, useCycle, AnimatePresence } from "framer-motion";

//components
import Register from "./Register";
import Link from "./Link";

const Navigation = () => {
  const [toggle, setToggle] = useCycle(false, true);

  return (
    <header className=" w-full bg-white/80 backdrop-blur-sm shadow-md fixed top-0 z-[99]">
      <div className=" container m-auto w-full h-[90px] px-4 flex justify-between items-center">
        {/* logo */}
        <div>
          <a href="/">
            <img src="./MED-LOGO.jpg" alt="med_logo" className="logo" />
          </a>
        </div>
        {/* links */}
        <div>
          {/*---------------------- small screen--------------------------- */}
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
                  open: { rotate: 50, y: "7.5px" },
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
                        transition: {
                          staggerChildren: 0.25,
                          when: "afterChildren",
                          duration: 0.5,
                          ease: easeInOut,
                        },
                      },
                      open: {
                        x: "0%",
                        transition: {
                          staggerChildren: 0.25,
                          when: "beforeChildren",
                          duration: 0.5,
                          ease: easeInOut,
                        },
                      },
                    }}
                    className="absolute flex flex-col justify-center items-center top-0 left-0 gap-y-[50px] text-3xl bg-blue-200 h-screen w-screen container m-auto"
                  >
                    {/* logo */}
                    <motion.div
                      variants={{
                        close: { y: "-100%", opacity: 0 },
                        open: { y: "0%", opacity: 1 },
                      }}
                    >
                      <a href="/">
                        <img
                          src="./MED-LOGO.jpg"
                          alt="med_logo"
                          className="logo"
                        />
                      </a>
                    </motion.div>
                    {/* links */}
                    <motion.nav
                      variants={{
                        close: { y: "-20%", opacity: 0 },
                        open: { y: "0%", opacity: 1 },
                      }}
                      className="space-y-10 lg:hidden"
                    >
                      <Link setToggle={setToggle} />
                    </motion.nav>
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

          {/*--------------------------- -----------------large screen --------------------------------------- */}
          {/* links */}
          <nav className="lg:flex gap-x-8 hidden">
            <Link />
          </nav>
        </div>
        {/* social */}
        <div className="hidden lg:flex text-2xl">
          <Register />
        </div>
      </div>
    </header>
  );
};

export default Navigation;
