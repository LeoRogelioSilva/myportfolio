import React from "react";
import "./Input.css";

interface InputProps {
  type: "text" | "number";
  value: string | number;
  onChange: (value: string | number) => void;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  value,
  onChange,
  placeholder,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue =
      type === "number" ? Number(event.target.value) : event.target.value;
    onChange(inputValue);
  };

  return (
    <input
      type={type}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      className="input"
    />
  );
};

export default Input;
