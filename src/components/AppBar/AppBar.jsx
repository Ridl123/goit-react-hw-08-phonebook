import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';
import { Header } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth(); // Obținem starea de autentificare a utilizatorului

  // Componenta AppBar este responsabilă pentru bara de sus a aplicației,
  // care conține navigare și conținut relevant pentru utilizatorul autentificat și neautentificat.

  // Folosim useAuth din propriul cârlig useAuth pentru a obține datele de autentificare ale utilizatorului.

  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}{' '}
      {/* Afișează UserMenu dacă utilizatorul este autentificat sau AuthNav dacă utilizatorul nu este autentificat */}
    </Header>
  );
};
