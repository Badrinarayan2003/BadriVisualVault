function Footer() {
    return (
        <footer className="footer-section" id="footer-section-box">
            <div className="container ">
                <div className="d-flex justify-content-between py-3 border-top footer-box">
                    <div className="text-light footer-content-box" id="foot-para">
                        <p><i className="fa-solid fa-phone"></i> 91+ 6371785300</p>
                        <p><i className="fa-solid fa-envelope"></i> badrithamba@gmail.com</p>
                    </div>
                    <ul className="list-unstyled d-flex gap-3">
                        <li className="ms-3"><a className="text-light" href="https://www.linkedin.com/in/badri-narayan-thamba"><i className="fa-brands fa-linkedin footer-icon" id="linkedIn"></i></a></li>
                        <li className="ms-3"><a className="text-light" href="/"><i className="fa-brands fa-github footer-icon" id="git"></i></a></li>
                        <li className="ms-3"><a className="text-light" href="/"><i className="fa-brands fa-instagram footer-icon" id="insta"></i></a></li>
                        <li className="ms-3"><a className="text-light" href="/"><i className="fa-brands fa-facebook footer-icon" id="fb"></i></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;