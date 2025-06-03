import React from "react";

const Error = ({ value, name }) => {
  if (value.length >= 1 && (value.length <= 3 || value.length > 20)) {
    return (
      <div className="text-red-500 text-sm mt-1">
        {name} must be between 3 and 20 characters long.
      </div>
    );
  }
};

export default Error;
