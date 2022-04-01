import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { NoteList } from '../../components/NoteList/NoteList';
import { SortIcon } from '../../components/icons/icons';
import { Div } from '../../components/NoteList/NoteListButtons.Styled';
import { Button } from '../../components/GlobalStyle/Button';
import { StyledLink } from '../../components/GlobalStyle/Link.Styled';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { useUserContext } from '../../userContext/userContext';

export const NoteListPage = () => {
  const [notes, setNotes] = useState(null);
  const [sortType, setSortType] = useState({
    date: true,
    position: true,
    company: true,
    source: true,
    description: true,
    status: true,
  });
  const location = useLocation();
  const { user } = useUserContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, user.id));
        const newNotes = [];
        querySnapshot.forEach(doc => newNotes.push(doc.data()));
        setNotes(newNotes);
      } catch (error) {
        console.log(error);
      }
    };

    if (user) {
      fetchData();
    }
  }, [user]);

  const handleSort = e => {
    const data = e.target.attributes.data.value;

    const sortedNotes = notes.sort((firstNote, secondNote) => {
      if (sortType[data]) {
        return firstNote[data].localeCompare(secondNote[data]);
      }
      return secondNote[data].localeCompare(firstNote[data]);
    });

    setNotes(sortedNotes);

    setSortType(previousSortType => {
      return { ...previousSortType, [data]: !sortType[data] };
    });
  };

  return (
    <>
      <StyledLink to="create" state={{ from: location }}>
        Створити замітку
      </StyledLink>
      {notes?.length > 0 && (
        <Div>
          <Button type="button" data="date" onClick={handleSort}>
            Сортувати по даті&nbsp; <SortIcon size="1em" />
          </Button>
          <Button type="button" data="position" onClick={handleSort}>
            Сортувати по позиції&nbsp; <SortIcon size="1em" />
          </Button>
          <Button type="button" data="company" onClick={handleSort}>
            Сортувати по компанії&nbsp; <SortIcon size="1em" />
          </Button>
          <Button type="button" data="source" onClick={handleSort}>
            Сортувати по джерелу&nbsp; <SortIcon size="1em" />
          </Button>
          <Button type="button" data="description" onClick={handleSort}>
            Сортувати по опису&nbsp; <SortIcon size="1em" />
          </Button>
          <Button type="button" data="status" onClick={handleSort}>
            Сортувати по статусу&nbsp; <SortIcon size="1em" />
          </Button>
        </Div>
      )}
      {notes && <NoteList notes={notes} />}
      <Outlet />
    </>
  );
};
