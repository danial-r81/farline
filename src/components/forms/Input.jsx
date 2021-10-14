import { ErrorMessage, FastField, Field, FieldArray } from 'formik';
import Select from 'react-select';

export const Input = ({ type, name, placeholder, options, id, ...rest }) => {
  return (
    <div className='input-container'>
      {type === 'select' ? (
        <Select
          name={name}
          id={id}
          placeholder={placeholder}
          isSearchable={false}
          options={options}
        />
      ) : (
        <FastField
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          {...rest}
        />
      )}
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export const TextError = ({ children }) => {
  return <div className='error'>{children}</div>;
};
