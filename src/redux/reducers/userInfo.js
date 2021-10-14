export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return { ...action.payload };
    case 'SIGN_IN':
      return { ...action.payload };
    default:
      return state;
  }
};
