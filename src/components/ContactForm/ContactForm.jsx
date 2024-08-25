import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { Filter } from 'components/Filter/Filter';
import { selectContacts } from 'redux/contacts/selectors';
import { addContacts } from 'redux/contacts/operations';
import { Form, Label, Input, Button } from './ContactForm.styled';
import { ReactComponent as AddIcon } from 'icons/add.svg';

//Generarea de identificatori unici pentru câmpurile de formular.
const nameInputId = nanoid();
const numberInputId = nanoid();

// Componenta ContactForm este responsabilă pentru formularul pentru adăugarea unui contact nou
export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  // Procesarea trimiterii formularului.
  const handleSubmit = event => {
    event.preventDefault();

    // Verificăm dacă un contact cu acest nume există deja în lista de contacte
    const isInContacts = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    // Dacă contactul există deja, este afișat un avertisment.
    if (isInContacts) {
      alert(`${name} deja în contacte☝️`);

      return;
    }

    // Trimite o acțiune pentru a adăuga un contact nou în Redux Store
    dispatch(addContacts({ name, number }));

    setName('');
    setNumber('');
  };

  // Procesarea modificărilor valorii câmpului formularului.
  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor={nameInputId}>
          Name
          <Input
            type="text"
            name="name"
            placeholder="Introduceți un nume"
            value={name}
            onChange={handleChange}
            pattern="^[^\d]+$"
            title="Numele trebuie să conțină numai litere, apostrofe, cratime și liniuțe"
            required
          />
        </Label>

        <Label htmlFor={numberInputId}>
          Number
          <Input
            type="tel"
            name="number"
            placeholder="Introduceți un număr de telefon"
            value={number}
            onChange={handleChange}
            pattern="\+\d{12}"
            minlength="13"
            maxlength="13"
            title="Numărul de telefon trebuie să înceapă cu + urmat de 12 cifre"
            required
          />
        </Label>

        <Button type="submit">
          <AddIcon fill="#f08080" width="25" height="25" />
          Add contact{' '}
        </Button>
      </Form>
      <Filter />
    </>
  );
};
