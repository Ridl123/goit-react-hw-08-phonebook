import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Form, Label, Input, Button } from './RegisterForm.styles';

// Componenta RegisterForm este responsabilă pentru noul formular de înregistrare a utilizatorului
export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;

    // Apelați acțiunea de înregistrare cu parametrii nume, e-mail și parolă, pe care le obținem din valorile câmpurilor de formular
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset(); // Ștergem valorile câmpurilor de formular după trimitere
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Username
        <Input
          type="text"
          name="name"
          placeholder="Introduceți un nume"
          pattern="^[^\d]+$"
          title="Numele trebuie să conțină numai litere, apostrofe, cratime și liniuțe"
          required
        />
      </Label>
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
      <Button type="submit">Register</Button>
    </Form>
  );
};
