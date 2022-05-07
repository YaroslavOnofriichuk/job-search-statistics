import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { PieSection } from './FeedbackPie.Styled';
import { useEffect, useState } from 'react';
import { checkColor } from '../../helpers';
import PropTypes from 'prop-types';

ChartJS.register(ArcElement, Tooltip, Legend);

export const FeedbackPie = ({ notes }) => {
  const [dataset, setDataset] = useState({});

  useEffect(() => {
    setDataset(
      notes.reduce((acc, note) => {
        return {
          ...acc,
          [note.status]: acc[note.status] > 0 ? acc[note.status] + 1 : 1,
        };
      }, {})
    );
  }, [notes]);

  const labels = Object.keys(dataset);

  const data = {
    labels: labels,
    datasets: [
      {
        data: Object.values(dataset),
        backgroundColor: labels.map(key => (key = checkColor(key))),
        borderColor: labels.map(key => (key = checkColor(key))),
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    color: '#ffffff',
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `Всього відгуків ${notes.length}`,
        color: '#ffffff',
      },
    },
  };

  return (
    <PieSection>
      <Doughnut data={data} options={options} />
    </PieSection>
  );
};

FeedbackPie.propTypes = {
  notes: PropTypes.array,
};
