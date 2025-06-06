import type { Coin } from "~/interfaces/Coin"

export const useCoins = async () => {
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1';
  const { data ,error, status } = await useFetch<Coin[]>(url);
  return {
    data,
    error,
    status,
  };
}
