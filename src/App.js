import React, { useState, useEffect } from 'react';
import Header from './Components/Header/Header';
import './Scss/App.scss';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import RandomDish from './Components/RandomDish';
import Favourites from './Components/Favourites';
import Loader from './Components/Loader';


function App() {
  const startRecipe = {meals:[{}]};

  const [recipe, setRecipe] = useState(startRecipe);
  const [loading, setLoading] = useState(false);

  console.log('рецепты', recipe);

  const getRecipeUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

  useEffect(() => {
    getRandomRecipe()
  }, [])

  function getRandomRecipe() {
    fetch(getRecipeUrl)
    .then(res => res.json())
    .then(
      (result) => {
        setLoading(true);
        setRecipe(result);
      },
      (error) => {
        setLoading(true);
        console.log(error);
      }
      )
  }


  return (
    loading ?
    (<Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<RandomDish randomRecipe={recipe ? recipe : startRecipe} getRandomRecipe={getRandomRecipe} />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
    </Router>)
    : <Loader/>
  );
}

export default App;
