// components/SelectField.tsx

import React from 'react';

// Define types for the props
interface Option {
  label: string;
  value: string;
}

interface SelectFieldProps {
  label?: string;
  options: Option[];
  onChange: (value: string) => void;
  value: string;
  disabled?: boolean;
}

const Select: React.FC<SelectFieldProps> = ({ label, options, onChange, value, disabled }) => {
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value); // Pass the selected value to the onChange function
  };

  return (
    <div>
      {label && <label>{label}</label>}
      <select
        value={value}
        onChange={handleSelectChange}
        disabled={disabled}
        style={{
          padding: '8px',
          marginTop: '5px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          width: '100%',
        }}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
