import { USER_LOGIN, USER_LOGOUT } from "../action";

export const userInitialState = {
    username: {},
    isAuthenticated: false
};

export const UserReducer =  (state = userInitialState, action) => {
  console.log('userReducer')
	switch (action.type) {
    case USER_LOGIN:
      const user = action.user
			const value = JSON.stringify(user)
			localStorage.setItem("user", value);
			return {
        ...state,
        user,
        isAuthenticated: true
      };
    case USER_LOGOUT:
			localStorage.setItem("user", "");
      return {
				...state,
				user: {},
				isAutenthicated: false
      };
    default:
      return state;
  }
};
