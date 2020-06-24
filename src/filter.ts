interface ArrayData {
  value: string
}
export const filter = (array: ArrayData[], value: string) => {
  return array
    ? array.filter(
      element =>
        element.value.toLowerCase().indexOf(value.toLowerCase()) !== -1
    )
    : [];
}
