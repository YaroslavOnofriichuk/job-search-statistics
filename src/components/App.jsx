import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Layout } from './Layout/Layout';
import { Note } from './Note/Note';
import { CreateNote } from './CreateNote/CreateNote';
import { FeedbackSchedule } from './FeedbackSchedule/FeedbackSchedule';
import { SourceChart } from './SourceChart/SourceChart';
import { LoginForm } from './LoginForm/LoginForm';
import { RegisterForm } from './RegisterForm/RegisterForm';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import { UserProvider } from '../userContext/userContext';
import { Loader } from '../components/Loader/Loader';

const HomePage = lazy(() =>
  import('../pages/HomePage/HomePage').then(module => ({
    default: module.HomePage,
  }))
);
const NoteListPage = lazy(() =>
  import('../pages/NoteListPage/NoteListPage').then(module => ({
    default: module.NoteListPage,
  }))
);
const CalendarPage = lazy(() =>
  import('../pages/CalendarPage/CalendarPage').then(module => ({
    default: module.CalendarPage,
  }))
);
const StatisticPage = lazy(() =>
  import('../pages/StatisticPage/StatisticPage').then(module => ({
    default: module.StatisticPage,
  }))
);
const UserPage = lazy(() =>
  import('../pages/UserPage/UserPage').then(module => ({
    default: module.UserPage,
  }))
);

export const App = () => {
  return (
    <UserProvider>
      <GlobalStyle />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="notes" element={<NoteListPage />} />
            <Route path="notes/:noteId" element={<Note />} />
            <Route path="notes/create" element={<CreateNote />} />
            <Route path="statistic" element={<StatisticPage />}>
              <Route path="feedback" element={<FeedbackSchedule />} />
              <Route path="source" element={<SourceChart />} />
            </Route>
            <Route path="calendar" element={<CalendarPage />} />
            <Route path="user" element={<UserPage />} />
            <Route path="user/register" element={<RegisterForm />} />
            <Route path="user/login" element={<LoginForm />} />
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </Suspense>
    </UserProvider>
  );
};
