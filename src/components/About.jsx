import React from "react";

const About = () => {
    return (
        <div className="w-full max-w-[1640px] p-4">
            <div className="mx-auto text-black bg-gray-100">
                <h1 className="font-semibold flex justify-center text-2xl mb-4">About Us</h1>
                <ul className="justify-center flex  flex-col space-y-3 list-disc">
                    <li className="flex justify-center">Started for messengers, by messengers</li>
                    <li className="flex justify-center">Owner Operated</li>
                    <li className="flex justify-center">24/7 --- 7days/week</li>
                    <li className="flex justify-center">Best Rates in NYC</li>
                </ul>
            </div>


            <div className='mx-auto max-w-[1640px] p-4'>
                <h1 className="font-semibold flex justify-center text-2xl my-6">Services we offer</h1>
                <ul className='space-y-3'>
                    <li className='flex gap-3 justify-center'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke-width='1.5'
                            stroke='currentColor'
                            class='h-5 w-5 text-black'
                        >
                            <path
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                d='M4.5 12.75l6 6 9-13.5'
                            />
                        </svg>
                    Regular Shit - 3hr window / $10+ initial
                    </li>
                    <li className='flex gap-3 justify-center'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke-width='1.5'
                            stroke='currentColor'
                            class='h-5 w-5 text-black'
                        >
                            <path
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                d='M4.5 12.75l6 6 9-13.5'
                            />
                        </svg>
                        Kevin Bacon Rush - 2hr  window / 15+ initial 
                    </li>
                    <li className='flex gap-3 justify-center'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke-width='1.5'
                            stroke='currentColor'
                            class='h-5 w-5 text-black'
                        >
                            <path
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                d='M4.5 12.75l6 6 9-13.5'
                            />
                        </svg>
                        Face Melter - 1hr window ODE / $20+ initial 
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default About;
