const getNumberArray = (value: number, param: number): Number[] =>
  Array.apply(null, Array(value + 1)).map((_: any, i: number) => i * param);
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
  const positive = getNumberArray(after, 1);
  const negative = getNumberArray(before, -1);
  const yearsAfter = positive.map((year: number) => date.getFullYear() + year);
  const yearsBefore = negative.map((year: number) => date.getFullYear() + year);
  const years = formatYears(yearsAfter, yearsBefore);
  return years;
};
