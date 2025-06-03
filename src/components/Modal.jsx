import React from "react";

const Modal = ({ toggel, setToggel, title,img ,children}) => {
  return (
    <div
      className={` ${
        toggel ? "fixed" : "hidden"
      } top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center`}
    >
      <div className="w-[400px] min-h-[300px] bg-white shadow-lg rounded-lg">
        <div className="bg-black p-2 rounded-t-lg relative py-3">
          <h1 className="text-white text-center text-xl font-semibold">
            {title}
          </h1>
          <i
            onClick={() => setToggel(false)}
            class="fa-solid fa-circle-xmark text-red-400 absolute right-2 top-3 text-xl cursor-pointer"
          ></i>
        </div>
        <div className="flex items-center justify-center p-4">
          <img
            src={img}
            alt={img}
            className="rounded-full w-[150px] h-[150px] object-cover shadow-lg hover:scale-105 transition-all duration-300"
          />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
