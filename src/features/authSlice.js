import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:4000/users";

// Action de connexion
export const loginUserAsync = createAsyncThunk(
  "auth/loginUserAsync",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}?email=${email}&password=${password}`);
      if (response.data.length > 0) {
        return response.data[0];
      } else {
        return rejectWithValue("Email ou mot de passe incorrect");
      }
    } catch (error) {
      return rejectWithValue("Erreur de connexion au serveur");
    }
  }
);

// Action d'inscription
export const registerUserAsync = createAsyncThunk(
  "auth/registerUserAsync",
  async ({ fullName, email, password, role }, { rejectWithValue }) => {
    try {
      // Vérifier si l'utilisateur existe déjà
      const existingUser = await axios.get(`${API_URL}?email=${email}`);
      if (existingUser.data.length > 0) {
        return rejectWithValue("Un compte avec cet email existe déjà");
      }

      // Créer le nouvel utilisateur
      const newUser = { fullName, email, password, role };
      const response = await axios.post(API_URL, newUser);
      return response.data;
    } catch (error) {
      return rejectWithValue("Erreur lors de l'inscription");
    }
  }
);

const userFromStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: userFromStorage,
    isAuthenticated: !!userFromStorage,
    loading: false,
    error: null,
    successMessage: null,
  },
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem("user");
    },
    clearMessages: (state) => {
      state.error = null;
      state.successMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // LOGIN
      .addCase(loginUserAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUserAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
        localStorage.setItem("user", JSON.stringify(action.payload));
      })
      .addCase(loginUserAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // REGISTER
      .addCase(registerUserAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.successMessage = null;
      })
      .addCase(registerUserAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = "Inscription réussie ! Vous pouvez maintenant vous connecter.";
      })
      .addCase(registerUserAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logoutUser, clearMessages } = authSlice.actions;
export default authSlice.reducer;




