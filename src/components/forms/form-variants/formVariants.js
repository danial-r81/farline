export const FormVariant = {
   hidden: {
      opacity: 0,
      x: '5vw',
   },
   visible: {
      scale: 1,
      opacity: 1,
      x: 0,
      transition: {
         ease: 'easeInOut',
         duration: 0.8,
      },
   },
   exit: {
      scale: 0.95,
      opacity: 0,

      transition: {
         ease: 'easeInOut',
         duration: 0.8,
      },
   },
};

export default FormVariant;
