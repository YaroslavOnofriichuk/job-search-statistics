import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { NoteList } from '../../components/NoteList/NoteList';
import { StyledLink } from '../../components/GlobalStyle/Link.Styled';
import { SortButtons } from '../../components/SortButtons/SortButtons';
import { Filter } from '../../components/Filter/Filter';
import { Div } from './NoteListPage.Styled';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../../firebase';
import { useUserContext } from '../../userContext/userContext';

export const NoteListPage = () => {
  const [notes, setNotes] = useState(null);
  const [filter, setFilter] = useState('');
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

  const handleSort = data => {
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

  const onFilter = query => {
    setFilter(query.toLowerCase());
  };

  const filterNotes = () => {
    try {
      return notes.filter(note => {
        return Object.values(note).join('').toLowerCase().includes(filter);
      });
    } catch {
      return false;
    }
  };

  return (
    <>
      <StyledLink to="create" state={{ from: location }}>
        Створити замітку
      </StyledLink>
      {notes?.length > 0 && (
        <Div>
          <SortButtons noteList={notes} handleSort={handleSort} />
          <Filter onFilter={onFilter} />
        </Div>
      )}
      {filterNotes() && <NoteList notes={filterNotes()} />}

      <Outlet />
    </>
  );
};
