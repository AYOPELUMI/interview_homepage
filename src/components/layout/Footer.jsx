import Logo from '../../assets/SVG/Logo';
import NewsLetter from '../Elements/NewsLetter';
export const Footer = () => {
  return (
    <footer className=" bg-text-custom-black p-12">
      <div className="p-4 flex flex-col bg-text-custom-black">
        <NewsLetter/>

        <div className='flex gap-2 text-left border border-custom-white-fade'>
          <div className='flex-1'>
            <Logo />
            <p className=' text-wrap text-[14px]/[20px] font-light text-white'>SINC Partners is a service incubation company connecting experts in product development and growth marketing willing to offer their services to amazing startups in exchange for minute equity (usually 0.5% to 2%)</p>
          </div>
          <div className='flex-1 text-[16px/[23.65px] font-normal text-white'>
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
          <div className='flex-1 text-[16px/[23.65px] font-normal text-white'>
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
          <div className='flex-1 text-[16px/[23.65px] font-normal text-white'>
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
          <div className='flex-1 text-[16px/[23.65px] font-normal text-white'>
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
          <div className='flex-1 text-[16px/[23.65px] font-normal text-white'>
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
        </div>
      </div>
    </footer>
  );
};
