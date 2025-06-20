import type { Coin, UseCoinsOptions } from "../interfaces/models/coin"
export const useCoins = async (
  options: UseCoinsOptions = {}
): Promise<{
  data: Ref<Coin[] | null>,
  error: Ref<any>,
  status: Ref<'idle' | 'pending' | 'success' | 'error'>
}> => {
  const config = useRuntimeConfig();
  const {
    vs_currency= 'usd',
    order= 'market_cap_desc',
    per_page= 10,
    page= 1,
  } = options;
  const params = new URLSearchParams({
    vs_currency,
    order,
    per_page: per_page.toString(),
    page: page.toString()
  })
  const baseUrl = `${config.public.apiCrypto}/v3/coins/markets`;
  const url = `${baseUrl}?${params.toString()}`;
  const { data ,error, status } = await useFetch<Coin[]>(url);
  return {
    data,
    error,
    status,
  };
}
