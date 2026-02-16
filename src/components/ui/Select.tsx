import React from "react";

interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> { }

export const Select = ({ className = "", children, ...props }: SelectProps) => {
  return (
    <div>
      <select
        
        className={`border p-2 rounded w-full ${className}`}
        {...props}
      >
        {children}
      </select>
    </div>
  );
};
