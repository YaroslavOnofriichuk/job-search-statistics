import { ChangeModalForm } from './ChangeModal.Styled';
import { CloseIcon } from '../icons/icons';
import { useForm } from 'react-hook-form';

export const ChangeModal = ({ note, onSubmit }) => {
  const { register, handleSubmit } = useForm();

  const onClick = e => {
    if (e.target.nodeName === 'svg' || e.target.nodeName === 'path') {
      onSubmit(false);
    }
  };

  return (
    <ChangeModalForm onSubmit={handleSubmit(onSubmit)}>
      <div onClick={onClick}>
        <CloseIcon size="0.7em" />
      </div>

      <label>
        Змінити статус
        <select
          {...register('status', { required: true })}
          defaultValue={note.status}
        >
          <option value="Надіслано">Надіслано</option>
          <option value="Відхилено">Відхилено</option>
          <option value="Розглядається">Розглядається</option>
          <option value="Дзвінок рекрутера">Дзвінок рекрутера</option>
          <option value="Інтерв'ю">Інтерв'ю</option>
          <option value="Тестове завдання">Тестове завдання</option>
          <option value="Прийнято">Прийнято</option>
        </select>
      </label>
      <label>
        Змінити опис
        <textarea
          {...register('description', {})}
          defaultValue={note.description}
          rows="4"
        ></textarea>
      </label>
      <input type="submit" value="Зберегти" />
    </ChangeModalForm>
  );
};
