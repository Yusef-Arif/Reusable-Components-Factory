const Button = ({ type, onClick, value, icon, theme, size}) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-2 ${
        size === "full" ? "w-100 justify-center" : "w-[fit-content]"
      } p-2 rounded-xl cursor-pointer transition-all duration-300 text-white
    ${theme === "primary" && "bg-blue-500 hover:bg-blue-600"}
    ${theme === "danger" && "bg-red-500 hover:bg-red-600"}
    ${theme === "success" && "bg-green-500 hover:bg-green-600"}`}
    >
      <i className={icon}></i>
      <input type={type} value={value} className="cursor-pointer" />
    </div>
  );
};

export default Button;
