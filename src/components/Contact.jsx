import React, { useRef } from "react";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const messageRef = useRef();
    const pickupRef = useRef();
    const dropoffRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className='px-6 mx-auto w-full max-w-[1640px] bg-white text-black'>
            <h1 className='mt-6 text-xl flex justify-evenly items-center mb-6 text-black font-semibold mx-auto'>Located in Midtown Manhattan</h1>
                
            
            <div className='grid grid-cols-2'>
                <div className='order-1 col-span-full'>
                    <iframe
                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24183.104141068732!2d-73.99636919982919!3d40.74248953182287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13. 1!3m3!1m2!1s0x89c25901a4127ca9%3A0xbecdcc9081d6cfdb!2sMidtown%20Manhattan%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1676640445492!5m2!1sen!2sus'
                        title='map'
                        scrolling='no'
                        frameborder='0'
                        width='100%'
                        height='300px'
                        className=''
                        loading='lazy'
                    />
                </div>

                {/* contact form time */}
                <div className='order-3 md:order-2 col-span-full bg-gray-100 my-5 md:col-span-1 py-5 md:py-10 px-6'>
                    <form
                        action=''
                        className='mx-auto max-w-xl space-y-4'
                        onSubmit={handleSubmit}
                    >
                        <div>
                            <label htmlFor='name' className='sr-only'>
                                Name
                            </label>
                            <input
                                ref={nameRef}
                                type='text'
                                id='name'
                                name='name'
                                placeholder='Name'
                                className='form-input w-full block shadow-sm rounded border-gray-800 bg-gray-100 text-base placeholder-gray-800 focus:border-green-400 focus:ring-1 focus:ring-green-400'
                            />
                        </div>
                        {/* email */}
                        <div>
                            <label htmlFor='email' className='sr-only'>
                                Email
                            </label>
                            <input
                                ref={emailRef}
                                type='email'
                                id='email'
                                name='email'
                                placeholder='Email Address'
                                className='form-input w-full block shadow-sm rounded border-gray-800 bg-gray-100 text-base placeholder-gray-800 focus:border-green-400 focus:ring-1 focus:ring-green-400'
                            />
                        </div>
                        {/* telephone number */}
                        <div>
                            <label htmlFor='telephone' className='sr-only'>
                                Telephone
                            </label>
                            <input
                                ref={phoneRef}
                                type='phone'
                                id='phone`'
                                name='phone'
                                placeholder='Telephone Number'
                                className='form-input w-full block shadow-sm rounded border-gray-800 bg-gray-100 text-base placeholder-gray-800 focus:border-green-400 focus:ring-1 focus:ring-green-400'
                            />
                        </div>
                        {/* pickup location */}
                        <div>
                            <label htmlFor='pickup' className='sr-only'>
                                Pickup
                            </label>
                            <input
                                ref={pickupRef}
                                type='text'
                                id='pickup'
                                name='pickup'
                                placeholder='Pickup Location'
                                className='form-input w-full block shadow-sm rounded border-gray-800 bg-gray-100 text-base placeholder-gray-800 focus:border-green-400 focus:ring-1 focus:ring-green-400'
                            />
                        </div>
                        {/* Dropoff location */}
                        <div>
                            <label htmlFor='dropoff' className='sr-only'>
                                Dropoff
                            </label>
                            <input
                                ref={dropoffRef}
                                type='text'
                                id='dropoff'
                                name='dropoff'
                                placeholder='Dropoff Location'
                                className='form-input w-full block shadow-sm rounded border-gray-800 bg-gray-100 text-base placeholder-gray-800 focus:border-green-400 focus:ring-1 focus:ring-green-400'
                            />
                        </div>
                        {/* MSG input */}
                        <div className='col-span-full'>
                            <label htmlFor='message' className='sr-only'>
                                Message
                            </label>
                            <textarea
                                ref={messageRef}
                                name='message'
                                id='message'
                                cols='30'
                                rows='4'
                                placeholder='Special notes, keycodes, room numbers, etc...'
                                className='form-textarea resize-none w-full shadow-sm rounded border-gray-800 bg-gray-100 placeholder-gray-800 focus:border-green-400 focus:ring-1 focus:ring-green-400'
                            ></textarea>
                        </div>
                        {/*Submit btn */}
                        <div>
                            <button
                                type='submit'
                                className='py-2 px-6 rounded bg-green-400 text-base font-semibold text-white uppercase hover:bg-orange-500 transition-all duration-500'
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>

                {/* Contact container 2 */}
                <div className='order-2 md:order-3 col-span-full md:col-span-1 py-5 md:py-10 px-6'>
                    <div
                        className='mx-auto max-w-xl border-gray-400 bg-gray-100 flex flex-col space-y-5'
                        id='#contact'
                    >
                        <h2 className='text-2xl flex font-semibold justify-center items-center mt-6'>Need help today?
                        </h2>
                        <p className='top-7 text-sm border-gray-800 bg-gray-100 text-black'>
                            Luckily for you here at "In&Out MessKo" we understand and we're here for you. Just fill out the form below to be the best of your knowledge and one of our dispatchers will be contacting you at the listed telephone number below.
                        </p>
                        <a
                            href='malito:innaoutmessko@gmail.com'
                            id='contact'
                            className='mr-2 text-5xl inline-flex items-center text-black font-semibold hover:text-orange-500 transition-all duration-500'
                        >
                            <AiOutlineMail />
                            <span className='text-black ml-10 flex text-sm hover:text-orange-500 duration-500 transition-all'>
                                Any other questions, feel free to shoot us an email!
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
