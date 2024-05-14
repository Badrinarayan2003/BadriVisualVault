function About() {
    return (
        <section className="about-section w-100 d-flex justify-content-center" id="about-box">
            <div className="container">
                <div className="card about-card d-flex justify-content-center align-items-center overflow-hidden" id="about-card-box">
                    <div className="row row-cols-1 g-0 h-50 w-75">
                        <div className="col">
                            <div className="card-body about-card-body">
                                <h1 className="card-title fw-bold text-light my-2 text-center">About Me</h1>
                                <p className="card-text about-text"><span className="card-text text-light">Hello,</span></p>
                                <p className="card-text card-desc my-3">I'm Badri Narayan Thamba, a frontend web developer based in India. My expertise lies in crafting engaging web applications using React.js, Bootstrap, and Styled Components.</p>
                                <p className="card-text card-desc my-3">I'm passionate about creating user-friendly interfaces and thrive on turning innovative ideas into polished digital. I believe in the power of collaboration and enjoy connecting with fellow developers to exchange insights and ideas.</p>
                                <p className="card-text card-desc my-3">Thank you for visiting my portfolio website. I invite you to explore my projects and look forward to the opportunity of working together on your next venture.</p>
                                <p className="card-text card-desc" style={{ marginBottom: '0rem' }}>Best regards,</p>
                                <p className="card-text card-desc">Badri Narayan Thamba</p>
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