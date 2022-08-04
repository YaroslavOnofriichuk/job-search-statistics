import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom';
import { Form } from '../CreateNote/CreateNote.Styled';
import { StyledLink } from '../GlobalStyle/Link.Styled';
import { Tittle } from '../GlobalStyle/Tittle';
import { Loader } from '../Loader/Loader';
import { useUserContext } from '../../userContext/userContext';
import { changeName } from '../../services/API';
import { checkError } from '../../helpers';

export const ChangeForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const { changeUser, logOut } = useUserContext();

  const handleNameChange = async data => {
    setIsLoading(true);
    try {
      const user = await changeName(data);
      changeUser(user.data);
      navigate(-1);
    } catch (error) {
      if (
        error?.response?.data?.message === 'Not authorized' ||
        error?.response?.data?.message === 'Refresh token is required'
      ) {
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
      <StyledLink to={location?.state?.from ?? '/user'}>Назад</StyledLink>
      {!isLoading && <Tittle>Змінити ім'я</Tittle>}
      {!isLoading && (
        <Form onSubmit={handleSubmit(handleNameChange)}>
          <label>
            Ім'я
            <input type="text" {...register('name', { required: true })} />
            {errors.name?.type === 'required' && "Обов'язкове поле"}
          </label>
          <input type="submit" value="Зберегти" />
        </Form>
      )}
      <Loader loading={isLoading} />
    </>
  );
};
