const FormVariant = {
  hidden: {
    y: '-50vh',
    opacity: 1,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 1,
      type: 'spring',
      stiffness: 100,
    },
  },
};

export default FormVariant;
