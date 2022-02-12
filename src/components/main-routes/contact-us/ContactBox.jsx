import { motion } from 'framer-motion';
import React from 'react';

const ContactBox = ({
  transitionDelay,
  className,
  initial,
  animate,
  icon,
  text,
}) => {
  return (
    <motion.div
      className={`contact ${className}`}
      initial={initial}
      animate={animate}
      transition={{
        delay: transitionDelay,
        type: 'keyframes',
        ease: 'backIn',
        stifness: 500,
      }}>
      <i className={icon}></i>
      <p className='text'>{text}</p>
    </motion.div>
  );
};

export default ContactBox;
