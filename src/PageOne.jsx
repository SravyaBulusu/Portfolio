import React, { useEffect, useState } from "react";
import "./PageOne.css";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function PageOne() {
  // Existing states and effects here

  useEffect(() => {
    let sparkleCount = 0;
    const maxSparkles = 10; // Limit the number of sparkles
    const sparkleContainer = document.getElementById("sparkle-container");

    const createSparkle = () => {
      if (sparkleCount >= maxSparkles) return;

      const sparkle = document.createElement("div");
      sparkle.className = "sparkle";
      sparkleContainer.appendChild(sparkle);

      sparkle.style.left = Math.random() * sparkleContainer.offsetWidth + "px";
      sparkle.style.top = Math.random() * sparkleContainer.offsetHeight + "px";

      // Event listener to handle the end of the animation
      sparkle.addEventListener("animationend", () => {
        sparkle.remove();
        sparkleCount--; // Decrease the count when a sparkle is removed
        // Attempt to create a new sparkle to maintain the count
        createSparkle();
      });

      sparkleCount++; // Increase the count when a new sparkle is created

      // Schedule the next sparkle creation
      if (sparkleCount < maxSparkles) {
        setTimeout(createSparkle, Math.random() * 2000 + 1000); // Interval between 1s and 3s
      }
    };

    createSparkle(); // Initial call to start creating sparkles

    // Cleanup on component unmount
    return () => {
      sparkleContainer.querySelectorAll(".sparkle").forEach((sparkle) => sparkle.remove());
    };
  }, []);



  const texts = ["I am a Web Developer.", "I am AI Enthusiast"]; // Texts to display
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = texts[index];
      if (isDeleting) {
        setCurrentText((prev) => prev.slice(0, -1));
      } else {
        setCurrentText((prev) => fullText.slice(0, prev.length + 1));
      }

      // Adjust typing speed for deleting or typing
      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length); // Move to next text
      }
    };

    const typingTimeout = setTimeout(handleTyping, isDeleting ? typingSpeed / 2 : typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [currentText, isDeleting, index, typingSpeed, texts]);


  // Existing JSX return here
  return (
    <div className="cabin">

      <div
        className="page"
        style={{
          // height: '100vh',
          width: '100%',
          // backgroundColor:"linear-gradient(to right, #1A1A1D, #191970)",
          color: "white",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div id="sparkle-container" className="sparkle-container" ></div>
        <div className="div1">
          <div className="div11">
            <p className="hello">Hello, it's Me</p>
            <p className="name">Sravya Bulusu</p>
            <p className="typing-effect">
              {currentText}
              <span className="cursor"></span>
            </p>
            {/* <h1 className="name">
              Sravya Bulusu
            </h1>
            <h1 className="typing-effect">
              {currentText}
              <span className="cursor"></span>
            </h1> */}
            <p className="para">
              Creative and detail-oriented developer passionate about building<span></span>
              user-friendly,scalable, and efficient web applications.


            </p>
            <br />
            {/* Download Resume Button */}

            <a
              href="resumeupdated.pdf"
              download="Sravya_Resume.pdf"
              className="bright-button1"
              style={{
                marginTop: 20,
                // padding: "10px 20px",
                backgroundColor: "#87CEEB",
                color: "white",
                textDecoration: "none",
                borderRadius: 5,
                fontSize: 16,
                fontWeight: "bold",
                width: "130px"
              }}
            >
              Download Resume
            </a>

          </div>
        </div>
        <div className="div2">
          {/* <img src="home_page.png" style={{ height: 500, width: 500 }} /> */}
          {/* <img src="myphoto.png"/> */}
          <DotLottieReact
            src="lottie_blue.json"
            loop
            autoplay
            style={{ height: 500, width: 1400, position: "relative", top: -100 }}
          />

        </div>
      </div>

    </div>

  );
}

export default PageOne;