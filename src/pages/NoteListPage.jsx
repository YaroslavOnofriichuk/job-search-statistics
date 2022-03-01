import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { sortNotes } from '../services/localStorage';
import { NoteList } from '../components/NoteList/NoteList';
import { Div } from '../components/NoteList/NoteListButtons.Styled';
import { Button } from '../components/GlobalStyle/Button';
import { StyledLink } from '../components/GlobalStyle/Link.Styled';

export const NoteListPage = () => {
  const [notes, setNotes] = useState(null);
  const location = useLocation();

  useEffect(() => {
    try {
      setNotes(JSON.parse(localStorage.getItem('data')));
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleSort = e => {
    const data = e.target.attributes.data.value;
    sortNotes(data);
    try {
      setNotes(JSON.parse(localStorage.getItem('data')));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <StyledLink to="create" state={{ from: location }}>
        Створити замітку
      </StyledLink>
      <Div>
        <Button type="button" data="date" onClick={handleSort}>
          Сортувати по даті
        </Button>
        <Button type="button" data="position" onClick={handleSort}>
          Сортувати по позиції
        </Button>
        <Button type="button" data="company" onClick={handleSort}>
          Сортувати по компанії
        </Button>
        <Button type="button" data="source" onClick={handleSort}>
          Сортувати по джерелу
        </Button>
        <Button type="button" data="description" onClick={handleSort}>
          Сортувати по опису
        </Button>
        <Button type="button" data="status" onClick={handleSort}>
          Сортувати по статусу
        </Button>
      </Div>
      {notes && <NoteList notes={notes} />}
      <Outlet />
    </>
  );
};
