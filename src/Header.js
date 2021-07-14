import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Strona główna</Link>
          </li>
          <li>
            <Link to="/react">React</Link>
          </li>

          <li>
            <Link to="/mobx">MobX</Link>
          </li>
          <li>
            <Link to="/typescript">TypeScript</Link>
          </li>
          <li>
            <Link to="/redux">Redux</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
