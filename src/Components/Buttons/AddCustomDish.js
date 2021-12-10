import React from "react";

function AddCustomDish({active, setActive}){

  return(
    <>
      <div className="custom-dish">
        <button type="button" className="custom-btn" onClick={()=>{setActive(true)}}>Add custom dish</button>
      </div>
    </>
  )
}

export default AddCustomDish;