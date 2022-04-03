import { useForm } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom';
import { Form } from '../CreateNote/CreateNote.Styled';
import { StyledLink } from '../GlobalStyle/Link.Styled';
import { Tittle } from '../GlobalStyle/Tittle';
import { getAuth, updateProfile } from 'firebase/auth';
import { useUserContext } from '../../userContext/userContext';
import { toast } from 'react-toastify';

export const ChangeForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const auth = getAuth();
  const { changeUser } = useUserContext();

  const onSubmit = async data => {
    try {
      await updateProfile(auth.currentUser, {
        displayName: data.name,
      });
      changeUser({ name: data.name });
      navigate(-1);
    } catch (error) {
      toast.error('Не вдалося зберегти зміни', {
        style: { backgroundColor: '#47406f', color: '#ffffff' },
      });
      console.log('error', error);
    }
  };

  return (
    <>
      <StyledLink to={location?.state?.from ?? '/user'}>Назад</StyledLink>
      <Tittle>Змінити ім'я</Tittle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Ім'я
          <input type="text" {...register('name', { required: true })} />
          {errors.name?.type === 'required' && "Обов'язкове поле"}
        </label>
        <input type="submit" value="Зберегти" />
      </Form>
    </>
  );
};
