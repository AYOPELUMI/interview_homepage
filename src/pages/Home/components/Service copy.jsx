import { FaArrowRightLong } from "react-icons/fa6";
const Service = () => {
    return (
        <section className=' bg-custom-white-fade w-full  py-12 px-20 flex flex-col'>
            <h3 className="text-text-custom-black text-[56px]/[67.2px] font-medium text-center">
            Our Service Incubation Model
            </h3>
            <p className='font-normal text-[17px]/[22.4px] text-wrap ml-auto mr-auto text-center mt-6'>
            The Service Incubation model is an alternate funding model for startup that allows professionals to offer their services to startups in return for a minute equity (usually between 0.5% to 1.5%) in the startup. As a service incubator, you will see your share grow as much as 1000% in 12 – 24 months as been first to invest.
            </p>
            <div className="flex flex-col gap-3 mt-7 items-start mt-6">
                <h3 className='text-text-custom-black text-[32px]/[38.4px] font-medium '>
                      Hypothesis
                </h3>
                <p className='font-normal text-[17px]/[2.4px] text-custom-text-black'>
                Just a few reasons we know its time for this model within the ecosystem
                </p>
            </div>

            <div className='flex mt-16 gap-10'>

                <div className='bg-white flex-1 flex flex-col rounded-xl py-5 px-4 gap-9 items-start'>
                    <p className='font-medium '>
                    <svg width="36" height="30" viewBox="0 0 36 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 0L35.3205 30H0.679491L18 0Z" fill="#FF78BF"/>
</svg>
                    </p>
                <p className='font-normal text--custom-text-black text-[17px]/[22px] text-wrap text-left'>
                Most early-stage companies and pre-product startups cannot afford professional services especially those who don’t have family and friends’ network that can support
                </p>

                </div>
                <div className='bg-white flex-1 flex flex-col rounded-xl py-5 px-4 gap-9 items-start'>
                <p className='font-medium '>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 0L40 20L20 40L0 20L20 0Z" fill="#20888F"/>
</svg>
</p>
                <p className='font-normal text-custom-text-black text-[17px]/[22px] text-wrap text-left'>
                If startups can seed 5-10% in equity to incubators for $20k to $200k funding most times, they will be willing to seed 10% equity for a $25k service investment
                </p>
                </div>
                <div className='bg-white flex-1 flex flex-col rounded-xl py-5 px-4 rounded-xl py-5 px-4 gap-9 justify-between items-start'>
                <p className='font-medium'>
                <svg width="40" height="37" viewBox="0 0 40 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 0L39.0211 13.8197L31.7557 36.1803H8.2443L0.97887 13.8197L20 0Z" fill="#FF88C6"/>
                </svg>
                </p>
                <p className='font-normal text-custom-text-black text-[17px]/[22px] text-wrap text-left'>
                Young professionals who don’t have a lot of money to invest nor an accredited investors will have opportunities to take equity at the early stage of their career, usually been the first to invest and almost guaranteed of return
                 </p>
                </div>
                
            </div>

            <div className="flex flex-col gap-3 mt-16 self-start">
                <h3 className='text-text-custom-black text-[32px]/[38.4px] font-medium  mb-2 text-left'>
`                   Case Study
                </h3>
                <p className='font-normal text-[17px]/[2.4px] text-custom-text-black'>
                    See what Service Incubators get, the maths behind Service Equity (SEEQ) and what the value of your share equity can be over time
                </p>
                <div className=" flex gap-3 w-3/4 mt-8">
                 <button className="bg-white text-sm/[14px] text-custom-text-black px-6 border border-[#212121] py-3 font-medium rounded-3xl w-fit">Service Incubator Equity</button>
                 <button className="bg-white text-sm/[14px] text-custom-text-black px-6 border border-[#212121] py-3 font-medium rounded-3xl w-fit">SEEQ Maths Equation</button>
                 <button className="bg-white text-sm/[14px] text-custom-text-black px-6 border border-[#212121] py-3 font-medium rounded-3xl w-fit">Value of my Equity Over Time</button>
                </div>
                <a className='text-black font-bold text-sm flex gap-1 border-b w-fit items-center mt-12 self-center'>
                        Become A Service Incubator
                        <FaArrowRightLong />
                    </a>
            </div>
        </section>
    )
}

export default Service
