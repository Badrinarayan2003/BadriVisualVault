function Project() {
    return (
        <section className="project-section w-100" id="project-box">
            <h1 className="text-center pt-3 text-light fw-bold">My Projects</h1>
            <p className="text-light fw-bold text-center proj-para">The only way to do great work is to love what you do.</p>
            <div className="container h-100  py-3 gap-3" id="project-cont-box">

                <div className="card mb-3 p-2" >
                    <div className="row g-0 ">
                        <div className="col-md-5 proj-img-box">
                            <img src="./images/project_3.png" className="img-fluid rounded-start" alt="project-img" />
                        </div>
                        <div className="col-md-7 ">
                            <div className="card-body p-2 proj-cont-box">
                                <h5 className="card-title fw-bold text-light">EzPizi (E-commerce Website)<a href="https://ez-pizi.vercel.app/"><i className="fa-solid fa-up-right-from-square text-light float-end"></i></a></h5>
                                <p className="card-text text-muted">In-progress: React E-commerce Website development. Features include product listing, cart, and checkout. Stay tuned for updates!</p>
                                <p className="card-text"><small className="text-muted">Implemented Frontend features with some clickable functions; more enhancements coming.</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3 p-2" >
                    <div className="row g-0 ">
                        <div className="col-md-5 proj-img-box">
                            <img src="./images/project_1.png" className="img-fluid rounded-start object-fit-cover" alt="project-img" />
                        </div>
                        <div className="col-md-7 ">
                            <div className="card-body p-2 proj-cont-box">
                                <h5 className="card-title fw-bold text-light">Badri-visual-vault (Portfolio)<a href="https://badri-visual-vault.vercel.app/"><i className="fa-solid fa-up-right-from-square text-light float-end"></i></a></h5>
                                <p className="card-text text-muted">Interactive portfolio crafted with React.js, Bootstrap 5, and some custom CSS for a visually appealing and modern presentation of projects.</p>
                                <p className="card-text"><small className="text-muted">Frontend features have been implemented, including interactive functions. Further enhancements are on the way.</small></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-3 p-2" >
                    <div className="row g-0 ">
                        <div className="col-md-5 proj-img-box">
                            <img src="./images/project_5.png" className="img-fluid rounded-start" alt="project-img" />
                        </div>
                        <div className="col-md-7 ">
                            <div className="card-body p-2 proj-cont-box">
                                <h5 className="card-title fw-bold text-light">Hillside Nature Tours (Wordpress Website)<a href="https://hillsidenature.com/"><i className="fa-solid fa-up-right-from-square text-light float-end"></i></a></h5>
                                <p className="card-text text-muted">Contributed to the design and creation of several pages for the Hillside Nature Tours website, developed using WordPress. This freelance project involved collaborating with a colleague who managed the backend and all other things.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-3 p-2" >
                    <div className="row g-0 ">
                        <div className="col-md-5 proj-img-box">
                            <img src="./images/project_2.png" className="img-fluid rounded-start" alt="project-img" />
                        </div>
                        <div className="col-md-7 ">
                            <div className="card-body p-2 proj-cont-box">
                                <h5 className="card-title fw-bold text-light">Weather App<a href="https://weather-app-chi-sage-29.vercel.app/"><i className="fa-solid fa-up-right-from-square text-light float-end"></i></a></h5>
                                <p className="card-text text-muted">Developed a React-based weather application featuring a dynamic weather card component, seamlessly
                                    displaying current weather data. </p>
                                <p className="card-text"><small className="text-muted">Implemented Frontend features with some clickable functions; more enhancements coming.</small></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    );
}
export default Project;