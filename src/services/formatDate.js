import { format, parse } from 'fecha';

export const formatDate = date => {
  // const formatedDate = format(new Date(date.toString()), 'dddd MMMM Do, YYYY');
  // const parsedDate = parse(date.toString(), 'isoDateTime');
  // console.log('parsedDate', parsedDate);
  // console.log('formatedDate', formatedDate);
  console.log('date', date.toLocaleDateString());
  return date;
};
