import {
  eachDayOfInterval,
  eachMonthOfInterval,
  eachWeekOfInterval,
  eachYearOfInterval,
} from 'date-fns';

export const generateTimeLabels = (period, notes) => {
  if (notes.length > 0) {
    if (period === 'day') {
      const result = eachDayOfInterval({
        start: new Date(notes[0].date),
        end: new Date(notes[notes.length - 1].date),
      });
      return result;
    } else if (period === 'week') {
      const result = eachWeekOfInterval({
        start: new Date(notes[0].date),
        end: new Date(notes[notes.length - 1].date),
      });
      return result;
    } else if (period === 'month') {
      const result = eachMonthOfInterval({
        start: new Date(notes[0].date),
        end: new Date(notes[notes.length - 1].date),
      });
      return result;
    } else if (period === 'year') {
      const result = eachYearOfInterval({
        start: new Date(notes[0].date),
        end: new Date(notes[notes.length - 1].date),
      });
      return result;
    } else return [];
  } else return [];
};
