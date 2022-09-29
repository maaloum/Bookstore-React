import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const links = [
    { id: 1, path: '/', text: 'books' },
    { id: 2, path: '/categories', text: 'categories' },
  ];
  return (
    <nav className="navbar">
      <h1>Bookstore CMS</h1>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path} exact>{link.text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
