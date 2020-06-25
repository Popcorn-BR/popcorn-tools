export const currencyFormat = ({ value = 0, style = 'pt-BR', currency = 'BRL' } = {}): string => {
  const { format } = new Intl.NumberFormat(style, {
    style: 'currency',
    currency,
  });
  return format(value);
}
