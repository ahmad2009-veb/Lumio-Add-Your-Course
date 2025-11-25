import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
const API = "http://localhost:3002";

export interface Course {
    id: string;
    title: string;
    price: number;
    instructor:string;
    image: string;
    rating: number,
    students: number;
    duration: string;
    category:string
}

interface CourseState {
  courses: Course[];
  loading: boolean;
}

const initialState: CourseState = {
  courses: [],
  loading: false,
};

export const getCourse = createAsyncThunk<Course[]>(
  "courses/getCourse",
  async () => {
    try {
      const { data } = await axios.get(`${API}/data`);
      return data;
    } catch (error) {
        console.log(error);
    }
  }
);

export const AddNewCourse = createAsyncThunk<any>("addcourse",async (user,{dispatch}) => {
    try {
        await axios.post(`${API}/data`, user)
        dispatch(getCourse())
    } catch (error) {
        console.log(error);
    }
})

export const getCourseByCategory = createAsyncThunk<Course[], string>(
  "courses/getCourseByCategory",
  async (category) => {
    try {
        const { data } = await axios.get(`${API}/data`);
        return category === "all" ? data : data.filter(course => course.category === category);
    } catch (error) {
      console.log(error);
      return [];
    }
  }
);

export const getCourseByPrice = createAsyncThunk<Course[], string>(
  "courses/getCourseByPrice",
  async (price) => {
    try {
      const { data } = await axios.get(`${API}/data`);
      
      let filtered = data;
      switch (price) {
        case "free":
          filtered = data.filter(course => course.price == 0);
          break;
        case "under50":
          filtered = data.filter(course => course.price > 0 && course.price < 50);
          break;
        case "50-100":
          filtered = data.filter(course => course.price >= 50 && course.price <= 100);
          break;
        case "over100":
          filtered = data.filter(course => course.price > 100);
          break;
        default:
          filtered = data;
      }

      return filtered;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
);





export const CourseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCourse.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCourse.fulfilled, (state, action: PayloadAction<Course[]>) => {
        state.courses = action.payload;
        state.loading = false;
      })
      .addCase(getCourse.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getCourseByCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCourseByCategory.fulfilled, (state, action: PayloadAction<Course[]>) => {
        state.courses = action.payload;
        state.loading = false;
      })
      .addCase(getCourseByCategory.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getCourseByPrice.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCourseByPrice.fulfilled, (state, action: PayloadAction<Course[]>) => {
        state.courses = action.payload;
        state.loading = false;
      })
      .addCase(getCourseByPrice.rejected, (state) => {
        state.loading = false;
      });
  }
});

export default CourseSlice.reducer;
