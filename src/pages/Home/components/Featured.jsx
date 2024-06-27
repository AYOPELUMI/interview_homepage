import FeaturedImage from "../../../assets/SVG/Featured Component/FeaturedImage";
import Info from "../../../assets/SVG/Featured Component/Info";
const Featured = () => {
    return (
        <section className=' bg-custom-white-fade w-full  py-12 px-20 flex flex-col'>
            <p className="text-[24ppx]/[30px] font-semibold text-text-custome-black">As Featured in</p>
            <div className='flex justify-center items-center w-full'>
                <FeaturedImage />
                <Info />
            </div>
            <h3 className="text-text-custom-black mt-12 text-[80px]/[104px] font-medium text-center">
            Let's build companies that help everyone succeed
            </h3>


            <div className="flex gap-3 mt-16 w-full justify-center ">
                 <button className="bg-white text-sm/[14px] text-custom-text-black px-[32px] border border-[#212121] py-[10px] font-medium rounded-3xl w-fit">SINC With Us</button>
                 <button className="bg-text-custom-black text-sm/[14px] text-white px-[32px] border border-[#212121] py-[10px] font-medium rounded-3xl w-fit">Apply to SIP 1.0</button>
            </div>
        </section>
    )
}

export default Featured
