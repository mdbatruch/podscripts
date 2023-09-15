
export const formatDate = (date: string): string => {
  if (!date) return '';
  
  const dateObject = new Date(date);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const year = dateObject.getFullYear();
  const month = months[dateObject.getMonth()];
  const day = String(dateObject.getDate())

  return `${month} ${day} ${year}`;
};
