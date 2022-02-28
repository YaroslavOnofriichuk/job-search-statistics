import { Outlet, Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { NoteList } from "../components/NoteList/NoteList";

export const NoteListPage = () => {
  const [notes, setNotes] = useState(null);


  useEffect(() => {
    try {
      setNotes(JSON.parse(localStorage.getItem("data")));
    } catch(error) {
      console.log(error);
    }
  }, [])


  return (
    <>
      <div>NoteListPage</div>
      <Link to="create">Створити замітку</Link>
      {notes && <NoteList notes={notes}/>}
      <Outlet />
    </> 
  );
};