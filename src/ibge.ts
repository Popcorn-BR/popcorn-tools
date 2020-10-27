import { http } from "./services/http";
import { IMunicipio, IUF } from "./types/interfaces";

const url = "ibge";

export async function ufs() {
  return await http<IUF>(url, "localidades/estados");
}

export function municipios(uf: string) {
  return http<IMunicipio>(url, `localidades/estados/${uf}/municipios`);
}
