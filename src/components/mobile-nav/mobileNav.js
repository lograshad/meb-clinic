import "./mobileNav.css";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

const MobileNav = () => {
    const handleClick = () => {
        gsap.to(".mobile-nav-container", {
            // top: '95vh',
            y: "100%",
            duration: .5,
            ease: "back.in(1)",
        })
    }
    return (
        <div className="mobile-nav-container">
            <div className="top">
            <div className="logo-wrapper"><img src="/images/black-logo.png" alt="meb eye clinic logo" /></div>
                <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
                    <path d="M11.2656 29.6979L20.004 20.9595L28.7423 29.6979M28.7423 12.2212L20.0023 20.9595L11.2656 12.2212" stroke="#414141" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <ul>
                <li><Link to='/' onClick={handleClick}>Home</Link></li>
                <li><a href="/#about" onClick={handleClick}>about</a></li>
                <li><a href="/#services" onClick={handleClick}>services</a></li>
                <li><a href="/#testimonials" onClick={handleClick}>testimonials</a></li>
            </ul>
        </div>
    );
}

export default MobileNav;