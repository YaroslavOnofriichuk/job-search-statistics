import { useForm } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom';
import { Form } from '../CreateNote/CreateNote.Styled';
import { StyledLink } from '../GlobalStyle/Link.Styled';
import { Tittle } from '../GlobalStyle/Tittle';
import { getAuth, updateProfile } from 'firebase/auth';
import { useUserContext } from '../../userContext/userContext';

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
      console.log('error', error);
    }
  };

  return (
    <>
      <StyledLink to={location?.state?.from ?? '/'}>Назад</StyledLink>
      <Tittle>Змінити ім'я</Tittle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Ім'я
          <input type="text" {...register('name', { required: true })} />
          {/* {errors.position?.type === 'required' && "First name is required"} */}
        </label>
        <input type="submit" />
      </Form>
    </>
  );
};
