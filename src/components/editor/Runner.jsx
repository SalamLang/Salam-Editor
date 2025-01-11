import {useEffect, useState} from "react";

const Runner = () => {
    const [hidden, setHidden] = useState(true);

    function debounce(cb, delay) {
        let timeoutId;
        return function (...args) {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }

            timeoutId = setTimeout(() => {
                cb(...args);
            }, delay);
        };
    }

    const debouncedChange = debounce(() => {
        setHidden(true)
    }, 2000);

    useEffect(() => {
        document.addEventListener("mousemove", (e) => {
            e.preventDefault();
            setHidden(false)

            debouncedChange();
        })
    }, [])

    return (<>
        <div
            className={(hidden && "opacity-0 ") + " shadow-orange fixed top-[75px] transition-all duration-1000 left-[70px] z-[998] bg-white w-[100px] h-[40px] rounded-[10px] border"}></div>
    </>)
}

export default Runner;