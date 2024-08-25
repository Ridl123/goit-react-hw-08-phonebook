import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from 'redux/filter/selectors';

// Importă funcțiile necesare pentru a crea un selector și selectează un filtru din stare.

export const selectLoading = state => state.contacts.isLoading;
// Selectorul selectLoading selectează steagul isLoading din starea contactelor.

export const selectError = state => state.contacts.error;
// Selectorul selectError selectează obiectul de eroare (dacă există) din starea contactelor.

export const selectContacts = state => state.contacts.items;
// Selectorul selectContacts selectează o serie de contacte din starea contactelor.

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
// Creați un selector complex selectVisibleContacts care depinde de selectContacts și selectFilter.
// Folosind createSelectors, trecem selectoarele create anterior și o funcție care calculează matricea filtrată de contacte.
// Ca rezultat, selectVisibleContacts returnează o serie de contacte care se potrivesc cu filtrul dat.
// Filtrarea se realizează prin compararea numelor contactelor cu valoarea filtrului, fără a ține seama de majuscule și minuscule.
