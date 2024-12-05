import { InputFieldProps } from "../../../models";
import './InputField.scss';


const InputField = ({ id, type, description }: InputFieldProps) => {

  return (
    <>
      {(type === 'text' || type === 'email') && (
        <input type={type} className="form-control" id={id} aria-describedby={description} />
      )}
      {(type === 'textarea') && (
        <textarea className="form-control" id={id} aria-describedby={description}></textarea>  
      )} 
    </>
  );
};


export default InputField;