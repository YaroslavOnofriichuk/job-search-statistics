import { useEffect, useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import {
  findNote,
  deleteNote,
  changeStatus,
} from '../../services/localStorage';
import { StyledNote } from './Note.styled';
import { StyledLink } from '../GlobalStyle/Link.Styled';
import { Button } from '../GlobalStyle/Button';
import { formatDate } from '../../services/formatDate';

export const Note = () => {
  const [note, setNote] = useState('');
  const { noteId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setNote(findNote(noteId));
  }, [noteId]);

  const handleDelete = () => {
    deleteNote(noteId);
    navigate('/notes');
  };

  const handleResolved = () => {
    changeStatus(noteId, 'Прийнято');
    setNote(findNote(noteId));
  };

  const handleRejected = () => {
    changeStatus(noteId, 'Відхилено');
    setNote(findNote(noteId));
  };

  return (
    <StyledNote>
      <StyledLink to={location?.state?.from ?? '/'}>Назад</StyledLink>
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
        <Button type="button" onClick={handleDelete}>
          Видалити замітку
        </Button>
        <Button type="button" onClick={handleResolved}>
          Змінити статус на прийнято
        </Button>
        <Button type="button" onClick={handleRejected}>
          Змінити статус на відхилено
        </Button>
      </div>
    </StyledNote>
  );
};
