import { logout, getCurrentUser } from "../../services";
import { setUserData, removeUserData } from "../slices/userSlice";

export const getUserThunk = (token) => {
  return async function (dispatch) {
    const userData = await getCurrentUser(token);
    const { email, name, role } = userData.result;
    dispatch(
      setUserData({
        email,
        name,
        token,
        role,
      })
    );
  };
};

export const logoutThunk = (token) => {
  return async function (dispatch) {
    await logout(token);

    dispatch(removeUserData());
  };
};
