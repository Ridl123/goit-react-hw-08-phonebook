import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

// Componenta PrivateRoute este responsabilă pentru o rută privată care este disponibilă numai pentru utilizatorii autorizați
export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();

  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
  // Redirecționează către redirectTo dacă utilizatorul nu este autorizat, altfel randați Component
};
