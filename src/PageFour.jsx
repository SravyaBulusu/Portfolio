// import React from 'react';
// import './PageFour.css';
// import './App.css';
// import "@fortawesome/fontawesome-free/css/all.min.css";

// function PageFour() {
//     return (
//         <div>
//             <center><h1 className='gupter-bold' style={{}}>Contact</h1></center>
//             {/* <div className="div4">
//                 <div className="div41">
//                     <img src='photo1.png' />
//                 </div> */}
//             <div className="div4">
//                 <form>
//                     <label className="gupter-regular" style={{ marginRight: "100px" }}>Name</label>
//                     <input type="text" className="box" /><br></br><br></br>
//                     <label className="gupter-regular" style={{ marginRight: "120px" }}>Mail</label>
//                     <input type="text" className="box" /><br></br><br></br>
//                     <label className="gupter-regular" style={{ marginRight: "70px" }}>Message</label>
//                     <textarea className='box1'></textarea><br></br><br></br><br></br>
//                     <button type="submit" className="bright-button" style={{ marginLeft: '300px' }}>Send Message</button>
//                 </form><br></br>
//             </div>
//             <div className="social-icons">
//                     <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
//                         <i className="fab fa-facebook-f"></i>
//                     </a>
//                     <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//                         <i className="fab fa-twitter"></i>
//                     </a>
//                     <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
//                         <i className="fab fa-instagram"></i>
//                     </a>
//                     <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
//                         <i className="fab fa-linkedin-in"></i>
//                     </a>
//                 </div>

//             {/* </div> */}
//         </div>
//     )
// }

// export default PageFour;




// import React from "react";

// const PageFour = () => {
//   return (
//     <div style={styles.container}>
//       <h2>Contact Me</h2>

//       {/* Contact Form */}
//       <form style={styles.form}>
//         <label style={styles.label}>Name:</label>
//         <input type="text" placeholder="Your Name" style={styles.input} required />

//         <label style={styles.label}>Email:</label>
//         <input type="email" placeholder="Your Email" style={styles.input} required />

//         <label style={styles.label}>Message:</label>
//         <textarea placeholder="Your Message" style={styles.textarea} required></textarea>

//         <button type="submit" style={styles.button}>Send Message</button>
//       </form>

//       {/* Contact Info */}
//       <div style={styles.contactInfo}>
//         <p><strong>Email:</strong> <a href="mailto:yourname@example.com">yourname@example.com</a></p>
//         <p><strong>Phone:</strong> <a href="tel:+1234567890">+1234567890</a></p>
//         <p><strong>Location:</strong> Your City, Country</p>
//       </div>

//       {/* Social Media Links */}
//       <div style={styles.socialLinks}>
//         <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
//         <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">GitHub</a>
//         <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">Twitter</a>
//       </div>

//       {/* Call to Action */}
//       <button onClick={() => window.location.href = 'mailto:yourname@example.com'} style={styles.ctaButton}>
//         Let's Work Together
//       </button>

//       {/* Google Map (Optional) */}
//       <iframe
//         title="Google Map"
//         src="https://www.google.com/maps/embed?...your-location..."
//         style={styles.map}
//       ></iframe>
//     </div>
//   );
// };

// // Inline Styles
// const styles = {
//   container: {
//     maxWidth: "600px",
//     margin: "auto",
//     textAlign: "center",
//     fontFamily: "Arial, sans-serif",
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "10px",
//     marginBottom: "20px",
//   },
//   label: {
//     fontSize: "16px",
//     fontWeight: "bold",
//   },
//   input: {
//     padding: "10px",
//     fontSize: "14px",
//     borderRadius: "5px",
//     border: "1px solid #ccc",
//   },
//   textarea: {
//     padding: "10px",
//     fontSize: "14px",
//     borderRadius: "5px",
//     border: "1px solid #ccc",
//     minHeight: "100px",
//   },
//   button: {
//     backgroundColor: "#007BFF",
//     color: "#fff",
//     padding: "10px",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//     fontSize: "16px",
//   },
//   contactInfo: {
//     marginBottom: "20px",
//     fontSize: "16px",
//   },
//   socialLinks: {
//     display: "flex",
//     justifyContent: "center",
//     gap: "15px",
//     marginBottom: "20px",
//   },
//   ctaButton: {
//     backgroundColor: "#28A745",
//     color: "#fff",
//     padding: "10px",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//     fontSize: "16px",
//   },
//   map: {
//     width: "100%",
//     height: "250px",
//     border: "none",
//     marginTop: "20px",
//   },
// };

// export default PageFour;



// import React, { useState } from "react";
// import './PageFour.css'

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     mobile: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Submitted", formData);
//   };

//   return (
//     <div className="contact-container">
//       <h2>
//         Contact <span className="highlight">Me!</span>
//       </h2>
//       <form onSubmit={handleSubmit}>
//         <div className="input-row">
//           <input
//             type="text"
//             name="fullName"
//             placeholder="Full Name"
//             value={formData.fullName}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email Address"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="input-row">
//           <input
//             type="tel"
//             name="mobile"
//             placeholder="Mobile Number"
//             value={formData.mobile}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="text"
//             name="subject"
//             placeholder="Email Subject"
//             value={formData.subject}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <textarea
//           name="message"
//           placeholder="Your Message"
//           value={formData.message}
//           onChange={handleChange}
//           required
//         />
//         <center><button type="submit" className="bright-button">Send Message</button></center>
//       </form>
//       <div className="social-icons" style={{marginTop:'30px'}}>
//         <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
//           <i className="fab fa-facebook-f"></i>
//         </a>
//         <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//           <i className="fab fa-twitter"></i>
//         </a>
//         <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
//           <i className="fab fa-instagram"></i>
//         </a>
//         <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
//           <i className="fab fa-linkedin-in"></i>
//         </a>
//       </div>

//       <style jsx>{`
//         .contact-container {
//           // background: #1a1a1a;
//           padding: 30px;
//           width: 50%;
//           margin: auto;
//           text-align: center;
//         //   border-radius: 10px;
//         //   box-shadow: 0px 0px 10px rgba(0, 255, 255, 0.3);
//         }
//         h2 {
//           color: white;
//           font-size: 24px;
//           margin-bottom: 20px;
//         }
//         .highlight {
//           color: #A294F9;
//         }
//         form {
//           display: flex;
//           flex-direction: column;
//           gap: 15px;
//         }
//         .input-row {
//           display: flex;
//           gap: 10px;
//         }
//         input, textarea {
//           width: 100%;
//           padding: 10px;
//           border: none;
//           border-radius: 5px;
//           background: #333;
//           color: white;
//           font-size: 16px;
//           height:50px;
//         }
//         textarea {
//           height: 300px;
//           resize: none;
//         }
//         button {
//           background: cyan;
//           color: black;
//           font-size: 16px;
//           border: none;
//           padding: 10px;
//           border-radius: 5px;
//           cursor: pointer;
//           transition: 0.3s;
//           width:200px
//         }
//         button:hover {
//           background: #A294F9;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ContactForm;



// import React, { useState } from "react";
// import emailjs from "emailjs-com";
// import './PageFour.css'

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     mobile: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Send email via EmailJS
//     emailjs
//       .sendForm(
//         'service_6cca8sx',  // Replace with your EmailJS service ID
//         'template_igwgd4q',  // Replace with your EmailJS template ID
//         e.target,            // Pass the entire form
//         'g7SoOHw3pboEPlI79'       // Replace with your EmailJS user ID
//       )
//       .then(
//         (result) => {
//           console.log("Email sent successfully: ", result.text);
//         },
//         (error) => {
//           console.log("Error sending email: ", error.text);
//         }
//       );
//   };

//   return (
//     <div className="contact-container">
//       <h2>
//         Contact <span className="highlight">Me!</span>
//       </h2>
//       <form onSubmit={handleSubmit}>
//         <div className="input-row">
//           <input
//             type="text"
//             name="fullName"
//             placeholder="Full Name"
//             value={formData.fullName}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email Address"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="input-row">
//           <input
//             type="tel"
//             name="mobile"
//             placeholder="Mobile Number"
//             value={formData.mobile}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="text"
//             name="subject"
//             placeholder="Email Subject"
//             value={formData.subject}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <textarea
//           name="message"
//           placeholder="Your Message"
//           value={formData.message}
//           onChange={handleChange}
//           required
//         />
//         <center><button type="submit" className="bright-button">Send Message</button></center>
//       </form>
//       <div className="social-icons" style={{marginTop:'30px'}}>
//         <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
//           <i className="fab fa-facebook-f"></i>
//         </a>
//         <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//           <i className="fab fa-twitter"></i>
//         </a>
//         <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
//           <i className="fab fa-instagram"></i>
//         </a>
//         <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
//           <i className="fab fa-linkedin-in"></i>
//         </a>
//       </div>

//       <style jsx>{`
//         .contact-container {
//           padding: 30px;
//           width: 50%;
//           margin: auto;
//           text-align: center;
//         }
//         h2 {
//           color: white;
//           font-size: 24px;
//           margin-bottom: 20px;
//         }
//         .highlight {
//           color: #A294F9;
//         }
//         form {
//           display: flex;
//           flex-direction: column;
//           gap: 15px;
//         }
//         .input-row {
//           display: flex;
//           gap: 10px;
//         }
//         input, textarea {
//           width: 100%;
//           padding: 10px;
//           border: none;
//           border-radius: 5px;
//           background: #333;
//           color: white;
//           font-size: 16px;
//           height:50px;
//         }
//         textarea {
//           height: 300px;
//           resize: none;
//         }
//         button {
//           background: cyan;
//           color: black;
//           font-size: 16px;
//           border: none;
//           padding: 10px;
//           border-radius: 5px;
//           cursor: pointer;
//           transition: 0.3s;
//           width:200px
//         }
//         button:hover {
//           background: #A294F9;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ContactForm;



// import React, { useState } from "react";
// import emailjs from "emailjs-com";
// import './PageFour.css';

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     mobile: "",
//     subject: "",
//     message: "",
//   });

//   const [showToast, setShowToast] = useState(false); // State for toast visibility

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Send email via EmailJS
//     emailjs
//       .sendForm(
//         'service_6cca8sx',  // Replace with your EmailJS service ID
//         'template_igwgd4q',  // Replace with your EmailJS template ID
//         e.target,            // Pass the entire form
//         'g7SoOHw3pboEPlI79'  // Replace with your EmailJS user ID
//       )
//       .then(
//         (result) => {
//           console.log("Email sent successfully: ", result.text);

//           // Clear the form fields after successful submission
//           setFormData({
//             fullName: "",
//             email: "",
//             mobile: "",
//             subject: "",
//             message: "",
//           });

//           // Show the toast message
//           setShowToast(true);

//           // Hide the toast message after 3 seconds
//           setTimeout(() => {
//             setShowToast(false);
//           }, 3000);
//         },
//         (error) => {
//           console.log("Error sending email: ", error.text);
//         }
//       );
//   };

//   return (
//     <div className="contact-container">
//       <h2>
//         Contact <span className="highlight">Me!</span>
//       </h2>

//       {/* Toast Notification */}
//       {showToast && (
//         <div className="toast">

//           Message Sent!
//         </div>
//       )}

//       <form onSubmit={handleSubmit}>
//         <div className="flexbox">
//           <div className="input-row">
//             <input
//               type="text"
//               name="fullName"
//               placeholder="Full Name"
//               value={formData.fullName}
//               onChange={handleChange}
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email Address"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="input-row">
//             <input
//               type="tel"
//               name="mobile"
//               placeholder="Mobile Number"
//               value={formData.mobile}
//               onChange={handleChange}
//               required
//             />
//             <input
//               type="text"
//               name="subject"
//               placeholder="Email Subject"
//               value={formData.subject}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <textarea
//             name="message"
//             placeholder="Your Message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <center>
//           <button type="submit" className="bright-button">Send Message</button>
//         </center>
//       </form>

//       <div className="social-icons" style={{ marginTop: '30px' }}>
//         <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
//           <i className="fab fa-facebook-f"></i>
//         </a>
//         <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//           <i className="fab fa-twitter"></i>
//         </a>
//         <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
//           <i className="fab fa-instagram"></i>
//         </a>
//         <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
//           <i className="fab fa-linkedin-in"></i>
//         </a>
//       </div>

//       <style jsx>{`
//         .contact-container {
//           padding: 30px;
//           width: 50%;
//           margin: auto;
//           text-align: center;
//         }
//         h2 {
//           color: white;
//           font-size: 24px;
//           margin-bottom: 20px;
//         }
//         .highlight {
//           color: #A294F9;
//         }
//         form {
//           display: flex;
//           flex-direction: column;
//           gap: 15px;
//         }
//         .input-row {
//           display: flex;
//           gap: 10px;
//         }
//         input, textarea {
//           width: 100%;
//           padding: 10px;
//           border: none;
//           border-radius: 5px;
//           background: #333;
//           color: white;
//           font-size: 16px;
//           height:50px;
//         }
//         textarea {
//           height: 300px;
//           resize: none;
//         }

//         /* Toast Notification */
//         .toast {
//           position: fixed;
//           top: 10px;
//           right: 20px;
//           background-color: #000; /* Black color for remaining part */
//           color: white;
//           padding: 10px 20px;
//           border-radius: 5px;
//           font-size: 16px;
//           z-index: 1000;
//           display: flex;
//           align-items: center;
//           border: 2px solid #A294F9; /* Border color */
//         }

//         .toast::before {
//           content: "";
//           display: block;
//           width: 5%;
//           height: 100%;
//           background-color: #A294F9; /* Left side color */
//           border-radius: 5px 0 0 5px; /* Round the left side */
//         }
//         /* Animation for toast fade-out */
//         @keyframes fadeOut {
//           0% {
//             opacity: 1;
//           }
//           80% {
//             opacity: 1;
//           }
//           100% {
//             opacity: 0;
//             transform: translateY(-10px);
//           }
//       }
//       `}</style>
//     </div>
//   );
// };

// export default ContactForm;





// import React, { useState } from "react";
// import emailjs from "emailjs-com";
// import './PageFour.css';

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     mobile: "",
//     subject: "",
//     message: "",
//   });

//   const [showToast, setShowToast] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         'service_6cca8sx',
//         'template_igwgd4q',
//         e.target,
//         'g7SoOHw3pboEPlI79'
//       )
//       .then(
//         (result) => {
//           console.log("Email sent successfully: ", result.text);

//           setFormData({
//             fullName: "",
//             email: "",
//             mobile: "",
//             subject: "",
//             message: "",
//           });

//           setShowToast(true);

//           setTimeout(() => {
//             setShowToast(false);
//           }, 3000);
//         },
//         (error) => {
//           console.log("Error sending email: ", error.text);
//         }
//       );
//   };

//   return (
//     <div className="contact-container">
//       <h2>
//         Contact <span className="highlight">Me!</span>
//       </h2>

//       {showToast && <div className="toast">Message Sent!</div>}

//       <form onSubmit={handleSubmit}>
//         <div className="input-group">
//           <input
//             type="text"
//             name="fullName"
//             placeholder="Full Name"
//             value={formData.fullName}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email Address"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="input-group">
//           <input
//             type="tel"
//             name="mobile"
//             placeholder="Mobile Number"
//             value={formData.mobile}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="text"
//             name="subject"
//             placeholder="Email Subject"
//             value={formData.subject}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <textarea
//           name="message"
//           placeholder="Your Message"
//           value={formData.message}
//           onChange={handleChange}
//           required
//         />
//         <center><button type="submit" className="bright-button">Send Message</button></center>
//       </form>

//       <div className="social-icons">
//         <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
//           <i className="fab fa-facebook-f"></i>
//         </a>
//         <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//           <i className="fab fa-twitter"></i>
//         </a>
//         <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
//           <i className="fab fa-instagram"></i>
//         </a>
//         <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
//           <i className="fab fa-linkedin-in"></i>
//         </a>
//       </div>

//       <style jsx>{`
//         .contact-container {
//           padding: 30px;
//           width: 90%;
//           max-width: 900px;
//           margin: auto;
//           text-align: center;
//         }
//         h2 {
//           color: white;
//           font-size: 24px;
//           margin-bottom: 20px;
//         }
//         .highlight {
//           color: #A294F9;
//         }
//         form {
//           display: flex;
//           flex-direction: column;
//           gap: 15px;
//         }
//         .input-group {
//           display: flex;
//           flex-direction: column;
//           gap: 10px;
//         }
//         @media (min-width: 600px) {
//           .input-group {
//             flex-direction: row;
//           }
//           input,textarea{
//             width:100px
//           }
//         }
//         input{
//          height:50px;

//         }
//         input, textarea {
//           width: 100%;
//           padding: 10px;
//           border: none;
//           border-radius: 5px;
//           background: #333;
//           color: white;
//           font-size: 16px;
//         }
//         textarea {
//           height: 180px;
//           resize: none;
//         }
//         .bright-button {
//           background-color: #A294F9;
//           color: white;
//           padding: 10px;
//           border: none;
//           border-radius: 5px;
//           cursor: pointer;
//           font-size: 18px;
//         }
//         .social-icons {
//           display: flex;
//           justify-content: center;
//           gap: 15px;
//           margin-top: 20px;
//         }
//         .social-icons a {
//           color: white;
//           font-size: 24px;
//         }
//         .toast {
//           position: fixed;
//           top: 10px;
//           right: 20px;
//           background-color: black;
//           color: white;
//           padding: 10px 20px;
//           border-radius: 5px;
//           font-size: 16px;
//           z-index: 1000;
//           border: 2px solid #A294F9;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ContactForm;




// import React, { useState } from "react";
// import emailjs from "emailjs-com";
// import './PageFour.css';

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     mobile: "",
//     subject: "",
//     message: "",
//   });

//   const [showToast, setShowToast] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         'service_6cca8sx',
//         'template_igwgd4q',
//         e.target,
//         'g7SoOHw3pboEPlI79'
//       )
//       .then(
//         () => {
//           setFormData({
//             fullName: "",
//             email: "",
//             mobile: "",
//             subject: "",
//             message: "",
//           });

//           setShowToast(true);
//           setTimeout(() => setShowToast(false), 3000);
//         },
//         (error) => console.log("Error sending email: ", error.text)
//       );
//   };

//   return (
//     <div className="contact-wrapper">
//       <div className="contact-box">
//         {/* Left Section */}
//         <div className="left-section">
//           <h2>Let's <span className="highlight">Connect</span></h2>
//           <div className="social-icons">
//             <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
//               <i className="fab fa-facebook-f"></i>
//             </a>
//             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//               <i className="fab fa-twitter"></i>
//             </a>
//             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
//               <i className="fab fa-instagram"></i>
//             </a>
//             <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
//               <i className="fab fa-linkedin-in"></i>
//             </a>
//           </div>
//           <button className="resume-btn">Download Resume</button>
//         </div>

//         {/* Right Section */}
//         <div className="right-section">
//           <h2>Contact <span className="highlight">Me!</span></h2>
//           {showToast && <div className="toast">Message Sent!</div>}

//           <form onSubmit={handleSubmit}>
//             <div className="input-group">
//               <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
//               <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
//             </div>
//             <div className="input-group">
//               <input type="tel" name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleChange} required />
//               <input type="text" name="subject" placeholder="Email Subject" value={formData.subject} onChange={handleChange} required />
//             </div>
//             <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
//             <button type="submit" className="bright-button">Send Message</button>
//           </form>
//         </div>
//       </div>

//       <style jsx>{`
//         .contact-wrapper {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           height: 100vh;
//           background-color: #121212;
//           padding: 20px;
//         }

//         .contact-box {
//           display: flex;
//           flex-wrap: wrap;
//           max-width: 900px;
//           width: 100%;
//           background: #222;
//           padding: 40px;
//           border-radius: 20px;
//           box-shadow: 0 4px 10px rgba(255, 255, 255, 0.1);
//         }

//         .left-section, .right-section {
//           flex: 1;
//           padding: 20px;
//           text-align: center;
//         }

//         .left-section {
//           border-right: 2px solid #444;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//         }

//         h2 {
//           color: white;
//           font-size: 24px;
//         }

//         .highlight {
//           color: #A294F9;
//         }

//         .social-icons {
//           display: flex;
//           justify-content: center;
//           gap: 15px;
//           margin: 15px 0;
//         }

//         .social-icons a {
//           color: white;
//           font-size: 24px;
//           transition: 0.3s;
//         }

//         .social-icons a:hover {
//           color: #A294F9;
//         }

//         .resume-btn {
//           background: #A294F9;
//           color: white;
//           padding: 10px 20px;
//           font-size: 16px;
//           border: none;
//           border-radius: 5px;
//           cursor: pointer;
//           transition: 0.3s;
//         }

//         .resume-btn:hover {
//           background: #8a7ee8;
//         }

//         .right-section {
//           text-align: center;
//         }

//         .input-group {
//           display: flex;
//           gap: 10px;
//         }

//         input, textarea {
//           width: 100%;
//           padding: 10px;
//           border: none;
//           border-radius: 5px;
//           background: #333;
//           color: white;
//           font-size: 16px;
//         }

//         textarea {
//           height: 150px;
//           resize: none;
//         }

//         .bright-button {
//           width: 100%;
//           padding: 12px;
//           border: none;
//           background: #A294F9;
//           color: white;
//           font-size: 16px;
//           border-radius: 5px;
//           cursor: pointer;
//           margin-top: 10px;
//           transition: 0.3s;
//         }

//         .bright-button:hover {
//           background: #8a7ee8;
//         }

//         .toast {
//           position: fixed;
//           top: 10px;
//           right: 20px;
//           background-color: #000;
//           color: white;
//           padding: 10px 20px;
//           border-radius: 5px;
//           font-size: 16px;
//           z-index: 1000;
//           border: 2px solid #A294F9;
//         }

//         @media (max-width: 768px) {
//           .contact-box {
//             flex-direction: column;
//           }
//           .left-section {
//             border-right: none;
//             border-bottom: 2px solid #444;
//             margin-bottom: 20px;
//           }
//           .input-group {
//             flex-direction: column;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ContactForm;




// import React, { useState } from "react";
// import emailjs from "emailjs-com";
// import './PageFour.css'

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     mobile: "",
//     subject: "",
//     message: "",
//   });

//   const [showToast, setShowToast] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_6cca8sx",
//         "template_igwgd4q",
//         e.target,
//         "g7SoOHw3pboEPlI79"
//       )
//       .then(
//         (result) => {
//           console.log("Email sent successfully: ", result.text);
//           setFormData({
//             fullName: "",
//             email: "",
//             mobile: "",
//             subject: "",
//             message: "",
//           });

//           setShowToast(true);
//           setTimeout(() => {
//             setShowToast(false);
//           }, 3000);
//         },
//         (error) => {
//           console.log("Error sending email: ", error.text);
//         }
//       );
//   };

//   return (
//     <div className="contact-wrapper">
//       <div className="contact-box">
//         <div className="left-box">
//           <div className="vertical-text">
//             <span className="word">Let's</span>
//             <span className="word1">Connect</span>
//           </div>
//           <div className="social-icons">
//             <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
//               <i className="fab fa-facebook-f"></i>
//             </a>
//             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//               <i className="fab fa-twitter"></i>
//             </a>
//             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
//               <i className="fab fa-instagram"></i>
//             </a>
//             <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
//               <i className="fab fa-linkedin-in"></i>
//             </a>
//           </div>
//           <button className="bright-button1">Download Resume</button>
//         </div>

//         <div className="right-box">
//           <h2>
//             Contact <span className="highlight">Me!</span>
//           </h2>

//           {showToast && <div className="toast">Message Sent!</div>}

//           <form onSubmit={handleSubmit}>
//             <div className="input-group">
//               <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
//               <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
//             </div>
//             <div className="input-group">
//               <input type="tel" name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleChange} required />
//               <input type="text" name="subject" placeholder="Email Subject" value={formData.subject} onChange={handleChange} required />
//             </div>
//             <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
//             <center><button type="submit" className="bright-button">Send Message</button></center>
//           </form>
//         </div>
//       </div>
//       <style jsx>{`


//          .contact-wrapper {
//           display: flex;
//            justify-content: center;
//            align-items: center;
//            height: 100vh;
//            background-color: #121212;
//            padding: 20px;
//          }

//         .contact-box {
//           display: flex;
//           flex-direction: row;
//           background: #181818;
//           padding: 40px;
//           border-radius: 15px;
//           max-width: 1000px;
//           width:100%;
//           margin: auto;
//           box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.1);
//         }

//         .left-box, .right-box {
//           flex: 1;
//           text-align: center;
//           padding: 20px;
//         }

//         .left-box {
//           border-right: 2px solid rgba(255, 255, 255, 0.1);

//         }

//       .vertical-text {
//       display: flex;
//       flex-direction: column;
//       font-size: 60px;
//       font-weight: bold;
//       text-align: center;
//       margin-bottom: 20px;
//       text-transform: uppercase;
//     }

//     .word {
//       line-height: 1.8;
//       color: #A294F9;
//     }
//     .word1{
//     line-height:1.8;
//     color:white}

//         h2 {
//           color: white;
//           font-size: 32px;
//           margin-bottom: 20px;
//         }

//         .highlight {
//           color: #A294F9;
//         }

//         .social-icons {
//           display: flex;
//           justify-content: center;
//           gap: 15px;
//           margin-bottom: 20px;
//         }

//         .social-icons a {
//           color: white;
//           font-size: 24px;
//           transition: transform 0.3s ease, box-shadow 0.3s ease;
//         }

//         .social-icons a:hover {
//           transform: scale(1.1);
//           box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.2);
//         }


//         form {
//           display: flex;
//           flex-direction: column;
//           gap: 15px;
//         }

//         .input-group {
//           display: flex;
//           gap: 10px;
//         }

//         input, textarea {
//           width: 100%;
//           padding: 12px;
//           border: none;
//           border-radius: 5px;
//           background: #333;
//           color: white;
//           font-size: 16px;
//         }

//         textarea {
//           height: 120px;
//           resize: none;
//         }

//         .bright-button {
//           background-color: #A294F9;
//           color: white;
//           padding: 12px;
//           border: none;
//           border-radius: 5px;
//           cursor: pointer;
//           font-size: 18px;
//           transition: all 0.3s ease;
//         }

//         .bright-button:hover {
//           background: #8b7ff2;
//           transform: scale(1.05);
//         }

//         .toast {
//           position: fixed;
//           top: 10px;
//           right: 20px;
//           background-color: black;
//           color: white;
//           padding: 10px 20px;
//           border-radius: 5px;
//           font-size: 16px;
//           z-index: 1000;
//           border: 2px solid #A294F9;
//           opacity: 0.9;
//         }

//         @media (max-width: 768px) {
//           .contact-box {
//             flex-direction: column;
//             text-align: center;
//           }

//           .left-box {
//             border-right: none;
//             border-bottom: 2px solid rgba(255, 255, 255, 0.1);
//             padding-bottom: 20px;
//           }

//           .input-group {
//             flex-direction: column;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ContactForm;



// import React, { useState } from "react";
// import emailjs from "emailjs-com";
// import "./PageFour.css";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const [showToast, setShowToast] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_6cca8sx",
//         "template_igwgd4q",
//         e.target,
//         "g7SoOHw3pboEPlI79"
//       )
//       .then(
//         (result) => {
//           console.log("Email sent successfully: ", result.text);
//           setFormData({
//             fullName: "",
//             email: "",
//             message: "",
//           });
//           setShowToast(true);
//           setTimeout(() => setShowToast(false), 3000);
//         },
//         (error) => {
//           console.log("Error sending email: ", error.text);
//         }
//       );
//   };

//   return (
//     <div className="contact-wrapper">
//       <div className="contact-box">
//         {/* Left Section */}
//         <div className="left-box">
//           <div className={`vertical-text`}>
//             <span className="word">Let's</span>
//             <span className="word1">Connect</span>
//           </div>
//           <div className="social-icons">
//             <a
//               href="https://facebook.com"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <i className="fab fa-facebook-f"></i>
//             </a>
//             <a
//               href="https://twitter.com"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <i className="fab fa-twitter"></i>
//             </a>
//             <a
//               href="https://instagram.com"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <i className="fab fa-instagram"></i>
//             </a>
//             <a
//               href="https://linkedin.com"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <i className="fab fa-linkedin-in"></i>
//             </a>
//           </div>
//           <a href="Resume.pdf"
//             download="Sravya_Resume.pdf"><button className="bright-button1">Download Resume</button></a>
//         </div>

//         {/* Right Section */}
//         <div className="right-box">
//           {showToast && <div className="toast">Message Sent!</div>}

//           <form onSubmit={handleSubmit}>
//             <div className="input-group">
//               <input
//                 type="text"
//                 name="fullName"
//                 placeholder="Full Name"
//                 value={formData.fullName}
//                 onChange={handleChange}
//                 required
//               />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email Address"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <input
//               type="text"
//               name="subject"
//               placeholder="Email Subject"
//               value={formData.subject}
//               onChange={handleChange}
//               required />
//             <textarea
//               name="message"
//               placeholder="Your Message"
//               value={formData.message}
//               onChange={handleChange}
//               required
//             />

//             <center>
//               <button type="submit" className="bright-button" style={{ marginTop: 15 }}>
//                 Send Message
//               </button>
//             </center>
//           </form>
//         </div>
//       </div>

//       {/* Inline styling for convenience, can remain in PageFour.css */}
//       <style jsx>{`
//         .contact-wrapper {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           height: 100vh;
//           background-color: #1A1A1D;
//           padding: 20px;

//         }

//         .contact-box {
//           display: flex;
//           flex-direction: row;
//           background: #181818;
//           padding: 40px;
//           border-radius: 15px;
//           max-width: 1000px;
//           width: 100%;
//           margin: auto;
//           box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.1);
//         }

//         .left-box,
//         .right-box {
//           flex: 1;
//           text-align: center;
//           padding: 20px;
//         }

//         .left-box {
//           border-right: 2px solid rgba(255, 255, 255, 0.1);
//         }

//         .vertical-text {
//           display: flex;
//           flex-direction: column;
//           font-size: 60px;
//           font-weight: bold;
//           text-align: center;
//           margin-bottom: 20px;
//           text-transform: uppercase;
//         }

//         .word {
//           line-height: 1.6;
//           color: #a294f9;
//         }

//         .word1 {
//           line-height: 1.6;
//           color: white;
//         }

//         .social-icons {
//           display: flex;
//           justify-content: center;
//           gap: 15px;
//           margin-bottom: 20px;
//         }

//         .social-icons a {
//           color: white;
//           font-size: 24px;
//           transition: transform 0.3s ease, box-shadow 0.3s ease;
//         }

//         .social-icons a:hover {
//           transform: scale(1.1);
//           box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.2);
//         }

//         .bright-button1 {
//           background-color: #a294f9;
//           color: white;
//           padding: 12px;
//           border: none;
//           border-radius: 5px;
//           cursor: pointer;
//           font-size: 18px;
//           transition: all 0.3s ease;
//         }

//         .bright-button1:hover {
//           background: #8b7ff2;
//           transform: scale(1.05);
//         }

//         .right-box form {
//           display: flex;
//           flex-direction: column;
//           gap: 15px;
//         }

//         .input-group {
//           display: flex;
//           flex-direction:column;
//           gap: 20px;
//         }

//         input,
//         textarea {
//           width: 100%;
//           padding: 12px;
//           border: none;
//           border-radius: 5px;
//           background: #333;
//           color: white;
//           font-size: 16px;
//         }

//         textarea {
//           height: 120px;
//           resize: none;
//           margin-top:15px
//         }

//         .bright-button {
//           background-color: #a294f9;
//           color: white;
//           padding: 12px;
//           border: none;
//           border-radius: 5px;
//           cursor: pointer;
//           font-size: 18px;
//           transition: all 0.3s ease;
//         }

//         .bright-button:hover {
//           background: #8b7ff2;
//           transform: scale(1.05);
//         }

//         .toast {
//           position: fixed;
//           top: 10px;
//           right: 20px;
//           background-color: black;
//           color: white;
//           padding: 10px 20px;
//           border-radius: 5px;
//           font-size: 16px;
//           z-index: 1000;
//           border: 2px solid #a294f9;
//           opacity: 0.9;
//         }

//         @media (max-width: 768px) {
//           .contact-box {
//             flex-direction: column;
//             text-align: center;
//           }

//           .left-box {
//             border-right: none;
//             border-bottom: 2px solid rgba(255, 255, 255, 0.1);
//             padding-bottom: 20px;
//           }

//           .input-group {
//             flex-direction: column;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ContactForm;





// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import emailjs from "emailjs-com";
// import "./PageFour.css";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const [showToast, setShowToast] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_6cca8sx",
//         "template_igwgd4q",
//         e.target,
//         "g7SoOHw3pboEPlI79"
//       )
//       .then(
//         (result) => {
//           console.log("Email sent successfully: ", result.text);
//           setFormData({
//             fullName: "",
//             email: "",
//             message: "",
//           });
//           setShowToast(true);
//           setTimeout(() => setShowToast(false), 3000);
//         },
//         (error) => {
//           console.log("Error sending email: ", error.text);
//         }
//       );
//   };

//   return (
//     <motion.div
//       className="contact-wrapper"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       <motion.div
//         className="contact-box"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, ease: "easeOut" }}
//       >
//         {/* Left Section */}
//         <motion.div
//           className="left-box"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
//         >
//           <div className="vertical-text">
//             <span className="word">Let's</span>
//             <span className="word1">Connect</span>
//           </div>
//           <div className="social-icons">
//             <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
//               <i className="fab fa-facebook-f"></i>
//             </a>
//             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//               <i className="fab fa-twitter"></i>
//             </a>
//             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
//               <i className="fab fa-instagram"></i>
//             </a>
//             <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
//               <i className="fab fa-linkedin-in"></i>
//             </a>
//           </div>
//           <a href="Resume.pdf" download="Sravya_Resume.pdf">
//             <button className="bright-button1">Download Resume</button>
//           </a>
//         </motion.div>

//         {/* Right Section */}
//         <motion.div
//           className="right-box"
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
//         >
//           {showToast && <div className="toast">Message Sent!</div>}

//           <form onSubmit={handleSubmit}>
//             <div className="input-group">
//               <input
//                 type="text"
//                 name="fullName"
//                 placeholder="Full Name"
//                 value={formData.fullName}
//                 onChange={handleChange}
//                 required
//               />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email Address"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <input
//               type="text"
//               name="subject"
//               placeholder="Email Subject"
//               value={formData.subject}
//               onChange={handleChange}
//               required
//             />
//             <textarea
//               name="message"
//               placeholder="Your Message"
//               value={formData.message}
//               onChange={handleChange}
//               required
//             />

//             <center>
//               <button type="submit" className="bright-button" style={{ marginTop: 15 }}>
//                 Send Message
//               </button>
//             </center>
//           </form>
//         </motion.div>
//       </motion.div>
//       <style jsx>{`
//         .contact-wrapper {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           height: 100vh;
//           background-color: #1A1A1D;
//           padding: 20px;
          
//         }

//         .contact-box {
//           display: flex;
//           flex-direction: row;
//           background: #181818;
//           padding: 40px;
//           border-radius: 15px;
//           max-width: 1000px;
//           width: 100%;
//           margin: auto;
//           box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.1);
//         }

//         .left-box,
//         .right-box {
//           flex: 1;
//           text-align: center;
//           padding: 20px;
//         }

//         .left-box {
//           border-right: 2px solid rgba(255, 255, 255, 0.1);
//         }

//         .vertical-text {
//           display: flex;
//           flex-direction: column;
//           font-size: 60px;
//           font-weight: bold;
//           text-align: center;
//           margin-bottom: 20px;
//           text-transform: uppercase;
//         }

//         .word {
//           line-height: 1.6;
//           color: #a294f9;
//         }

//         .word1 {
//           line-height: 1.6;
//           color: white;
//         }

//         .social-icons {
//           display: flex;
//           justify-content: center;
//           gap: 15px;
//           margin-bottom: 20px;
//         }

//         .social-icons a {
//           color: white;
//           font-size: 24px;
//           transition: transform 0.3s ease, box-shadow 0.3s ease;
//         }

//         .social-icons a:hover {
//           transform: scale(1.1);
//           box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.2);
//         }

//         .bright-button1 {
//           background-color: #a294f9;
//           color: white;
//           padding: 12px;
//           border: none;
//           border-radius: 5px;
//           cursor: pointer;
//           font-size: 18px;
//           transition: all 0.3s ease;
//         }

//         .bright-button1:hover {
//           background: #8b7ff2;
//           transform: scale(1.05);
//         }

//         .right-box form {
//           display: flex;
//           flex-direction: column;
//           gap: 15px;
//         }

//         .input-group {
//           display: flex;
//           flex-direction:column;
//           gap: 20px;
//         }

//         input,
//         textarea {
//           width: 100%;
//           padding: 12px;
//           border: none;
//           border-radius: 5px;
//           background: #333;
//           color: white;
//           font-size: 16px;
//         }

//         textarea {
//           height: 120px;
//           resize: none;
//           margin-top:15px
//         }

//         .bright-button {
//           background-color: #a294f9;
//           color: white;
//           padding: 12px;
//           border: none;
//           border-radius: 5px;
//           cursor: pointer;
//           font-size: 18px;
//           transition: all 0.3s ease;
//         }

//         .bright-button:hover {
//           background: #8b7ff2;
//           transform: scale(1.05);
//         }

//         .toast {
//           position: fixed;
//           top: 10px;
//           right: 20px;
//           background-color: black;
//           color: white;
//           padding: 10px 20px;
//           border-radius: 5px;
//           font-size: 16px;
//           z-index: 1000;
//           border: 2px solid #a294f9;
//           opacity: 0.9;
//         }

//         @media (max-width: 768px) {
//           .contact-box {
//             flex-direction: column;
//             text-align: center;
//           }

//           .left-box {
//             border-right: none;
//             border-bottom: 2px solid rgba(255, 255, 255, 0.1);
//             padding-bottom: 20px;
//           }

//           .input-group {
//             flex-direction: column;
//           }
//         }
//       `}</style>
//     </motion.div>
//   );
// };

// export default ContactForm;



import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "emailjs-com";
import "./PageFour.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [showToast, setShowToast] = useState(false);

  // Ref for the section
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6cca8sx",
        "template_igwgd4q",
        e.target,
        "g7SoOHw3pboEPlI79"
      )
      .then(
        (result) => {
          console.log("Email sent successfully: ", result.text);
          setFormData({
            fullName: "",
            email: "",
            subject: "",
            message: "",
          });
          setShowToast(true);
          setTimeout(() => setShowToast(false), 3000);
        },
        (error) => {
          console.log("Error sending email: ", error.text);
        }
      );
  };

  return (
    <motion.div
      ref={ref}
      className="contact-wrapper"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.div
        className="contact-box"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Left Section */}
        <motion.div
          className="left-box"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <div className="vertical-text">
            <span className="word">Let's</span>
            <span className="word1">Connect</span>
          </div>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <a href="Resume.pdf" download="Sravya_Resume.pdf">
            <button className="bright-button1">Download Resume</button>
          </a>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="right-box"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          {showToast && <div className="toast">Message Sent!</div>}

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Email Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <center>
              <button type="submit" className="bright-button1" style={{ marginTop: 15 }}>
                Send Message
              </button>
            </center>
          </form>
        </motion.div>
      </motion.div>
      <style jsx>{`
        .contact-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          // background-color: #1A1A1D;
          background:linear-gradient(to right, #1A1A1D, #191970);
          padding: 20px;
          
        }

        .contact-box {
          display: flex;
          flex-direction: row;
          background: #181818;
          padding: 40px;
          border-radius: 15px;
          max-width: 1000px;
          width: 100%;
          margin: auto;
          box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.1);
        }

        .left-box,
        .right-box {
          flex: 1;
          text-align: center;
          padding: 20px;
        }

        .left-box {
          border-right: 2px solid rgba(255, 255, 255, 0.1);
        }

        .vertical-text {
          display: flex;
          flex-direction: column;
          font-size: 60px;
          font-weight: bold;
          text-align: center;
          margin-bottom: 20px;
          text-transform: uppercase;
        }

        .word {
          line-height: 1.6;
          color: #87CEEB;
        }

        .word1 {
          line-height: 1.6;
          color: white;
        }

        .social-icons {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-bottom: 20px;
        }

        .social-icons a {
          color: white;
          font-size: 24px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .social-icons a:hover {
          transform: scale(1.1);
          box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.2);
        }

        .bright-button1 {
          background-color: #87CEEB;
          color: white;
          padding: 12px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 18px;
          transition: all 0.3s ease;
        }

        .bright-button1:hover {
          background: #87CEEB;
          transform: scale(1.05);
        }

        .right-box form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .input-group {
          display: flex;
          flex-direction:column;
          gap: 20px;
        }

        input,
        textarea {
          width: 100%;
          padding: 12px;
          border: none;
          border-radius: 5px;
          background: #333;
          color: white;
          font-size: 16px;
        }

        textarea {
          height: 120px;
          resize: none;
          margin-top:15px
        }

        .bright-button1 {
          background-color: #87CEEB;
          color: white;
          padding: 12px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 18px;
          transition: all 0.3s ease;
        }

        .bright-button:hover {
          background: #87CEEB;
          transform: scale(1.05);
        }

        .toast {
          position: fixed;
          top: 10px;
          right: 20px;
          background-color: black;
          color: white;
          padding: 10px 20px;
          border-radius: 5px;
          font-size: 16px;
          z-index: 1000;
          border: 2px solid #87CEEB;
          opacity: 0.9;
        }

        @media (max-width: 768px) {
          .contact-box {
            flex-direction: column;
            text-align: center;
          }

          .left-box {
            border-right: none;
            border-bottom: 2px solid rgba(255, 255, 255, 0.1);
            padding-bottom: 20px;
          }

          .input-group {
            flex-direction: column;
          }
        }
        
      `}</style>
    </motion.div>
  );
};

export default ContactForm;
