import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
import taskReducer from './features/taskSlice';
import teamReducer from './features/teamSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: taskReducer,
    teams: teamReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;