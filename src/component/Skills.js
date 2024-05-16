import CountUp from 'react-countup';
import { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';


function Skills() {
    const [counterOn, setCounterOn] = useState(false)


    return (
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <section className="skill-section w-100" id="skill-cont-box">
                <div className="container">
                    <div className="row">
                        <h1 className="text-center text-light skill-fs">My Skills</h1>
                        <p className="text-center text-light fw-bold py-2">Success is not final, failure is not fatal: It is the courage to continue that counts.</p>
                    </div>
                    <div className="row w-100">
                        <div className="col-md-6 animate-box my-3">
                            <div className="progress-wrap ftco-animate">
                                <h3 className="text-light">HTML5</h3>
                                <div className="progress" style={{ height: '1.3rem' }}>
                                    <div className={`progress-bar ${counterOn ? 'color-1' : ''}`} role="progressbar" aria-valuenow="90" aria-valuemin="0"
                                        aria-valuemax="100" style={{ backgroundColor: 'hsl(186 100% 69%)' }}>
                                        <span>
                                            {counterOn && <CountUp start={1} end={90} duration={3} delay={0} />}%
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 animate-box my-3">
                            <div className="progress-wrap ftco-animate">
                                <h3 className="text-light">CSS3</h3>
                                <div className="progress" style={{ height: '1.3rem' }}>
                                    <div className={`progress-bar ${counterOn ? 'color-2' : ''}`} role="progressbar" aria-valuenow="85" aria-valuemin="0"
                                        aria-valuemax="100" style={{ backgroundColor: 'hsl(186 100% 69%)' }}>
                                        <span>
                                            {counterOn && <CountUp start={1} end={80} duration={3} delay={0} />}%
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 animate-box my-3">
                            <div className="progress-wrap ftco-animate">
                                <h3 className="text-light">jAVASCRIPT</h3>
                                <div className="progress" style={{ height: '1.3rem' }}>
                                    <div className={`progress-bar ${counterOn ? 'color-3' : ''}`} role="progressbar" aria-valuenow="95" aria-valuemin="0"
                                        aria-valuemax="100" style={{ backgroundColor: 'hsl(186 100% 69%)' }}>
                                        <span>
                                            {counterOn && <CountUp start={1} end={65} duration={3} delay={0} />}%
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 animate-box my-3">
                            <div className="progress-wrap ftco-animate">
                                <h3 className="text-light">REACT JS</h3>
                                <div className="progress" style={{ height: '1.3rem' }}>
                                    <div className={`progress-bar ${counterOn ? 'color-4' : ''}`} role="progressbar" aria-valuenow="90" aria-valuemin="0"
                                        aria-valuemax="100" style={{ backgroundColor: 'hsl(186 100% 69%)' }}>
                                        <span>
                                            {counterOn && <CountUp start={1} end={60} duration={3} delay={0} />}%
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 animate-box my-3">
                            <div className="progress-wrap ftco-animate">
                                <h3 className="text-light">Bootstrap 5</h3>
                                <div className="progress" style={{ height: '1.3rem' }}>
                                    <div className={`progress-bar ${counterOn ? 'color-5' : ''}`} role="progressbar" aria-valuenow="90" aria-valuemin="0"
                                        aria-valuemax="100" style={{ backgroundColor: 'hsl(186 100% 69%)' }}>
                                        <span>
                                            {counterOn && <CountUp start={1} end={75} duration={3} delay={0} />}%
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 animate-box my-3">
                            <div className="progress-wrap ftco-animate">
                                <h3 className="text-light">Wordpress</h3>
                                <div className="progress" style={{ height: '1.3rem' }}>
                                    <div className={`progress-bar ${counterOn ? 'color-6' : ''}`} role="progressbar" aria-valuenow="90" aria-valuemin="0"
                                        aria-valuemax="100" style={{ backgroundColor: 'hsl(186 100% 69%)' }}>
                                        <span>
                                            {counterOn && <CountUp start={1} end={50} duration={3} delay={0} />}%
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </ScrollTrigger >
    );
}

export default Skills;
