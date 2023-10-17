import React from 'react'
import '../../styles/spin.css'
const Spin = ({progress}) => {
  return (
    <div>
      <div className="spinner">
        <div className="rect1"></div>
        <div className="rect2"></div>
        <div className="rect3"></div>
        <div className="rect4"></div>
        <div className="rect5"></div>
      </div>
      <div className="font-mono w-full text-lg font-semibold underline decoration-sky-500 underline-offset-8 display text-center ">
        {progress} % loaded
      </div>
    </div>
  );
}

export default Spin