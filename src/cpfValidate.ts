export const  validateCpf = (cpf: string) => {
  let sum;
  let calc;
  const cpfSerialized = cpf.replace(/_|\.|-/g, '');
  sum = 0;
  if (cpfSerialized === '00000000000') return false;

  for (let i = 1; i <= 9; i += 1) { sum += Number(cpfSerialized.substring(i - 1, i)) * (11 - i); }
  calc = (sum * 10) % 11;

  if (calc === 10 || calc === 11) calc = 0;
  if (calc !== Number(cpfSerialized.substring(9, 10))) return false;

  sum = 0;
  for (let i = 1; i <= 10; i += 1) { sum += Number(cpfSerialized.substring(i - 1, i)) * (12 - i); }
  calc = (sum * 10) % 11;

  if (calc === 10 || calc === 11) calc = 0;
  if (calc !== Number(cpfSerialized.substring(10, 11))) return false;
  return true;
}
