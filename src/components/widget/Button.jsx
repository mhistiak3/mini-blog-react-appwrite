export const Button = ({
  children,
  bgColor = "bg-gray-700",
  textColor = "text-white",
  classNames = "",
  ...props
}) => (
  <button
    className={`${bgColor} ${textColor} } ${classNames} px-5 py-2 rounded-md font-semibold`}
    {...props}
  >
    {children}
  </button>
);
