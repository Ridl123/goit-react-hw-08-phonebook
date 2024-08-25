import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.goit.global/';

const setAuthHeader = token => {
  // Setarea antetului de autorizare în parametrii cererii inițiale
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  // Șterge antetul de autorizare
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      // Efectuarea unei cereri POST pentru înregistrarea utilizatorului
      const res = await axios.post('/users/register', credentials); //signup
      console.log(res.data);
      setAuthHeader(res.data.token); // Setarea jetonului de autorizare primit în antet
      return res.data; // Returnează datele din răspunsul serverului
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message); // Gestionați eroarea cu apelul rejectWithValue
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      // Efectuați o solicitare POST pentru autorizarea utilizatorului
      const res = await axios.post('/users/login', credentials);
      setAuthHeader(res.data.token); // Setarea jetonului de autorizare primit în antet
      return res.data; // Returnează datele din răspunsul serverului
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message); // Gestionați eroarea cu apelul rejectWithValue
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    // Executați o solicitare POST pentru a părăsi utilizatorul
    await axios.post('/users/logout');
    clearAuthHeader(); // Șterge antetul de autorizare
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message); // Gestionați eroarea cu apelul rejectWithValue
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user'); // Eroare dacă simbolul nu este salvat în stare
    }

    try {
      setAuthHeader(persistedToken); // Setați jetonul de autorizare stocat la antet
      const res = await axios.get('/users/current'); // Executarea unei cereri GET pentru a obține informații despre utilizator
      return res.data; // Returnează datele din răspunsul serverului
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message); // Gestionați eroarea cu apelul rejectWithValue
    }
  }
);
