import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import jobService from './JobService';

// Define the initial state
interface JobListState {
  jobs: string[];
  loading: boolean;
  error: string | null;
}

const initialState: JobListState = {
  jobs: [],
  loading: false,
  error: null,
};

// Create the job list slice
const jobListSlice = createSlice({
  name: 'jobList',
  initialState,
  reducers: {
    // Define any additional reducers if needed
  },
  extraReducers: (builder) => {
    builder.addCase(fetchJobs.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchJobs.fulfilled, (state, action) => {
      state.loading = false;
      state.jobs=[...state.jobs, ...action.payload?.jdList]; // Append new jobs to the existing list
    });
    builder.addCase(fetchJobs.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? null;
    });
  },
});

// Define the async thunk for fetching jobs
export const fetchJobs = createAsyncThunk('jobList/fetchJobs', async (offset: number) => {
  try {
    const limit = 9; // Assuming each page displays 9 jobs
    const response = await jobService.getJobList(offset, limit); 
    console.log(response)// Pass offset and limit to getJobList
    return response;
  } catch (error) {
    throw new Error('Failed to fetch jobs');
  }
});

// Export the actions, reducer, and async thunk
export const jobListReducer = jobListSlice.reducer;
