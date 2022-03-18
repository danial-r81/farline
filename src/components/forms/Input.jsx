import { ErrorMessage, FastField } from 'formik';
import PropTypes from 'prop-types';

const Input = ({ type, name, placeholder, id, grades, ...rest }) => {
   return (
      <div className='input-container'>
         {type === 'select' ? (
            <FastField
               className='select-grade'
               grades={grades}
               type={type}
               as={type}
               name={name}>
               <option value=''>پایه تحصیلی خود را انتخاب کنید</option>
               {grades}
            </FastField>
         ) : (
            <FastField
               type={type}
               name={name}
               id={name}
               placeholder={placeholder}
               className='input'
               {...rest}
            />
         )}
         <ErrorMessage name={name} component={TextError} />
      </div>
   );
};

Input.propTypes = {
   type: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   id: PropTypes.string,
   grades: PropTypes.element,
   placeholder: PropTypes.string.isRequired,
};

export default Input;

export const TextError = ({ children }) => {
   return <div className='error'>{children}</div>;
};
