// // import React from "react";
// // import { FaHtml5, FaCss3Alt, FaSass, FaJs, FaReact, FaGithub, FaNodeJs } from "react-icons/fa";
// // import { SiFirebase, SiMongodb,SiMysql,SiExpress } from "react-icons/si";
// // import "./PageFive.css"; // Import CSS file

// // const skills = [
// //   { name: "HTML", icon: <FaHtml5 className="icon" style={{ color: "#E34F26" }} /> },
// //   { name: "CSS", icon: <FaCss3Alt className="icon" style={{ color: "#1572B6" }} /> },
// //   { name: "SASS", icon: <FaSass className="icon" style={{ color: "#CC6699" }} /> },
// //   { name: "JavaScript", icon: <FaJs className="icon" style={{ color: "#F7DF1E" }} /> },
// //   { name: "React", icon: <FaReact className="icon" style={{ color: "#61DAFB" }} /> },
// //   { name: "GitHub", icon: <FaGithub className="icon" style={{ color: "white" }} /> },
// //   { name: "Node.js", icon: <FaNodeJs className="icon" style={{ color: "#339933" }} /> },
// //   { name: "Express js", icon: <SiExpress className="icon" style={{ color: "#FFCA28" }} /> },
// //   { name: "MongoDB", icon: <SiMongodb className="icon" style={{ color: "#47A248" }} /> },
// //   { name: "MySQL", icon: <SiMysql className="icon" style={{ color: "#2496ED" }} /> },
// // ];

// // const Skills = () => {
// //   return (
// //     <div className="skills-container">
// //       <h2>My Skills</h2>
// //       <div className="skills-grid">
// //         {skills.map((skill, index) => (
// //           <div className="skill-card" key={index}>
// //             {skill.icon}
// //             <p>{skill.name}</p>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Skills;



// import React from "react";
// import { FaHtml5, FaCss3Alt, FaSass, FaJs, FaReact, FaGithub, FaNodeJs } from "react-icons/fa";
// import { SiFirebase, SiMongodb, SiMysql, SiExpress } from "react-icons/si";
// import "./PageFive.css"; // Import CSS file

// const skills = [
//   { name: "HTML", icon: <FaHtml5 className="icon" style={{ color: "#E34F26" }} /> },
//   { name: "CSS", icon: <FaCss3Alt className="icon" style={{ color: "#1572B6" }} /> },
//   // { name: "SASS", icon: <FaSass className="icon" style={{ color: "#CC6699" }} /> },
//   { name: "JavaScript", icon: <FaJs className="icon" style={{ color: "#F7DF1E" }} /> },
//   { name: "React", icon: <FaReact className="icon" style={{ color: "#61DAFB" }} /> },
//   // { name: "GitHub", icon: <FaGithub className="icon" style={{ color: "white" }} /> },
//   { name: "Node.js", icon: <FaNodeJs className="icon" style={{ color: "#339933" }} /> },
//   { name: "Express js", icon: <SiExpress className="icon" style={{ color: "#FFCA28" }} /> },
//   { name: "MongoDB", icon: <SiMongodb className="icon" style={{ color: "#47A248" }} /> },
//   { name: "MySQL", icon: <SiMysql className="icon" style={{ color: "#2496ED" }} /> },
// ];

// const Skills = () => {
//   return (
//     <div className="skills-container">
//       <h2>My Skills</h2>
//       <div className="skills-grid">
//         {skills.map((skill, index) => (
//           <div className="skill-card" key={index}>
//             {skill.icon}
//             <p>{skill.name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Skills;



// import React, { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
// import { SiMongodb, SiMysql, SiExpress } from "react-icons/si";
// import "./PageFive.css"; // Import CSS file

// const skills = [
//   { name: "HTML", icon: <FaHtml5 className="icon" style={{ color: "#E34F26" }} /> },
//   { name: "CSS", icon: <FaCss3Alt className="icon" style={{ color: "#1572B6" }} /> },
//   { name: "JavaScript", icon: <FaJs className="icon" style={{ color: "#F7DF1E" }} /> },
//   { name: "React", icon: <FaReact className="icon" style={{ color: "#61DAFB" }} /> },
//   { name: "Node.js", icon: <FaNodeJs className="icon" style={{ color: "#339933" }} /> },
//   { name: "Express.js", icon: <SiExpress className="icon" style={{ color: "#FFCA28" }} /> },
//   { name: "MongoDB", icon: <SiMongodb className="icon" style={{ color: "#47A248" }} /> },
//   { name: "MySQL", icon: <SiMysql className="icon" style={{ color: "#2496ED" }} /> },
// ];

// const Skills = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   return (
//     <div className="skills-container" ref={ref}>
//       <motion.h2 
//         initial={{ opacity: 0, y: 50 }}
//         animate={isInView ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 0.6 }}
//         className="merriweather-black"
//       >
//         <span style={{color:"white"}}>My &nbsp;</span>Skills
//       </motion.h2>

//       <div className="skills-grid">
//         {skills.map((skill, index) => (
//           <motion.div
//             key={index}
//             className="skill-card"
//             initial={{ opacity: 0, y: 50 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.6, delay: index * 0.2 }}
//           >
//             {skill.icon}
//             <p>{skill.name}</p>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Skills;


import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiMysql, SiExpress, SiC, SiPython,SiOpenjdk } from "react-icons/si";
import "./PageFive.css"; // Import CSS file

// Categorized skills
const skillCategories = {
  "Frontend Technologies": [
    { name: "HTML", icon: <FaHtml5 className="icon" style={{ color: "#E34F26" }} /> },
    { name: "CSS", icon: <FaCss3Alt className="icon" style={{ color: "#1572B6" }} /> },
    { name: "JavaScript", icon: <FaJs className="icon" style={{ color: "#F7DF1E" }} /> },
    { name: "React", icon: <FaReact className="icon" style={{ color: "#61DAFB" }} /> },
  ],
  "Backend Technologies": [
    { name: "Node.js", icon: <FaNodeJs className="icon" style={{ color: "#339933" }} /> },
    { name: "Express.js", icon: <SiExpress className="icon" style={{ color: "#FFCA28" }} /> },
    { name: "MongoDB", icon: <SiMongodb className="icon" style={{ color: "#47A248" }} /> },
    { name: "MySQL", icon: <SiMysql className="icon" style={{ color: "#2496ED" }} /> },
  ],
  "Programming Languages": [
    { name: "Java", icon:<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" className="icon" alt="Java" style={{ width: "60px", height: "60px" }} /> },
    { name: "C", icon: <SiC className="icon" style={{ color: "#A8B9CC" }} /> },
    { name: "Python", icon: <SiPython className="icon" style={{ color: "#3776AB" }} /> },
  ],
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className={`skills-container cabin`} ref={ref}>
      <motion.h2 
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="merriweather-black"
      >
        <span style={{color:"white"}}>My &nbsp;</span>Skills
      </motion.h2>

      {Object.entries(skillCategories).map(([category, skills], index) => (
        <div key={index} className="skills-section">
          <motion.h3 
            initial={{ opacity: 0, y: 30 }} 
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            className="category-title"
            style={{fontSize:22,marginBottom:30}}
          >
            {category}
          </motion.h3>

          <div className="skills-grid">
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                className="skill-card"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: (index + idx) * 0.2 }}
              >
                {skill.icon}
                <p className="cabin">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
