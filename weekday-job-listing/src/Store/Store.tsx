import { configureStore } from '@reduxjs/toolkit';
import { jobListReducer } from '../feature/joblistSlice'; // Fixed import statement
export const store = configureStore({
    reducer: {
        jobList: jobListReducer
    }
});