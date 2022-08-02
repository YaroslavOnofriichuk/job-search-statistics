import { useEffect, useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { StyledNote } from './Note.styled';
import { StyledLink } from '../GlobalStyle/Link.Styled';
import { Button } from '../GlobalStyle/Button';
import { DeleteModal } from '../DeleteModal/DeleteModal';
import { ChangeModal } from '../ChangeModal/ChangeModal';
import { Loader } from '../Loader/Loader';
import { formatDate } from '../../helpers';
import { useUserContext } from '../../userContext/userContext';
import { getOneNote, deleteNote, updateNote } from '../../services/API';
import { checkError } from '../../helpers';

export const Note = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [note, setNote] = useState('');
  const [isOpenChangeForm, setIsOpenChangeForm] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const { noteId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logOut } = useUserContext();

  useEffect(() => {
    setIsLoading(true);

    const fetchNote = async () => {
      try {
        const newNote = await getOneNote(noteId);
        setNote(newNote.data);
        setIsLoading(false);
      } catch (error) {
        if (error?.response?.data?.message === 'Not authorized') {
          logOut();
          navigate('/user');
        } else {
          checkError(error);
          setIsLoading(false);
        }
      }
    };

    fetchNote();
  }, [logOut, navigate, noteId, user.id]);

  const onDelete = async value => {
    if (value) {
      setIsOpenDeleteModal(false);
      setIsLoading(true);
      try {
        await deleteNote(noteId);
        navigate(location?.state?.from ?? '/notes');
      } catch (error) {
        if (error?.response?.data?.message === 'Not authorized') {
          logOut();
          navigate('/user');
        } else {
          checkError(error);
          setIsLoading(false);
        }
      }
    } else {
      setIsOpenDeleteModal(false);
    }
  };

  const openDeleteModal = () => {
    setIsOpenDeleteModal(!isOpenDeleteModal);
  };

  const openChangeModal = () => {
    setIsOpenChangeForm(!isOpenChangeForm);
  };

  const onSubmit = async data => {
    if (data) {
      setIsLoading(true);
      setIsOpenChangeForm(false);
      try {
        const newNote = await updateNote(noteId, data);
        setNote(newNote.data.note);
        setIsLoading(false);
        setIsOpenChangeForm(false);
      } catch (error) {
        if (error?.response?.data?.message === 'Not authorized') {
          logOut();
          navigate('/user');
        } else {
          checkError(error);
          setIsLoading(false);
          setIsOpenChangeForm(false);
        }
      }
    } else {
      setIsOpenChangeForm(false);
    }
  };

  return (
    <StyledNote>
      <StyledLink to={location?.state?.from ?? '/notes'}>Назад</StyledLink>
      {!isLoading && (
        <>
          <ul>
            <li>
              <span>Позиція</span> <span>{note.position}</span>
            </li>
            <li>
              <span>Компанія</span> <span>{note.company}</span>
            </li>
            <li>
              <span>Джерело</span> <span>{note.source}</span>
            </li>
            <li>
              <span>Посилання</span>
              <a href={note.url} target="blank" rel="noopener noreferrer">
                {note.url}
              </a>
            </li>
            <li>
              <span>Опис</span> <span>{note.description}</span>
            </li>
            <li>
              <span>Статус</span> <span>{note.status}</span>
            </li>
            <li>
              <span>Дата надсилання</span> <span>{formatDate(note.date)}</span>
            </li>
          </ul>

          <div>
            <Button type="button" onClick={openDeleteModal}>
              Видалити замітку
            </Button>
          </div>

          <div>
            <Button type="button" onClick={openChangeModal}>
              Редагувати
            </Button>
          </div>
        </>
      )}

      {isOpenDeleteModal && <DeleteModal onDelete={onDelete} />}

      {isOpenChangeForm && <ChangeModal note={note} onSubmit={onSubmit} />}

      <Loader loading={isLoading} />
    </StyledNote>
  );
};
