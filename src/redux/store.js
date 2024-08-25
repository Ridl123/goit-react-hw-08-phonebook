import { configureStore } from '@reduxjs/toolkit';
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import { authReducer } from 'redux/auth/slice';
import { contactsReducer } from 'redux/contacts/contactsSlice';
import { filterReducer } from 'redux/filter/filterSlice';
import storage from 'redux-persist/lib/storage';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

// Aplicarea middleware-ului folosind getDefaultMiddleware,
// care conține middleware-ul standard și setează, de asemenea, unele acțiuni să fie ignorate pentru redux - persist.
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

// Configurare pentru redux-persist, specificați cheia, stocarea și câmpurile care trebuie păstrate.
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

// Creați un Redux Store folosind configureStore
export const store = configureStore({
  reducer: {
    contacts: contactsReducer, // Un reducer pentru gestionarea stării contactelor
    filter: filterReducer, // Reducer pentru a gestiona starea filtrului
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

// Creați un persistor pentru a salva starea Redux în stocarea locală.
export const persistor = persistStore(store);
