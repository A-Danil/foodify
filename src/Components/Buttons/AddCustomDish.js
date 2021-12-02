import React, { useState } from "react";
import CustomDish from "../DishCard/CustomDish";

function AddCustomDish(){
  const [active, setActive] = useState(false)
  console.log(active);

  function click(){
    setActive(!active)
    active ? document.body.style.overflow = 'scroll' : document.body.style.overflow = 'hidden'
  }

  function Close(){
    if (active) {
      return(
        <div className="close" onClick={click}>
          <span>X</span>
        </div>
      )
    } else return null
  }


  return(
    <>
      <div className="custom-dish">
        <button type="button" className="custom-btn" onClick={click}>Add custom dish</button>
      </div>
      {active ? <><CustomDish/><Close/></> : null}
    </>
  )
}

export default AddCustomDish;