import { forwardRef, useId } from "react";

export const Input = forwardRef(
  ({ label, type = "text", classNames = "", ...props }, ref) => {
    const id = useId()
    return (
      <div className="w-full">
        {label && (
          <label
            className="inline-block mb-2 text-sm font-medium text-gray-700"
            htmlFor={id}
          >
            {label}
          </label>
        )}
        <input
          type={type}
          ref={ref}
          className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 ease-in-out ${classNames}`}
          {...props}
          id={id}
        />
      </div>
    );
  }
);
