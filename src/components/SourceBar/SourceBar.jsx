import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { BarSection } from './SourceBar.Styled';
import { useEffect, useState } from 'react';
import { checkColor } from '../../helpers';
import PropTypes from 'prop-types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const SourceBar = ({ notes }) => {
  const [status, setStatus] = useState('Усі');
  const [dataset, setDataset] = useState({});

  useEffect(() => {
    if (status === 'Усі') {
      setDataset(
        notes.reduce((acc, note) => {
          return {
            ...acc,
            [note.source]: acc[note.source] > 0 ? acc[note.source] + 1 : 1,
          };
        }, {})
      );
    } else {
      setDataset(
        notes
          .filter(note => note.status === status)
          .reduce((acc, note) => {
            return {
              ...acc,
              [note.source]: acc[note.source] > 0 ? acc[note.source] + 1 : 1,
            };
          }, {})
      );
    }
  }, [notes, status]);

  const options = {
    responsive: true,
    color: '#ffffff',
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
      yAxes: {
        ticks: {
          beginAtZero: true,
          color: '#ffffff',
          fontSize: 16,
        },
      },
      xAxes: {
        ticks: {
          beginAtZero: true,
          color: '#ffffff',
          fontSize: 16,
        },
      },
    },
  };

  const labels = notes.reduce((acc, note) => {
    if (acc.includes(note.source)) {
      return acc;
    } else {
      return [...acc, note.source];
    }
  }, []);

  const data = {
    labels,
    datasets: [
      {
        label: status,
        data: dataset,
        backgroundColor: checkColor(status),
      },
    ],
  };

  const onChange = e => {
    setStatus(e.target.defaultValue);
  };

  return (
    <BarSection>
      <form onChange={onChange}>
        <label>
          Усі
          <input type="radio" value="Усі" name="status" defaultChecked></input>
        </label>
        <label>
          Надіслано
          <input type="radio" value="Надіслано" name="status"></input>
        </label>
        <label>
          Відхилено
          <input type="radio" value="Відхилено" name="status"></input>
        </label>
        <label>
          Розглядається
          <input type="radio" value="Розглядається" name="status"></input>
        </label>
        <label>
          Дзвінок рекрутера
          <input type="radio" value="Дзвінок рекрутера" name="status"></input>
        </label>
        <label>
          Інтерв'ю
          <input type="radio" value="Інтерв'ю" name="status"></input>
        </label>
        <label>
          Тестове завдання
          <input type="radio" value="Тестове завдання" name="status"></input>
        </label>
        <label>
          Прийнято
          <input type="radio" value="Прийнято" name="status"></input>
        </label>
      </form>
      <div>
        <Bar options={options} data={data} />
      </div>
    </BarSection>
  );
};

SourceBar.propTypes = {
  notes: PropTypes.array,
};
