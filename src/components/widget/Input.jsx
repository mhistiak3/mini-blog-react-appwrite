import { forwardRef, useId } from "react";

export const Input = forwardRef(
  ({ label, type = "text", classNames = "", ...props }, ref) => {
    const id = useId();
    return (
      <div className="w-full">
        {label && (
          <label className="block font-medium text-gray-800 mb-1" htmlFor={id}>
            {label}
          </label>
        )}
        <input
          type={type}
          ref={ref}
          className={`w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition duration-200 ease-in-out ${classNames}`}
          {...props}
          id={id}
          required
        />
      </div>
    );
  }
);
