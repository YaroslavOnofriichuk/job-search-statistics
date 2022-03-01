import { Routes, Route } from 'react-router-dom';
import { HomePage, NoteListPage, UserPage, StatisticPage } from '../pages';
import { Layout } from './Layout/Layout';
import { Note } from './Note/Note';
import { CreateNote } from './CreateNote/CreateNote';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';

export const App = () => {
  return (
    <>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="notes" element={<NoteListPage />} />
          <Route path="notes/:noteId" element={<Note />} />
          <Route path="notes/create" element={<CreateNote />} />
          <Route path="statistic" element={<StatisticPage />} />
          <Route path="user" element={<UserPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
};
