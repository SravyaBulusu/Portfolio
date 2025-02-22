// import React from "react"
// import "./PageSeven.css"
// function PageSeven() {
//     return (
      
//             <div className="pageseven">
//                 <center><h1 style={{ color: "#A294F9" }} className="gupter-bold">About</h1></center>
//                 <div className="maindiv">
//                     <div>
//                         <img src="thubphoto.png" style={{ height: 550, width: 550 }} />
//                     </div>
//                     <div className="div2">
//                         <p style={{ color: "white",fontSize:20,lineHeight:1.5 }} className="aboutme" className="gupter-regular">I am B.S.L.Sravya Pursuing my B.Tech in the stream of Artificial Intelligence and Machine Learning.I have knowledge on full stack development. am a person who is positive about every aspect of life. There are many things I like to do, to see, and to experience. I like to read, I like to write; I like to think, I like to dream; I like to talk, I like to listen. I like to see the sunrise in the morning, I like to see the moonlight at night; I like to feel the music flowing on my face, I like to smell the wind coming from the ocean. I like to look at the clouds in the sky with a blank mind, I like to do thought experiment when I cannot sleep in the middle of the night. I like flowers in spring, rain in summer, leaves in autumn, and snow in winter. I like to sleep early, I like to get up late; I like to be alone, I like to be surrounded by people. I like country’s peace, I like metropolis’ noise; I like the beautiful west lake in Hangzhou, I like the flat cornfield in Champaign. I like delicious food and comfortable shoes; I like good books and romantic movies. I like the land and the nature, I like people. And, I like to laugh.</p>
//                     </div>
//                 </div>
//             </div>
           
       

//     );

// }
// export default PageSeven;


// import React from "react";
// import "./PageSeven.css";

// function PageSeven() {
//     return (
//         <div className="pageseven">
//             <center><h1 style={{ color: "#A294F9" }} className="gupter-bold">About</h1></center>
//             <div className="maindiv">
//                 <div>
//                     <img src="thubphoto.png" style={{ height: 550, width: 550 }} alt="Profile" />
//                 </div>
//                 <div className="div2">
//                     <p style={{ color: "white", fontSize: 20, lineHeight: 1.5 }} className="gupter-regular">
//                         I am B.S.L.Sravya pursuing my B.Tech in the stream of Artificial Intelligence and Machine Learning.
//                         Made several projects and also gained many skills related to developement and many more.
                        
//                     </p>
//                 </div>
//             </div>
//             {/* Fade effect */}
//             <div className="fade-effect"></div>
//             {/* Animated dots */}
//         </div>
//     );
// }

// export default PageSeven;



// import React from "react";
// import "./PageSeven.css";
// import { FaArrowRight } from "react-icons/fa";

// function PageSeven() {
//     return (
//         <div className="pageseven">
//             <div className="content-wrapper">
//                 {/* Left side - Image */}
//                 <div className="image-container">
//                     <img src="thubphoto.png" alt="Profile" />
//                 </div>
                
//                 {/* Right side - Text and Button */}
//                 <div className="text-container">
//                     <h1 className="gupter-bold" style={{ color: "#A294F9" }}>About</h1>
//                     <p className="gupter-regular">
//                         I am B.S.L. Sravya pursuing my B.Tech in the stream of Artificial Intelligence and Machine Learning.
//                         Made several projects and also gained many skills related to development and many more.
//                     </p>
//                     <button className="explore-btn">
//                         Explore <FaArrowRight className="arrow-icon" />
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default PageSeven;


// import React from "react";
// import "./PageSeven.css";
// import { FaArrowRight } from "react-icons/fa";

// function PageSeven() {
//     return (
//         <div className="pageseven">
//             <div className="content-wrapper">
//                 {/* Right side - Heading (comes first in responsive mode) */}
//                 <h1 className="gupter-bold about-heading">About</h1>

//                 {/* Left side - Image */}
//                 <div className="image-container">
//                     <img src="thubphoto.png" alt="Profile" />
//                 </div>
                
//                 {/* Right side - Text and Button */}
//                 <div className="text-container">
//                     <p style={{color:"white"}}>
//                         I am B.S.L. Sravya pursuing my B.Tech in the stream of Artificial Intelligence and Machine Learning.
//                         Made several projects and also gained many skills related to development and many more.
//                     </p>
//                     <button className="explore-btn">
//                         Explore <FaArrowRight className="arrow-icon" />
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default PageSeven;



import React, { useEffect } from "react";
import "./PageSeven.css";
import { FaArrowRight } from "react-icons/fa";

function PageSeven() {
    useEffect(() => {
        const fadeInElements = document.querySelectorAll(".fade-in");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                    }
                });
            },
            { threshold: 0.2 } // Trigger when 20% of the element is visible
        );

        fadeInElements.forEach((element) => observer.observe(element));
    }, []);

    return (
        <div className="pageseven">
            <div className="content-wrapper">
                {/* Left side - Image */}
                <img src="thubphoto.png" alt="Profile" className="image-container fade-in" />

                {/* Right side - Text and Button */}
                <div className="text-wrapper">
                    <center><h1 className={`fade-in merriweather-black`}>About&nbsp;&nbsp;<span style={{color:"white"}}>Me</span></h1></center>
                    <div className="fade-in">
                    <p className="cabin">
                    I am B.S.L.Sravya, a passionate developer from the Artificial Intelligence and Machine Learning department at Aditya Engineering College. With a strong foundation in development, I have worked on multiple projects that have helped me enhance my coding skills and problem-solving abilities.

My expertise lies in designing and building efficient solutions, with a keen interest in web development and software engineering. Through hands-on experience, I have developed projects that demonstrate my ability to work with various technologies and frameworks.

I am always eager to learn and explore new advancements in AI, machine learning, and development. My goal is to leverage my skills to create impactful and innovative solutions in the tech industry.
                    </p>
                    </div>
                    <button className="explore-btn fade-in"
                    onClick={() => document.getElementById("pageTwo")?.scrollIntoView({ behavior: "smooth" })}
>
    Explore <FaArrowRight className="arrow-icon" />

                    </button>
                </div>
            </div>
        </div>
    );
}

export default PageSeven;