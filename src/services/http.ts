export async function http<T>(param: string, endpoint: string): Promise<T> {
  const response = await fetch(urls[param](endpoint));
  const body = await response.json();
  return body;
};

const urls = {
  cep: (endpoint: string) => `https://viacep.com.br/ws/${endpoint}/json/`,
  ibge: (endpoint: string) => `https://servicodados.ibge.gov.br/api/v1/${endpoint}`
};
