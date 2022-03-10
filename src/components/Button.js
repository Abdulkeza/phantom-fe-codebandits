import React from 'react';

const Button = ({ name, styles }) => {
  return (
    <div>
      <button
        type="button"
        className={`${styles} rounded-xl py-3 text-base md:text-sm lg:text-lg xl:text-lg px-5`}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;