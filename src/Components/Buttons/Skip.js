import React from "react";

function Skip(props){
  return(
      <div className="skip">
        <button type="button" className="skip__btn" onClick={props.getNewRecipe}>Skip</button>
      </div>
  )
}

export default Skip;