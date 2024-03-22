import {Link, 
    NavLink} from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-transparent w-100 position-fixed" style={{ zIndex: '100' }}>
            <div className="container">
                <Link className="navbar-brand" to="/">BADRI</Link>
                <button className="navbar-toggler"type="button" data-bs-toggle="collapse" data-bs-target="#ftco-nav"
                    aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon text-light"></span>
                </button>

                <div className="collapse navbar-collapse" id="ftco-nav">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item links"><NavLink to="/" className="nav-link">Home</NavLink></li>
                        <li className="nav-item links"><NavLink to="/about" className="nav-link">About</NavLink></li>
                        <li className="nav-item links"><NavLink to="/skills" className="nav-link">Skills</NavLink></li>
                        <li className="nav-item links"><NavLink to="/projects" className="nav-link">Projects</NavLink></li>
                        <li className="nav-item links"><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
