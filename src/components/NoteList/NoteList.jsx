import { Link, useLocation } from 'react-router-dom';
import { formatDate } from '../../helpers';
import { Ul } from './NoteList.styled';

export const NoteList = ({ notes }) => {
  const location = useLocation();

  return (
    <Ul>
      {notes.map(note => {
        return (
          <li key={note.id}>
            <Link to={`/notes/${note.id}`} state={{ from: location }}>
              <div>
                <p>Дата надсилання</p> <p>{formatDate(note.date)}</p>
              </div>
              <div>
                <p>Позиція</p> <p>{note.position}</p>
              </div>
              <div>
                <p>Компанія</p> <p>{note.company}</p>
              </div>
              <div>
                <p>Джерело</p> <p>{note.source}</p>
              </div>
              <div>
                <p>Опис</p> <p>{note.description}</p>
              </div>
              <div>
                <p>Статус</p> <p>{note.status}</p>
              </div>
            </Link>
          </li>
        );
      })}
    </Ul>
  );
};
