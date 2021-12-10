import React from "react";

function Like(props){
  const favouriteDish = props.getInfoRecipe;
  const {text, className, } = props;
  const currentId = favouriteDish.idMeal;
  const setLikes = props.setLikes


  function getFavoutites(){
    return JSON.parse(localStorage.getItem('favourites'))
  };


  function addToFav(){
    let fav = getFavoutites() || [];

    fav.map((dish, index) => {
      if(dish.idMeal === currentId){
        return fav.splice(index, 1)
      }
    })

    fav.push(favouriteDish);
    localStorage.setItem('favourites', JSON.stringify(fav))
    setLikes(true);
  }


  return(
      <div className={className}>
        <button type="button" className={className+'__btn'} onClick={addToFav}>{ text }</button>
      </div>
  )
}

export default Like;