import React from 'react'

const Quote = () => {
    return (
        <section className=" w-full flex justify-center items-center py-24">
            <blockquote className='w-3/5 text-center text-wrap py-8 px-14 flex  bg-white rounded-[32px]
            flex-col items-center'>
                <p className='text-xl/[30px] text-normal text-text-custom-black text-center py-2 px-2 mb-[25px]'>
                "Nigeria and Africa has a massive network effect that have not be fully utilized. With Nigerians/Africans in every country and territory of the world, we can scale an African business to 100+ countries in few weeks"
                </p>
                <footer className="text-sm/[30px] font-bold text-text-custom-black text-center">Daniel Izeghs Oratokhai</footer>
                <footer className="text-sm/[30px] font-medium text-text-custom-black text-center ">Managing Partner at SINC Partners Ltd</footer>
                </blockquote>
        </section>
    )
}

export default Quote
