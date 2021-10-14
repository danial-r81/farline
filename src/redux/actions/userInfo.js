export const initialValuesForLogin = (userInfo) => {
  return async (dispatch) => {
    console.log(userInfo);
    await dispatch({ type: 'LOG_IN', payload: userInfo });
  };
};

export const initialValuesForRegister = (userInfo) => {
  return async (dispatch) => {
    console.log(userInfo);
    await dispatch({ type: 'SIGN_IN', payload: userInfo });
  };
};

export const initialValuesForFillProfile = (userInfo) => {
  return async (dispatch, getState) => {
    const userRegister = { ...getState() };
    const { fullName, password, confirmPassword } = userInfo;
    const { nationalCode, phoneNumber } = userRegister;
    const user = {
      fullName,
      nationalCode,
      phoneNumber,
      password,
      confirmPassword,
    };
    console.log(user);
    await dispatch({ type: 'SIGN_IN', payload: user });
  };
};
