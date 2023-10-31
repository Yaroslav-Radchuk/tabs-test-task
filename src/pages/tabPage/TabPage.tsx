import { useParams } from 'react-router-dom';

import { Tabs } from '../../components/tabs/Tabs';
import { Tab } from '../../types/TabData';

type TabsProps = {
  tabs: Tab[]
}

export const TabPage: React.FC<TabsProps> = ({ tabs }) => {
  const { tabId = 'chart' } = useParams()

  return (
    <Tabs
      tabs={tabs}
      selectedTabId={tabId}
    />
  )
}
