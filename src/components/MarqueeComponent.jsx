import React from 'react';
import { motion } from 'framer-motion';
import './MarqueeComponent.css'; // Optional, if you want to style the container

const skills = [
  '  Web Developer  ',
  ' UI/UX Designer  ',
  ' Full Stack Developer  ',
  ' React Developer  ',
  ' Graphic Designer  ',
  ' MERN Stack  '  ,
  ' JavaScript Enthusiast  '  ,
  ' Creative Thinker  ',
  ' Team Leader ',
  ' Smart India Hackathon '
];

const MarqueeComponent = () => {
  return (
    <div className="marquee-container">
      <motion.div
  className="marquee"
  animate={{ x: ['50%', '-100%'] }}  // Start closer to the visible area at 50% instead of 100%
  transition={{
    duration: 30,  // Adjust to control the speed (30 seconds for slower movement)
    ease: 'linear',
    repeat: Infinity
  }}
>
  {skills.map((skill, index) => (
    <span key={index} className="marquee-item">{skill}</span>
  ))}
</motion.div>
    </div>
  );
};

export default MarqueeComponent;  