//& Import modules
import { useState } from 'react';
import './ThemeBtn.scss';

const ThemeBtn = ({ handleToggleMode, ...options }) => {

  const { onMouseEnter, onMouseLeave } = options;
  

  const mouseEnter = (event) => {
    onMouseEnter();
  };
  const mouseLeave = (event) => {
    onMouseLeave();
  };
  return (
    <section onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className="button">
        <div className="button__form"  onClick={handleToggleMode}></div>
    </section>
  );
};

export default ThemeBtn;

