import { Currency } from "./currency";
import { ISO } from "./iso";

type CurrencyFormatParams = {
  value: number;
  style: ISO;
  currency: Currency;
};

export const currencyFormat = ({
  value = 0,
  style = "pt-BR",
  currency = "BRL",
}: CurrencyFormatParams): string => {
  const { format } = new Intl.NumberFormat(style, {
    style: "currency",
    currency,
  });
  return format(value);
};
