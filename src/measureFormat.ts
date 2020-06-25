export const measureFormat = (value: number = 0): string => {
  const ranges = [
    { divider: 1e18, suffix: 'E' },
    { divider: 1e15, suffix: 'P' },
    { divider: 1e12, suffix: 'T' },
    { divider: 1e9, suffix: 'G' },
    { divider: 1e6, suffix: 'M' },
    { divider: 1e3, suffix: 'k' },
  ];
  
  for (let i = 0; i < ranges.length; i += 1) {
    if (value >= ranges[i].divider) {
      return (value / ranges[i].divider).toFixed(0) + ranges[i].suffix;
    }
  }
  return value.toString();
}
