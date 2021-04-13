import React from 'react';
import NavItem from '../components/NavItem';
import '../styles/Navigation.css';

const ELEMENTS = [
  {title: 'Mountain', url: '/mountain'},
  {title: 'Sport', url: '/sport'},
  {title: 'Science', url: '/science'},
  {title: 'Island', url: '/island'},
];

const Navigation = () => {

  const navItems = ELEMENTS.map((element, index) => {
    const {title, url} = element;
    return <NavItem key={index} url={url} title={title}/>;
  });

  return(
    <nav className='navigation'>
      <ul className='navigation__menu'>
        {navItems}
      </ul>
    </nav>
  );
};

export default Navigation;