import { useEffect, useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { StyledNote } from './Note.styled';
import { StyledLink } from '../GlobalStyle/Link.Styled';
import { Button } from '../GlobalStyle/Button';
import { Form } from '../CreateNote/CreateNote.Styled';
import { formatDate } from '../../helpers';
import { doc, updateDoc, getDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { useUserContext } from '../../userContext/userContext';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';

export const Note = () => {
  const [note, setNote] = useState('');
  const [isOpenForm, setIsOpenForm] = useState(false);
  const { noteId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useUserContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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

  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, user.id, noteId));
      navigate(location?.state?.from ?? '/notes');
    } catch (error) {
      toast.error('Не вдалося видалити', {
        style: { backgroundColor: '#47406f', color: '#ffffff' },
      });
      console.log(error);
    }
  };

  const handleChange = () => {
    setIsOpenForm(!isOpenForm);
  };

  const onSubmit = async data => {
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
      setIsOpenForm(false);
    } catch (error) {
      toast.error('Не вдалося змінити', {
        style: { backgroundColor: '#47406f', color: '#ffffff' },
      });
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
      </div>

      <div>
        <Button type="button" onClick={handleChange}>
          Редагувати
        </Button>

        {isOpenForm && (
          <Form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
            <label>
              Змінити статус
              <select
                {...register('status', { required: true })}
                defaultValue={note.status}
              >
                <option value="Надіслано">Надіслано</option>
                <option value="Відхилено">Відхилено</option>
                <option value="Розглядається">Розглядається</option>
                <option value="Дзвінок рекрутера">Дзвінок рекрутера</option>
                <option value="Інтерв'ю">Інтерв'ю</option>
                <option value="Тестове завдання">Тестове завдання</option>
                <option value="Прийнято">Прийнято</option>
              </select>
            </label>
            <label>
              Змінити опис
              <textarea
                {...register('description', {})}
                defaultValue={note.description}
                rows="4"
              ></textarea>
            </label>
            <input type="submit" value="Зберегти" />
          </Form>
        )}
      </div>
    </StyledNote>
  );
};
