import React from 'react';

const Button = ({ name, styles }) => {
  return (
    <div>
      <button type="submit" className={`${styles} rounded-xl py-3 px-5`}>
        {name}
      </button>
    </div>
  );
};

export default Button;
