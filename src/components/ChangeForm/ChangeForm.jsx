import { useForm } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom';
import { Form } from '../CreateNote/CreateNote.Styled';
import { StyledLink } from '../GlobalStyle/Link.Styled';
import { Tittle } from '../GlobalStyle/Tittle';
import { useUserContext } from '../../userContext/userContext';
import { toast } from 'react-toastify';
import { changeName } from '../../services/API';

export const ChangeForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const { changeUser } = useUserContext();

  const handleNameChange = async data => {
    try {
      const user = await changeName(data);
      changeUser(user.data);
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
      <Form onSubmit={handleSubmit(handleNameChange)}>
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
