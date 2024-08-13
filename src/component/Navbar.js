
import { useState } from "react";


function Navbar() {
    const [color, setColor] = useState(false)

    const handleColor = () => {
        if (window.scrollY >= 200) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    window.addEventListener("scroll", handleColor)

    return (
        <nav className={color ? "navbar navbar-expand-lg w-100 position-fixed nav-bg" : "navbar navbar-expand-lg w-100 position-fixed"} >
            <div className="container">
                <div className="navbar-brand nav-logo" to="/">
                    <img src="./images/logo.png" style={{ width: '100%', height: '100%' }} alt="logo" />
                </div>

                <div className="nav-btn-box">
                    <a href="https://www.linkedin.com/in/badri-narayan-thamba/">
                        <button className='glowing-btn'><span className='glowing-txt'>@_<span className='faulty-letter'>CON</span>NECT</span></button>
                    </a>
                </div>
            </div>
        </nav> 
    );
}

export default Navbar;