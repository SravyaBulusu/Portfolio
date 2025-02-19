// import React, { useState, useEffect } from "react";

// function Header({ scrollToSection }) {
//   const [activeLink, setActiveLink] = useState("pageOne");
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleNavClick = (page) => {
//     setActiveLink(page);
//     scrollToSection(page);
//     setMenuOpen(false); // Close menu after clicking a link
//   };

//   const updateIndicator = () => {
//     const activeElement = document.querySelector(".nav-links .active");
//     const indicator = document.querySelector(".nav-indicator");

//     if (activeElement && indicator) {
//       const rect = activeElement.getBoundingClientRect();
//       indicator.style.left = `${rect.left}px`;
//       indicator.style.width = `${rect.width}px`;
//     }
//   };

//   useEffect(() => {
//     updateIndicator(); // Update indicator on mount and whenever activeLink changes

//     window.addEventListener("resize", updateIndicator);
//     return () => {
//       window.removeEventListener("resize", updateIndicator); // Cleanup on unmount
//     };
//   }, [activeLink]);

//   return (
//     <header className="header">
//       <h1 className="logo" className="gupter-regular">My Portfolio</h1>
//       <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
//         &#9776;
//       </div>
//       <nav className={menuOpen ? "open" : ""} className="gupter-regular1">
//         <ul className="nav-links">
//           <li
//             className={activeLink === "pageOne" ? "active" : ""}
//             onClick={() => handleNavClick("pageOne")}
//           >
//             Home
//           </li>
//           <li
//             className={activeLink === "pageSeven" ? "active" : ""}
//             onClick={() => handleNavClick("pageSeven")}
//           >
//             About
//           </li>
//           <li
//             className={activeLink === "pageTwo" ? "active" : ""}
//             onClick={() => handleNavClick("pageTwo")}
//           >
//             Projects
//           </li>
//           <li
//             className={activeLink === "pageFive" ? "active" : ""}
//             onClick={() => handleNavClick("pageFive")}
//           >
//             Skills
//           </li>
//           <li
//             className={activeLink === "pageSix" ? "active" : ""}
//             onClick={() => handleNavClick("pageSix")}
//           >
//             Certifications
//           </li>
//           {/* <li
//             className={activeLink === "pageThree" ? "active" : ""}
//             onClick={() => handleNavClick("pageThree")}
//           >
//             Extracurricular Activities
//           </li> */}
//           <li
//             className={activeLink === "pageFour" ? "active" : ""}
//             onClick={() => handleNavClick("pageFour")}
//           >
//             Contact
//           </li>
//         </ul>
//         <div className="nav-indicator"></div>
//       </nav>
//     </header>
//   );
// }

// export default Header;




// import React, { useState, useEffect } from "react";

// function Header({ scrollToSection }) {
//   const [activeLink, setActiveLink] = useState("pageOne");
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleNavClick = (page) => {
//     setActiveLink(page);
//     scrollToSection(page);
//     setMenuOpen(false); // Close menu after clicking a link
//   };

//   const updateIndicator = () => {
//     const activeElement = document.querySelector(".nav-links .active");
//     const indicator = document.querySelector(".nav-indicator");

//     if (activeElement && indicator) {
//       const rect = activeElement.getBoundingClientRect();
//       indicator.style.left = `${rect.left}px`;
//       indicator.style.width = `${rect.width}px`;
//     }
//   };

//   useEffect(() => {
//     updateIndicator(); // Update indicator on mount and whenever activeLink changes

//     window.addEventListener("resize", updateIndicator);
//     return () => {
//       window.removeEventListener("resize", updateIndicator); // Cleanup on unmount
//     };
//   }, [activeLink]);

//   // **Detect Active Section on Scroll**
//   useEffect(() => {
//     const sections = document.querySelectorAll("section"); // All sections with IDs matching navigation
//     const handleScroll = () => {
//       let currentSection = "pageOne"; // Default section

//       sections.forEach((section) => {
//         const rect = section.getBoundingClientRect();
//         if (rect.top <= 150 && rect.bottom >= 150) {
//           currentSection = section.id; // Update active section based on scroll position
//         }
//       });

//       setActiveLink(currentSection); // Update state
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll); // Cleanup
//     };
//   }, []);

//   return (
//     <header className="header">
//       <h1 className="logo">My Portfolio</h1>
//       <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
//         &#9776;
//       </div>
//       <nav className={`gupter-regular1 ${menuOpen ? "open" : ""}`}>
//         <ul className="nav-links">
//           <li
//             className={activeLink === "pageOne" ? "active" : ""}
//             onClick={() => handleNavClick("pageOne")}
//           >
//             Home
//           </li>
//           <li
//             className={activeLink === "pageSeven" ? "active" : ""}
//             onClick={() => handleNavClick("pageSeven")}
//           >
//             About
//           </li>
//           <li
//             className={activeLink === "pageTwo" ? "active" : ""}
//             onClick={() => handleNavClick("pageTwo")}
//           >
//             Projects
//           </li>
//           <li
//             className={activeLink === "pageFive" ? "active" : ""}
//             onClick={() => handleNavClick("pageFive")}
//           >
//             Skills
//           </li>
//           <li
//             className={activeLink === "pageSix" ? "active" : ""}
//             onClick={() => handleNavClick("pageSix")}
//           >
//             Certifications
//           </li>
//           <li
//             className={activeLink === "pageFour" ? "active" : ""}
//             onClick={() => handleNavClick("pageFour")}
//           >
//             Contact
//           </li>
//         </ul>
//         <div className="nav-indicator"></div>
//       </nav>
//     </header>
//   );
// }

// export default Header;


import React, { useState, useEffect } from "react";
import './Header.css'

function Header({ scrollToSection }) {
  const [activeLink, setActiveLink] = useState("pageOne");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (page) => {
    setActiveLink(page);
    scrollToSection(page);
    setMenuOpen(false); // Close menu after clicking a link
  };

  const updateIndicator = () => {
    const activeElement = document.querySelector(".nav-links .active");
    const indicator = document.querySelector(".nav-indicator");

    if (activeElement && indicator) {
      const rect = activeElement.getBoundingClientRect();
      indicator.style.left = `${rect.left}px`;
      indicator.style.width = `${rect.width}px`;
    }
  };

  useEffect(() => {
    updateIndicator();

    window.addEventListener("resize", updateIndicator);
    return () => {
      window.removeEventListener("resize", updateIndicator);
    };
  }, [activeLink]);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const handleScroll = () => {
      let currentSection = "pageOne";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          currentSection = section.id;
        }
      });

      setActiveLink(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <h1 className="logo">My Portfolio</h1>
      
      {/* Hamburger Icon */}
      <div 
        className={`hamburger ${menuOpen ? "open" : ""}`} 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Navigation Menu */}
      <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li className={activeLink === "pageOne" ? "active" : ""} onClick={() => handleNavClick("pageOne")}>Home</li>
          <li className={activeLink === "pageSeven" ? "active" : ""} onClick={() => handleNavClick("pageSeven")}>About</li>
          <li className={activeLink === "pageTwo" ? "active" : ""} onClick={() => handleNavClick("pageTwo")}>Projects</li>
          <li className={activeLink === "pageFive" ? "active" : ""} onClick={() => handleNavClick("pageFive")}>Skills</li>
          <li className={activeLink === "pageSix" ? "active" : ""} onClick={() => handleNavClick("pageSix")}>Certifications</li>
          <li className={activeLink === "pageFour" ? "active" : ""} onClick={() => handleNavClick("pageFour")}>Contact</li>
        </ul>
        <div className="nav-indicator"></div>
      </nav>
    </header>
  );
}

export default Header;
