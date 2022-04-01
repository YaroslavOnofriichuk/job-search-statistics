import { useForm } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom';
import { Form } from '../CreateNote/CreateNote.Styled';
import { StyledLink } from '../GlobalStyle/Link.Styled';
import { Tittle } from '../GlobalStyle/Tittle';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useUserContext } from '../../userContext/userContext';
import { toast } from 'react-toastify';

export const LoginForm = () => {
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
      const user = await signInWithEmailAndPassword(
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
      if (error.code === 'auth/user-not-found') {
        toast.error('Невірний імейл', {
          style: { backgroundColor: '#47406f', color: '#ffffff' },
        });
      } else if (error.code === 'auth/wrong-password') {
        toast.error('Невірний пароль', {
          style: { backgroundColor: '#47406f', color: '#ffffff' },
        });
      } else {
        console.log('error', error);
      }
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
          {/* {errors.position?.type === 'required' && "First name is required"} */}
        </label>
        <label>
          Пароль
          <input
            type="password"
            {...register('password', { required: true })}
          />
        </label>
        <input type="submit" value="Увійти" />
      </Form>
    </>
  );
};
