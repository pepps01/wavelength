interface InputProps {
    name: string;
    type: string;
    placeholder: string;
    label?: string;
    className?: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
  
  const Input2: React.FC<InputProps> = ({
    name,
    type,
    placeholder,
    label,
    className = '',
    value,
    onChange,
  }) => {
    return (
      <div className="mb-4">
        <label htmlFor={name} className="block text-gray-700 mb-2">
          {label}
        </label>
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`border rounded px-4 py-2 w-full ${className}`}
        />
      </div>
    );
  };
  
  export default Input2;