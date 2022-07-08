import { useForm } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Form } from './CreateNote.Styled';
import { StyledLink } from '../GlobalStyle/Link.Styled';
import { Loader } from '../Loader/Loader';
import { useUserContext } from '../../userContext/userContext';
import { toast } from 'react-toastify';
import { addNote, getAllNotes } from '../../services/API';

export const CreateNote = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [sources, setSources] = useState([]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const watchSource = watch('source');
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useUserContext();

  const defaultSources = [
    'Linkedin',
    'Djinni',
    'jobs.dou.ua',
    'work.ua',
    'rabota.ua',
    'ua.jooble.org',
    'grc.ua',
    'recruitica.com',
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newNotes = await getAllNotes();
        setSources(
          newNotes.data.reduce((acc, note) => {
            if (acc.includes(note.source)) {
              return acc;
            } else {
              return [...acc, note.source];
            }
          }, [])
        );
      } catch (error) {
        console.log(error);
      }
    };

    if (user) {
      fetchData();
    }
  }, [user]);

  const onSubmit = async data => {
    setIsLoading(true);

    try {
      await addNote(data);
      navigate('/notes');
    } catch (error) {
      toast.error(error.response.data?.message || error.message, {
        style: { backgroundColor: '#47406f', color: '#ffffff' },
      });
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <StyledLink to={location?.state?.from ?? '/'}>Назад</StyledLink>

      {!isLoading && (
        <Form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: '20px' }}>
          <label>
            Позиція
            <input type="text" {...register('position', { required: true })} />
            {errors.position?.type === 'required' && "Обов'язкове поле*"}
          </label>

          <label>
            Компанія
            <input type="text" {...register('company', { required: true })} />
            {errors.company?.type === 'required' && "Обов'язкове поле*"}
          </label>

          <label>
            Дата надсилання
            <input
              type="datetime-local"
              {...register('date', { required: true })}
            />
            {errors.date?.type === 'required' && "Обов'язкове поле*"}
          </label>

          <label>
            Джерело
            <select {...register('source', { required: true })}>
              {defaultSources.map(source => (
                <option key={source} value={source}>
                  {source}
                </option>
              ))}
              {sources
                .filter(source => !defaultSources.includes(source))
                .map(source => (
                  <option key={source} value={source}>
                    {source}
                  </option>
                ))}
              <option value="other">інше</option>
            </select>
          </label>

          {watchSource === 'other' && (
            <label>
              Вкажіть джерело
              <input
                type="text"
                {...register('customSource', { required: true })}
              />
              {errors.customSource?.type === 'required' && "Обов'язкове поле*"}
            </label>
          )}

          <label>
            Посилання
            <input type="url" {...register('url')} />
          </label>

          <label>
            Опис
            <textarea {...register('description', {})} rows="4"></textarea>
          </label>

          <input type="submit" value="Зберегти" />
        </Form>
      )}

      <Loader loading={isLoading} />
    </>
  );
};
