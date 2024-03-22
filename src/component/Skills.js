function Skills() {
    return (
        <section className="skill-section w-100 vh-100" id="skill-cont-box">
            <div className="container">
                <div className="row">
                    <h1 className="text-center text-light skill-fs py-2">My Skills</h1>
                    <p className="text-center text-light fw-bold py-2">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                </div>
                <div className="row w-100">
                    <div className="col-md-6 animate-box my-3">
                        <div className="progress-wrap ftco-animate">
                            <h3 className="text-light">HTML5</h3>
                            <div className="progress">
                                <div className="progress-bar color-1" role="progressbar" aria-valuenow="90" aria-valuemin="0"
                                    aria-valuemax="100" style={{ width: '95%', backgroundColor: 'rgb(168, 252, 42)' }}>
                                    <span>90%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 animate-box my-3">
                        <div className="progress-wrap ftco-animate">
                            <h3 className="text-light">CSS3</h3>
                            <div className="progress">
                                <div className="progress-bar color-2" role="progressbar" aria-valuenow="85" aria-valuemin="0"
                                    aria-valuemax="100" style={{ width: '80%', backgroundColor: 'rgb(168, 252, 42)' }}>
                                    <span>80%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 animate-box my-3">
                        <div className="progress-wrap ftco-animate">
                            <h3 className="text-light">jAVASCRIPT</h3>
                            <div className="progress">
                                <div className="progress-bar color-3" role="progressbar" aria-valuenow="95" aria-valuemin="0"
                                    aria-valuemax="100" style={{ width: '65%', backgroundColor: 'rgb(168, 252, 42)' }}>
                                    <span>65%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 animate-box my-3">
                        <div className="progress-wrap ftco-animate">
                            <h3 className="text-light">REACT JS</h3>
                            <div className="progress">
                                <div className="progress-bar color-4" role="progressbar" aria-valuenow="90" aria-valuemin="0"
                                    aria-valuemax="100" style={{ width: '60%', backgroundColor: 'rgb(168, 252, 42)' }}>
                                    <span>60%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 animate-box my-3">
                        <div className="progress-wrap ftco-animate">
                            <h3 className="text-light">Bootstrap 5</h3>
                            <div className="progress">
                                <div className="progress-bar color-4" role="progressbar" aria-valuenow="90" aria-valuemin="0"
                                    aria-valuemax="100" style={{ width: '65%', backgroundColor: 'rgb(168, 252, 42)' }}>
                                    <span>65%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
