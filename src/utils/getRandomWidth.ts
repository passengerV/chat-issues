export const getRandomWidth = (min: number, max: number) => {
  const width = Math.floor(Math.random() * (max - min + 1) + min);
  return `${width}%`;
};
