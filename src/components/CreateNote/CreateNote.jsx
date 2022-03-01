import { useForm } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom';
import { Form } from './CreateNote.Styled';
import { StyledLink } from '../GlobalStyle/Link.Styled';
import { nanoid } from 'nanoid';
import { addData } from '../../services/localStorage';

export const CreateNote = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();

  const onSubmit = data => {
    data.id = nanoid();
    data.status = 'В очікуванні';
    addData(data);
    navigate('/notes');
  };

  return (
    <>
      <StyledLink to={location?.state?.from ?? '/'}>Назад</StyledLink>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Позиція
          <input type="text" {...register('position', { required: true })} />
          {/* {errors.position?.type === 'required' && "First name is required"} */}
        </label>
        <label>
          Компанія
          <input type="text" {...register('company', { required: true })} />
        </label>
        <label>
          Дата надсилання
          <input
            type="datetime-local"
            {...register('date', { required: true })}
          />
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
          Опис
          <textarea {...register('description', {})} rows="4"></textarea>
        </label>
        <input type="submit" />
      </Form>
    </>
  );
};
