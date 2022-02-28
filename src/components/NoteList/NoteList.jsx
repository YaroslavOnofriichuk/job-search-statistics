import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Ul } from './NoteList.styled';
import { Button } from '../GlobalStyle/Button';

export const NoteList = ({ notes }) => {
  const [listNotes, setListNotes] = useState(notes);
  const location = useLocation();

  // useEffect(() => {
  //   setListNotes(notes);
  // }, [listNotes, notes]);

  const handleSort = e => {
    const data = e.target.attributes.data.value;
    const sortedArray = listNotes.sort((firstNote, secondNote) =>
      firstNote[data].localeCompare(secondNote[data])
    );
    setListNotes(sortedArray);
    // console.log(listNotes);
    console.log(listNotes);
  };

  return (
    <Ul>
      <div>
        <Button type="button" data="date" onClick={handleSort}>
          Сортувати по даті
        </Button>
        <Button type="button" data="position" onClick={handleSort}>
          Сортувати по позиції
        </Button>
        <Button type="button" data="company" onClick={handleSort}>
          Сортувати по компанії
        </Button>
        <Button type="button" data="source" onClick={handleSort}>
          Сортувати по джерелу
        </Button>
        <Button type="button" data="description" onClick={handleSort}>
          Сортувати по опису
        </Button>
        <Button type="button" data="status" onClick={handleSort}>
          Сортувати по статусу
        </Button>
      </div>
      {listNotes.map(note => {
        return (
          <li key={note.id}>
            <Link to={`/notes/${note.id}`} state={{ from: location }}>
              <div>
                <p>Дата надсилання</p> <p>{note.date}</p>
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
