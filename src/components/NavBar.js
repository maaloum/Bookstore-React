import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/Header.css';

const NavBar = () => {
  const links = [
    { id: 1, path: '/', text: 'books' },
    { id: 2, path: '/categories', text: 'categories' },
  ];
  return (
    <div className="NavBar">
      <nav className="panel-bg">
        <h1>Bookstore CMS</h1>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path} exact>{link.text}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="Oval">
        <div className="Mask" />
      </div>

    </div>
  );
};

export default NavBar;
