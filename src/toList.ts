type ListItem<T> = {
  [key: string]: T;
};
type List<T> = ListItem<T>[];

export const toList = <T>(list: List<T>, index: string) => {
  if (!list.length || !String) return [];
  return Array.from(list, (item) => item[index]);
};
