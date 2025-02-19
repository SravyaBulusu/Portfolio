import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './PageTwo.css';

function PageTwo() {
  const settings = {
    dots: true,           // Show navigation dots
    infinite: true,       // Loop through slides
    speed: 500,           // Transition speed
    slidesToShow: 3,      // Number of slides to show at a time
    slidesToScroll: 1,    // Number of slides to scroll at a time
    autoplay: true,       // Enable auto play
    autoplaySpeed: 3000,  // Auto play speed (ms)
    responsive: [
      {
        breakpoint: 1024, // For devices below 1024px width
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // For devices below 600px width
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{textAlign: "center" }} className="page">
      <h2>Extracurricular Activities</h2>
      <Slider {...settings}>
        <div className="div21">
          <img
            src="presentattion.png"
            alt="Slide 1"
            style={{ width: "80%", height: "auto" }}
          />
          <div><p style={{color:"white"}}>HTML and CSS IT specialist certification</p></div>
        </div>
        <div>
          <img
            src="html certificate.jpg"
            alt="Slide 2"
            style={{ width: "80%", height: "auto" }}
          />
        </div>
        <div>
          <img
            src="html certificate.jpg"
            alt="Slide 3"
            style={{ width: "80%", height: "auto" }}
          />
        </div>
        <div>
          <img
            src="html certificate.jpg"
            alt="Slide 4"
            style={{ width: "80%", height: "auto" }}
          />
        </div>
      </Slider>
    </div>
  );
}

export default PageTwo;




