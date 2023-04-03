export const formatDate = (date: string) => {
  const d = new Date(date);
  const day = d.getDate();
  const month = d.getMonth() + 1;
  const year = d.getFullYear();
  return `${day}-${month}-${year}`;
};

export const getLabel = (date: string) => {
  // if the date is more than 5 day ago, return the new string else return the old string
  const d = new Date(date);
  if (d.getTime() > Date.now() - 5 * 24 * 60 * 60 * 1000) return "new";
  return "old";
};
