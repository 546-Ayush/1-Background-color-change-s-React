import React, { useState } from "react";
import style from './App.module.css';

function BACKGROUND_COLOR() {
  let a = 60;
  let b = 60;
  let c = 60;

  const [color, setColor] = useState('')

  function handleOnClick() {
    a = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
    c = Math.floor(Math.random() * 255);

    var col = `${a}, ${b}, ${c}`; 
    setColor(col);
  }

  return (
    <>
      <div className={style.parent} style={{ backgroundColor: `rgb(${color})` }}>
        <button onClick={handleOnClick} >Click Me!</button>
      </div>
    </>
  )
}

export default BACKGROUND_COLOR;