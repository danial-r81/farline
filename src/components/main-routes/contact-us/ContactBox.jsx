import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

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

ContactBox.propTypes = {
   transitionDelay: PropTypes.number.isRequired,
   className: PropTypes.string.isRequired,
   icon: PropTypes.string.isRequired,
   initial: PropTypes.string.isRequired,
   animate: PropTypes.string.isRequired,
   text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
};

export default ContactBox;
