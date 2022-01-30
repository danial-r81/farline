import React from 'react';

const Box = ({ cardname, icon }) => {
  return (
    <div class='box'>
      <div class='boxs'>
        <div class=''>
          <div class='cardname'>{cardname}</div>
        </div>
        <i class={icon}></i>
      </div>
    </div>
  );
};

export default Box;
