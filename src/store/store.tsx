import CourseSlice from "@/reducers/coursesSlice";
import { configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    courses:CourseSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
