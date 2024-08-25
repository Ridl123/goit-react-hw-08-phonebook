import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import { Wrapper, Text, Button } from './UserMenu.styled';

// Componenta UserMenu este responsabilă pentru meniul utilizatorului dacă utilizatorul este autorizat
export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Text>Welcome to Phonebook {user.name} </Text>{' '}
      {/* Afișează salutul cu numele de utilizator */}
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>{' '}
      {/* Buton de deconectare din contul de utilizator */}
    </Wrapper>
  );
};
