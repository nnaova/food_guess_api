export interface Food {
  id: string;
  name: string;
  description: string;
  isScoring: boolean;
  points: number;
  // Propriété supplémentaire spécifique à l'API mais pas requise par l'application Flutter
  imageUrl?: string;
}
