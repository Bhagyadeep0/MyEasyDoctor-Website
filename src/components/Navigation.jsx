const Navigation = () => {
  // navigation data
  const navData = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/About Us" },
    { name: "Contact", path: "/Contact" },
    { name: "register", path: "/register" },
  ];

  return (
    <nav className=" w-full bg-white shadow-md fixed top-0 z-[99]">
      <ul className=" container m-auto h-[90px] px-4 flex justify-between items-center">
        <div className="flex cursor-pointer">
          <h1 className="text-2xl">Logo</h1>
        </div>
        {/* small screen */}
        <button>
          Button
         <div className="absolute bg-gunMetal ">
         {navData.map((item, index) => (
            <a
              href={item.path}
              key={index}
              className="flex text-2xl font-medium text-bitterSweet capitalize focus:outline-none"
            >
              {item.name}
            </a>
          ))}
         </div>
        </button>

        {/* large screen  */}
        {navData.map((item, index) => (
          <a
            href={item.path}
            key={index}
            className="hidden md:flex text-2xl font-medium text-bitterSweet capitalize focus:outline-none"
          >
            {item.name}
          </a>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
