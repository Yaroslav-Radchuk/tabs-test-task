import { useEffect, useState } from 'react';

import { getFoodReceipe } from '../../api/fetch';
import { FoodDataType } from '../../types/FoodData';

import './FoodReceipe.scss';

const FoodReceipe = () => {
  const [foodData, setFoodData] = useState<FoodDataType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getFoodReceipe();
        setFoodData(data.hints);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading && (
        <div className="loader">
          <div className="loader__spinner"></div>
        </div>
      )}
      <div className="cards">
        {foodData?.map(item => {
          return (
            <div className="card">
              {item.food.image ? (
                <img
                  className="card__image"
                  src={item.food.image}
                  alt="food image"
                />
              ) : (
                <img
                  className="card__image card__image_default"
                  src="https://user-images.githubusercontent.com/83658914/117029417-3c4a4580-acc4-11eb-95f9-0f3805b6c430.png"
                  alt="food image"
                />
              )}
              <h1 className="card__title">{item.food.label}</h1>
              <span className="card__label">
                Label:
                <p className="card__paragraph">{item.food.categoryLabel}</p>
              </span>
              <span className="card__label">
                Category:
                <p className="card__paragraph">{item.food.category}</p>
              </span>
              <h2 className="card__title">Nutrients</h2>
              <ul className="card__list">
                <li className="card__list-label">
                  <p className="card__list-title">Energy (kcal):</p>
                  {item.food.nutrients.ENERC_KCAL}
                </li>
                <li className="card__list-label">
                  <p className="card__list-title">Protein:</p>
                  {item.food.nutrients.PROCNT}
                </li>
                <li className="card__list-label">
                  <p className="card__list-title">Fat:</p>
                  {item.food.nutrients.FAT}g
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FoodReceipe;
