import { useEffect, useState } from 'react';
import { useUserContext } from '../../userContext/userContext';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { SourceBar } from '../../components/SourceBar/SourceBar';
import { FeedbackPie } from '../../components/FeedbackPie/FeedbackPie';
import { TimeChart } from '../../components/TimeChart/TimeChart';
import { Button } from '../../components/GlobalStyle/Button';
import { StatisticSection } from './StatisticPage.Styled';

export const StatisticPage = () => {
  const [notes, setNotes] = useState(null);
  const [visibleChart, setVisibleChart] = useState('source');
  const { user } = useUserContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, user.id));
        const newNotes = [];
        querySnapshot.forEach(doc => newNotes.push(doc.data()));
        newNotes.sort((firstNote, secondNote) =>
          secondNote.date.localeCompare(firstNote.date)
        );
        setNotes(newNotes);
      } catch (error) {
        console.log(error);
      }
    };

    if (user) {
      fetchData();
    }
  }, [user]);

  const handleClick = e => {
    setVisibleChart(e.target.attributes.data.value);
  };

  return (
    <StatisticSection>
      <ul>
        <li>
          <Button data="source" onClick={handleClick}>
            Статистика джерел
          </Button>
        </li>
        <li>
          <Button data="pie" onClick={handleClick}>
            Статистика відгуків
          </Button>
        </li>
        <li>
          <Button data="time" onClick={handleClick}>
            Динаміка відгуків
          </Button>
        </li>
      </ul>
      {notes && visibleChart === 'source' && <SourceBar notes={notes} />}
      {notes && visibleChart === 'pie' && <FeedbackPie notes={notes} />}
      {notes && visibleChart === 'time' && <TimeChart notes={notes} />}
    </StatisticSection>
  );
};
