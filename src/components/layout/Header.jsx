import Logo from "../../assets/SVG/Logo";


export const Header = () => {
  const navList=[ "About", "SIP", "Studio", "SEEQ","Platform","Initiative" , "More"]
  return (
    <header>
      <nav className="bg-white w-full">
        <div className="border-b border-slate-200 gap-6 flex items-center justify-between  px-4 md:px-6 py-3">
          <div className="flex items-center">
            <Logo />

          </div>
          <ul className="flex items-center gap-10 relative mr-auto ml-6">
              {navList.map((item, index) =>(
                <li className="text-black font-medium text-lg/[20px] text-text-custom-black " key={index}>
                  <a className=" text-text-custom-black">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          <div className="flex items-center gap-3 relative">
 
            <button className="bg-custom-green text-white px-6 py-4 text-base/[19.2px] rounded-3xl w-1/2">SINC With Us</button>
            <button className="bg-custom-black text-sm/[19.2px] text-nowrap text-white px-6 py-4  rounded-3xl w-fit">Apply to SIP 1.0</button>

          </div>
        </div>
      </nav>
    </header>
  );
};
