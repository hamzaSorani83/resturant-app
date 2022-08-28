import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type mainState = {
  loading: boolean;
  overlay: boolean;
}

const initialState: mainState = {
  loading: false,
  overlay: false,
};

const mainReducer = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setOverlay: (state, action: PayloadAction<boolean>) => {
      state.overlay = action.payload;
    }
  }
} )

export const {setLoading, setOverlay } = mainReducer.actions;

export const selectLoading = (state: RootState) => state.main.loading;
export const selectOverlay = (state: RootState) => state.main.overlay;

export default mainReducer.reducer;