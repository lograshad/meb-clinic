import Navbar from "../../components/navbar/navbar";
import "./about.css";

const About = () => {
    return (
        <div className="about-us-container">
            <Navbar />
            <div className="pre-header">About us</div>
            <h1>
                <span>setting up standard</span>
                <span>on eye care services</span>
            </h1>
            <div className="image-header-container">
                <div className="image-wrapper"><img src="/images/building.png" alt="" /></div>
                <div className="history">
                    <div className="title">Brief History</div>
                    <p>
                        We founded MEB Eye Clinic in 2010 and had a
                        time to do eye care services with 10 doctors
                        and have a lot to achieve in the next 10 years
                        We founded MEB Eye Clinic in 2010 and had a
                        time to do eye care services with 10 doctors
                        and have a lot to achieve in the next 10 years
                        We founded MEB Eye Clinic in 2010.
                    </p>
                </div>
            </div>
            <h2>our values</h2>
        </div>
    );
}

export default About;