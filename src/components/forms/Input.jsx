import { ErrorMessage, FastField } from 'formik';

export const Input = ({
  type,
  name,
  placeholder,
  options,
  id,
  grades,
  ...rest
}) => {
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

export const TextError = ({ children }) => {
  return <div className='error'>{children}</div>;
};
