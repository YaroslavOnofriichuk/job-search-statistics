import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { checkColor } from '../helpers';

export const CalendarPage = () => {
  const [events, setEvents] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    try {
      const notes = JSON.parse(localStorage.getItem('data'));
      const newEvents = [];
      notes.map(note => {
        newEvents.push({
          id: note.id,
          title: note.position,
          date: note.date.replace(/T.*$/, ''),
          borderColor: checkColor(note.status),
          backgroundColor: checkColor(note.status),
        });
      });
      setEvents(newEvents);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleDateClick = e => {
    const noteId = e.event._def.publicId;
    navigate(`/notes/${noteId}`, { state: { from: location } });
  };

  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        eventClick={handleDateClick}
      />
    </>
  );
};
