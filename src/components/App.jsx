import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Layout } from './Layout/Layout';
import { Note } from './Note/Note';
import { CreateNote } from './CreateNote/CreateNote';
import { FeedbackSchedule } from './FeedbackSchedule/FeedbackSchedule';
import { SourceChart } from './SourceChart/SourceChart';
import { LoginForm } from './LoginForm/LoginForm';
import { ChangeForm } from './ChangeForm/ChangeForm';
import { RegisterForm } from './RegisterForm/RegisterForm';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import { UserProvider } from '../userContext/userContext';
import { Loader } from '../components/Loader/Loader';
import { LimitedRoute } from './LimitedRoute/LimitedRoute';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';

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
            <Route
              path="notes"
              element={
                <PrivateRoute>
                  <NoteListPage />
                </PrivateRoute>
              }
            />
            <Route
              path="notes/:noteId"
              element={
                <PrivateRoute>
                  <Note />
                </PrivateRoute>
              }
            />
            <Route
              path="notes/create"
              element={
                <PrivateRoute>
                  <CreateNote />
                </PrivateRoute>
              }
            />
            <Route
              path="statistic"
              element={
                <PrivateRoute>
                  <StatisticPage />
                </PrivateRoute>
              }
            >
              <Route
                path="feedback"
                element={
                  <PrivateRoute>
                    <FeedbackSchedule />
                  </PrivateRoute>
                }
              />
              <Route
                path="source"
                element={
                  <PrivateRoute>
                    <SourceChart />
                  </PrivateRoute>
                }
              />
            </Route>
            <Route
              path="calendar"
              element={
                <PrivateRoute>
                  <CalendarPage />
                </PrivateRoute>
              }
            />
            <Route path="user" element={<UserPage />} />
            <Route
              path="user/register"
              element={
                <LimitedRoute>
                  <RegisterForm />
                </LimitedRoute>
              }
            />
            <Route
              path="user/login"
              element={
                <LimitedRoute>
                  <LoginForm />
                </LimitedRoute>
              }
            />
            <Route
              path="user/change"
              element={
                <PrivateRoute>
                  <ChangeForm />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </Suspense>
    </UserProvider>
  );
};
