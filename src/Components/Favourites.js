import React, {useState} from "react";
import DishCard from "./DishCard/DishCard";
import ToTop from "./Buttons/ToTop";
import DeleteFav from "./Buttons/DeleteFav";
// import Modal from "./Modal/Modal";
// import ReactDOM from 'react-dom';

function Favourites({active, setActive}){
  const fav = JSON.parse(localStorage.getItem('favourites'));
  const [isDelete, setIsDelete] = useState(false);

  return (
      <div className="favourites" id='fav'>
        <div className="container">
          <div className="delete">
            <DeleteFav isDelete={isDelete} setIsDelete={setIsDelete}/>
          </div>
          <div className="favourite__dishes">
            {fav !==null ? (fav.map((dish, index)=>{
                const { strMeal,strMealThumb, strInstructions, strYoutube} = dish;

                return(
                  <DishCard
                  index = {index}
                  strMeal={strMeal}
                  strMealThumb={strMealThumb}
                  strInstructions={strInstructions}
                  strYoutube={strYoutube}
                  className={"favourite__dish"}
                  />
                )
            }))
            : <div className="no-recipe"> You have to add some kind of recipe to see it here!</div>}
          </div>
        </div>

        {/* <Modal active={active} setActive={setActive}></Modal> */}
        {/* {ReactDOM.createPortal(<Modal active={active} setActive={setActive}></Modal>, document.getElementById('modal'))} */}
        <ToTop />
      </div>
  )
}

export default Favourites;