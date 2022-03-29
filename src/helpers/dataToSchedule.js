import { formatDate } from './formatDate';

export const dataToSchedule = notes => {
  const data = [
    ['Тиждень', 'Усі', 'В очікуванні', 'Прийняті', 'Відхилені'],
    ['03.02.2022', 4, 2, 2, 2],
    ['01.03.2022', 1, 3, 2, 2],
    ['03.03.2022', 3, 2, 4, 2],
    ['25.03.2022', 5, 1, 0, 2],
  ];
  return data;
};
