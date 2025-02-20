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



import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiMysql, SiExpress } from "react-icons/si";
import "./PageFive.css"; // Import CSS file

const skills = [
  { name: "HTML", icon: <FaHtml5 className="icon" style={{ color: "#E34F26" }} /> },
  { name: "CSS", icon: <FaCss3Alt className="icon" style={{ color: "#1572B6" }} /> },
  { name: "JavaScript", icon: <FaJs className="icon" style={{ color: "#F7DF1E" }} /> },
  { name: "React", icon: <FaReact className="icon" style={{ color: "#61DAFB" }} /> },
  { name: "Node.js", icon: <FaNodeJs className="icon" style={{ color: "#339933" }} /> },
  { name: "Express.js", icon: <SiExpress className="icon" style={{ color: "#FFCA28" }} /> },
  { name: "MongoDB", icon: <SiMongodb className="icon" style={{ color: "#47A248" }} /> },
  { name: "MySQL", icon: <SiMysql className="icon" style={{ color: "#2496ED" }} /> },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="skills-container" ref={ref}>
      <motion.h2 
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        My Skills
      </motion.h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {skill.icon}
            <p>{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
