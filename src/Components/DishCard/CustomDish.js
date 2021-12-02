import React, { useState } from "react";

function CustomDish(){

  const [title, setTitle] = useState('');
  const [descr, setDescr] = useState('');
  // console.log(title)
  // console.log(descr)

  function getTitle(e){
    setTitle(e.target.value);
  }

  function getDescription(e){
    setDescr(e.target.value);
  }

  function getFavoutites(){
    return JSON.parse(localStorage.getItem('favourites'))
  };


  function saveCustomRecipe(){
    let fav = getFavoutites() || [];

    const myOwnRecipe =
    {idMeal: Math.random(),
    strMeal: title,
    strMealThumb: null,
    strInstructions: descr,
    strYoutube: null
    }
    console.log(myOwnRecipe);

    fav.push(myOwnRecipe);
    localStorage.setItem('favourites', JSON.stringify(fav))

    setTitle('');
    setDescr('');

  }

  return (
    <div className="custom">
      <div className="custom__form">
        <h3>Add custom dish</h3>
          <div className="custom__inp">
            <input
              className="form-title"
              placeholder="Dish Title"
              value={title.trim()}
              onChange={getTitle}
              // onSubmit={handleSubmit}
              />
            <textarea
              className="form-descripton"
              placeholder="Dish descripton"
              rows="5"
              cols="33"
              value={descr.trim()}
              onChange={getDescription}
              />
            <button className="form-btn" type="button" onClick={saveCustomRecipe}>Add custom Dish</button>
          </div>
      </div>
    </div>
  )
}

export default CustomDish;