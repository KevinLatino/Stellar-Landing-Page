"use client";
import React, { TextareaHTMLAttributes, useState, useEffect } from 'react';

interface FloatingLabelTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

const FloatingLabelTextarea: React.FC<FloatingLabelTextareaProps> = ({ label, value, onChange, ...textareaProps }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  useEffect(() => {
    setHasValue(!!value);
  }, [value]);

  return (
    <div className="relative mb-6">
      <textarea
        {...textareaProps}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="block w-full px-4 pb-2 pt-6 bg-transparent border-2 border-[#1C3676] rounded-md appearance-none focus:outline-none focus:border-blue-500 resize-vertical transition-all duration-200"
      />
      <label
        className={`absolute left-4 top-4 text-gray-600 text-sm transition-all duration-200 ${
          isFocused || hasValue ? 'top-0 text-xs text-blue-500' : ''
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingLabelTextarea;
