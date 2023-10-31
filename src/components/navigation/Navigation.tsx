import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import './Navigation.scss';

export const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="navigation__container">
        <div className="navigation__image">
          <img
            className="navigation__logo"
            src="https://user-images.githubusercontent.com/83658914/117029417-3c4a4580-acc4-11eb-95f9-0f3805b6c430.png"
            alt="logo"
          />
        </div>
        <div className="navigation__link">
          <NavLink
            to="/"
            className={({ isActive }) =>
              classNames('navigation__item', { 'is-active': isActive })
            }
          >
            Home
          </NavLink>

          <NavLink
            to="tabs"
            className={({ isActive }) =>
              classNames('navigation__item', { 'is-active': isActive })
            }
          >
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
