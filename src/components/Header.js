import React from 'react';
import Form from '../components/Form';
import Navigation from '../components/Navigation';

import '../styles/Header.css';

const Header = () => {


  return (
    <div className="header">
      <h1 className="header__title">ImageShot</h1>
      <Form/>
      <Navigation/>
    </div>
  );
}

export default Header;