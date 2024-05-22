import useSWR from 'swr'
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function getPokemonByName(name: string) {
  try {
    const response = await fetch(`http://127.0.0.1:3000/v1/getPokemonByName/${name}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch data`);
    }

    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(`An error occurred while fetching data: ${error.message}`);
  }
}

export function useGetPokemonByName<T>(name: string) {
  const { data, isLoading, error } = useSWR<T>(name, async () => {
    try {
      return await getPokemonByName(name);
    } catch (error) {
        throw error;
    }
  },{
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });

  return { data, isLoading, error };
}


