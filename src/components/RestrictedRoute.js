import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

// Componenta RestrictedRoute este responsabilă pentru o rută restricționată care este disponibilă numai pentru utilizatorii neconectați
export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
  // Redirecționează către redirectTo dacă utilizatorul este deja autorizat, altfel randati componenta Component
};
