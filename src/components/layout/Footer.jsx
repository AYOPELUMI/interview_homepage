import FooterLogo from '../../assets/SVG/Footer/FooterLogo';
import NigeriaFlag from '../../assets/SVG/Footer/Nigeria Flag';
import SocialSVG from '../../assets/SVG/Footer/SocialSVG';
import TrustedBusinessLogo from '../../assets/SVG/Footer/TrustedBusinessLogo';
import WhatsappLogo from '../../assets/SVG/Footer/WhatsappLogo';
import NewsLetter from '../Elements/NewsLetter';
export const Footer = () => {
  return (
    <footer className="px-32 pb-3 bg-text-custom-black">
      <div className=" flex flex-col bg-text-custom-black">
        <NewsLetter/>

        <div className=' flex gap-2 text-left border-y border-[ #E9E9E94D] pt-12'>
          <div className='px-6 flex-none flex-wrap pb-8 w-[250px]'>
           <FooterLogo />
            <p className='text-wrap text-[17px]/[20px] text-white font-light text- flex-1 pb-10 pt-6'>SINC Partners is a service incubation company connecting experts in product development and growth marketing willing to offer their services to amazing startups in exchange for minute equity (usually 0.5% to 2%)</p>
          </div>
          <div className='px-6 flex flex-col gap-2 ml-4 text-nowrap text-[16px]/[23.65px] flex-1 font-normal text-white'>
              <h3 className='text-[18px/[25.65px] font-medium mb-5'>Platforms</h3>
              <p>Kofoundme</p>
              <p>InResidency</p>
              <p>Service Market</p>
              <p>Founders School</p>
              <p>Metty</p>
              <p>Grantty</p>
              <p>Boldtell</p>
              <p>Chekwa</p>
          </div>
          <div className='px-6 text-[16px]/[23.65px] flex-col flex gap-2 font-normal flex-1 text-white'>
          
              <h3 className='text-[18px]/[25.65px] font-medium mb-5'>Initiative</h3>
              <p>Jabi Plains</p>
              <p>Local Pricing Initiative</p>
              <p>Scholarship Program</p>
              <p>SSMN Pricing</p>
              <p>University STEM  </p>
              <p>University InResidency </p>
              <span className='text-nowrap flex gap-1 items-center'>1M Nigerian <NigeriaFlag /> Products</span>
              <p>Founders Festival </p>
          </div>
          <div className='px-6 text-nowrap text-[16px]/[23.65px] gap-2 font-normal text-white flex flex-1 flex-col'>
              <h3 className='text-[18px]/[25.65px] font-medium mb-5'>About Us</h3>
              <p>Who We Are</p>
              <p>Our People</p>
              <p>Concept Innovations</p>
              <p>Our Process</p>
              <p>Investors Network</p>
              <p>CSR & Events</p>
              <p>Career</p>
              <p>Contact</p>
          </div>
          <div className='px-6 text-nowrap text-[16px]/[23.65px] gap-2 font-normal text-white flex-1 flex flex-col'>
              <h3 className='text-[18px]/[25.65px] font-medium mb-5'>More</h3>
              <p>Services</p>
              <p>Equity Jobs</p>
              <p>EIR Program</p>
              <p>Offers</p>
              <p>Innovation News</p>
              <p>FAQ</p>
              <p>Blog & Resources</p>
              <p>Press</p>
          </div>
          <div className='border-l border-[#E9E9E94D] pl-10 flex-none text-nowrap flex flex-col w-52 text-[16px]/[23.65px] gap-2 font-normal flex-1 text-white'>
              <h3 className='text-[18px]/[25.65px] font-medium mb-5'>Location</h3>
              <p>Abuja, Nigeria</p>
              <p>Lagos, Nigeria</p>
              <p>Philadelphia, USA</p>
                <div className='flex gap-2 mt-auto'>
                  <TrustedBusinessLogo />
                  <WhatsappLogo />
                </div>
          </div>
        </div>
        <div className='flex w-full justify-between pt-10'>
          <div className='flex flex-col justify-between'>
            <span className='text-white flex text-[14px/[22.4px] font-medium text-nowrap'>
              <p className='font-light'>
              Guaranteed 2x on your service or cash investment, usually been the first to invest. 
              </p>
               in early and SINC your guaranty!
            </span>
            <div className='flex items-center justify-between pr-20'>
              <p className='text-white text-[16px/[24.78px] font-medium'>© 2023 SINC Partners Ltd. All rights reserved</p>
              <a className=' ml-auto mr-5 text-white txt-lg font-bold text-sm flex gap-1 border-b w-fit items-center self-center '>
                Privacy Policy
              </a>
              <a className='text-white mr-5 txt-lg font-bold text-sm flex gap-1 border-b w-fit items-center self-center'>
                  Terms of Service
              </a>
              <a className='text-white mr-5 txt-lg font-bold text-sm flex gap-1 border-b w-fit items-center self-center'>
                  Security
              </a>

            </div>
          </div>
          <SocialSVG />
        </div>
        <span className=' p-6 text-[#C9C9C9] text-[16px/[23.6px] font-semibold itms-center flex justify-center'>Web in Nigeria <NigeriaFlag /></span>
      </div>
    </footer>
  );
};
