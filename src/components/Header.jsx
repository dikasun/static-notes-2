import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>
        <Link to={"/"}>Static Notes</Link>
      </h1>
      <nav className={`navigation`}>
        <ul>
          <li>
            <Link to={"/archives"}>Archives</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
