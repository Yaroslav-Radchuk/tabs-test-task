import { useNavigate } from 'react-router-dom';

import img from './img/not-found.png';
import './PageNotFound.scss';

export const PageNotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="error">
      <img className="error__img" src={img} alt="Not Found" />
      <button className="error__btn" onClick={() => navigate('/')}>
        <p className="error__btn-text">Back to homepage</p>
        <span className="error__btn-iconer"></span>
      </button>
    </div>
  );
};
