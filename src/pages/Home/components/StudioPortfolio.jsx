import Row1 from "../../../assets/SVG/Studio/Row1"
import Row2 from "../../../assets/SVG/Studio/Row2"

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
            </div>
        </section>
    )
}

export default StudioPortfolio
