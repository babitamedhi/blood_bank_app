// Background.js
import React from 'react';
import '../../assets/css/Background.css';


const Background = ({ imageUrl, children }) => {
  return (
    <div className="background" style={{ backgroundImage: `url(${imageUrl})` }}>
      {/* This will render any children passed to this component */}
      {children}
      <div className='introduction'>
        
      </div>
    </div>
  );
};

export default Background;
