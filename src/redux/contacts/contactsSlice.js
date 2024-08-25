import { createSlice, isAnyOf } from '@reduxjs/toolkit';

// Importă acțiuni Thunk asincrone fetchContacts, addContacts, deleteContacts din fișierul „operațiuni”
import {
  fetchContacts,
  addContacts,
  deleteContacts,
} from 'redux/contacts/operations';

// Definiți funcția getActions care returnează condiția isAnyOf pentru tipul de acțiune specificat
const getActions = type =>
  isAnyOf(fetchContacts[type], addContacts[type], deleteContacts[type]);

// Starea inițială pentru slice contactsSlice
const initialState = { items: [], isLoading: false, error: null };
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload; // Actualizați lista de contacte
      })
      .addCase(addContacts.fulfilled, (state, action) => {
        state.items.unshift(action.payload); // Adăugați un contact nou la începutul listei de contacte
      })
      .addCase(deleteContacts.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1); // Eliminați un contact din lista de contacte
      })
      .addMatcher(getActions('pending'), state => {
        state.isLoading = true;
      })
      .addMatcher(getActions('rejected'), (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addMatcher(getActions('fulfilled'), state => {
        state.isLoading = false;
        state.error = null;
      }),
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
