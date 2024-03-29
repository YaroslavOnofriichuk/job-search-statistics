import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Loader } from '../../components/Loader/Loader';
import { checkColor } from '../../helpers';
import { useUserContext } from '../../userContext/userContext';
import { CalendarSection } from './CalendarPage.Styled';
import { getAllNotes } from '../../services/API';
import { checkError } from '../../helpers';

export const CalendarPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [events, setEvents] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logOut } = useUserContext();

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const notes = await getAllNotes();
        const newEvents = [];
        notes.data.forEach(note => {
          newEvents.push({
            id: note._id,
            title: note.position,
            date: note.date.replace(/T.*$/, ''),
            borderColor: checkColor(note.status),
            backgroundColor: checkColor(note.status),
          });
        });
        setEvents(newEvents);
        setIsLoading(false);
      } catch (error) {
        if (
          error?.response?.data?.message === 'Not authorized' ||
          error?.response?.data?.message === 'Refresh token is required'
        ) {
          logOut();
          navigate('/user');
        } else {
          checkError(error);
          setIsLoading(false);
        }
      }
    };

    if (user) {
      fetchData();
    }
  }, [logOut, navigate, user]);

  const handleDateClick = e => {
    const noteId = e.event._def.publicId;
    navigate(`/notes/${noteId}`, { state: { from: location } });
  };

  return (
    <CalendarSection>
      {!isLoading && (
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events}
          eventClick={handleDateClick}
          locale="uk"
          firstDay="1"
        />
      )}
      <Loader loading={isLoading} />
    </CalendarSection>
  );
};
