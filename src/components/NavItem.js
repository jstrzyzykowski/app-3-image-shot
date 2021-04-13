import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/NavItem.css';

const NavItem = ({ url, title }) => {
  return (
    <li className='navigation__item'>
      <NavLink to={url}>{title}</NavLink>
    </li>
  );
};

export default NavItem;