export default function formatPrice({ value, style = 'pt-BR', currency = 'BRL' }) {
  const { format } = new Intl.NumberFormat(style, {
    style: 'currency',
    currency,
  });
  return format(value);
}
