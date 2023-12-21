import "./reviews.css";

const reviewsData = [
    {
        review: "The best way to know you will get the best service is to come to MEB eye clinic, I had the best service and I haven't experienced any bad review in 10 years of using the clinic",
        name: "Tobiloba Owoade",
        occupation: "UI/UX Designer, Sanlam Nigeria.",
        id: 1,
    },
    {
        review: "Choosing MEB Eye Clinic was the best decision I ever made for my eye care. The service is unparalleled, and I've been a loyal customer for over five years now. Not a single complaint – their professionalism and expertise make them stand out in the field.",
        name: "Tolulope Adeleke",
        occupation: "Realtor, Landmark Nigeria.",
        id: 2,
    },
    {
        review: "MEB Eye Clinic sets the gold standard for eye care services. I've been a satisfied customer for eight years, and the consistency of their excellent service is truly commendable. My eyes have never been in better hands!",
        name: "Afeez Oworo",
        occupation: "Student, UNILAG.",
        id: 3,
    },
    {
        review: "A decade of exceptional service! MEB Eye Clinic is my go-to for all things related to eye health. The skilled and friendly staff always make me feel well taken care of. No wonder there are no bad reviews – they consistently deliver top-notch care.",
        name: "Charles Nwoka",
        occupation: "Teacher",
        id: 4,
    },
    {
        review: "If you're looking for impeccable eye care, look no further than MEB Eye Clinic. I've been a happy customer for seven years, and I can confidently say that their commitment to excellence is unwavering. The best service is an understatement – it's an experience.",
        name: "Toheeb Olawale",
        occupation: "Content Strategist, Konga.",
        id: 5,
    },
    {
        review: "MEB Eye Clinic has been my trusted partner in eye health for the past nine years, and I wouldn't go anywhere else. The level of expertise, combined with a welcoming atmosphere, makes every visit a pleasure. Not a single bad review in a decade speaks volumes about the outstanding service they provide.",
        name: "Chimdia",
        occupation: "Data Analyst",
        id: 6,
    },
]

const Reviews = () => {
    return ( 
        <div className="reviews-container">
            <div className="reviews-slide">
                {reviewsData.map((item) => {
                    return (
                        <div className="review-card" key={item.id}>
                            <div className="top">
                                <img src="/images/5stars.png" alt="" />
                                <span className="rating">5.0</span>
                            </div>
                            <div className="middle">
                                {item.review}
                            </div>
                            <div className="bottom">
                                <div className="reviewerImage"></div>
                                <div className="reviewer-details">
                                    <div className="name">{item.name}</div>
                                    <div className="occupation">{item.occupation}</div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
     );
}
 
export default Reviews;