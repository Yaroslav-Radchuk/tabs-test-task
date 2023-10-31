import { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { TabPage } from './pages/tabPage/TabPage';
import { HomePage } from './pages/homePage/HomePage';
import { PageNotFound } from './pages/pageNotFound/PageNotFound';
import { Navigation } from './components/navigation/Navigation';
import { getTabs } from './utils';

import './App.scss';
import { Tab } from './types/TabData';

function App() {
  const [tabs, setTabs] = useState<Tab[]>([]);

  useEffect(() => {
    getTabs().then((value) => {
      setTabs(value as Tab[]);
    });
  }, [])

  return (
    <div className="app">
      <Navigation />
      <Routes>
        <Route path="tabs">
          <Route index element={<TabPage tabs={tabs} />} />
          <Route path=":tabId" element={<TabPage tabs={tabs} />} />
        </Route>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="home" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
