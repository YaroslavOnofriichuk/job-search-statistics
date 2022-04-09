import { PieChart } from 'react-minimal-pie-chart';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { useUserContext } from '../../userContext/userContext';
import { StyledLink } from '../GlobalStyle/Link.Styled';

export const Circle = () => {
  const [status, setStatus] = useState({
    pending: 0,
    resolved: 0,
    rejected: 0,
  });
  const { user } = useUserContext();
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, user.id));
        const notes = [];
        querySnapshot.forEach(doc => notes.push(doc.data()));
        setStatus({
          pending: notes.filter(note => note.status === 'В очікуванні').length,
          resolved: notes.filter(note => note.status === 'Прийнято').length,
          rejected: notes.filter(note => note.status === 'Відхилено').length,
        });
      } catch (error) {
        console.log(error);
      }
    };

    if (user) {
      fetchData();
    }
  }, [user]);

  const data = [
    { title: 'В очікуванні', value: status.pending, color: '#6a92d4' },
    { title: 'Прийняті', value: status.resolved, color: '#56b858' },
    { title: 'Відхилені', value: status.rejected, color: '#b84956' },
  ];

  const isVisible =
    status.pending > 0 && status.resolved > 0 && status.rejected > 0;

  return (
    <>
      {isVisible ? (
        <PieChart
          data={data}
          background="transparent"
          radius={70}
          lineWidth="5"
          label={({ dataEntry }) =>
            Math.round(dataEntry.percentage) +
            '% ' +
            dataEntry.title +
            ' відгуки'
          }
          labelStyle={{
            fontSize: '10px',
            fill: '#ffffff',
          }}
          labelPosition={50}
          viewBoxSize={[150, 150]}
          center={[75, 75]}
        />
      ) : (
        <StyledLink to="notes/create" state={{ from: location }}>
          Створити замітку
        </StyledLink>
      )}
    </>
  );
};
