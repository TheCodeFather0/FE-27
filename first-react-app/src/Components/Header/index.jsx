import React from "react";
import "./style.css";
import { Link, NavLink } from "react-router-dom";
import { links } from "../../routes";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/">./Logo</Link>
        </div>
        <div className="links">
          {links.map(({ id, to, title }) => {
            return (
              <NavLink to={to} key={id} className="link">
                {title}
              </NavLink>
            );
          })}
        </div>
      </nav>
    </header>
  );
};

export default Header;
