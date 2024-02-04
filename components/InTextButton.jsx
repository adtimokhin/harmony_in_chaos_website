import Image from 'next/image';
import React from 'react';

const InTextButton = ({mainText, subText}) => {
    return (
        <div className='flex flex-row justify-between hover:cursor-pointer h-fit'>
            <div className='-space-y-2'>
                <p className='secondary-title-decoration-text'>{mainText}</p>
                <p className='secondary-title-text'>{subText}</p>
            </div>
            <Image src={"/arrow.svg"} alt="Arrow" width={90} height={30} />
        </div>
    );
};

export default InTextButton;
