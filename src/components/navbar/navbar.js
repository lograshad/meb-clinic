import { Link } from "react-router-dom";
import Button from "../action-button/button";
import "./navbar.css";

const Navbar = () => {
    return ( 
        <div className="navbar-container">
            <div className="logo-wrapper">LOGO</div>
            <ul className="nav-items">
                <li>
                    <Link to="/" href="#home">Home</Link>
                </li>
                <li>
                    <a href="#services">Services</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#testimonials">Testimonials</a>
                </li>
            </ul>
            <div className="nav-button">
                <Button child={"Book an appointment"}/>
            </div>
        </div>
     );
}
//  FIX NAVIGATION ISSUE
export default Navbar;