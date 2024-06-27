import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";

const NetworkBuilder = () => {
    return (
        <section className=' bg -custom-white-bg flex flex-col pt-5 gap-6 items-center justify-center'>
            <h3 className="text-[56px]/[72.8px] font-medium text-wrap text-center text-text-custom-black w-3/4">Network of builder helping startup scale</h3>
            <div className='flex gap-5 w-3/4'>
                <aside className='flex-1 flex flex-col gap-4 p-5 bg-white '>
                    <h4 className='text-black text-[24px]/[28.8px] text-left font-medium text-wrap'>
                    Work with Service Incubators to expedite your time-to-market
                    </h4>
                    <span className='text-[17px]/[27.2px] text-left text-wrap font-semibold'>
                        <p className='font-normal'>
                    Collaborate with our meticulously chosen service partners, each with a vested interest, ensuring a shared commitment to success in the game of venture building.
                        </p>
                    For 7.5% equity, you get a product manager, product designer, frontend engineer, software engineer and growth marketer to build the MVP of your app or web application and validate it.
                    </span>
                    <a className='text-black font-bold text-sm flex gap-1 border-b w-fit items-center'>
                        Learn More
                        <FaArrowRightLong />
                    </a>
                </aside>
                <aside className=' flex-1 flex flex-col gap-4 p-5 bg-white'>
                    <h4 className=' flex-auto text-black text-[24px]/[28.8px] text-left font-medium text-wrap'>
                     Access funding after your mvp is validated 
                    </h4>
                    <span className=' flex-auto text-[17px]/[27.2px] text-left text-wrap font-semibold'>
                        <p className='font-normal'>
                        Startups that have built and validated their product can take advantage of the financial resources of the SINC Investors Network, elevating their potential for success in the venture capital landscape.
                        </p>
                        Raise $5k, $25k, $50k and $125k in 4 bootstrap deals within 12 months  
                    </span>
                    <a className='text-black  font-bold text-sm flex gap-1 border-b w-fit items-center'>
                        Learn More
                        <FaArrowRightLong />
                    </a>
                </aside>
            </div>
        </section>
    )
}

export default NetworkBuilder
