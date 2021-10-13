const getPositive = (value: number): Number[] =>
  Array.apply(null, Array(value + 1)).map((_: any, i: number) => i);
const getNegative = (value: number): Number[] =>
  Array.apply(null, Array(value + 1)).map((_: any, i: number) => -i);
const formatYears = (positive: Number[], negative: Number[]) =>
  positive
    .concat(negative)
    .reduce(
      (unico: Number[], item: number) =>
        unico.includes(item) ? unico : [...unico, item],
      []
    )
    .sort((a: number, b: number) => a - b);

export const years = (after: number = 0, before: number = 0): Number[] => {
  const date: Date = new Date();
  const positive: Number[] = getPositive(after);
  const negative: Number[] = getNegative(before);
  const yearsAfter: Number[] = positive.map(
    (year: number) => date.getFullYear() + year
  );
  const yearsBefore: Number[] = negative.map(
    (year: number) => date.getFullYear() + year
  );
  const years: Number[] = formatYears(yearsAfter, yearsBefore);
  return years;
};
