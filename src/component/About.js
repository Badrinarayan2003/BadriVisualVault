function About() {
    return (
        <section className="about-section w-100 d-flex justify-content-center">
            <div className="container">
                <div className="card about-card d-flex justify-content-center align-items-center overflow-hidden" id="about-card-box">
                    <div className="row row-cols-1 row-cols-lg-2 g-0 h-50 w-75">
                        <div className="col about-img-box">
                            <img src="./images/bg_62.png" className="img-fluid rounded-start" alt="background" />
                        </div>
                        <div className="col">
                            <div className="card-body about-card-body">
                                <h1 className="card-title fw-bold text-light my-2">About Me</h1>
                                <p className="card-text card-desc text-light my-3">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                <p className="fw-bold card-text"><span className="card-text fw-bold text-light">Name :</span> Badri Narayan Thamba</p>
                                <p className="fw-bold card-text"><span className="card-text fw-bold text-light">Date of birth :</span> March 09, 2003</p>
                                <p className="fw-bold card-text"><span className="card-text fw-bold text-light">Address :</span> Jajpur Odisha India</p>
                                <p className="fw-bold card-text"><span className="card-text fw-bold text-light">Zip code :</span> 754082</p>
                                <p className="fw-bold card-text"><span className="card-text fw-bold text-light">Email :</span> badrithamba@gmail.com</p>
                                <p className="fw-bold card-text"><span className="card-text fw-bold text-light">Phone :</span> +91 6371785300</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
// -md-4
// -md-8