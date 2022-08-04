import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../userContext/userContext';
import { SourceBar } from '../../components/SourceBar/SourceBar';
import { FeedbackPie } from '../../components/FeedbackPie/FeedbackPie';
import { TimeChart } from '../../components/TimeChart/TimeChart';
import { Button } from '../../components/GlobalStyle/Button';
import { Loader } from '../../components/Loader/Loader';
import { StatisticSection } from './StatisticPage.Styled';
import { getAllNotes } from '../../services/API';
import { checkError } from '../../helpers';

export const StatisticPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [notes, setNotes] = useState(null);
  const [visibleChart, setVisibleChart] = useState('source');
  const { user, logOut } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const newNotes = await getAllNotes();
        setNotes(newNotes.data);
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
