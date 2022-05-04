import { Button } from '../GlobalStyle/Button';
import { StyledDeleteModal } from './DeleteModal.Styled';
import PropTypes from 'prop-types';

export const DeleteModal = ({ onDelete }) => {
  const handleDelete = e => {
    if (e.target.innerText === 'Так') {
      onDelete(true);
    } else {
      onDelete(false);
    }
  };

  return (
    <StyledDeleteModal>
      <p>Видалити?</p>
      <div>
        <Button type="button" onClick={handleDelete}>
          Так
        </Button>
        <Button type="button" onClick={handleDelete}>
          Ні
        </Button>
      </div>
    </StyledDeleteModal>
  );
};

DeleteModal.propTypes = {
  onDelete: PropTypes.func,
};
