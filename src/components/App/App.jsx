import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { PrivateRoute } from '../PrivateRoute';
import { RestrictedRoute } from '../RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import PhoneIcons from '../PhoneIcons/PhoneIcons';
import { Wrapper } from './App.styled';

const Home = lazy(() => import('pages/Home'));
const Register = lazy(() => import('pages/Register'));
const Login = lazy(() => import('pages/Login'));
const Contacts = lazy(() => import('pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch(); // Obținem funcția de expediere pentru a trimite acțiuni în Redux Store
  const { isRefreshing } = useAuth(); // Obținem starea de autentificare a utilizatorului

  useEffect(() => {
    dispatch(refreshUser()); // Apelam funcția de actualizare a utilizatorului când instalam o componentă sau schimbam expedierea
  }, [dispatch]);

  // Verificam dacă procesul de actualizare a utilizatorului este în curs
  // Dacă da, afișam textul „Actualizare utilizator...”
  // Dacă nu, afișam structura de rutare a aplicației
  return isRefreshing ? (
    <p>Actualizare utilizator...</p>
  ) : (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/*Pagina principală */}
          <Route index element={<Home />} />
          {/* Pagina de înregistrare a utilizatorului */}
          <Route
            path="/register"
            element={
              <RestrictedRoute redirectTo="/login" component={<Register />} />
            }
          />
          {/* Pagina de conectare a utilizatorului */}
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          />
          {/* Pagina de contact (disponibilă numai pentru utilizatorii autorizați) */}
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
        </Route>
        {/* Rută implicită (dacă nicio altă rută nu se potrivește) */}
        <Route path="*" element={<Home />} />
      </Routes>
      <PhoneIcons />
    </Wrapper>
  );
};
