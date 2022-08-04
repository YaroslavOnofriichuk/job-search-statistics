import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { NoteList } from '../../components/NoteList/NoteList';
import { StyledLink } from '../../components/GlobalStyle/Link.Styled';
import { SortButtons } from '../../components/SortButtons/SortButtons';
import { Filter } from '../../components/Filter/Filter';
import { Loader } from '../../components/Loader/Loader';
import { Div } from './NoteListPage.Styled';
import { useUserContext } from '../../userContext/userContext';
import { getAllNotes } from '../../services/API';
import { checkError } from '../../helpers';

export const NoteListPage = () => {
  const [isLoading, setIsLoading] = useState(false);
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
  const navigate = useNavigate();
  const { user, logOut } = useUserContext();

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const newNotes = await getAllNotes();
        setNotes(newNotes.data);
        setIsLoading(false);
      } catch (error) {
        if (
          error?.response?.data?.message === 'Not authorized' ||
          error?.response?.data?.message === 'Refresh token is required'
        ) {
          logOut();
          navigate('/user');
        } else {
          checkError(error);
          setIsLoading(false);
        }
      }
    };

    if (user) {
      fetchData();
    }
  }, [logOut, navigate, user]);

  const handleSort = async data => {
    setIsLoading(true);

    try {
      const sortedNotes = await getAllNotes(
        data,
        sortType[data] ? 'asc' : 'desc'
      );

      setNotes(sortedNotes.data);

      setSortType(previousSortType => {
        return { ...previousSortType, [data]: !sortType[data] };
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
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
      {filterNotes() && !isLoading && <NoteList notes={filterNotes()} />}
      <Loader loading={isLoading} />

      <Outlet />
    </>
  );
};
