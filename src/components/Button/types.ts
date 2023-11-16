export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: string;
  iconAlt?: string;
  onClick: VoidFunction;
}
