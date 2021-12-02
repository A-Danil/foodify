import React from "react";

function DishCard(props){
  console.log("вот что передалось DishCard", props)

  const { strMeal,strMealThumb, strInstructions, strYoutube, className, idMeal} = props;

  return(
    <section className={className}>

        <div className="dish__card">
          <div className="dish__img">
            <img src={strMealThumb ? strMealThumb : 'https://brilliant24.ru/files/cat/template_01.png'} alt="dish-img" />
          </div>
          <div className="dish__description">
            <h2 className="dish__title">{strMeal}</h2>
            <p className="dish__instruction">{strInstructions}</p>
            {strYoutube ?
              (<div className="dish__youtube">
                <a href={strYoutube} target="_blank" rel="noopener noreferrer">Watch it on YouTube!</a>
              </div>) :
              null
            }
          </div>
        </div>

    </section>
  )
}

export default DishCard;