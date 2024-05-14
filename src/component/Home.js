function Home() {


    return (
        <div className="hero-section  overflow-hidden">
            <div className="hero-box py-4">
                <div className="row">
                    <div className="col-md-6 col-sm-6 d-flex justify-content-center">
                        <div className="hero-img-box">
                            <img src="/images/hero3.jpg" alt="heroImage"/>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 d-flex justify-content-center hero-sub-sec">
                        <div className="hero-content-box" id="hero-text-box">
                            <h6 className="hero-text ">Hello,</h6>
                            <h2 className="hero-text ">I'm Badri</h2>
                            <h2 className="hero-text ">Narayan Thamba</h2>
                            <h3 className="hero-text ">Frontend Developer</h3>
                            <a type="button" href="./files/Badri_Narayan_Thamba.pdf" download="Badri's Resume" className="btn rounded-pill">DOWNLOAD CV</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;