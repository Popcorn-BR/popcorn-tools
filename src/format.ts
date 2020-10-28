import { isRequired } from ".";
import { ICurrency, ILocale } from "./types/interfaces";

type Params = {
  value: number;
  locales: string | ILocale;
  currencys: ICurrency | string;
};

export const currencyFormat = ({
  value = isRequired(ErrorMessages.parameter),
  locales = isRequired(ErrorMessages.parameter),
  currencys = { currency: "", country: "" },
}: Params): string => {
  let locale;
  let currency;

  if (typeof locales === "string") {
    locale = locales;
  } else {
    const { locale: l } = locales;
    locale = l;
  }

  if (typeof currencys === "string") {
    locale = currencys;
  } else {
    const { currency: c } = currencys;
    currency = c;
  }

  const { format } = new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  });
  return format(value);
};

export const dateFormat = ({
  value = isRequired(ErrorMessages.parameter),
  locales = isRequired(ErrorMessages.parameter),
}: Params): string => {
  let locale;

  if (typeof locales === "string") {
    locale = locales;
  } else {
    const { locale: l } = locales;
    locale = l;
  }

  const { format } = new Intl.DateTimeFormat(locale);
  return format(value);
};
