export interface MenuItemProps {
  icon?: any;
  items: Array<{
    title: string;
    action: Function;
  }>;
}
