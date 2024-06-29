import HeroImage from "../../../assets/SVG/Hero/HeroImage";

export const Hero = () => {
  return (
    <section className="flex flex-1 items-center bg-white flex-row">
      <aside className="flex  justify-center flex-1 flex-col pl-40">
        <span className="text-black text-[24px]/[38.4px] w-3/4 font-normal text-wrap text-left">
          <h3 className="text-[32px]/[51.1px] font-medium text-pretty mb-4">
              SINC Partners is a service incubation company 
          </h3>
          Connecting experts in product development and growth marketing willing to offer their services to amazing startups in exchange for minute equity (usually 0.5% to 2%).
          SINC With Us
        </span>
        <button className=" mt-4 bg-custom-black text-sm/[19.2px] text-white px-6 py-4 font-medium rounded-full w-fit">Apply to SIP 1.0</button>

      </aside>
      <aside className="flex-1">
       <HeroImage />
      </aside>

    </section>
  );
};
