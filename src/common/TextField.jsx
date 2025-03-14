import React from "react";

function TextField({
  label,
  name,
  value,
  onChange,
  type = "text",
  pattern,
  maxLength,
}) {
  return (
    <div>
      <div className="space-y-1.5">
        <label htmlFor={name}>{label}</label>
        <input
          required
          className="textField__input"
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          pattern={pattern}
          maxLength={maxLength}
        />
      </div>
    </div>
  );
}

export default TextField;
