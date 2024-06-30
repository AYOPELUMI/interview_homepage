
const NewsLetter = () => {
    return (
        <div className="w-6/12 py-16 text-left">
            <h3 className="text-white text-[60px]/[72px] font-medium mb-6 text-left">
                Newsletter
            </h3>
            <p className="text-[16px/[26.56px] text-white font-normal">
            Get the latest about SINC Partners, our startup Incubator program, Portfolio company offerings - straight into your inbox.
            </p>

            <label  className=" mt-7 flex bg-transparent border border-[#E9E9E94D] rounded-full w-fit">
                <input  placeholder="Enter your email address" className='bg-transparent text-white px-[32px] py-[20px] border-0 outline-0'/>
                <button className="bg-white text-[20px]/[19.2px] font-bold text-text-custom-black px-[20px] py-[8px]  rounded-full w-[190px]">Suscribe</button>

            </label>
        </div>
    )
}

export default NewsLetter
