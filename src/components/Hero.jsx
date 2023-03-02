import React from 'react'
import CTAButton from './CTAButton';

const Hero = () => {
    return (
        <div className="max-w-[1640px] mx-auto p-4 rounded-xl bg-gray-100">
            <div className="max-h-[500px] relative">
                {/*overlay*/}
                <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center">
                    <h1 className="px-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Fast <span className="text-orange-500">Local</span></h1>
                    <h1 className="px-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Efficient
                    <span className="text-orange-700"> Deliveries </span></h1>
                    <h1 className="px-12 mt-4 uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">in-n-out</h1>
                    <h1 className="text-orange-500 px-24 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Mess 
                    <span className="text-orange-700 px-26 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Kollective</span></h1>
                </div>
                <img className="w-full rounded-xl max-h-[500px] object-cover" src="/assets/nycalt.jpg" />
            </div>
        </div>
    );
}   

export default Hero; 