import Error from "./Error";

const Input = ({
  type,
  placeholder,
  value,
  required,
  label,
  onChangeHandler,
}) => {
  return (
    <div>
      <label className="block text-gray-700 mb-2">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        required={required}
        className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 w-full"
        onChange={(e) => onChangeHandler(e)}
        name={label.toLowerCase()}
      />
      <Error name={label.toLowerCase()} value={value} />
    </div>
  );
};

export default Input;
