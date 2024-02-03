import { useState, useEffect } from 'react';

/**
 * Custom hook to get the size of an element.
 *
 * @param {React.RefObject} ref - The ref of the element to measure.
 * @returns {Object} - An object containing the width and height of the element.
 *
 * @example
 * const elementRef = useRef();
 * const size = useElementSize(elementRef);
 * console.log(size.width, size.height);
 *
 * @author @adtimokhin
 * @since 3rd Feb 2024
 */
const useElementSize = (ref) => {
    const [size, setSize] = useState({ width: 300, height: 0 });

    useEffect(() => {
        const handleResize = () => {
            if (ref.current) {
                const { width, height } = ref.current.getBoundingClientRect();
                setSize({ width, height });
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [ref]);

    return size;
};

export default useElementSize;
