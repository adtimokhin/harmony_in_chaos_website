"use client";

import Image from 'next/image';
import React from 'react';

const InTextButton = ({ mainText, subText, link }) => {

    // Function to open the link in a new tab
    const handleClick = () => {
        window.open(link, '_blank');
    };

    return (
        <div
            className='flex flex-row justify-between hover:cursor-pointer h-fit hover:opacity-50 transition-opacity duration-200 ease-linear'
            onClick={handleClick}
        >
            <div className='-space-y-2'>
                <p className='secondary-title-decoration-text'>{mainText}</p>
                <p className='secondary-title-text'>{subText}</p>
            </div>
            <Image src={"/arrow.svg"} alt="Arrow" width={90} height={30} />
        </div>
    );
};

export default InTextButton;
