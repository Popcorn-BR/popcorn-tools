import { isRequired } from ".";
import { ICurrency, ILocale } from "./types/interfaces";

type Params = {
  value: number;
  locale: ILocale;
  currency: ICurrency;
};

export const currencyFormat = ({
  value = isRequired(ErrorMessages.parameter),
  locale = isRequired(ErrorMessages.parameter),
  currency = { currency: "", country: "" },
}: Params): string => {
  const { locale: l } = locale;
  const { currency: c } = currency;
  const { format } = new Intl.NumberFormat(l, {
    style: "currency",
    currency: c,
  });
  return format(value);
};

export const dateFormat = ({
  value = isRequired(ErrorMessages.parameter),
  locale = isRequired(ErrorMessages.parameter),
}: Params): string => {
  const { locale: l } = locale;
  const { format } = new Intl.DateTimeFormat(l);
  return format(value);
};
