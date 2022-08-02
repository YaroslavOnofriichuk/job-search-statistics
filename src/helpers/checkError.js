import { toast } from 'react-toastify';

export const checkError = error => {
  const message = error?.response?.data?.message;
  console.log(error);

  if (message === 'Token expired') {
    toast.error(message, {
      style: { backgroundColor: '#47406f', color: '#ffffff' },
    });
  } else if (message === 'Not authorized') {
    toast.error(message, {
      style: { backgroundColor: '#47406f', color: '#ffffff' },
    });
  } else if (message === 'Not found') {
    toast.error('Помилка на стороні сервера', {
      style: { backgroundColor: '#47406f', color: '#ffffff' },
    });
  } else if (message === 'You have already sent your resume for this vacancy') {
    toast.error('Ви вже надсилали резюме на цю вакансію', {
      style: { backgroundColor: '#47406f', color: '#ffffff' },
    });
  } else if (message === 'Email or password is wrong') {
    toast.error('Пошта або пароль не вірні', {
      style: { backgroundColor: '#47406f', color: '#ffffff' },
    });
  } else if (
    message === '"password" length must be at least 6 characters long'
  ) {
    toast.error('Пароль має містити мінімум 6 символів', {
      style: { backgroundColor: '#47406f', color: '#ffffff' },
    });
  } else if (message === '"email" must be a valid email') {
    toast.error('Пошта має бути валідною', {
      style: { backgroundColor: '#47406f', color: '#ffffff' },
    });
  } else if (message === 'Internal Server Error') {
    toast.error('Помилка сервера', {
      style: { backgroundColor: '#47406f', color: '#ffffff' },
    });
  } else if (message === 'Email in use') {
    toast.error('Такий користувач вже існує', {
      style: { backgroundColor: '#47406f', color: '#ffffff' },
    });
  } else {
    toast.error('Щось пішло не так, спробуйте перезавантажити сторінку', {
      style: { backgroundColor: '#47406f', color: '#ffffff' },
    });
  }
};
