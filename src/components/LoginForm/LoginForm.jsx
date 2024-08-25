import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Form, Label, Input, Button } from './LoginForm.styled';

// Componenta LoginForm este responsabilă pentru formularul de autorizare a utilizatorului
export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;

    // Apelați acțiunea de logIn cu parametrii de e-mail și parolă, pe care îi obținem din valorile câmpurilor de formular
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset(); // Ștergem valorile câmpurilor de formular după trimitere
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Email
        <Input
          type="email"
          name="email"
          placeholder="Introdu adresa ta de e-mail"
          pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
          title="Vă rugăm să introduceți o adresă de email validă"
          required
        />
      </Label>
      <Label>
        Password
        <Input
          type="password"
          name="password"
          placeholder="Introduceți parola"
          pattern="^[a-zA-Z0-9!@#$%^&*()-_=+`~[\]{}|:<>/?]+$"
          title="Parola trebuie să conțină numai litere latine (atât majuscule, cât și mici), cifre și alte simboluri"
          required
        />
      </Label>
      <Button type="submit">Log In</Button>
    </Form>
  );
};
