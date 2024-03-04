import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const API = axios.create({
  baseURL: `http://localhost:3001`,
});

const setAuthHeader = (token) => {
  API.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  API.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const response = await API.post("/auth/register", credentials);
      setAuthHeader(response.data.token);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await API.post("/auth/login", credentials);
      setAuthHeader(response.data.token);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await API.post("/auth/logout");
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// export const refresh = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
//   const { token } = thunkAPI.getState().auth;
//   if (!token) {
//     return thunkAPI.rejectWithValue("Not Valid Token");
//   }

//   setAuthHeader(token);

//   try {
//     const { data } = await axios.get("auth/current");
//     console.log(data);
//     return data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error);
//   }
// });
export const refresh = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const userToken = state.auth.token;

  if (userToken === null) {
    return thunkAPI.rejectWithValue("Unable to fetch user");
  }

  try {
    setAuthHeader(userToken);
    const response = await API.get("/auth/current");

    return response.data.user;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
