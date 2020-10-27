export interface ILocation {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  unidade: string;
  ibge: string;
  gia: string;
}

export interface IQuery {
  uf: string;
  city: string;
  street: string;
}

interface IRegiao {
  id: 1;
  sigla: string;
  nome: string;
}
export interface IUF {
  id: number;
  sigla: string;
  nome: string;
  regiao: IRegiao;
}

interface IMesorregiao {
  id: number;
  nome: string;
  UF: IUF;
}

interface IMicrorregiao {
  id: number;
  nome: string;
  mesorregiao: IMesorregiao;
}

export interface IMunicipio {
  id: number;
  nome: string;
  microrregiao: IMicrorregiao;
}

export interface ILocale {
  language: string;
  locale: string;
  code: string;
}

export interface ICurrency {
  country: string;
  currency: string;
}
