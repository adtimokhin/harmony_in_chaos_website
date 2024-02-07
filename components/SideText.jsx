"use client"
import useElementSize from '@/hooks/useElementSize';
import React, { useRef } from 'react';


/**
 * @file SideText.jsx
 * @desc A component that displays side text with a title and body. The alignment of the content can be set to either left or right.
 * @date 3rd Feb 2024
 * @author @adtimokhin
 * 
 * @param {string} title - The title of the side text.
 * @param {string} body - The body content of the side text.
 * @param {string} [textAlignment='left'] - The alignment of the content. Can be set to either 'left' or 'right'.
 * 
 * @returns {JSX.Element} The rendered SideText component.
 */


const SideText = ({ title, body, textAlignment }) => {
    const alignRight = textAlignment === 'right'? "right" : "left";

    const ref = useRef();
    const size = useElementSize(ref);

    return (
        <div className='space-y-[8px] w-full h-fit'>
            <div className='w-fit'> 
                <h4 className='side-title-text max-w-full'
                    style={{
                        textAlign: alignRight,
                    }} 
                    ref={ref}>
                    {title}
                </h4>
                <div className='w-full items-endh-fit flex' style={{
                    justifyContent: `${alignRight == "right"? "flex-end" : "flex-start"}`
                }}>
                    <div className='h-[1.26px] w-[47.5%] bg-side-text'></div>
                </div>
            </div>
            <p className='side-body-text' style={{
                width: size.width,
                textAlign: alignRight,
            }}>
                {body}
            </p>
        </div>
    );
};

export default SideText;
