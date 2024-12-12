import { HeadingProps } from "../../models";
import Icon from "../Icons/icons";
import "./Heading.scss";  

const Heading = ({ h = '5', className = '', iconName, children }: HeadingProps) => {  
  
  // Dynamically resove the tag
  const Tag = `h${h}` as keyof JSX.IntrinsicElements;
  const prefix = 'Heading--';
  const hClass = `${prefix}${h}`;
  const iconClass = `${(iconName ? `${prefix}${iconName}` : '')}`;
 
  return (
    <Tag className={`Heading ${hClass} ${iconClass} ${className}`}>
      {iconName && 
        <Icon name={iconName} className="icon" />
      }
      { children }
    </Tag>
  );
};

export default Heading;
