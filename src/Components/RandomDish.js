import React from "react";
import DishCard from "./DishCard/DishCard";
import Skip from "./Buttons/Skip";
import Like from "./Buttons/Like";


function RandomDish(props){
  console.log("вот что передалось", props.randomRecipe.meals[0])
  const { strMeal,strMealThumb, strInstructions, strYoutube, idMeal} = props.randomRecipe.meals[0];
  const getNewRecipe = props.getRandomRecipe;

  return(
    <>
        <div className="container">
          <DishCard
            idMeal={idMeal}
            strMeal={strMeal}
            strMealThumb={strMealThumb}
            strInstructions={strInstructions}
            strYoutube={strYoutube}
            className={"random-dish"}
          />
          <section className="card-btns">
              <div className="buttons">
                <Skip
                  getNewRecipe={getNewRecipe}
                />
                <Like
                  getInfoRecipe={props.randomRecipe.meals[0]}
                  text={'Like'}
                  className={'like'}
                />
              </div>

          </section>
        </div>
    </>
  )
}

export default RandomDish;