import {useEffect, useState} from "react";

const Runner = () => {
    const [hidden, setHidden] = useState(true);

    useEffect(() => {
        document.addEventListener("keydown", (e) => {
            if (e.altKey && e.code === 'F2') {
                e.preventDefault();
                alert('شما ترکیب Alt + F2 را فشردید!');
            }
        })
    }, [])
    
    return(<>
        <div className={(hidden && "hidden ") + " fixed top-[75px] left-[70px] z-[998] bg-white w-[100px] h-[35px] rounded-[10px] border"}></div>
    </>)
}

export default Runner;