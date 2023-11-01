const apiKey = '7dbb905490msh0887f9c925874e9p1f07abjsn50a5c1ff4189';

const movieUrl = 'https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr';
const foodUrl = 'https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser?nutrition-type=cooking&category%5B0%5D=generic-foods&health%5B0%5D=alcohol-free';
const currencyUrl = 'https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest?from=USD&to=EUR%2CGBP';

const movieOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': apiKey,
    'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
  }
};
const foodOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': apiKey,
    'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
  }
};
const currencyOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': apiKey,
    'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
  }
};

export const getMovie = async () => {
  try {
    const response = await fetch(movieUrl, movieOptions);
    const result = await response.json();

    return result;
  } catch (error) {
    console.error(error);
  }
};

export const getFoodReceipe = async () => {
  try {
    const response = await fetch(foodUrl, foodOptions);
    const result = await response.json();

    return result;
  } catch (error) {
    console.error(error);
  }
};

export const getCurrencyExchange = async () => {
  try {
    const response = await fetch(currencyUrl, currencyOptions);
    const result = await response.json();

    return result;
  } catch (error) {
    console.error(error);
  }
};
