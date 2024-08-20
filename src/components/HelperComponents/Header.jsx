import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/podcasts">Podcasts</Link>
          </li>
          <li>
            <Link to="/resources">Resources</Link>
          </li>
        </ul>
        <Link to="/contacts">Contacts</Link>
      </nav>
    </header>
  );
};

export default Header;
