const AreaofFocus = () => {
    return (
        <section className=' bg-custom-white-fade w-full py-12 px-20 flex flex-col'>
            <h3 className="text-text-custom-black text-[56px]/[67.2px] font-medium text-center">
                Our Area of Focus
            </h3>
            <p className='font-normal text-[17px]/[23.8px] text-wrap ml-auto mr-auto text-center w-3/5 mt-6'>
            In our quest to help make success available to everyone, we have initial strategic direction to focus on these five (5) key areas at the lab
            </p>

            <div className='flex mt-9'>
                <div className='bg-custom-dark-brown flex-1 flex flex-col p-6 justify-between items-start '>
                    <p className='font-normal text-white text-[20px]/[28px]'>01</p>
                    <p className='font-normal text-white text-[20px]/[24px] text-wrap text-left'> Business Support & Incubation</p>
                </div>
                <div className=' bg-custom-orange flex-1 flex flex-col p-6 justify-between items-start'>
                <p className='font-normal text-white text-[20px]/[28px]'>02</p>
                <p className='font-normal text-white text-[20px]/[24px] text-wrap text-left'> On-Demand & As-A-Service</p>

                </div>
                <div className='bg-custom-pink flex-1 flex flex-col p-6 justify-between items-start'>
                <p className='font-normal text-white text-[20px]/[28px]'>03</p>
                <p className='font-normal text-white text-[20px]/[24px] text-wrap text-left'>Marketplace & Crowdsourcing</p>

                </div>
                <div className='bg-custom-green flex-1 flex flex-col p-6 justify-between items-start'>
                <p className='font-normal text-white text-[20px]/[28px]'>04</p>
                <p className='font-normal text-white text-[20px]/[24px] text-wrap text-left'> Aggregation & Shared Economy</p>

                </div>
                <div className='bg-custom-light-pink flex-1 flex flex-col p-6 justify-between items-start'>
                <p className='font-normal text-white text-[20px]/[28px]'>05</p>
                <p className='font-normal text-white text-[20px]/[24px] text-wrap text-left'> Decentralized Economy & Digital Assets</p>
                </div>
                
            </div>
        </section>
    )
}

export default AreaofFocus
