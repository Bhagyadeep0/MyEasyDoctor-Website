//import framer motion
import { easeInOut, motion, useCycle, AnimatePresence } from "framer-motion";

const Navigation = () => {
  // navigation data
  const navData = [
    { name: "home", path: "/" },
    { name: "doctors", path: "/doctors" },
    { name: "about Us", path: "/About Us" },
    { name: "contact", path: "/Contact" },
    { name: "register", path: "/register" },
  ];

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
                          duration: 0.35,
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
                      className="space-y-10"
                    >
                      {navData.map((item, index) => (
                        <a
                          href={item.path}
                          key={index}
                          className="flex justify-center text-3xl font-medium text-bitterSweet capitalize focus:outline-none"
                        >
                          {item.name}
                        </a>
                      ))}
                    </motion.div>
                    {/* socials */}
                    <motion.div
                      variants={{
                        close: { y: "-20%", opacity: 0 },
                        open: { y: "0%", opacity: 1 },
                      }}
                    >
                      Social
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* large screen  */}
          <div className="flex items-center justify-between gap-x-5">
            <div className="flex gap-x-8">
              {navData.map((item, index) => (
                <div>
                  <a
                    href={item.path}
                    key={index}
                    className="hidden lg:flex text-2xl font-medium text-bitterSweet capitalize focus:outline-none"
                  >
                    {item.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
         {/* social */}
         <div className="hidden lg:flex text-2xl">Social</div>
      </ul>
    </nav>
  );
};

export default Navigation;
