import Logo from "../../assets/SVG/Logo";


export const Header = () => {
  const navList=[ "About", "SIP", "Studio", "SEEQ","Platform","Initiative" , "More"]
  return (
    <header>
      <nav className="p-8 px-32 bg-custom-white-fade w-full">
        <div className=" gap-6 flex items-center justify-between ">
          <div className="flex items-center">
            <Logo />

          </div>
          <ul className="flex items-center gap-8 relative mr-auto ml-6">
              {navList.map((item, index) =>(
                <li className="text-black cursir-pointer font-medium text-lg/[20px] text-text-custom-black " key={index}>
                  <a className=" text-text-custom-black">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          <div className="flex items-center gap-3 relative">
 
            <button className="bg-custom-green text-white px-6 py-4 text-nowrap text-base/[19.2px] rounded-3xl w-fit">SINC With Us</button>
            <button className="bg-custom-black text-sm/[19.2px] text-nowrap text-white px-6 py-4  rounded-3xl w-fit">Apply to SIP 1.0</button>

          </div>
        </div>
      </nav>
    </header>
  );
};
