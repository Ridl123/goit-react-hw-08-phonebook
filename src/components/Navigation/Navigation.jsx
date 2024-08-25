import { useAuth } from 'hooks/useAuth';
import { Link } from './Navigation.styled';

// Componenta Navigare este responsabilă pentru meniul de navigare
export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Link to="/">Home</Link> {/* Link către pagina principală */}
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}{' '}
      {/* Link către pagina de contact, disponibil numai pentru utilizatorii autorizați */}
    </nav>
  );
};
