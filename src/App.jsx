// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


import React from "react";
import Header from "./Header";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
// import PageThree from "./PageThree";
import PageFour from "./PageFour";
import PageFive from "./PageFive";
import PageSix from "./PageSix";
import PageSeven from "./PageSeven";
import "./styles.css";
import './App.css'
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = document.querySelector(".header").offsetHeight; // Get header height
      const offsetPosition = section.offsetTop - headerHeight; // Adjust position based on header height

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <Header scrollToSection={scrollToSection} />
      <div className="content">
        <section id="pageOne" className="section">
          <PageOne />
        </section>
        <section id="pageSeven" className="section">
          <PageSeven />
        </section>
        <section id="pageTwo" className="section">
          <PageTwo />
        </section>
        <section id="pageFive" className="section">
          <PageFive/>
        </section>
        <section id="pageSix" className="section">
          <PageSix />
        </section>
        {/* <section id="pageThree" className="section">
          <PageThree />
        </section> */}
        <section id="pageFour" className="section">
          <PageFour />
        </section>
      </div>
    </div>
  );
}

export default App;



