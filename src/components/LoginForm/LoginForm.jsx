import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom';
import { Form } from '../CreateNote/CreateNote.Styled';
import { StyledLink } from '../GlobalStyle/Link.Styled';
import { Tittle } from '../GlobalStyle/Tittle';
import { Loader } from '../Loader/Loader';
import { useUserContext } from '../../userContext/userContext';
import { loginUser } from '../../services/API';
import { checkError } from '../../helpers';

export const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const { logIn, logOut } = useUserContext();

  const onSubmit = async data => {
    setIsLoading(true);
    try {
      const user = await loginUser(data);
      logIn(user.data);
      navigate(-1);
    } catch (error) {
      if (error?.response?.data?.message === 'Not authorized') {
        logOut();
        navigate('/user');
      } else {
        checkError(error);
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      <StyledLink to={location?.state?.from ?? '/'}>Назад</StyledLink>
      {!isLoading && <Tittle>Авторизуватися</Tittle>}
      {!isLoading && (
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
      )}
      <Loader loading={isLoading} />
    </>
  );
};
