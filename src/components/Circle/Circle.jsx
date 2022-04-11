import { PieChart } from 'react-minimal-pie-chart';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { useUserContext } from '../../userContext/userContext';

export const Circle = () => {
  const [status, setStatus] = useState({
    sent: 0,
    rejected: 0,
    considered: 0,
    call: 0,
    interview: 0,
    test: 0,
    offer: 0,
  });
  const { user } = useUserContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, user.id));
        const notes = [];
        querySnapshot.forEach(doc => notes.push(doc.data()));
        setStatus({
          sent: notes.filter(note => note.status === 'Надіслано').length,
          rejected: notes.filter(note => note.status === 'Відхилено').length,
          considered: notes.filter(note => note.status === 'Розглядається')
            .length,
          call: notes.filter(note => note.status === 'Дзвінок рекрутера')
            .length,
          interview: notes.filter(note => note.status === "Інтерв'ю").length,
          test: notes.filter(note => note.status === 'Тестове завдання').length,
          offer: notes.filter(note => note.status === 'Прийнято').length,
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
    { title: 'Надіслано', value: status.sent, color: '#8a9ab5' },
    { title: 'Відхилено', value: status.rejected, color: '#b84956' },
    { title: 'Розглядається', value: status.considered, color: '#6a92d4' },
    { title: 'Дзвінок рекрутера', value: status.call, color: '#d5db25' },
    { title: "Інтерв'ю", value: status.interview, color: '#eba946' },
    { title: 'Тестове завдання', value: status.test, color: '#84f59e' },
    { title: 'Прийнято', value: status.offer, color: '#56b858' },
  ];

  return (
    <>
      <PieChart
        data={data}
        background="transparent"
        radius={60}
        lineWidth="5"
        label={({ dataEntry }) => Math.round(dataEntry.percentage) + '% '}
        labelStyle={{
          fontSize: '10px',
          fill: '#ffffff',
        }}
        labelPosition={80}
        viewBoxSize={[150, 150]}
        center={[75, 75]}
      />
      <ul>
        <li>
          <span style={{ background: '#8a9ab5' }}></span>
          <span>&nbsp;Надіслано</span>
        </li>
        <li>
          <span style={{ background: '#b84956' }}></span>
          <span>&nbsp;Відхилено</span>
        </li>
        <li>
          <span style={{ background: '#6a92d4' }}></span>
          <span>&nbsp;Розглядається</span>
        </li>
        <li>
          <span style={{ background: '#d5db25' }}></span>
          <span>&nbsp;Дзвінок рекрутера</span>
        </li>
        <li>
          <span style={{ background: '#eba946' }}></span>
          <span>&nbsp;Інтерв'ю</span>
        </li>
        <li>
          <span style={{ background: '#84f59e' }}></span>
          <span>&nbsp;Тестове завдання</span>
        </li>
        <li>
          <span style={{ background: '#56b858' }}></span>
          <span>&nbsp;Прийнято</span>
        </li>
      </ul>
    </>
  );
};
