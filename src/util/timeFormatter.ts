import moment from 'moment';

export const formatDateTime = (date: Date) => {
  return moment(date).format('MMMM Do YYYY h:mm:ss a');
};

export const formatDate = (date: Date) => {
  return moment(date).format('Do MMMM YYYY');
};

export const formatTime = (date: Date) => {
  return moment(date).format('hh:mm a');
};
