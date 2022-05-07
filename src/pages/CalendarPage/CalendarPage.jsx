import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { checkColor } from '../../helpers';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { useUserContext } from '../../userContext/userContext';
import { CalendarSection } from './CalendarPage.Styled';

export const CalendarPage = () => {
  const [events, setEvents] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useUserContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, user.id));
        const newEvents = [];
        querySnapshot.forEach(doc => {
          newEvents.push({
            id: doc.data().id,
            title: doc.data().position,
            date: doc.data().date.replace(/T.*$/, ''),
            borderColor: checkColor(doc.data().status),
            backgroundColor: checkColor(doc.data().status),
          });
        });
        setEvents(newEvents);
      } catch (error) {
        console.log(error);
      }
    };

    if (user) {
      fetchData();
    }
  }, [user]);

  const handleDateClick = e => {
    const noteId = e.event._def.publicId;
    navigate(`/notes/${noteId}`, { state: { from: location } });
  };

  return (
    <CalendarSection>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        eventClick={handleDateClick}
        locale="uk"
        firstDay="1"
      />
    </CalendarSection>
  );
};
