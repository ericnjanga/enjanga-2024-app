import { InputFieldProps } from "../../../models";
import "./InputField.scss";

const InputField: React.FC<InputFieldProps> = ({
  description,
  className,
  type = "text",
  elementType = "input",
  options = [],
  meta,
  ...field
}) => {
  const isInvalid = meta.touched && meta.error;

  return (
    <div>
      {elementType === 'textarea' ? (
        <textarea 
          {...field} 
          className={`${className || 'form-control'} ${isInvalid ? 'is-invalid' : ''}`} 
        />
      ) : elementType === 'select' ? (
        <select
          {...field}
          className={`${className || 'form-select'} ${isInvalid ? 'is-invalid' : ''}`} 
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input 
          {...field} 
          type={type} 
          className={`${className || 'form-control'} ${isInvalid ? 'is-invalid' : ''}`} 
        />
      )}

      {isInvalid && <div className='invalid-feedback'>{meta.error}</div>}

      {description && (
        <small id={description} className='form-text text-muted'>
          {description}
        </small>
      )}
    </div>
  );
};

export default InputField;
