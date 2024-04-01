const Footer = () => {
  const footerData = [
    {
      title: "for patient",
      desc1: "search for doctor",
      desc2: "login",
      desc3: "register",
    },
    {
      title: "for Doctor",
      desc1: "appointments",
      desc2: "login",
      desc3: "register",
    },
    { title: "Contact Us", desc1: "location", desc2: "mail", desc3: "others" },
    { title: "Follow Us", desc1: "fb", desc2: "instaGram", desc3: "register" },
  ];

  return (
    <div className="flex justify-center w-full h-full bg-gray-400 py-4 px-2 capitalize">
      <div className="flex flex-col md:flex-row justify-between container m-auto">
        {/* logo */}
        <div><h2 className="h2">Logo</h2><p>Lorem ipsum dolor sit amet.</p></div>
      {footerData.map((item, i) => (
        // footer items
        <div key={i}>
          <h3 className="h3">{item.title}</h3>
          <p className="p">{item.desc1}</p>
          <p className="p">{item.desc2}</p>
          <p className="p">{item.desc3}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Footer;
