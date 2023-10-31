type Nutrients = {
  CHOCDF: number;
  ENERC_KCAL: number;
  FAT: number;
  FIBTG: number;
  PROCNT: number;
}

type Food = {
  category: string;
  categoryLabel: string;
  foodId: string;
  image: string;
  knownAs: string;
  label: string;
  nutrients: Nutrients;
  uri: string;
}

type Measures = {
  label: string;
  uri: string;
  weight: number;
}

export interface FoodDataType {
  food: Food;
  measures: Measures[];
}
