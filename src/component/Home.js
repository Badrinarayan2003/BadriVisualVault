import Resume from './files/badriresume.pdf'

function Home() {


    return (
        <header className="hero-section">
            <div className="container">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="card mb-3 carousel-item active" id="hero-card">
                            <div className="row g-0">
                                <div className="col-md-6 d-flex align-items-center">
                                    <div className="card-body home-content" id="hero-content">
                                        <p className="fw-bold m-0">Hello!</p>
                                        <h1 className="text-light">I'm <span>Badri</span></h1>
                                        <h1 className=""><span>Narayan Thamba</span></h1>
                                        <a type="button" href={Resume} download="Badri's Resume" className="btn btn-lg my-3 rounded-pill">DOWNLOAD CV</a>
                                    </div>
                                </div>
                                <div className="col-md-6 hero-img-box">
                                    <img src="./images/bg_63.png" className="img-fluid rounded-start" alt="Hero" />
                                </div>
                            </div>
                        </div>

                        <div className="card mb-3 carousel-item" id="hero-card">
                            <div className="row g-0">
                                <div className="col-md-6 d-flex align-items-center">
                                    <div className="card-body home-content" id="hero-content">
                                        <p className="fw-bold m-0">Hello!</p>
                                        <h1 className="text-light">I'm a <span>Frontend</span></h1>
                                        <h1 className=""><span>Developer</span></h1>
                                        <button type="button" className="btn btn-lg my-3 rounded-pill">DOWNLOAD CV</button>
                                    </div>
                                </div>
                                <div className="col-md-6 hero-img-box">
                                    <img src="./images/bg_63.png" className="img-fluid rounded-start" alt="Hero" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Home;