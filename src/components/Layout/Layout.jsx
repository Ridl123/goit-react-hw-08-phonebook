import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from 'components/AppBar/AppBar';
import { Wrapper } from './Layout.styled';
import { Loader } from '../Loader/Loader';

// Componenta Layout este responsabilă pentru structura generală a paginii
export const Layout = () => {
  return (
    <Wrapper>
      <AppBar />{' '}
      {/*Afișează componenta AppBar, care conține bara de navigare */}
      <Suspense fallback={<Loader />}>
        <Outlet />
        {/* Ieșiți componenta copil Outlet, care va conține componenta corespunzătoare în funcție de calea curentă */}
      </Suspense>
    </Wrapper>
  );
};
