import "./reviews.css";

const reviewsData = [
    {
        review: "The best way to know you will get the best service is to come to mEB eye clinic, I had the best service and I haven't experienced any bad review in 10 years of using the clinic",
        name: "Tobiloba Owoade",
        occupation: "UI/UX Designer, Sanlam Nigeria.",
        id: 1,
    },
    {
        review: "The best way to know you will get the best service is to come to mEB eye clinic, I had the best service and I haven't experienced any bad review in 10 years of using the clinic",
        name: "Tobiloba Owoade",
        occupation: "UI/UX Designer, Sanlam Nigeria.",
        id: 2,
    },
    {
        review: "The best way to know you will get the best service is to come to mEB eye clinic, I had the best service and I haven't experienced any bad review in 10 years of using the clinic",
        name: "Tobiloba Owoade",
        occupation: "UI/UX Designer, Sanlam Nigeria.",
        id: 3,
    },
    {
        review: "The best way to know you will get the best service is to come to mEB eye clinic, I had the best service and I haven't experienced any bad review in 10 years of using the clinic",
        name: "Tobiloba Owoade",
        occupation: "UI/UX Designer, Sanlam Nigeria.",
        id: 4,
    },
    {
        review: "The best way to know you will get the best service is to come to mEB eye clinic, I had the best service and I haven't experienced any bad review in 10 years of using the clinic",
        name: "Tobiloba Owoade",
        occupation: "UI/UX Designer, Sanlam Nigeria.",
        id: 5,
    },
    {
        review: "The best way to know you will get the best service is to come to mEB eye clinic, I had the best service and I haven't experienced any bad review in 10 years of using the clinic",
        name: "Tobiloba Owoade",
        occupation: "UI/UX Designer, Sanlam Nigeria.",
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