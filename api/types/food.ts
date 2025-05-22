export interface Food {
  id: number;
  name: string;
  category: string;
  description?: string;
  nutritionalValue?: string;
  origin?: string;
  imageUrl?: string;
  // Vous pouvez ajouter d'autres propriétés pertinentes selon vos besoins
}
