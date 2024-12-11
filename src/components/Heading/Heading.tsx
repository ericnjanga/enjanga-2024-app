import { HeadingProps } from "../../models";
import "./Heading.scss";  

const Heading = ({ h = '5', className = '', children }: HeadingProps) => {  
  
  // Dynamically resove the tag
  const Tag = `h${h}` as keyof JSX.IntrinsicElements;
 
  return (
    <Tag className={`Heading Heading--${h} ${className}`}>
      { children }
    </Tag>
  );
};

export default Heading;
