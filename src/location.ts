import { isRequired } from "./required";
import { http } from "./services/http";
import { IQuery, ILocation } from "./types/interfaces";

type LocationType = {
  cep: string;
  query: IQuery;
};

export const location = async ({ cep, query }: LocationType) => {
  try {
    if (query) return getQuery(query);
    else return getCep(cep);
  } catch (error) {
    return { msg: ErrorMessages.request };
  }
};

const getQuery = async ({ uf, city, street }: IQuery) => {
  try {
    if (!uf || !city || !street) throw new Error(ErrorMessages.parameter);
    return await http<ILocation[]>("cep", `${uf}/${city}/${street}`);
  } catch (error) {
    return { msg: ErrorMessages.request };
  }
};

const getCep = async (cep: string = isRequired('CEP é obrigatório')) => {
  const cepSerialized = cep.replace(/( )|-|_/g, "");
  try {
    if (!cepSerialized || cepSerialized.length < 8)
      throw new Error(ErrorMessages.parameter);
    return await http<ILocation>("cep", cepSerialized);
  } catch (error) {
    return { msg: ErrorMessages.request };
  }
};
