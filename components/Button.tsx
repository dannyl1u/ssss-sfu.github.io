interface ButtonProps {
  label: string;
  type?: string;
}

export const Button: React.FC<ButtonProps> = ({ label, type = "primary" }) => {
  return <button className={`btn ${type}`}>{label}</button>;
};

export default Button;
