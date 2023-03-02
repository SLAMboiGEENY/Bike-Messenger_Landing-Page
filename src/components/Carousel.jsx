import React, { useState } from "react";
import {
    BsChevronCompactLeft,
    BsChevronCompactRight,
    BsFileSlides,
} from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { data } from "../data/CarouselData";

const Carousel = () => {
    const [currentPicture, setCurrentPicture] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newPic = isFirstSlide ? data.length - 1 : currentPicture - 1;
        setCurrentPicture(newPic);
    };

    const nextSlide = () => {
        const isLastSlide = currentPicture === data.length - 1;
        const newPic = isLastSlide ? 0 : currentPicture + 1;
        setCurrentPicture(newPic);
    };

    const goToSlide = (slideIndex) => {
        setCurrentPicture(slideIndex);
    };

    return (
        <div className='max-w-[1640px] h-[580px] w-full mx-auto py-16 px-6 relative group'>
            <h1 className='text-2xl flex justify-center text-black font-semibold'>
                Recent Adventures
            </h1>
            <div
                className='w-full h-full mt-6 rounded-2xl bg-center bg-cover duration-500'
                style={{
                    backgroundImage: `url(${data[currentPicture].image})`,
                }}
            ></div>
            {/* L Arrow */}
            <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-orange/20 text-blackbumfights font-bold cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={60} />
            </div>
            <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-orange/20 text-black cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={60} />
            </div>
            <div className='flex top-4 justify-center py-2'>
                {data.map((slide, slideIndex) => (
                    <div
                        className='text-2xl cursor-pointer'
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                    >
                        <RxDotFilled />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
