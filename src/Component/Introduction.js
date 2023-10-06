import React from 'react';
import { motion } from 'framer-motion';
import pic from "../Images/profilepic.jpg"

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
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        whileHover={{ x: 40, y: -8 }} 
      >
        <h2>Hello, I'm Garima Yadav</h2>
        <pre style={{ fontSize: '16px', fontFamily: 'monospace' }}>
            {`
                A Full-Stack Developer 
                passionate about creating web applications.
                
                HAVE FUN ! 
            `}
        </pre>
      </motion.div>
    </div>
  );
}

export default Introduction;
