import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { fetchContacts } from 'redux/contacts/operations';
import { selectLoading } from 'redux/contacts/selectors';
import { Loader } from '../components/Loader/Loader';

// Componenta Tasks este responsabilă pentru afișarea listei de contacte și a formularului acestora
export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts()); // Executați o solicitare de a primi contacte de la server
  }, [dispatch]);

  return (
    <>
      <title>Your contacts</title>
      <ContactForm />{' '}
      {/* Componentă de formular pentru adăugarea unui contact */}
      <div>{isLoading && <Loader />}</div>{' '}
      {/* Afișează un mesaj despre executarea cererii */}
      <ContactList /> {/* Componentă pentru afișarea listei de contacte */}
    </>
  );
}
