export const checkColor = status => {
  if (status === 'Прийнято') {
    return '#56b858';
  } else if (status === 'Відхилено') {
    return '#b84956';
  } else if (status === 'Розглядається') {
    return '#6a92d4';
  } else if (status === 'Дзвінок рекрутера') {
    return '#d5db25';
  } else if (status === "Інтерв'ю") {
    return '#eba946';
  } else if (status === 'Тестове завдання') {
    return '#84f59e';
  } else {
    return '#8a9ab5';
  }
};
