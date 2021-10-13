import { ErrorMessage, FastField } from 'formik';

export const Input = ({ type, name, placeholder, ...rest }) => {
  return (
    <div className='input-container'>
      {/* <label htmlFor={name}>{lable}</label> */}
      {/* <span class={`lnr ${iconClass} icon`}></span> */}
      <FastField type={type} name={name} id={name} placeholder={placeholder} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export const TextError = ({ children }) => {
  return <div className='error'>{children}</div>;
};
