import PropTypes from 'prop-types';
import React, { useId } from 'react';

const Input = React.forwardRef(function Input(
  {
    label,
    type = 'text',
    className = '', // Corrected casing
    ...props // Corrected prop spread naming
  },
  ref
) {
  const id = useId();

  return (
    <div className="w-full">
      {label && (
        <label className="inline-block mb-1 pl-1" htmlFor={id}>
          {label}
        </label>
      )}

      <input
        type={type}
        id={id} // Added id for accessibility
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        ref={ref}
        {...props} // Spread additional props correctly
      />
    </div>
  );
});

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
};

export default Input;
