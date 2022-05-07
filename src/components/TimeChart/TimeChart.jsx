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
import 'chartjs-adapter-date-fns';
import { uk, enGB } from 'date-fns/locale';

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
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
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
        adapters: {
          date: { locale: uk },
          type: 'time',
          distribution: 'linear',
          time: {
            parser: 'yyyy-MM-dd',
            unit: 'month',
          },
        },
      },
    },
  };

  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
  ];

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [1, 2, 3, 2],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: [1, 2, 3, 8],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  // const options = {
  //   scales: {
  //     y: {
  //       title: { display: true, text: 'Weight in lbs' },
  //     },
  //     x: {
  //       adapters: {
  //         date: { locale: enGB },
  //         type: 'time',
  //         distribution: 'linear',
  //         time: {
  //           parser: 'yyyy-MM-dd',
  //           unit: 'month',
  //         },
  //         title: {
  //           display: true,
  //           text: 'Date',
  //         },
  //       },
  //     },
  //   },
  // };

  // const data = {
  //   datasets: [
  //     {
  //       label: 'Check-Ins',
  //       data: goalCheckIns,
  //       borderColor: 'rgb(53, 162, 235)',
  //       backgroundColor: 'rgba(53, 162, 235, 0.5)',
  //       showLine: true,
  //     },
  //     {
  //       label: 'Goal',
  //       data: [
  //         { x: startDate, y: currentWeight },
  //         { x: endDate, y: currentGoal.goal_weight },
  //       ],
  //       borderColor: '#FFCE0E',
  //       backgroundColor: '#FFCE0E',
  //       borderDash: [3],
  //     },
  //   ],
  // };

  return <Line options={options} data={data} />;
};
