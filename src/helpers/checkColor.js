export const checkColor = status => {
  if (status === 'Прийнято') {
    return '#56b858';
  } else if (status === 'Відхилено') {
    return '#b84956';
  } else {
    return '#6a92d4';
  }
};
