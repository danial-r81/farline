import { toast } from 'react-toastify';
import { userLogin } from '../../services/userServices';

export const initialValuesForLogin = (userInfo) => {
  return async (dispatch) => {
    // const userRegisterInfo = { ...getState().userReducer.userInfo };
    const { password, phoneNumber } = userInfo;
    const danial = 'fdgfdhj67867sdfsf2343nh';
    const data = {
      password,
      danial,
    };

    try {
      const { status } = await userLogin(data, phoneNumber);
      if (status === 200) {
        toast(' ورود موفقیت آمیز بود', {
          position: 'top-right',
          closeButton: true,
        });
      }
    } catch (e) {
      if (e.response) {
        console.log(e.response);
      } else if (e.message) {
        console.log(e.message);
      } else if (e.request) {
        console.log(e.request);
      }
    }
    await dispatch({ type: 'LOG_IN', payload: userInfo });
  };
};

export const initialValuesForRegister = (userInfo, code) => {
  return async (dispatch) => {
    await dispatch({ type: 'SIGN_IN', payload: { userInfo, code } });
  };
};

export const initialValuesForFillProfile = (userInfo) => {
  return async (dispatch) => {
    localStorage.setItem('firstName', userInfo.firstName);
    localStorage.setItem('lastName', userInfo.lastName);
    await dispatch({ type: 'SIGN_IN', payload: userInfo });
  };
};
