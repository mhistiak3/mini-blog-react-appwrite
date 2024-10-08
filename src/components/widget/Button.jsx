export const Button = ({
  children,
  type = "button",
  bgColor = "bg-gray-700",
  textColor = "text-white",
  classNames = "",
  ...props
}) => (
  <button
    type={type}
    className={`${bgColor} ${textColor} ${classNames} px-5 py-2 rounded-md font-semibold`}
    {...props}
  >
    {children}
  </button>
);
