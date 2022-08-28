import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

import { UserInfo } from "firebase/auth";
import { fetchUser } from "../utils/fetchLocalStorage";

const userInfo = fetchUser();

export type resetPasswordDataState = {
  role: string;
  email: string;
};

export type loginState = {
  user: UserInfo | null;
  resetPasswordData: resetPasswordDataState;
  showResetPassword: boolean;
}

const initialResetPasswordData: resetPasswordDataState = {
  role: '',
  email: '',
};

const initialState: loginState = {
  user: userInfo,
  resetPasswordData: initialResetPasswordData,
  showResetPassword: false,
};

const loginReducer = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserInfo|null>) => {
      return {
        ...state,
        user: action.payload,
      }
    },
    setResetPassword: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        resetPasswordData: initialResetPasswordData,
        showResetPassword: action.payload,
      }
    },
    setResetPasswordData: (state, action: PayloadAction<resetPasswordDataState>) => {
      state.resetPasswordData = action.payload;
    },
  }
} )

export const { setUser, setResetPassword, setResetPasswordData } = loginReducer.actions;

export const selectUser = (state: RootState) => state.login.user;
export const selectResetPassword = (state: RootState) => state.login.showResetPassword;
export const selectResetPasswordData = (state: RootState) => state.login.resetPasswordData;

export default loginReducer.reducer;