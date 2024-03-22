function project() {
    return (
        <section className="project-section w-100" id="project-box">
            <h1 className="text-center py-3 text-light fw-bold">My Projects</h1>
            <p className="text-light fw-bold text-center proj-para">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            <div className="container h-100 d-flex justify-content-center py-3 gap-3">
                <div className="row row-cols-1 row-cols-lg-2">
                    <div className="col my-1">
                        <div className="card project-card bg-dark text-white">
                            <img src="./images/project-3.jpg" className="card-img" alt="project" />
                            <div className="card-img-overlay overflow-hidden">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text">Last updated 3 mins ago</p>
                            </div>
                        </div>
                    </div>
                    <div className="col my-1">
                        <div className="card project-card bg-dark text-white">
                            <img src="./images/project-3.jpg" className="card-img" alt="..." />
                            <div className="card-img-overlay overflow-hidden" id="proj-card">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text">Last updated 3 mins ago</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container h-100 d-flex justify-content-center pb-5 gap-4">
                <div className="row row-cols-1  row-cols-lg-2 ">
                    <div className="col my-1">
                        <div className="card project-card bg-dark text-white">
                            <img src="./images/project-3.jpg" className="card-img" alt="..." />
                            <div className="card-img-overlay overflow-hidden">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text">Last updated 3 mins ago</p>
                            </div>
                        </div>
                    </div>
                    <div className="col my-1">
                        <div className="card project-card bg-dark text-white">
                            <img src="./images/project-3.jpg" className="card-img" alt="..." />
                            <div className="card-img-overlay overflow-hidden">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text">Last updated 3 mins ago</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default project