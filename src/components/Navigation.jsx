


const Navigation = () => {

  const navData = [
    {name: "Home",path: "/"},
    {name: "About Us",path: "/About Us"},
    {name: "Contact",path: "/Contact"},
    {name: "register",path: "/register"},
  ]

  return (
    <nav className="w-full bg-white/50 shadow-md">
      <ul className="container m-auto py-5 px-4 flex justify-between items-center">
        <div className="flex cursor-pointer"><h1 className="text-2xl">Logo</h1></div>
      {navData.map((item,index)=>(
        <a href={item.path} key={index} className="text-2xl font-medium text-bitterSweet capitalize focus:outline-none">{item.name}</a>
      ))}
      </ul>
    </nav>
  )
}

export default Navigation;
