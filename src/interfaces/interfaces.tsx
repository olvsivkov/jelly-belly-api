export type PageNameTypes = 'beans' | 'history' | 'facts' | 'recipes' | 'combinations'

export interface BeansData {
  beanId: number;
  groupName: string[];
  ingredients: string[];
  flavorName: string;
  description: string;
  colorGroup: string;
  backgroundColor: string;
  imageUrl: string;
  glutenFree: boolean;
  sugarFree: boolean;
  seasonal: boolean;
  kosher: boolean;
}

export interface HistoryDataInterface {
  mileStoneId: number;
  year: number;
  description: string;
}

export interface FactsDataInterface {
  factId: number;
  title: string;
  description: string;
}

export interface RecipesDataInterface {
  recipeId: number;
  name: string;
  description: string;
  prepTime: string;
  cookTime: string;
  totalTime: string;
  makingAmount: string;
  imageUrl: string;
  ingredients: string[];
  additions1: string[];
  additions2: string[];
  additions3: string[];
  directions: string[];
  tips: string[];
}

export interface CombinationsDataInterface {
  combinationId: number;
  name: string;
  tag: string;
}

export interface HandleTabChange {
  handleTabChange: (tab: PageNameTypes) => void;
}

