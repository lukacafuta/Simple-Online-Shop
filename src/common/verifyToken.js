import { apiUser } from "./api";
import { logout } from "../store/slices/userSlice";

export const verifyToken = async (dispatch) => {
  const token = localStorage.getItem("accessToken");
  if (!token) {
    dispatch(logout());
    return false;
  }

  try {
    await apiUser.post("/auth/token/verify/", { token });
    return true;
  } catch (error) {
    dispatch(logout());
    return false;
  }
};
