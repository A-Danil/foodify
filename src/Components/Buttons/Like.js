import React from "react";

function Like(props){
  const favouriteDish = props.getInfoRecipe;
  // console.log("Like props",favouriteDish)
  // console.log("Id meal",favouriteDish.idMeal)
  const {text, className} = props;

  function getFavoutites(){
    return JSON.parse(localStorage.getItem('favourites'))
  };

  function addToFav(){
    let fav = getFavoutites() || [];

    fav.push(favouriteDish);
    localStorage.setItem('favourites', JSON.stringify(fav))
  }

  return(
      <div className={className}>
        <button type="button" className={className+'__btn'} onClick={addToFav}>{ text }</button>
      </div>
  )
}

export default Like;