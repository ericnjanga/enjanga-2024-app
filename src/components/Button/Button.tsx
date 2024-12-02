import { ButtonProps } from "../../models";

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  label = "Button",
  neonVersion = false,
}) => {
  const classNames = `btn btn-${variant} btn-${size} ${
    neonVersion ? "btn-neon" : ""
  }`;

  return <button className={classNames}>{label}</button>;
};

export default Button;
