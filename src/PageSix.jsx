// import React from 'react';

// const certifications = [
//     { number: '1', name: 'Oracle Java Certification', downloadLink: 'javaoracle.pdf' },
//     { number: '2', name: 'IT specialist HTML,CSS', downloadLink: 'htmlandcss.jpeg' },
//     { number: '3', name: 'NPTEL DBMS Certification', downloadLink: 'dbmsnptel.pdf' },
//     { number: '4', name: 'Red Hat Certified System Administrator', downloadLink: 'rhcsa.pdf' },
//     { number: '5', name: 'Cisco C Certification', downloadLink: 'ciscoc.pdf' },
//     { number: '6', name: 'Hacker Rank JS Certification', downloadLink: 'hackerrankjs.pdf' },
// ];

// const Certifications = () => {
//     return (
//         <div style={{display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#1A1A1D"}}>
//             <div style={{ backgroundColor: '#1A1A1D', color: 'white', padding: '20px', width: 1300 }}>
//                 <center><h2 className='gupter-bold'>Certifications</h2></center>
//                 {certifications.map((cert, index) => (
//                     <div key={cert.number} style={{ marginBottom: '20px' }} className='gupter-regular1'>
//                         <div style={{ display: 'flex', alignItems: 'center' }}>
//                             <span style={{ marginRight: '20px' }}>{cert.number}</span>
//                             <span style={{ flex: 1 }}>{cert.name}</span>
//                             <a
//                                 href={cert.downloadLink}
//                                 download
//                                 style={{
//                                     color: 'white',
//                                     backgroundColor: '#A294F9',
//                                     padding: '5px 10px',
//                                     textDecoration: 'none',
//                                     borderRadius: '5px',
//                                 }}
//                             >
//                                 Download
//                             </a>
//                         </div>
//                         {index < certifications.length - 1 && (
//                             <hr style={{
//                                 borderColor: '#8a4bf6',
//                                 marginTop: '40px',
//                                 borderWidth: '1px',
//                                 borderStyle: 'solid',
//                                 boxShadow: '0 0 3px 1px #A294F9', // Glow effect
//                               }} />
//                         )}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Certifications;



import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const certifications = [
    { number: '1', name: 'Oracle Java Certification', downloadLink: 'javaoracle.pdf' },
    { number: '2', name: 'IT specialist HTML,CSS', downloadLink: 'htmlandcss.jpeg' },
    { number: '3', name: 'NPTEL DBMS Certification', downloadLink: 'dbmsnptel.pdf' },
    { number: '4', name: 'Red Hat Certified System Administrator', downloadLink: 'rhcsa.pdf' },
    { number: '5', name: 'Cisco C Certification', downloadLink: 'ciscoc.pdf' },
    { number: '6', name: 'Hacker Rank JS Certification', downloadLink: 'hackerrankjs.pdf' },
];

const Certifications = () => {
    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", background:"linear-gradient(to right, #1A1A1D, #191970)" }}>
            <div style={{ color: 'white', padding: '20px', width: 1300 }}>
                <center><h2 className='merriweather-black'>Certifications</h2></center>
                {certifications.map((cert, index) => {
                    const ref = useRef(null);
                    const isInView = useInView(ref, { once: true });

                    return (
                        <motion.div
                            key={cert.number}
                            ref={ref}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            style={{ marginBottom: '20px',fontSize:22 }}
                            className='cabin'
                        >
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <span style={{ marginRight: '20px' }}>{cert.number}</span>
                                <span style={{ flex: 1 }}>{cert.name}</span>
                                <a
                                    href={cert.downloadLink}
                                    download
                                    style={{
                                        color: 'white',
                                        backgroundColor: '#87CEEB',
                                        padding: '5px 10px',
                                        textDecoration: 'none',
                                        borderRadius: '1px',
                                    }}
                                >
                                    Download
                                </a>
                            </div>
                            {index < certifications.length - 1 && (
                                <hr style={{
                                    borderColor: "white",
                                    marginTop: '40px',
                                    borderWidth: '1px',
                                    borderStyle: 'solid',
                                    boxShadow: '0 0 3px 1px #87CEEB', // Glow effect
                                }} />
                            )}
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default Certifications;
