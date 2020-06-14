export default function filter(array, value, param) {
  return array
    ? array.filter(
      element =>
        element[param].toLowerCase().indexOf(value.toLowerCase()) !== -1
    )
    : [];
}
