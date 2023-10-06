import React from 'react';
import { motion } from 'framer-motion';
import pic from "../Images/profilepic.jpg"
// import pp from "../Images/on.avif"

function Introduction() {
  return (
    <div className="introduction">
      <motion.div
        className="profile-pic"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.05, rotate: 360 }} 
      >
        <img src={pic} alt="Profile" />
      </motion.div>
      <motion.div
        className="intro-text"
        // initial={{ opacity: 0, x: -50 }}
        // animate={{ opacity: 1, x: 0 }}
        // transition={{ duration: 1, delay: 0.4 }}
        // whileHover={{ x: 40, y: -8 }} 
      >
        <h2>Hey, I'm Garima Yadav</h2>
        <pre style={{ fontSize: '16px', fontFamily: 'monospace' }}>
            {`I am a backend developer with expertise in Node.js.
I have experience in building scalable, secure and reliable web applications
using various frameworks and technologies. 
I enjoy solving complex problems and learning new skills. 
I am passionate about creating high-quality code 
that follows best practices and industry standards. 
I am always looking for new challenges and opportunities to grow as a developer.  


HAVE FUN with Photo 👽 ! 
            `}
        </pre>
      </motion.div>
       

    {/* <div className='intro-gif'>
        <img src={pp} alt="Profile" />
    </div> */}
    
    </div>
  );
}

export default Introduction;
