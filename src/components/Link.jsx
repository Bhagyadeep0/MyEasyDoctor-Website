const Link = () => {
  // navigation data
  const navData = [
    { name: "home", path: "home" },
    { name: "doctors", path: "doctors" },
    { name: "about us", path: "about" },
    { name: "contact", path: "contact" },
  ];
  return (
    <>
      {navData.map((item, index) => (
          <div className="flex justify-center items-center">
          <a
            href={`#${item.path}`}
            key={index}
            className="flex text-2xl font-medium text-bitterSweet capitalize focus:outline-none"
            >
            {item.name}
          </a>
        </div>
      ))}
      </>
  );
};

export default Link;
