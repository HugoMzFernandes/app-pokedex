import { Pokemon } from "./pokemon";

export interface PokemonApiResponse<T> {
  data: T | Pokemon,
  error: string | unknown;
  status: number;
  message: string;
}