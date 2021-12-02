import React from "react";
import DishCard from "./DishCard/DishCard";

function Favourites(){
  const fav = JSON.parse(localStorage.getItem('favourites'));
  console.log(fav)

  return (
    <div className="favourites">
      <div className="container">
        <div className="favourite__dishes">
          {fav.map((dish, index)=>{
              const { strMeal,strMealThumb, strInstructions, strYoutube, idMeal} = dish;

              return(
                <DishCard
                idMeal = {idMeal}
                index = {index}
                strMeal={strMeal}
                strMealThumb={strMealThumb}
                strInstructions={strInstructions}
                strYoutube={strYoutube}
                className={"favourite__dish"}
                />
              )
          })}
        </div>
      </div>
    </div>
  )
}

export default Favourites;