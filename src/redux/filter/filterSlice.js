import { createSlice } from '@reduxjs/toolkit';

// Crearea unei slice pentru filtru
export const filterSlice = createSlice({
  name: 'filter', // Un nume unic pentru slice
  initialState: '', // Starea inițială a filtrului
  reducers: {
    // Definirea unui reducer changeFilter care va schimba starea filtrului pe baza acțiunii trecute
    changeFilter(state, action) {
      return (state = action.payload);
    },
  },
});

// Exportă acțiunea changeFilter din slice filterSlice
export const { changeFilter } = filterSlice.actions;

// Export reducer filterReducer din slice filterSlice
export const filterReducer = filterSlice.reducer;
