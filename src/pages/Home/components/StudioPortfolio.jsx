import { FaArrowRightLong } from "react-icons/fa6"
import Row1 from "../../../assets/SVG/Studio/Row1"
import Row2 from "../../../assets/SVG/Studio/Row2"
import Row3 from "../../../assets/SVG/Studio/Row3"
import Row4 from "../../../assets/SVG/Studio/Row4"
import Row5 from "../../../assets/SVG/Studio/Row5"
import Row6 from "../../../assets/SVG/Studio/Row6"


const StudioPortfolio = () => {
    return (
        <section className=' bg-custom-white-fade w-full py-12 px-20 flex flex-col'>
            <h3 className="text-text-custom-black text-[56px]/[67.2px] font-medium text-center">
                Our Studio Portfolio
            </h3>
            <p className='font-normal text-[17px]/[23.8px] text-wrap ml-auto mr-auto text-center w-3/5 mt-6'>
            Our 2024 Service Incubator Portfolio Companies
            </p>

            <div className='flex flex-wrap justify-center mt-9'>
                <Row1 />
                <Row2 />    
                <Row3 />
                <Row4 />
                <Row5 />
                <Row6 />        
            </div>
                <a className='text-black mx-auto font-bold text-lg flex gap-1 border-b w-fit items-center mt-20'>
                        View all Companies
                        <FaArrowRightLong />
                        </a>
        </section>
    )
}

export default StudioPortfolio
