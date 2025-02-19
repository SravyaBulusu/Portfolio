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



import React from "react";
import "./PageTwo1.css";
import { FaArrowRight } from "react-icons/fa";

const projects = [
  {
      title: "College Bus Tracking Website",
      image: "busproject.png",
      description: "A real-time bus tracking website that allows users to monitor bus locations on a map and view estimated arrival times. Built using React.js, Node.js, Express.js, and Google Maps API.",
      github: "https://github.com/SravyaBulusu/GPS_PROJECT",
  },
  {
    title: "Movie Ticket booking Website",
    image: "movieproject.png",
    description: "A user-friendly movie ticket booking website that allows users to browse movies, select seats, and make reservations seamlessly. Built using HTML, CSS, JavaScript",
    github: "https://github.com/user/project2",
  },
  {
    title: "Digital Store",
    image: "store.png",
    description: "An e-commerce website for browsing and purchasing digital products with features like search, filters, and a shopping cart. Built using React.js",
    github: "https://github.com/user/project3",
  },
  {
    title: "Mini Game",
    image: "gridgame.png",
    description: "An interactive grid-based game where players navigate a movable element within a dynamic grid. Built using HTML, CSS, and JavaScript.",
    github: "https://github.com/user/project4",
  },
  {
    title: "Mini Quiz GUI",
    image: "project4.jpg",
    description: "A graphical quiz application with a database-backed question system, allowing users to answer questions and track scores. Built using Java,MySQL",
    github: "https://github.com/user/project4",
  },
  {
    title: "Admin Dashboard for college bus transport",
    image: "adminDashboard.png",
    description: "An admin dashboard for managing college bus transport, including route tracking, scheduling, and user management. Built using React.js, Node.js, Express.js, and MongoDB.",
    github: "https://github.com/user/project4",
  },
];

const ProjectCards = () => {
  return (
   <div className="page2">
      <center><h1 className="gupter-regular">My Projects</h1></center>
     <div className="project-container">
      {projects.map((project, index) => (
        <div className="card" key={index}>
          <div className="card-inner">
            <div className="card-front">
              <img src={project.image} alt={project.title} className="project-image" />
              <h3 style={{color:"white"}}>{project.title}</h3>
            </div>
            <div className="card-back">
              <p style={{fontSize:20,lineHeight:1.8}}>{project.description}</p>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                 <div style={{height:40,width:40,borderRadius:50,backgroundColor:"#A294F9",display:"flex",alignItems:"center",justifyContent:"center"}}><FaArrowRight color="white" /></div>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
   </div>
  );
};

export default ProjectCards;
