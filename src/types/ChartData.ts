type CurrencyRate = {
  [currency: string]: number;
};

export type ChartData = {
  timestamp: number;
  base: string;
  success: boolean;
  date: string;
  rates: CurrencyRate;
};
