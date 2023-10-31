import React, { lazy, useMemo, Suspense } from 'react';

import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { Tab } from '../../types/TabData';

import './Tabs.scss';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId }) => {
  const selectedTab = useMemo(
    () => tabs.find(tab => tab.id === selectedTabId),
    [selectedTabId],
  );
  const TabComponent = selectedTab ? lazy(() => import(`../${selectedTab.path}`)) : null;

  return (
    <div className="tabs">
      <div className="tabs__container">
        <ul className="tabs__content">
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={classNames('tabs__item', {
                'is-active': selectedTab?.id === tab.id,
              })}
            >
              <Link className="tabs__link" to={`/tabs/${tab.id}`}>
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <Suspense>
        {TabComponent ? <TabComponent /> : null}
      </Suspense>
    </div>
  );
};
