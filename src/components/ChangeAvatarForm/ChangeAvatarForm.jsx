import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom';
import { Form } from '../CreateNote/CreateNote.Styled';
import { StyledLink } from '../GlobalStyle/Link.Styled';
import { Tittle } from '../GlobalStyle/Tittle';
import { Loader } from '../Loader/Loader';
import { useUserContext } from '../../userContext/userContext';
import { changeAvatar } from '../../services/API';
import { checkError } from '../../helpers';

export const ChangeAvatarForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const { changeUser, logOut } = useUserContext();

  const handleAvatarChange = async data => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append('avatar', data.avatar[0]);
    try {
      const user = await changeAvatar(formData);
      changeUser(user.data);
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
      <StyledLink to={location?.state?.from ?? '/user'}>Назад</StyledLink>
      {!isLoading && <Tittle>Змінити аватар</Tittle>}
      {!isLoading && (
        <Form onSubmit={handleSubmit(handleAvatarChange)}>
          <label className="avatar">
            Вибрати файл
            <input
              type="file"
              accept=".jpg,.jpeg,.png,.bmp,.tiff,.gif"
              {...register('avatar', { required: true })}
            />
            {errors.avatar?.type === 'required' && "Обов'язкове поле"}
          </label>
          <input type="submit" value="Зберегти" />
        </Form>
      )}
      <Loader loading={isLoading} />
    </>
  );
};
