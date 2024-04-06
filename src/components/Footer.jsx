//react-icons
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const footerData = [
    {
      title: "for patient",
      desc1: "search for doctor",
      desc2: "login",
      desc3: "register",
      path1: "/doctors",
      path2: "/sign-up",
      path3: "/sign-up",
    },
    {
      title: "for Doctor",
      desc1: "appointments",
      desc2: "login",
      desc3: "register",
      path1: "/",
      path2: "/sign-up",
      path3: "/sign-up",
    },
    {
      title: "Contact Us",
      desc1: "location",
      desc2: "mail",
      desc3: "others",
      path1: "/",
      path2: "/sign-up",
      path3: "/sign-up",
    },
    {
      title: "Follow Us",
      desc1: <FaFacebookF />,
      desc2: <FaInstagram />,
      desc3: <FaXTwitter />,
      path1: "https://www.facebook.com/myeasydoctor2020/",
      path2: "https://www.instagram.com/myeasydoctor/",
      path3: "https://twitter.com/myeasydoctor/",
    },
  ];

  return (
   <section>
     <div className="flex justify-center w-full h-full bg-blue-400 py-10 px-2 capitalize">
      <div className="flex flex-col md:flex-row justify-between container m-auto">
        {/* logo */}
        <div>
          <a href="/">
            <img src="./MED-LOGO.jpg" alt="med_logo" className="logo" />
          </a>
          <p>MyEasyDoctor</p>
        </div>
        {footerData.map((item, i) => (
          // footer items
          <div key={i} className="space-y-4">
            <h3 className="h3">{item.title}</h3>

            <a
              href={item.path1}
              target="_blank"
              className="cursor-pointer hover:text-blue-800"
            >
              <p className="p mb-3">{item.desc1}</p>
            </a>
            <a
              href={item.path2}
              target="_blank"
              className="cursor-pointer hover:text-blue-800"
            >
              <p className="p mb-3">{item.desc2}</p>
            </a>
            <a
              href={item.path3}
              target="_blank"
              className="cursor-pointer hover:text-blue-800"
            >
              <p className="p">{item.desc3}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
   </section>
  );
};

export default Footer;
