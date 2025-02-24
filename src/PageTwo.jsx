// import React from "react";
// import "./PageTwo1.css"; // Ensure you have proper CSS for the flip effect
// import { FaArrowRight } from "react-icons/fa";

// const projects = [
//   {
//     title: "College bus tracking website",
//     image: "busproject.png",
//     description: "College bus tracking website",
//     github: "https://github.com/user/project1",
//   },
//   {
//     title: "Project Two",
//     image: "project2.jpg",
//     description: "Description of Project Two",
//     github: "https://github.com/user/project2",
//   },
//   {
//     title: "Project Three",
//     image: "project3.jpg",
//     description: "Description of Project Three",
//     github: "https://github.com/user/project3",
//   },
//   {
//     title: "Project Four",
//     image: "project4.jpg",
//     description: "Description of Project Four",
//     github: "https://github.com/user/project4",
//   },
// ];

// const ProjectCards = () => {
//   return (
//     <div className="project-container">
//       {projects.map((project, index) => (
//         <div className="card" key={index}>
//           <div className="card-inner">
//             <div className="card-front">
//               <img src={project.image} alt={project.title} className="project-image" />
//               <h3>{project.title}</h3>
//             </div>
//             <div className="card-back">
//               <p>{project.description}</p>
//               <a href={project.github} target="_blank" rel="noopener noreferrer">
//                 GitHub <FaArrowRight />
//               </a>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProjectCards;



// import React from "react";
// import "./PageTwo1.css";
// import { FaArrowRight } from "react-icons/fa";

// const projects = [
//   {
//       title: "College Bus Tracking Website",
//       image: "busproject.png",
//       description: "A real-time bus tracking website that allows users to monitor bus locations on a map and view estimated arrival times. Built using React.js, Node.js, Express.js, and Google Maps API.",
//       github: "https://github.com/SravyaBulusu/GPS_PROJECT",
//   },
//   {
//     title: "Movie Ticket booking Website",
//     image: "movieproject.png",
//     description: "A user-friendly movie ticket booking website that allows users to browse movies, select seats, and make reservations seamlessly. Built using HTML, CSS, JavaScript",
//     github: "https://github.com/user/project2",
//   },
//   {
//     title: "Digital Store",
//     image: "store.png",
//     description: "An e-commerce website for browsing and purchasing digital products with features like search, filters, and a shopping cart. Built using React.js",
//     github: "https://github.com/user/project3",
//   },
//   {
//     title: "Mini Game",
//     image: "gridgame.png",
//     description: "An interactive grid-based game where players navigate a movable element within a dynamic grid. Built using HTML, CSS, and JavaScript.",
//     github: "https://github.com/user/project4",
//   },
//   {
//     title: "Mini Quiz GUI",
//     image: "project4.jpg",
//     description: "A graphical quiz application with a database-backed question system, allowing users to answer questions and track scores. Built using Java,MySQL",
//     github: "https://github.com/user/project4",
//   },
//   {
//     title: "Admin Dashboard for college bus transport",
//     image: "adminDashboard.png",
//     description: "An admin dashboard for managing college bus transport, including route tracking, scheduling, and user management. Built using React.js, Node.js, Express.js, and MongoDB.",
//     github: "https://github.com/user/project4",
//   },
// ];

// const ProjectCards = () => {
//   return (
//    <div className="page2">
//       <center><h1 className="gupter-bold"><span style={{color:"white"}}>My</span> Projects</h1></center>
//      <div className="project-container">
//       {projects.map((project, index) => (
//         <div className="card" key={index}>
//           <div className="card-inner">
//             <div className="card-front">
//               <img src={project.image} alt={project.title} className="project-image" />
//               <h3 style={{color:"white"}}>{project.title}</h3>
//             </div>
//             <div className="card-back">
//               <p style={{fontSize:22,lineHeight:1.8}} className="mulish">{project.description}</p>
//               <a href={project.github} target="_blank" rel="noopener noreferrer">
//                  <div style={{height:40,width:40,borderRadius:50,backgroundColor:"#A294F9",display:"flex",alignItems:"center",justifyContent:"center"}}><FaArrowRight color="white" /></div>
//               </a>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//    </div>
//   );
// };

// export default ProjectCards;



// import React from "react";
// import "./PageTwo1.css";
// import { FaArrowRight } from "react-icons/fa";
// import { motion } from "framer-motion";

// const projects = [
//   {
//     title: "College Bus Tracking Website",
//     image: "busproject.png",
//     description: "A real-time bus tracking website that allows users to monitor bus locations on a map and view estimated arrival times. Built using React.js, Node.js, Express.js, and Google Maps API.",
//     github: "https://github.com/SravyaBulusu/GPS_PROJECT",
//   },
//   {
//     title: "Movie Ticket booking Website",
//     image: "movieproject.png",
//     description: "A user-friendly movie ticket booking website that allows users to browse movies, select seats, and make reservations seamlessly. Built using HTML, CSS, JavaScript",
//     github: "https://github.com/user/project2",
//   },
//   {
//     title: "Digital Store",
//     image: "store.png",
//     description: "An e-commerce website for browsing and purchasing digital products with features like search, filters, and a shopping cart. Built using React.js",
//     github: "https://github.com/user/project3",
//   },
//   {
//     title: "Mini Game",
//     image: "gridgame.png",
//     description: "An interactive grid-based game where players navigate a movable element within a dynamic grid. Built using HTML, CSS, and JavaScript.",
//     github: "https://github.com/user/project4",
//   },
//   {
//     title: "Mini Quiz GUI",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcoSc5woOmLWZmDnbd_Zh4yazTPeiKyc7VbA&s",
//     description: "A graphical quiz application with a database-backed question system, allowing users to answer questions and track scores. Built using Java, MySQL",
//     github: "https://github.com/user/project4",
//   },
//   {
//     title: "Admin Dashboard for college bus transport",
//     image: "adminDashboard.png",
//     description: "An admin dashboard for managing college bus transport, including route tracking, scheduling, and user management. Built using React.js, Node.js, Express.js, and MongoDB.",
//     github: "https://github.com/user/project4",
//   },
// ];

// const ProjectCards = () => {
//   return (
//     <div className="page2">
//       <center>
//         <h1 className="merriweather-black">
//           <span style={{color:"white"}}>My</span> Projects
//         </h1>
//       </center>
//       <div className="project-container">
//         {projects.map((project, index) => (
//           <motion.div
//             className={`card cabin`}
//             key={index}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: index * 0.2 }}
//             viewport={{ once: true }}
//           >
//             <div className="card-inner">
//               <div className="card-front">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="project-image"
//                 />
//                 <h3 style={{ color: "white",fontSize:20}}>{project.title}</h3>
//               </div>
//               <div className="card-back">
//                 <p style={{ fontSize: 22, lineHeight: 1.8 }} className="cabin">
//                   {project.description}
//                 </p>
//                 <a href={project.github} target="_blank" rel="noopener noreferrer">
//                   <div
//                     style={{
//                       height: 40,
//                       width: 40,
//                       borderRadius: 50,
//                       backgroundColor: "#87CEEB",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                     }}
//                   >
//                     <FaArrowRight color="white" />
//                   </div>
//                 </a>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProjectCards;



// import React from "react";
// import "./PageTwo1.css";
// import { motion } from "framer-motion";

// const projects = [
//   {
//     title: "College Bus Tracking Website",
//     image: "busproject.png",
//     description:
//       "A real-time bus tracking website that allows users to monitor bus locations on a map and view estimated arrival times.",
//     tech: "React.js, Node.js, Express.js, Google Maps API",
//     demo: "https://your-demo-link.com",
//     github: "https://github.com/SravyaBulusu/GPS_PROJECT",
//   },
//   {
//     title: "Movie Ticket Booking Website",
//     image: "movieproject.png",
//     description:
//       "A user-friendly movie ticket booking website that allows users to browse movies, select seats, and make reservations seamlessly.",
//     tech: "HTML, CSS, JavaScript",
//     demo: "https://your-demo-link.com",
//     github: "https://github.com/user/project2",
//   },
//   {
//     title: "Digital Store",
//     image: "store.png",
//     description:
//       "An e-commerce website for browsing and purchasing digital products with features like search, filters, and a shopping cart.",
//     tech: "React.js",
//     demo: "https://your-demo-link.com",
//     github: "https://github.com/user/project3",
//   },
//   {
//     title: "Mini Game",
//     image: "gridgame.png",
//     description:
//       "An interactive grid-based game where players navigate a movable element within a dynamic grid.",
//     tech: "HTML, CSS, JavaScript",
//     demo: "https://your-demo-link.com",
//     github: "https://github.com/user/project4",
//   },
//   {
//     title: "Admin Dashboard for college bus transport",
//     image: "adminDashboard.png",
//     description: "An admin dashboard for managing college bus transport, including route tracking, scheduling, and user management. Built using React.js, Node.js, Express.js, and MongoDB.",
//     tech: "React.js, Express.js",
//     demo: "https://your-demo-link.com",
//     github: "https://github.com/user/project4",
//   },
// ];

// const ProjectCards = () => {
//   return (
//     <div className={`page2 cabin`}>
//       <center>
//         <h1 className="merriweather-black">
//           <span style={{ color: "white" }}>My</span> Projects
//         </h1>
//       </center>
//       <div className="project-list">
//         {projects.map((project, index) => (
//           <motion.div
//             className={`project ${index % 2 === 0 ? "left" : "right"}`}
//             key={index}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: index * 0.2 }}
//             viewport={{ once: true }}
//           >
//             <img src={project.image} alt={project.title} className="project-image" />
//             <div className="project-info">
//               <h3>{project.title}</h3>
//               <p>{project.description}</p>
//               <p><strong>Technologies:</strong> {project.tech}</p>
//               <div className="buttons">
//                 <a href={project.demo} target="_blank" rel="noopener noreferrer">
//                   <button className={`demo-btn cabin`}>View Demo</button>
//                 </a>
//                 <a href={project.github} target="_blank" rel="noopener noreferrer">
//                   <button className={`code-btn cabin`}>View Code</button>
//                 </a>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProjectCards;


import React, { useState } from "react";
import "./PageTwo1.css";
import { motion } from "framer-motion";

const projects = [
  {
    title: "College Bus Tracking Website",
    image: "busproject.png",
    description:
      "A real-time bus tracking website that allows users to monitor bus locations on a map and view estimated arrival times.",
    tech: "React.js, Node.js, Express.js, Google Maps API",
    demo: "busvideo.mp4", // Local video path
    github: "https://github.com/SravyaBulusu/GPS_PROJECT",
  },
  {
    title: "Movie Ticket Booking Website",
    image: "movieproject.png",
    description:
      "A user-friendly movie ticket booking website that allows users to browse movies, select seats, and make reservations seamlessly.",
    tech: "HTML, CSS, JavaScript",
    demo: "movievideo.mp4",
    github: "https://github.com/SravyaBulusu/movieTicketBooking",
  },
  {
    title: "Digital Store",
    image: "store.png",
    description:
      "An e-commerce website for browsing and purchasing digital products with features like search, filters, and a shopping cart.",
    tech: "React.js",
    demo: "shoppingvideo.mp4",
    github: "https://github.com/user/project3",
  },
  {
    title: "Mini Game",
    image: "gridgame.png",
    description:
      "An interactive grid-based game where players navigate a movable element within a dynamic grid.",
    tech: "HTML, CSS, JavaScript",
    demo: "gridvideo.mp4",
    github: "https://github.com/SravyaBulusu/grid_game",
  },
  {
    title: "Admin Dashboard for college bus transport",
    image: "adminDashboard.png",
    description:
      "An admin dashboard for managing college bus transport, including route tracking, scheduling, and user management.",
    tech: "React.js, Express.js",
    demo: "adminportalvideo.mp4",
    github: "https://github.com/user/project5",
  },
];

const ProjectCards = () => {
  const [videoSrc, setVideoSrc] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openVideoModal = (videoUrl) => {
    setVideoSrc(videoUrl);
    setIsModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsModalOpen(false);
    setVideoSrc("");
  };

  return (
    <div className="page2 cabin">
      <center>
        <h1 className="merriweather-black">
          <span style={{ color: "white" }}>My</span> Projects
        </h1>
      </center>
      <div className="project-list">
        {projects.map((project, index) => (
          <motion.div
            className={`project ${index % 2 === 0 ? "left" : "right"}`}
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p><strong>Technologies:</strong> {project.tech}</p>
              <div className="buttons">
                <button className="demo-btn cabin" onClick={() => openVideoModal(project.demo)}>
                  View Demo
                </button>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <button className="code-btn cabin">View Code</button>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div className="video-modal">
          <div className="modal-content">
            <span className="close-btn" onClick={closeVideoModal}>&times;</span>
            <video controls autoPlay>
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCards;
