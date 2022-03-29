import { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';
import { dataToSchedule } from '../../helpers/dataToSchedule';

export const FeedbackSchedule = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    try {
      const notes = JSON.parse(localStorage.getItem('data'));
      const newData = dataToSchedule(notes);
      setData(newData);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const options = {
    title: 'Company Performance',
    curveType: 'function',
    legend: { position: 'bottom' },
  };

  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
};
