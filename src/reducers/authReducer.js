import { AUTH_FAILURE, AUTH_SUCCESS } from '../constants/types';

const userInfo = {
  username: '',
  email: '',
  userType: '',
  userId: '',
  mobile: '',
  name: '',
};

const userInfoReducer = (state = userInfo, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      // eslint-disable-next-line no-case-declarations
      const { username, userType, email, id, mobile, name } = action.payload;
      return { ...state, userType, userId: id, email, mobile, username, name };
    case AUTH_FAILURE:
      return state;
    default:
      return state;
  }
};

export default userInfoReducer;
