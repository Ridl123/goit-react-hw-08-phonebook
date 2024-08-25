import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/filter/selectors';
import { changeFilter } from 'redux/filter/filterSlice';
import { Wrapper, Input, Label } from './Filter.styled';

// Componenta Filtru este responsabilă pentru filtrarea listei de contacte după nume
export const Filter = () => {
  const value = useSelector(selectFilter); // Obține valoarea curentă a filtrului din stare
  const dispatch = useDispatch(); // Obținem funcția de expediere de la Redux pentru a schimba filtrul

  // Managerul de modificare a valorii filtrului
  const onChange = event => {
    const normalizedValue = event.target.value.toLowerCase();

    dispatch(changeFilter(normalizedValue)); // Apelați acțiunea changeFilter, care modifică valoarea filtrului în Redux Store
  };

  return (
    <Wrapper>
      <Label>Find contacts by name</Label>
      <Input type="text" value={value} onChange={onChange} />
    </Wrapper>
  );
};
