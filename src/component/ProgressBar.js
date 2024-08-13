import CountUp from 'react-countup';
import { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';

const ProgressBar = ({ percentValue, title }) => {
    const [counterOn, setCounterOn] = useState(false)

    return (
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <div className="progress-wrap ftco-animate mb-3">
                <div className='d-flex justify-content-between mb-1'>
                    <h6 className="text-light mb-0">{title}</h6>
                    <h6 className="text-light mb-0">
                        {counterOn && <CountUp start={1} end={percentValue} duration={5} delay={0} />}%
                    </h6>
                </div>
                <div className="progress" style={{ height: '0.6rem' }}>
                    <div className={`progress-bar ${counterOn ? 'color-animation' : ''}`} role="progressbar" aria-valuenow="90" aria-valuemin="0"
                        aria-valuemax="100" style={{ backgroundColor: 'hsl(186 100% 69%)' }}>
                    </div>
                </div>
            </div>
        </ScrollTrigger>
    )
}

export default ProgressBar;