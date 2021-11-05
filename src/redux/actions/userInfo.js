import { toast } from 'react-toastify';
import {
  fillProfile,
  userLogin,
  userRegister,
} from '../../services/userServices';

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
        toast('ورود موفقیت آمیز بود', {
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
  return async (dispatch, getState) => {
    // const danial = 'fdgfdhj67867sdfsf2343nh';
    // const userRegister = { ...getState().userReducer.userInfo };
    // const { firstName, lastName, password, grade } = userInfo;
    // const { phoneNumber, nationalCode } = userRegister;
    // const user = {
    //   firstName,
    //   lastName,
    //   password,
    //   grade,
    //   phoneNumber,
    //   nationalCode,
    //   danial,
    // };
    // try {
    //   const { status } = await fillProfile(user, phoneNumber);
    //   if (status === 200) {
    //     console.log('ok');
    //     toast.success('ثبت نام موفقیت آمیز بود.', {
    //       position: 'top-right',
    //       closeButton: true,
    //     });
    //   }
    // } catch (e) {
    //   if (e.response) {
    //     console.log(e.response);
    //   } else if (e.message) {
    //     console.log(e.message);
    //   } else if (e.request) {
    //     console.log(e.request);
    //   }
    // }

    await dispatch({ type: 'SIGN_IN', payload: userInfo });
  };
};
