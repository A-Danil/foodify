import React from "react";
import { Link, useLocation } from "react-router-dom";
import AddCustomDish from "../Buttons/AddCustomDish";

function Header(){
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return(
    <header>
      <div className="container">
        <div className="navbar">
          <ul className="navbar__nav">
            <li className={splitLocation[1] === "" ? "active" : ""}>
              <Link to='/'>Random dish</Link>
            </li>
            <li className={splitLocation[1] === "favourites" ? "active" : ""}>
              <Link to='/favourites'>Favourites</Link>
            </li>
          </ul>
          {splitLocation[1] === "favourites" ? <AddCustomDish /> : null}
        </div>
      </div>
    </header>
  )
}

export default Header;