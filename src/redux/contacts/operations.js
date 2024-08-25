import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'https://66c2e649d057009ee9be40c1.mockapi.io/';

// Creați o acțiune Thunk asincronă fetchContacts
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      // Trimiterea unei cereri GET către '/contacts'
      const response = await axios.get('/contacts');
      return response.data; // Returnează datele primite
    } catch (error) {
      // În cazul unei erori, respingeți acțiunea cu o eroare
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// Creați o acțiune Thunk asincronă addContacts
export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async ({ name, number }, thunkAPI) => {
    try {
      // Trimiteți o solicitare POST către „/contacts” cu datele { nume, număr }
      const response = await axios.post('/contacts', { name, number });
      return response.data; // Returnează datele primite
    } catch (error) {
      // În cazul unei erori, respingeți acțiunea cu o eroare
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// Creați o acțiune Thunk asincronă deleteContacts
export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async (contactId, thunkAPI) => {
    try {
      // Se trimite o solicitare DELETE către `/contacts/${contactId}`
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data; // Повернення отриманих даних
    } catch (error) {
      // În cazul unei erori, respingeți acțiunea cu o eroare
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
