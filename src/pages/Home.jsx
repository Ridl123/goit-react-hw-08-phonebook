import { Wrapper, Title } from './Home.styled';

// Componenta Home este responsabilă pentru afișarea paginii de pornire
export default function Home() {
  return (
    <Wrapper>
      <Title>Welcome to Phonebook!</Title>{' '}
      {/* Afișează titlul pe pagina principală */}
    </Wrapper>
  );
}
