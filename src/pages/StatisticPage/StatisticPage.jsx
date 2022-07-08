import { useEffect, useState } from 'react';
import { useUserContext } from '../../userContext/userContext';
import { SourceBar } from '../../components/SourceBar/SourceBar';
import { FeedbackPie } from '../../components/FeedbackPie/FeedbackPie';
import { TimeChart } from '../../components/TimeChart/TimeChart';
import { Button } from '../../components/GlobalStyle/Button';
import { Loader } from '../../components/Loader/Loader';
import { StatisticSection } from './StatisticPage.Styled';
import { getAllNotes } from '../../services/API';

export const StatisticPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [notes, setNotes] = useState(null);
  const [visibleChart, setVisibleChart] = useState('source');
  const { user } = useUserContext();

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const newNotes = await getAllNotes();
        setNotes(newNotes.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
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
        {window.innerWidth > 560 && (
          <li>
            <Button data="time" onClick={handleClick}>
              Динаміка відгуків
            </Button>
          </li>
        )}
      </ul>

      {!isLoading && (
        <div>
          {notes && visibleChart === 'source' && <SourceBar notes={notes} />}
          {notes && visibleChart === 'pie' && <FeedbackPie notes={notes} />}
          {notes && visibleChart === 'time' && <TimeChart notes={notes} />}
        </div>
      )}

      <Loader loading={isLoading} />
    </StatisticSection>
  );
};
