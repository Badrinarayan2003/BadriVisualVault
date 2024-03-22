import {Link} from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer-section p-5">
            <div className="container bg-dark">

                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3">
                    <div className="col mb-3 text-center">
                        <h5 className="text-light py-1 fw-bold">About</h5>
                        <div className="px-5">
                            <p className="text-light fw-bold">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                        </div>
                    </div>

                    <div className="col text-center mb-3">
                        <h5 className="text-light py-1 fw-bold">Links</h5>
                        <ul className="nav footer-nav-link" id="footer-nav-link-box">
                            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-light">Home</Link></li>
                            <li className="nav-item mb-2"><Link to="/about" className="nav-link p-0 text-light">About</Link></li>
                            <li className="nav-item mb-2"><Link to="/skills" className="nav-link p-0 text-light">Skills</Link></li>
                            <li className="nav-item mb-2"><Link to="/projects" className="nav-link p-0 text-light">Projects</Link></li>
                            <li className="nav-item mb-2"><Link to="/contact" className="nav-link p-0 text-light">contact</Link></li>
                        </ul>
                    </div>
                    <div className="col text-center mb-3">
                        <h5 className="text-light py-1 fw-bold">Have a Question?</h5>
                        <div className="nav flex-column">
                            <p className="text-light" style={{ cursor: 'pointer' }}><span><i className="fa-solid fa-location-dot text-light"></i></span> Odisha India, 754083</p>
                            <p className="text-light" style={{ cursor: 'pointer' }}><span><i className="fa-solid fa-phone text-light"></i></span> 91+ 1234567890</p>
                            <p className="text-light" style={{ cursor: 'pointer' }}><span><i className="fa-solid fa-envelope text-light"></i></span> badrithamba@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-between py-3 border-top">
                    <p className="text-light" id="foot-para">© 2021 Company, Inc. All rights reserved.</p>
                    <ul className="list-unstyled d-flex gap-3">
                        <li className="ms-3"><a className="text-light" href="/"><i className="fa-brands fa-twitter footer-icon" id="twit"></i></a></li>
                        <li className="ms-3"><a className="text-light" href="/"><i className="fa-brands fa-instagram footer-icon" id="insta"></i></a></li>
                        <li className="ms-3"><a className="text-light" href="/"><i className="fa-brands fa-facebook footer-icon" id="fb"></i></a></li>
                    </ul>
                </div>


            </div>
        </footer>
    );
}

export default Footer;