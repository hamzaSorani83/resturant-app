import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { loginReducer, mainReducer } from './features'

export const store = configureStore({
  reducer: {
    main: mainReducer,
    login: loginReducer,
  },
});


// create new type = typeof dispatch
export type AppDispatch = typeof store.dispatch;
// typeof rootState
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>;
