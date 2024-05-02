// react router
import { NavLink } from "react-router-dom";

const Link = ({setToggle}) => {
  // navigation data
  const navData = [
    { id:"1", name: "home", path: "/" },
    { id:"2", name: "doctors", path: "/doctors" },
    { id:"3", name: "about us", path: "/about" },
    { id:"4", name: "contact", path: "/contact" },
  ];
  return (
      <ul className="flex flex-col lg:flex-row gap-y-5 gap-x-8 items-center">
      {navData.map((item) => (
          <li className="text-[20px] capitalize">
          <NavLink
            to={item.path}
            key={item.id}
            onClick={() => setToggle()}
            className={navClass=>navClass.isActive ? "text-red-500" : "text-blue-500 hover:text-red-500"}
            >
            {item.name}
          </NavLink>
        </li>
      ))}
      </ul>
  );
};

export default Link;
