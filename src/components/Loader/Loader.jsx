import ClipLoader from 'react-spinners/ClipLoader';
import { Div } from './Loader.Styled';

export const Loader = ({ color = '#ffffff', loading = true, size = 150 }) => {
  return (
    <Div>
      <ClipLoader color={color} loading={loading} size={size} />
    </Div>
  );
};
