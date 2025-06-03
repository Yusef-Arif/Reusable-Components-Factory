import { useEffect } from "react";

const Toast = ({ message, setToast }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setToast(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [setToast]);

  return (
    <div className="flex items-center justify-center gap-2 bg-white p-4 rounded-lg shadow-lg fixed top-5 right-[48%] z-50">
      <i className="fa-solid fa-circle-check text-green-400"></i>
      <p>{message}</p>
    </div>
  );
};

export default Toast;
