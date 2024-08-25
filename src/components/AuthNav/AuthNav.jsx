import { Wrapper, Link } from './AuthNav.styled';

export const AuthNav = () => {
  // Componenta AuthNav este responsabilă pentru bara de navigare pentru un utilizator neautentificat

  return (
    <Wrapper>
      <Link to="/register">Register</Link>{' '}
      {/* Link către pagina de înregistrare a utilizatorului */}
      <Link to="/login">Log In</Link>{' '}
      {/* Link către pagina de conectare a utilizatorului */}
    </Wrapper>
  );
};
