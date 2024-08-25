export const selectIsLoggedIn = state => state.auth.isLoggedIn; // Selectează valoarea isLoggedIn din starea de autentificare
export const selectUser = state => state.auth.user; // Selectează valoarea utilizatorului din starea de autentificare
export const selectIsRefreshing = state => state.auth.isRefreshing; // Selectează valoarea isRefreshing din starea de autentificare
export const selectError = state => state.auth.error; // Selectează valoarea erorii din starea de autentificare
export const selectIsLoading = state => state.auth.isLoading; // Selectează valoarea isLoading din starea de autentificare
