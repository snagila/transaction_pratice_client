// file responsible to call axios functions and dispatch actions for updating status bsed on response
// uses the action given by slice

import { toast } from "react-toastify";
import { loginUser } from "../../axios/userAxios";
import { setIsAunticated, setUser } from "./userSlice";

// UI---------[Action]-----------[API]-----comes with response ------ dispatch actions

// login actions
export const loginUserAction = (userObject) => async (dispatch) => {
  // call axios
  const result = await loginUser(userObject);

  if (result.status === "error") {
    return toast.error(result.message);
  }
  //   dispatch action
  dispatch(setIsAunticated(true));
  dispatch(setUser(result.data));
  toast.success(result.message);
};
