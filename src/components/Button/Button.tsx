import { ButtonProps } from "../../models";
import Icon from "../Icons/icons";
import './Button.scss';

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  neonVersion = false,
  children = "Button",
  href,
  ariaLabel,
  target,
  onClickHandler,
  icon
}) => {
  const baseClass = `btn btn-${variant} btn-${size}`;
  const classNames = neonVersion ? `${baseClass} btn-neon` : baseClass;

  const commonProps = {
    className: classNames,
    "aria-label": ariaLabel,
    onClick: onClickHandler,
  };

  return href ? (
    <a 
      href={href} 
      target={target}
      {...commonProps}
    >
      {children}
      {icon && 
      <Icon name={icon} className="icon" />}
    </a>
  ) : (
    <button {...commonProps}>
      {children}
      {icon && 
      <Icon name={icon} className="icon" />}
    </button>
  );
};

export default Button;

 