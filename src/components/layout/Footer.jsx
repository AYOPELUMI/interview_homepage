import FooterLogo from '../../assets/SVG/Footer/FooterLogo';
import NigeriaFlag from '../../assets/SVG/Footer/Nigeria Flag';
import TrustedBusinessLogo from '../../assets/SVG/Footer/TrustedBusinessLogo';
import WhatsappLogo from '../../assets/SVG/Footer/WhatsappLogo';
import NewsLetter from '../Elements/NewsLetter';
export const Footer = () => {
  return (
    <footer className=" bg-text-custom-black">
      <div className=" flex flex-col bg-text-custom-black">
        <NewsLetter/>

        <div className=' p-12 flex gap-2 text-left border-y border-custom-white-fade'>
          <div className='flex-none w-36'>
           <FooterLogo />
            <p className=' text-wrap text-[14px]/[20px] font-light text-white'>SINC Partners is a service incubation company connecting experts in product development and growth marketing willing to offer their services to amazing startups in exchange for minute equity (usually 0.5% to 2%)</p>
          </div>
          <div className=' ml-10 flex-1 text-[16px/[23.65px] gap-3 font-normal text-white'>
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
          <div className='flex-1 text-[16px/[23.65px] gap-3 font-normal text-white'>
          
              <h3 className='text-[18px/[25.65px] font-medium mb-5'>Initiative</h3>
              <p>Jabi Plains</p>
              <p>Local Pricing Initiative</p>
              <p>Scholarship Program</p>
              <p>SSMN Pricing</p>
              <p>University STEM  </p>
              <p>University InResidency </p>
              <p>1M Nigerian <NigeriaFlag /> Products</p>
              <p>Founders Festival </p>
          </div>
          <div className='flex-1 text-[16px/[23.65px] gap-3 font-normal text-white'>
              <h3 className='text-[18px/[25.65px] font-medium mb-5'>About Us</h3>
              <p>Who We Are</p>
              <p>Our People</p>
              <p>Concept Innovations</p>
              <p>Our Process</p>
              <p>Investors Network</p>
              <p>CSR & Events</p>
              <p>Career</p>
              <p>Contact</p>
          </div>
          <div className='flex-1 text-[16px/[23.65px] gap-3 font-normal text-white'>
              <h3 className='text-[18px/[25.65px] font-medium mb-5'>More</h3>
              <p>Services</p>
              <p>Equity Jobs</p>
              <p>EIR Program</p>
              <p>Offers</p>
              <p>Innovation News</p>
              <p>FAQ</p>
              <p>Blog & Resources</p>
              <p>Press</p>
          </div>
          <div className='flex-none w-52 text-[16px/[23.65px] gap-4 font-normal text-white'>
              <h3 className='text-[18px/[25.65px] font-medium mb-5'>Location</h3>
              <p>Abuja, Nigeria</p>
              <p>Lagos, Nigeria</p>
              <p>Philadelphia, USA</p>
                <div className='flex gap-2'>
                  <TrustedBusinessLogo />
                  <WhatsappLogo />
                </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
