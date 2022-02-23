export interface NavItemProps {
  label: string;
  to: string;
  value: string;
}

export interface NavProps {
  items: NavItemProps[];
}
