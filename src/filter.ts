interface ArrayData {
  value: string
}
export const filter = (array: ArrayData[], value: string, param: string) => {
  return array
    ? array.filter(
      (element: ArrayData) =>
        element[param].toLowerCase().indexOf(value.toLowerCase()) !== -1
    )
    : [];
}
