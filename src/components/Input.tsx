"use client";

import React, { InputHTMLAttributes } from 'react';

interface SimpleMinimalInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const SimpleMinimalInput: React.FC<SimpleMinimalInputProps> = ({ label, id, name, ...inputProps }) => {
  return (
    <div className="relative mb-6">
      <input
        id={id || name}
        name={name}
        {...inputProps}
        className="h-12 w-full border-2 focus:border-[#1C3676] rounded-md px-4 py-2 text-gray-900 focus:outline-none transition-all duration-200"
        placeholder={label}
      />
    </div>
  );
};

export default SimpleMinimalInput;
