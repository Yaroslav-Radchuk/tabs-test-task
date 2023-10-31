import { useEffect, useState } from 'react';

import { getMovie } from '../../api/fetch';
import { MovieData } from '../../types/MovieData';

import './MovieCard.scss';

const MovieCard = () => {
  const [movies, setMovies] = useState<MovieData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMovie();
        setMovies(data.d);
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
        {movies?.map(({ l, i, s, y }) => {
          const titlelength = l.length > 45 ? `${l.slice(0, 38)}...` : l;

          if (i && i.imageUrl) {
            return (
              <div className="card-movie">
                <img
                  className="card-movie__image"
                  src={i.imageUrl}
                  alt="movie img"
                />
                <div className="card-movie__container">
                  <span className="card-movie__label">
                    Name:
                    <p className="card-movie__paragraph">{titlelength}</p>
                  </span>
                  <span className="card-movie__label">
                    Actors:
                    <p className="card-movie__paragraph">{s}</p>
                  </span>
                  <span className="card-movie__label">
                    Year:
                    <p className="card-movie__paragraph">{y}</p>
                  </span>
                </div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export default MovieCard;
