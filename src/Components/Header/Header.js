import React from "react";
import { Link, useLocation } from "react-router-dom";
import AddCustomDish from "../Buttons/AddCustomDish";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation} from '@fortawesome/free-solid-svg-icons';

function Header({active, setActive, likes, setLikes}){
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return(
    <header>
      <div className="container">
        <div className="navbar">
          <ul className="navbar__nav">
            <li className={splitLocation[1] === "" ? "random active" : "random"}>
              <Link to='/'>Random dish</Link>
            </li>
            <li className={splitLocation[1] === "favourites" ? "fav active" : "fav"}>
              <Link to='/favourites' onClick={()=>setLikes(false)}>Favourites</Link>
              {likes ? <span className="new">
                <FontAwesomeIcon icon={faExclamation}/>
              </span> : null}
            </li>
          </ul>
          {splitLocation[1] === "favourites" ? <AddCustomDish active={active} setActive={setActive}/> : null}
        </div>
      </div>
    </header>
  )
}

export default Header;