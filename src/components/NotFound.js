import React from 'react';
import '../styles/NotFound.css';

const NotFound = () => {
  return (
    <div className='notFound'>
      <i class="fas fa-sad-cry"></i>
      <p className='notFound__text'>Oh no! Page not found</p>
    </div>
  );
}

export default NotFound;