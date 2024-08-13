import ScrollTrigger from "react-scroll-trigger";
import { useState, useEffect } from "react";

const Progress = ({ percentValue, title }) => {
    const [counter, setCounter] = useState(0);
    const [isEnter, setIsEnter] = useState(false);

    useEffect(() => {
        if (isEnter) {
            const interVal = setInterval(() => {
                setCounter((pre) => {
                    if (pre < percentValue) {
                        return pre + 1;
                    } else {
                        clearInterval(interVal)
                        return pre;
                    }
                })
            }, 30);
            return () => clearInterval(interVal);

        }
    }, [isEnter]);


    return (
        <ScrollTrigger onEnter={() => setIsEnter(true)}
            onExit={() => setIsEnter(false)}>
            <div className="circular-progress-box d-flex align-items-center">
                <div className="circular-progress d-flex justify-content-center align-items-center"
                    style={{
                        background: `conic-gradient(hsl(186 100% 69%) ${counter * 3.6}deg, black 0deg)`
                    }}
                >
                    <span className="circular-progress-percent-text">
                        {counter}%
                    </span>
                </div>
                <p className="mb-0 circular-progress-title">{title}</p>
            </div>
        </ScrollTrigger>
    )
}
export default Progress;