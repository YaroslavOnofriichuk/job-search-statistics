import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const MyToastContainer = () => {
  return (
    <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
};