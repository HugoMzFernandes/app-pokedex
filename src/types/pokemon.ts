export interface Pokemon {
  name: string;
  id: number;
  type: string;
  stats: {
    baseStat: number,
    name: string,
  }[];
  imageUrl: string;
}