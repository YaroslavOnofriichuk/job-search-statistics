import { useEffect, useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { StyledNote } from './Note.styled';
import { StyledLink } from '../GlobalStyle/Link.Styled';
import { Button } from '../GlobalStyle/Button';
import { DeleteModal } from '../DeleteModal/DeleteModal';
import { ChangeModal } from '../ChangeModal/ChangeModal';
import { formatDate } from '../../helpers';
import { doc, updateDoc, getDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { useUserContext } from '../../userContext/userContext';
import { toast } from 'react-toastify';

export const Note = () => {
  const [note, setNote] = useState('');
  const [isOpenChangeForm, setIsOpenChangeForm] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
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
          toast.error('Не знайдено замітку', {
            style: { backgroundColor: '#47406f', color: '#ffffff' },
          });
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchNote();
  }, [noteId, user.id]);

  const onDelete = async value => {
    if (value) {
      try {
        await deleteDoc(doc(db, user.id, noteId));
        setIsOpenDeleteModal(false);
        navigate(location?.state?.from ?? '/notes');
      } catch (error) {
        setIsOpenDeleteModal(false);
        toast.error('Не вдалося видалити', {
          style: { backgroundColor: '#47406f', color: '#ffffff' },
        });
        console.log(error);
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
      try {
        await updateDoc(doc(db, user.id, noteId), {
          status: data.status,
          description: data.description,
        });
        setNote(previousState => {
          return {
            ...previousState,
            status: data.status,
            description: data.description,
          };
        });
        setIsOpenChangeForm(false);
      } catch (error) {
        setIsOpenChangeForm(false);
        toast.error('Не вдалося змінити', {
          style: { backgroundColor: '#47406f', color: '#ffffff' },
        });
        console.log(error);
      }
    } else {
      setIsOpenChangeForm(false);
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

      {isOpenDeleteModal && <DeleteModal onDelete={onDelete} />}

      {isOpenChangeForm && <ChangeModal note={note} onSubmit={onSubmit} />}
    </StyledNote>
  );
};
