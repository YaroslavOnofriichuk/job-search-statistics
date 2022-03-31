import { useEffect, useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { StyledNote } from './Note.styled';
import { StyledLink } from '../GlobalStyle/Link.Styled';
import { Button } from '../GlobalStyle/Button';
import { formatDate } from '../../helpers';
import { doc, updateDoc, getDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { useUserContext } from '../../userContext/userContext';

export const Note = () => {
  const [note, setNote] = useState('');
  const { noteId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useUserContext();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const docSnap = await getDoc(doc(db, user.id, noteId));
        if (docSnap.exists()) {
          setNote(docSnap.data());
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchNote();
  }, [noteId, user.id]);

  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, user.id, noteId));
    } catch (error) {
      console.log(error);
    }
    navigate(location?.state?.from ?? '/notes');
  };

  const handleResolved = async () => {
    try {
      await updateDoc(doc(db, user.id, noteId), { status: 'Прийнято' });
      setNote(previousState => {
        return {
          ...previousState,
          status: 'Прийнято',
        };
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleRejected = async () => {
    try {
      await updateDoc(doc(db, user.id, noteId), { status: 'Відхилено' });
      setNote(previousState => {
        return {
          ...previousState,
          status: 'Відхилено',
        };
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledNote>
      <StyledLink to={location?.state?.from ?? '/notes'}>Назад</StyledLink>
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
