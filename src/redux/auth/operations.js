import axios from "axios";
import { Notify } from "notiflix";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL =
  "https://medicine-delivery-app-back-end-1.onrender.com";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post("/auth/register", credentials);
      setAuthHeader(response.data.token);
      Notify.success("Registration successful!");
      return response.data;
    } catch (error) {
      Notify.failure("Something went wrong... Try again!");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post("/auth/login", credentials);
      setAuthHeader(response.data.token);
      Notify.success("Login successful! ");
      return response.data;
    } catch (error) {
      Notify.failure("Something went wrong... Try again!");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/auth/logout");
    clearAuthHeader();
  } catch (error) {
    Notify.failure("Something went wrong... Try again!");
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refresh = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const userToken = state.auth.token;

  if (userToken === null) {
    return thunkAPI.rejectWithValue("Unable to fetch user");
  }

  try {
    setAuthHeader(userToken);
    const response = await axios.get("/auth/current");

    return response.data.user;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
