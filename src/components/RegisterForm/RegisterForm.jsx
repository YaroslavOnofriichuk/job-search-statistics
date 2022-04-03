import { useForm } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom';
import { Form } from '../CreateNote/CreateNote.Styled';
import { StyledLink } from '../GlobalStyle/Link.Styled';
import { Tittle } from '../GlobalStyle/Tittle';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useUserContext } from '../../userContext/userContext';
import { toast } from 'react-toastify';

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const auth = getAuth();
  const { logIn } = useUserContext();

  const onSubmit = async data => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      logIn({
        email: user.user.email,
        token: user.user.accessToken,
        id: user.user.uid,
        name: user.user.displayName,
        image: user.user.photoURL,
      });
      navigate(-1);
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        toast.error('Такий користувач вже існує', {
          style: { backgroundColor: '#47406f', color: '#ffffff' },
        });
      } else if (error.code === 'auth/weak-password') {
        toast.error('Пароль має містити мінімум 7 символів', {
          style: { backgroundColor: '#47406f', color: '#ffffff' },
        });
      } else {
        toast.error('Не вдалося зареєструватися', {
          style: { backgroundColor: '#47406f', color: '#ffffff' },
        });
        console.log('error', error);
      }
    }
  };

  return (
    <>
      <StyledLink to={location?.state?.from ?? '/'}>Назад</StyledLink>
      <Tittle>Зареєструватися</Tittle>
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
        <input type="submit" value="Створити профіль" />
      </Form>
    </>
  );
};
