export interface GameStructure {
  game: string;
  avatar: string;
  date: Date;
  hour: string;
  bio: string;
  plazasLibres: number;
}

export type GamesStructure = GameStructure[];
