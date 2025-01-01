import {useEffect} from "react";
import {Fireworks} from "fireworks-js";

const FireWork = () => {
    useEffect(() => {
        const container = document.querySelector('.box')
        const fireworks = new Fireworks(container, {
            rocketsPoint: {
                min: 200,
                max: 200
            },
            lineWidth : {
                explosion: {
                    min: 2,
                    max: 5
                },
                trace: {
                    min: 1,
                    max: 1
                }
            },
            delay: {
                min: 1,
                max: 10,
            },
            decay : {
                min: 0.009,
                max: 0.02
            }
        })
        fireworks.start()
    }, [])
    return (<>
        <div className="box w-full h-[100vh] bg-black"></div>
    </>)
}

export default FireWork;