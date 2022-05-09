import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import { generateTimeLabels, getDataToTimeChart } from '../../helpers';
import { TimeChartSection } from './TimeChart.Styled';
import PropTypes from 'prop-types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const TimeChart = ({ notes }) => {
  const [sortedNotes, setSortedNotes] = useState(
    notes.sort((firstNote, secondNote) =>
      firstNote.date.localeCompare(secondNote.date)
    )
  );
  const [visiblePeriod, setVisiblePeriod] = useState('day');
  const [labels, setLabels] = useState(
    generateTimeLabels(visiblePeriod, sortedNotes)
  );
  const [dataset, setDataset] = useState(getDataToTimeChart(sortedNotes));

  useEffect(() => {
    setSortedNotes(
      notes.sort((firstNote, secondNote) =>
        firstNote.date.localeCompare(secondNote.date)
      )
    );

    setLabels(generateTimeLabels(visiblePeriod, sortedNotes));

    setDataset(getDataToTimeChart(sortedNotes));

    console.log('labels', labels);
    // console.log(dataset);
  }, [notes, sortedNotes, visiblePeriod]);

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

  const data = {
    labels: labels.map(label => (label = label.toLocaleString().slice(0, 10))),
    datasets: dataset,
  };

  const onChange = e => {
    setVisiblePeriod(e.target.defaultValue);
  };

  return (
    <TimeChartSection>
      <form onChange={onChange}>
        <label>
          День
          <input type="radio" value="day" name="period" defaultChecked></input>
        </label>
        <label>
          Тиждень
          <input type="radio" value="week" name="period"></input>
        </label>
        <label>
          Місяць
          <input type="radio" value="month" name="period"></input>
        </label>
        <label>
          Рік
          <input type="radio" value="year" name="period"></input>
        </label>
      </form>
      <div>
        <Line options={options} data={data} />
      </div>
    </TimeChartSection>
  );
};

TimeChart.propTypes = {
  notes: PropTypes.array,
};
