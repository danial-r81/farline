import React from 'react';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import useValidation from '../../../hooks/useValidation';
import FormVariant from '../form-variants/formVariants';

const FormContainer = ({
   children,
   action,
   initialValues,
   onSubmit,
   title,
}) => {
   const validationSchema = useValidation(action);
   return (
      <Formik
         initialValues={initialValues}
         validationSchema={validationSchema}
         onSubmit={onSubmit}>
         <Form className='form'>
            <motion.div
               className='form-container'
               variants={FormVariant}
               initial='hidden'
               animate='visible'
               exit='exit'>
               <h1 className='header'>{title}</h1>
               {children}
            </motion.div>
         </Form>
      </Formik>
   );
};

FormContainer.propTypes = {
   children: PropTypes.element.isRequired,
   action: PropTypes.string.isRequired,
   initialValues: PropTypes.object.isRequired,
   title: PropTypes.string.isRequired,
   onSubmit: PropTypes.func.isRequired,
};

export default FormContainer;
