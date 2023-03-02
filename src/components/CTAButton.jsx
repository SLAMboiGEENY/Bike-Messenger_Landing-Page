import React from 'react'

const CTAButton = ({ text, onClick }) => {
    return (
        <button className="rounded-full bg-transparent hover:bg-orange-600 py-2 px-4">
            <a className="font-semibold text-sm uppercase text-black" href="/services">Book your delivery</a>
        </button>
    );
}   

export default CTAButton    