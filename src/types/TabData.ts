export type Tab = {
  id: string;
  title: string;
  path: string;
  order?: number;
  icon?: React.ComponentType<{ size: number }>;
}
