export const formatPrice = ({ value = 0, style = 'pt-BR', currency = 'BRL' } = {}) => {
  const { format } = new Intl.NumberFormat(style, {
    style: 'currency',
    currency,
  });
  return format(value);
}
