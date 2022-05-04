import { useForm } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Form } from './CreateNote.Styled';
import { StyledLink } from '../GlobalStyle/Link.Styled';
import { nanoid } from 'nanoid';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { useUserContext } from '../../userContext/userContext';
import { toast } from 'react-toastify';
import { collection, getDocs } from 'firebase/firestore';

export const CreateNote = () => {
  const [notes, setNotes] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
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

  const onSubmit = async data => {
    data.id = nanoid();
    data.status = 'Надіслано';

    if (
      notes.find(
        note => note.company === data.company && note.position === data.position
      )
    ) {
      toast.info('Ви вже відправляли резюме в цю компанію', {
        style: { backgroundColor: '#47406f', color: '#ffffff' },
      });
    } else {
      try {
        await setDoc(doc(db, user.id, data.id), data);
        navigate('/notes');
      } catch (error) {
        toast.error('Не вдалося зберегти', {
          style: { backgroundColor: '#47406f', color: '#ffffff' },
        });
        console.error(error);
      }
    }
  };

  return (
    <>
      <StyledLink to={location?.state?.from ?? '/'}>Назад</StyledLink>
      <Form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: '20px' }}>
        <label>
          Позиція
          <input type="text" {...register('position', { required: true })} />
          {errors.position?.type === 'required' && "Обов'язкове поле"}
        </label>
        <label>
          Компанія
          <input type="text" {...register('company', { required: true })} />
          {errors.company?.type === 'required' && "Обов'язкове поле"}
        </label>
        <label>
          Дата надсилання
          <input
            type="datetime-local"
            {...register('date', { required: true })}
          />
          {errors.date?.type === 'required' && "Обов'язкове поле"}
        </label>
        <label>
          Джерело
          <select {...register('source', { required: true })}>
            <option value="Linkedin">Linkedin</option>
            <option value="Djinni">Djinni</option>
            <option value="jobs.dou.ua">jobs.dou.ua</option>
            <option value="work.ua">work.ua</option>
            <option value="rabota.ua">rabota.ua</option>
            <option value="ua.jooble.org">ua.jooble.org</option>
            <option value="grc.ua">grc.ua</option>
            <option value="recruitica.com">recruitica.com</option>
            <option value="other">інше</option>
          </select>
        </label>
        <label>
          Посилання
          <input type="url" {...register('url', { required: true })} />
        </label>
        <label>
          Опис
          <textarea {...register('description', {})} rows="4"></textarea>
        </label>
        <input type="submit" value="Зберегти" />
      </Form>
    </>
  );
};
