import { useForm } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom';
import { Form } from '../CreateNote/CreateNote.Styled';
import { StyledLink } from '../GlobalStyle/Link.Styled';
import { Tittle } from '../GlobalStyle/Tittle';
import { useUserContext } from '../../userContext/userContext';
import { toast } from 'react-toastify';
import { loginUser } from '../../services/API';

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const { logIn } = useUserContext();

  const onSubmit = async data => {
    try {
      const user = await loginUser(data);
      logIn(user.data);
      navigate(-1);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message, {
        style: { backgroundColor: '#47406f', color: '#ffffff' },
      });
    }
  };

  return (
    <>
      <StyledLink to={location?.state?.from ?? '/'}>Назад</StyledLink>
      <Tittle>Авторизуватися</Tittle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Імейл
          <input type="email" {...register('email', { required: true })} />
          {errors.email?.type === 'required' && "Обов'язкове поле"}
        </label>
        <label>
          Пароль
          <input
            type="password"
            {...register('password', { required: true })}
          />
          {errors.password?.type === 'required' && "Обов'язкове поле"}
        </label>
        <input type="submit" value="Увійти" />
      </Form>
    </>
  );
};
