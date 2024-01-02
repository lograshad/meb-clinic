import "./reviews.css";

const reviewsData = [
    {
        review: "The best way to know you will get the best service is to come to MEB eye clinic, I had the best service and I haven't experienced any bad review in 10 years of using the clinic",
        name: "Tobiloba Owoade",
        occupation: "UI/UX Designer, Sanlam Nigeria.",
        id: 1,
    },
    {
        review: "Choosing MEB Eye Clinic was the best decision I ever made for my eye care. The service is unparalleled, and I've been a loyal customer for over five years now and I've not had a single complaint.",
        name: "Tolulope Adeleke",
        occupation: "Realtor, Landmark Nigeria.",
        id: 2,
    },
    {
        review: "I am a big critic, even I know, but ever since my wife introduced me to MEB Eye Clinic, all I say is I'm trully impressed with the standards. And the affordability? The best I've seen in my years of clinic experience.",
        name: "Afeez Oworo",
        occupation: "Student, UNILAG.",
        id: 3,
    },
    {
        review: "MEB Eye Clinic, when I tell you I was extremely impressed by the quality of their customer service, the doctors and staffs were all so nice and understanding. I totally would recommend it for anyone.",
        name: "Charles Nwoka",
        occupation: "Teacher",
        id: 4,
    },
    {
        review: "This facility is affordable compared to some that wanted to cut my neck. I proudly recommend this family eye care clinic. RIP Dr Theophilius Umemba, I know your legacy lives on.",
        name: "Toheeb Olawale",
        occupation: "Content Strategist, Konga.",
        id: 5,
    },
    {
        review: "MEB Eye Clinic has been my trusted go to eye care service, the level of expertise and proffesionalism always leave me impressed, and they are so affordable. No complaints since I've been using them, thank God for them honestly",
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