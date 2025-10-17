import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:4000/startups";

export const fetchStartupsAsync = createAsyncThunk(
  "startups/fetchStartupsAsync",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch {
      return rejectWithValue("Erreur chargement startups");
    }
  }
);

export const addStartupAsync = createAsyncThunk(
  "startups/addStartupAsync",
  async (startupData, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_URL, startupData);
      return response.data;
    } catch {
      return rejectWithValue("Erreur ajout startup");
    }
  }
);

const startupsSlice = createSlice({
  name: "startups",
  initialState: { items: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStartupsAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStartupsAsync.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchStartupsAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(addStartupAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addStartupAsync.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.loading = false;
      })
      .addCase(addStartupAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  }
});

export default startupsSlice.reducer;

