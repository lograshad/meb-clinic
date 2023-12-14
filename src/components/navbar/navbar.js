import { Link } from "react-router-dom";
import Button from "../action-button/button";
import MobileNav from "../mobile-nav/mobileNav";
import "./navbar.css";
import { gsap } from "gsap";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
    const params = useLocation();
    const [currParam, setCurrParam] = useState();
    const updateParam = () => {
        setCurrParam(params.pathname);
      }
      useEffect(() => {
        updateParam();
      }, [params, updateParam]);
    const handleClick = () => {
        gsap.to(".mobile-nav-container", {
            // top: '95vh',
            y: "-91%",
            duration: 1,
            ease: "bounce.out",
        })
    }
    return (
        <div className="navbar-wrapper">
            <div className="navbar-container desktop-wrapper">
                <div className="logo-wrapper"><img src="/images/black-logo.png" alt="meb eye clinic logo" /></div>
                <ul className="nav-items">
                    <li className={currParam === "/" ? "highlight" : ""}>
                        <Link to="/" href="#home">Home</Link>
                    </li>
                    <li className={currParam?.includes("services") ? "highlight" : ""}>
                        <a href="/#services">Services</a>
                    </li>
                    <li className={currParam?.includes("about") ? "highlight" : ""}>
                        <a href="/#about">About</a>
                    </li>
                    <li className={currParam?.includes("testimonials") ? "highlight" : ""}>
                        <a href="/#testimonials">Testimonials</a>
                    </li>
                </ul>
                <div className="nav-button">
                    <Button child={"Book an appointment"} />
                </div>
            </div>
            <div className="navbar-container mobile-wrapper">
            <div className="logo-wrapper"><img src="/images/black-logo.png" alt="meb eye clinic logo" /></div>
                <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3 12H21M3 6H21M3 18H21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <MobileNav/>
        </div>
    );
}
//  FIX NAVIGATION ISSUE
export default Navbar;