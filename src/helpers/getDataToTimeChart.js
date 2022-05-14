import { checkColor } from './checkColor';

export const getDataToTimeChart = notes => {
  const statuses = [
    'Надіслано',
    'Відхилено',
    'Розглядається',
    'Дзвінок рекрутера',
    "Інтерв'ю",
    'Тестове завдання',
    'Прийнято',
  ];

  const data = [];

  statuses.map(status => {
    const filteredNotes = notes.filter(note => note.status === status);
    const filteredData = filteredNotes.reduce((acc, note) => {
      return {
        ...acc,
        [new Date(note.date).toLocaleString().slice(0, 10)]:
          acc[new Date(note.date).toLocaleString().slice(0, 10)] > 0
            ? acc[new Date(note.date).toLocaleString().slice(0, 10)] + 1
            : 1,
      };
    }, {});

    data.push({
      label: status,
      data: filteredData,
      backgroundColor: checkColor(status),
      borderColor: checkColor(status),
      tension: 0.4,
    });
  });

  return [
    ...data,
    {
      label: 'Усі',
      data: notes.reduce((acc, note) => {
        return {
          ...acc,
          [new Date(note.date).toLocaleString().slice(0, 10)]:
            acc[new Date(note.date).toLocaleString().slice(0, 10)] > 0
              ? acc[new Date(note.date).toLocaleString().slice(0, 10)] + 1
              : 1,
        };
      }, {}),
      backgroundColor: '#edeff2',
      borderColor: '#edeff2',
      tension: 0.4,
    },
  ];
};
