import React from "react";
import DishCard from "./DishCard/DishCard";
import Skip from "./Buttons/Skip";
import Like from "./Buttons/Like";


function RandomDish(props){
  const { strMeal,strMealThumb, strInstructions, strYoutube, idMeal} = props.randomRecipe.meals[0];
  const getNewRecipe = props.getRandomRecipe;
  const setLikes = props.setLikes;

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
                  setLikes={setLikes}
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