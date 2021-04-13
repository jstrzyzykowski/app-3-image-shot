import React from 'react';
import '../styles/NoImages.css';

const NoImages = () => {
  return (
    <div className="noImages">
      <i class="fas fa-surprise"></i>
      <p className='noImages__text'>Woah! That query is really strange</p>
    </div>
  );
}

export default NoImages;