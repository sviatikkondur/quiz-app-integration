export const formatDate = (date: string) => {
  const [day, month, year]: number[] = date.split('.').map(Number);

  const dateObject: Date = new Date(year, month - 1, day);

  const monthN = dateObject.toLocaleString("en-US", { month: "long" });

  return `${day} ${monthN} ${year}`;
};
