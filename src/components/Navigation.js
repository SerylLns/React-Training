import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" exact className="hover" activeClassName="nav-active">
          <li> Accueil</li>
        </NavLink>
        <li className="nav-portfolio">Portfolio
          <ul className="nav-projects">
            <li><NavLink to="/project-1" activeClassName="nav-active" className="hover">Project 1</NavLink></li>
            <li><NavLink to="/project-2" activeClassName="nav-active" className="hover">Project 2</NavLink></li>
            <li><NavLink to="/project-3" activeClassName="nav-active" className="hover">Project 3</NavLink></li>
          </ul>
        </li>
        <NavLink to="/contact" activeClassName="nav-active" className="hover"><li>Contact</li></NavLink>
      </ul>
    </div>
  );
};

export default Navigation;