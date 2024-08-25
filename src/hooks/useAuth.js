import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
} from 'redux/auth/selectors';

// Cârligul useAuth oferă acces la datele de autorizare ale utilizatorului
export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);

  return {
    isLoggedIn, // Indică dacă utilizatorul este autorizat
    isRefreshing, // Indică dacă informațiile utilizatorului sunt actualizate
    user, // Un obiect care conține datele utilizatorului autorizat
  };
};
