import { FaArrowRightLong } from "react-icons/fa6";

const CoFound = () => {
    return (
        <section className=' bg-custom-white-fade w-full  py-12 px-20 flex flex-col'>
            <h3 className="text-text-custom-black text-[56px]/[67.2px] font-medium text-center">
            Co-found With Us
            </h3>
            <p className='font-normal text-[16px]/[22.4px] text-wrap ml-auto mr-auto text-center  mt-7'>
            We seek to collaborate with visionary individuals who are solving similar problems of helping entrepreneurs succeed 
            </p>

            <div className='flex mt-16 gap-10'>

                <div className='bg-white flex-1 flex flex-col rounded-xl py-5 px-4 gap-9 items-start'>
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="30" cy="30" r="30" fill="#303030"/>
                <path d="M29.74 36V25C28.78 25.76 27.7067 26.2533 26.52 26.48V24.06C27.88 23.74 29.1 23.0533 30.18 22H32.26V36H29.74Z" fill="white"/>
                </svg>
                <p className='font-medium text-text-custom-black text-[22px]/[26.4px]'>We Ideate</p>
                <p className='font-normal text-text-custom-black text-[16px]/[22px] text-wrap text-left'>
                We internally generate concepts and ideas that help solve problems in our thesis areas, after which we proceed to develop a nano/micro MVP (usually having as low as 30 functions to as high as 100 functions) of the product that we take to the market.
                </p>

                </div>
                <div className='bg-white flex-1 flex flex-col rounded-xl py-5 px-4 gap-9 items-start'>
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="30" cy="30" r="30" fill="#F47733"/>
                </svg>
                <p className='font-medium text-text-custom-black text-[22px]/[26.4px]'>You Validate</p>
                <p className='font-normal text-text-custom-black text-[16px]/[22px] text-wrap text-left'>
                You join our 3 months  inResidence program as a business expert to run the operations or as a technical expert to further the development and validate the idea with an average monthly revenue of $1k or 10,000 users and/or an MVP of at least 150 functions 
                </p>
                </div>
                <div className='bg-white flex-1 flex flex-col rounded-xl py-5 px-4 rounded-xl py-5 px-4 gap-9 justify-between items-start'>
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="30" cy="30" r="30" fill="#FF78BF"/>
                <path d="M29.72 36.16C28.28 36.16 27.08 35.7867 26.12 35.04C25.1733 34.28 24.6333 33.28 24.5 32.04L26.98 31.64C27.0867 32.2933 27.3867 32.82 27.88 33.22C28.3867 33.6067 29.0067 33.8 29.74 33.8C30.5133 33.8 31.1333 33.5867 31.6 33.16C32.08 32.7333 32.32 32.1733 32.32 31.48C32.32 30.76 32.0933 30.1933 31.64 29.78C31.1867 29.3667 30.5733 29.16 29.8 29.16C29.1867 29.16 28.66 29.3133 28.22 29.62L27.16 27.84L31 24.34H24.9V22H34.18V24.2L30.6 27.4C31.92 27.3467 32.9867 27.7 33.8 28.46C34.6267 29.2067 35.04 30.2333 35.04 31.54C35.04 32.9267 34.5533 34.0467 33.58 34.9C32.6067 35.74 31.32 36.16 29.72 36.16Z" fill="white"/>
                </svg>
                <p className='font-medium text-text-custom-black text-[22px]/[26.4px]'>You Co-own</p>
                <p className='font-normal text-text-custom-black text-[16px]/[22px] text-wrap text-left'>
                After successful validation and demo day at the end of the EIR program, we move those with perfect fit to become co-founders of the product they validated as CEO & CTO, each owning 20% of the venture.
                 </p>
                </div>
                
            </div>
            <a className='text-black txt-lg font-bold text-sm flex gap-1 border-b w-fit items-center self-center mt-12'>
                        Build your dream
                        <FaArrowRightLong />
                    </a>
        </section>
    )
}

export default CoFound
