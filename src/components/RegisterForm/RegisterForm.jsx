import { useForm } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom';
import { Form } from '../CreateNote/CreateNote.Styled';
import { StyledLink } from '../GlobalStyle/Link.Styled';
import { Tittle } from '../GlobalStyle/Tittle';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useUserContext } from '../../userContext/userContext';

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const auth = getAuth();
  const { isLoggedIn, logIn, logOut } = useUserContext();

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
      console.log('error', error);
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
          {/* {errors.position?.type === 'required' && "First name is required"} */}
        </label>
        <label>
          Пароль
          <input
            type="password"
            {...register('password', { required: true })}
          />
        </label>
        <input type="submit" />
      </Form>
    </>
  );
};
