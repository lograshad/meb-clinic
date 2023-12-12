import Button from "../../components/action-button/button";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import Reviews from "../../components/reviews/reviews";
import "./home.css";
import { Link } from "react-router-dom";

const HomeScreen = () => {
    return (
        <div className="home-screen-container">
            <Navbar />
            <div className="hero-stn" id="home">
                <div className="text-stn">
                    <div className="pre-header">Meb Eye Clinic</div>
                    <h1>
                        <div>Accessible, world class and</div>
                        <div>efficient
                            <span id="eye-care">eye care
                                <span id="blue-lines"><img src="/images/blue-lines.png" alt="" /></span>
                            </span>
                            services
                        </div>
                        <div>
                            tailored to your needs.
                        </div>
                    </h1>
                    <p>
                        Never procrastinate getting help with your eyes. Our world is too captivating for you not to experience it clearly. Explore our world class eye care solutions with the tap of a button.
                    </p>
                    <div className="action-buttons">
                        <Button child={"Book an appointment"} />
                        <button>
                            Contact us
                        </button>
                    </div>
                </div>
                <div className="hero-img-wrapper">
                    <div className="hero-slider">
                        <img src="/images/hero-image.png" alt="meb eye clinic optometrists" />
                        <img src="/images/hero-image.png" alt="meb eye clinic optometrists" />
                    </div>
                </div>
            </div>
            <section className="services-wrapper" id="services">
                <div className="our-services-stn">
                    <h3>Our Services</h3>
                    <div className="about-desc">MEB Eye Clinic is highly-equipped to provide you with:</div>
                    <div className="flex-container">
                        <div className="img-wrapper"><img src="/images/flyer.png" alt="" /></div>
                        <div className="services-offered">
                            <ul>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                                        <path d="M15.8944 6.597L12.6944 0.9095C12.6244 0.785144 12.5234 0.681772 12.4014 0.609859C12.2795 0.537946 12.141 0.500046 11.9999 0.5H0.799756C0.659659 0.500046 0.52203 0.537455 0.400638 0.608484C0.279247 0.679514 0.17835 0.781673 0.108041 0.904741C0.0377325 1.02781 0.000477932 1.16747 4.56797e-06 1.30975C-0.000468796 1.45204 0.0358556 1.59195 0.105344 1.7155L3.07899 7L0.105344 12.2845C0.0358556 12.408 -0.000468796 12.548 4.56797e-06 12.6902C0.000477932 12.8325 0.0377325 12.9722 0.108041 13.0953C0.17835 13.2183 0.279247 13.3205 0.400638 13.3915C0.52203 13.4625 0.659659 13.5 0.799756 13.5H11.9999C12.141 13.5 12.2795 13.4621 12.4014 13.3901C12.5234 13.3182 12.6244 13.2149 12.6944 13.0905L15.8944 7.403C15.9636 7.28031 16 7.14139 16 7C16 6.85861 15.9636 6.71969 15.8944 6.597Z" fill="#1E88E5" />
                                    </svg>
                                    <span>Optical accessories like simple and designer frames</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                                        <path d="M15.8944 6.597L12.6944 0.9095C12.6244 0.785144 12.5234 0.681772 12.4014 0.609859C12.2795 0.537946 12.141 0.500046 11.9999 0.5H0.799756C0.659659 0.500046 0.52203 0.537455 0.400638 0.608484C0.279247 0.679514 0.17835 0.781673 0.108041 0.904741C0.0377325 1.02781 0.000477932 1.16747 4.56797e-06 1.30975C-0.000468796 1.45204 0.0358556 1.59195 0.105344 1.7155L3.07899 7L0.105344 12.2845C0.0358556 12.408 -0.000468796 12.548 4.56797e-06 12.6902C0.000477932 12.8325 0.0377325 12.9722 0.108041 13.0953C0.17835 13.2183 0.279247 13.3205 0.400638 13.3915C0.52203 13.4625 0.659659 13.5 0.799756 13.5H11.9999C12.141 13.5 12.2795 13.4621 12.4014 13.3901C12.5234 13.3182 12.6244 13.2149 12.6944 13.0905L15.8944 7.403C15.9636 7.28031 16 7.14139 16 7C16 6.85861 15.9636 6.71969 15.8944 6.597Z" fill="#1E88E5" />
                                    </svg>
                                    <span>Photochromic, blue cut, and anti-reflex lenses</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                                        <path d="M15.8944 6.597L12.6944 0.9095C12.6244 0.785144 12.5234 0.681772 12.4014 0.609859C12.2795 0.537946 12.141 0.500046 11.9999 0.5H0.799756C0.659659 0.500046 0.52203 0.537455 0.400638 0.608484C0.279247 0.679514 0.17835 0.781673 0.108041 0.904741C0.0377325 1.02781 0.000477932 1.16747 4.56797e-06 1.30975C-0.000468796 1.45204 0.0358556 1.59195 0.105344 1.7155L3.07899 7L0.105344 12.2845C0.0358556 12.408 -0.000468796 12.548 4.56797e-06 12.6902C0.000477932 12.8325 0.0377325 12.9722 0.108041 13.0953C0.17835 13.2183 0.279247 13.3205 0.400638 13.3915C0.52203 13.4625 0.659659 13.5 0.799756 13.5H11.9999C12.141 13.5 12.2795 13.4621 12.4014 13.3901C12.5234 13.3182 12.6244 13.2149 12.6944 13.0905L15.8944 7.403C15.9636 7.28031 16 7.14139 16 7C16 6.85861 15.9636 6.71969 15.8944 6.597Z" fill="#1E88E5" />
                                    </svg>
                                    <span>Ocular prosthetics (prosthetic eyes)</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                                        <path d="M15.8944 6.597L12.6944 0.9095C12.6244 0.785144 12.5234 0.681772 12.4014 0.609859C12.2795 0.537946 12.141 0.500046 11.9999 0.5H0.799756C0.659659 0.500046 0.52203 0.537455 0.400638 0.608484C0.279247 0.679514 0.17835 0.781673 0.108041 0.904741C0.0377325 1.02781 0.000477932 1.16747 4.56797e-06 1.30975C-0.000468796 1.45204 0.0358556 1.59195 0.105344 1.7155L3.07899 7L0.105344 12.2845C0.0358556 12.408 -0.000468796 12.548 4.56797e-06 12.6902C0.000477932 12.8325 0.0377325 12.9722 0.108041 13.0953C0.17835 13.2183 0.279247 13.3205 0.400638 13.3915C0.52203 13.4625 0.659659 13.5 0.799756 13.5H11.9999C12.141 13.5 12.2795 13.4621 12.4014 13.3901C12.5234 13.3182 12.6244 13.2149 12.6944 13.0905L15.8944 7.403C15.9636 7.28031 16 7.14139 16 7C16 6.85861 15.9636 6.71969 15.8944 6.597Z" fill="#1E88E5" />
                                    </svg>
                                    <span>Correction and masking contact lenses</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                                        <path d="M15.8944 6.597L12.6944 0.9095C12.6244 0.785144 12.5234 0.681772 12.4014 0.609859C12.2795 0.537946 12.141 0.500046 11.9999 0.5H0.799756C0.659659 0.500046 0.52203 0.537455 0.400638 0.608484C0.279247 0.679514 0.17835 0.781673 0.108041 0.904741C0.0377325 1.02781 0.000477932 1.16747 4.56797e-06 1.30975C-0.000468796 1.45204 0.0358556 1.59195 0.105344 1.7155L3.07899 7L0.105344 12.2845C0.0358556 12.408 -0.000468796 12.548 4.56797e-06 12.6902C0.000477932 12.8325 0.0377325 12.9722 0.108041 13.0953C0.17835 13.2183 0.279247 13.3205 0.400638 13.3915C0.52203 13.4625 0.659659 13.5 0.799756 13.5H11.9999C12.141 13.5 12.2795 13.4621 12.4014 13.3901C12.5234 13.3182 12.6244 13.2149 12.6944 13.0905L15.8944 7.403C15.9636 7.28031 16 7.14139 16 7C16 6.85861 15.9636 6.71969 15.8944 6.597Z" fill="#1E88E5" />
                                    </svg>
                                    <span>Fully Computerized refraction eye test</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                                        <path d="M15.8944 6.597L12.6944 0.9095C12.6244 0.785144 12.5234 0.681772 12.4014 0.609859C12.2795 0.537946 12.141 0.500046 11.9999 0.5H0.799756C0.659659 0.500046 0.52203 0.537455 0.400638 0.608484C0.279247 0.679514 0.17835 0.781673 0.108041 0.904741C0.0377325 1.02781 0.000477932 1.16747 4.56797e-06 1.30975C-0.000468796 1.45204 0.0358556 1.59195 0.105344 1.7155L3.07899 7L0.105344 12.2845C0.0358556 12.408 -0.000468796 12.548 4.56797e-06 12.6902C0.000477932 12.8325 0.0377325 12.9722 0.108041 13.0953C0.17835 13.2183 0.279247 13.3205 0.400638 13.3915C0.52203 13.4625 0.659659 13.5 0.799756 13.5H11.9999C12.141 13.5 12.2795 13.4621 12.4014 13.3901C12.5234 13.3182 12.6244 13.2149 12.6944 13.0905L15.8944 7.403C15.9636 7.28031 16 7.14139 16 7C16 6.85861 15.9636 6.71969 15.8944 6.597Z" fill="#1E88E5" />
                                    </svg>
                                    <span>Cataract and Glaucoma screening tests</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                                        <path d="M15.8944 6.597L12.6944 0.9095C12.6244 0.785144 12.5234 0.681772 12.4014 0.609859C12.2795 0.537946 12.141 0.500046 11.9999 0.5H0.799756C0.659659 0.500046 0.52203 0.537455 0.400638 0.608484C0.279247 0.679514 0.17835 0.781673 0.108041 0.904741C0.0377325 1.02781 0.000477932 1.16747 4.56797e-06 1.30975C-0.000468796 1.45204 0.0358556 1.59195 0.105344 1.7155L3.07899 7L0.105344 12.2845C0.0358556 12.408 -0.000468796 12.548 4.56797e-06 12.6902C0.000477932 12.8325 0.0377325 12.9722 0.108041 13.0953C0.17835 13.2183 0.279247 13.3205 0.400638 13.3915C0.52203 13.4625 0.659659 13.5 0.799756 13.5H11.9999C12.141 13.5 12.2795 13.4621 12.4014 13.3901C12.5234 13.3182 12.6244 13.2149 12.6944 13.0905L15.8944 7.403C15.9636 7.28031 16 7.14139 16 7C16 6.85861 15.9636 6.71969 15.8944 6.597Z" fill="#1E88E5" />
                                    </svg>
                                    <span>Intraocular pressure check</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                                        <path d="M15.8944 6.597L12.6944 0.9095C12.6244 0.785144 12.5234 0.681772 12.4014 0.609859C12.2795 0.537946 12.141 0.500046 11.9999 0.5H0.799756C0.659659 0.500046 0.52203 0.537455 0.400638 0.608484C0.279247 0.679514 0.17835 0.781673 0.108041 0.904741C0.0377325 1.02781 0.000477932 1.16747 4.56797e-06 1.30975C-0.000468796 1.45204 0.0358556 1.59195 0.105344 1.7155L3.07899 7L0.105344 12.2845C0.0358556 12.408 -0.000468796 12.548 4.56797e-06 12.6902C0.000477932 12.8325 0.0377325 12.9722 0.108041 13.0953C0.17835 13.2183 0.279247 13.3205 0.400638 13.3915C0.52203 13.4625 0.659659 13.5 0.799756 13.5H11.9999C12.141 13.5 12.2795 13.4621 12.4014 13.3901C12.5234 13.3182 12.6244 13.2149 12.6944 13.0905L15.8944 7.403C15.9636 7.28031 16 7.14139 16 7C16 6.85861 15.9636 6.71969 15.8944 6.597Z" fill="#1E88E5" />
                                    </svg>
                                    <span>Assessment, diagnosis and treatment of eye diseases and
                                        pathological eye conditions</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                                        <path d="M15.8944 6.597L12.6944 0.9095C12.6244 0.785144 12.5234 0.681772 12.4014 0.609859C12.2795 0.537946 12.141 0.500046 11.9999 0.5H0.799756C0.659659 0.500046 0.52203 0.537455 0.400638 0.608484C0.279247 0.679514 0.17835 0.781673 0.108041 0.904741C0.0377325 1.02781 0.000477932 1.16747 4.56797e-06 1.30975C-0.000468796 1.45204 0.0358556 1.59195 0.105344 1.7155L3.07899 7L0.105344 12.2845C0.0358556 12.408 -0.000468796 12.548 4.56797e-06 12.6902C0.000477932 12.8325 0.0377325 12.9722 0.108041 13.0953C0.17835 13.2183 0.279247 13.3205 0.400638 13.3915C0.52203 13.4625 0.659659 13.5 0.799756 13.5H11.9999C12.141 13.5 12.2795 13.4621 12.4014 13.3901C12.5234 13.3182 12.6244 13.2149 12.6944 13.0905L15.8944 7.403C15.9636 7.28031 16 7.14139 16 7C16 6.85861 15.9636 6.71969 15.8944 6.597Z" fill="#1E88E5" />
                                    </svg>
                                    <span>Removal of ocular foreign bodies</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                                        <path d="M15.8944 6.597L12.6944 0.9095C12.6244 0.785144 12.5234 0.681772 12.4014 0.609859C12.2795 0.537946 12.141 0.500046 11.9999 0.5H0.799756C0.659659 0.500046 0.52203 0.537455 0.400638 0.608484C0.279247 0.679514 0.17835 0.781673 0.108041 0.904741C0.0377325 1.02781 0.000477932 1.16747 4.56797e-06 1.30975C-0.000468796 1.45204 0.0358556 1.59195 0.105344 1.7155L3.07899 7L0.105344 12.2845C0.0358556 12.408 -0.000468796 12.548 4.56797e-06 12.6902C0.000477932 12.8325 0.0377325 12.9722 0.108041 13.0953C0.17835 13.2183 0.279247 13.3205 0.400638 13.3915C0.52203 13.4625 0.659659 13.5 0.799756 13.5H11.9999C12.141 13.5 12.2795 13.4621 12.4014 13.3901C12.5234 13.3182 12.6244 13.2149 12.6944 13.0905L15.8944 7.403C15.9636 7.28031 16 7.14139 16 7C16 6.85861 15.9636 6.71969 15.8944 6.597Z" fill="#1E88E5" />
                                    </svg>
                                    <span>Eye counseling and eye health talks</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="services-stn">
                    <h3>
                        <div>Why Choose</div>
                        <div>Our Services?</div>
                    </h3>
                    <div className="about-cards">
                        <div className="card-group card-group1">
                            <div className="card">
                                <div className="img-wrapper"><img src="/images/experienced-doc.png" alt="optometrists in Nigeria" /></div>
                                <div className="card-title">We are highly experienced</div>
                                <p className="card-description">MEB Eye Clinic has provided personalized, optimum eye care services for 27 years and counting.</p>
                            </div>
                            <div className="card">
                                <div className="img-wrapper"><img src="/images/customer 1.png" alt="optometrists in Nigeria" /></div>
                                <div className="card-title">Our services are you-centered</div>
                                <p className="card-description">Above everything, we are all about you. Our eye care services are customized to fit your needs and accommodate your wants.</p>
                            </div>
                        </div>
                        <div className="card-group card-group2">
                            <div className="card">
                                <div className="img-wrapper"><img src="/images/eye 1.png" alt="optometrists in Nigeria" /></div>
                                <div className="card-title">We provide world-class eye care services</div>
                                <p className="card-description">Our eye tests, frames, contact lenses, high-quality lenses, and eye care tools and techniques meet international standards.</p>
                            </div>
                            <div className="card">
                                <div className="img-wrapper"><img src="/images/professionals 1.png" alt="optometrists in Nigeria" /></div>
                                <div className="card-title">We boast of a Professional team</div>
                                <p className="card-description">Professionalism is the order of the way with our team. We are dedicated to offering only the best to you.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fast-img-wrapper"><img src="/images/fasticon.png" alt="experienced eye care" /></div>
                <h3 id="track-record-title">We have the track record</h3>
                <p className="about-desc">We have been in the business for over 10 years</p>
                <div className="track-record-details">
                    <div className="stats">
                        <div className="number">30+</div>
                        <div className="stat">Years of Experience</div>
                    </div>
                    <div className="stats">
                        <div className="number">30000+</div>
                        <div className="stat">Patients Treated</div>
                    </div>
                    <div className="stats">
                        <div className="number">10</div>
                        <div className="stat">Experienced doctors</div>
                    </div>
                    <div className="stats">
                        <div className="number">2</div>
                        <div className="stat">Locations</div>
                    </div>
                </div>
                <div className="appointment-card">
                    <div className="texts">
                        <h4>Book an appointment today</h4>
                        <p>Join over 1000 customers to testify to good eye service care today.</p>
                    </div>
                    <div className="appointment-card-btn">
                        <Button child={"Book an appointment"} />
                    </div>
                </div>
            </section>
            <div className="about-stn" id="about">
                <h3>About Us<span id="blue-lines"><img src="/images/blue-lines.png" alt="" /></span></h3>
                <div className="flex-container">
                    <div className="img-wrapper">
                        <img src="/images/meb-paper.png" alt="" />
                    </div>
                    <div className="text-content-container">
                        <article>MEB Eye Clinic is a family-owned optometry clinic with two-walk-in-locations in Lagos, the economic hub of Nigeria. Founded in 1993, Meb Eye Clinic was born out of thee resolve to provide the best quality eye care services in Nigeria.</article>
                        <Link to="/about_us">Learn More</Link>
                    </div>
                </div>
            </div>
            <section className="testimonials" id="testimonials">
                <div className="pre-header">
                    Testimonials
                </div>
                <h3>What Our Patients have to say about us</h3>
                <Reviews />
            </section>
            <Footer />
        </div>
    );
}

export default HomeScreen;