import React, { useState, useEffect } from 'react';
import Header from './Components/Header/Header';
import './Scss/App.scss';
import { HashRouter as Router, Routes, Route, } from "react-router-dom";
import RandomDish from './Components/RandomDish';
import Favourites from './Components/Favourites';
import Loader from './Components/Loader';
import ReactDOM from 'react-dom';
import Modal from './Components/Modal/Modal';


function App() {

  const [modalActive, setModalActive] = useState(false);
  const [recipe, setRecipe] = useState([]);
  const [loading, setLoading] = useState(true);
  const [likes, setLikes] = useState(false);

  const getRecipeUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

  useEffect(() => {
    getRandomRecipe()
  }, [])

  function getRandomRecipe() {
    fetch(getRecipeUrl)
    .then(res => res.json())
    .then(
      (result) => {
        setRecipe(result);
        setLoading(false);
      },
      (error) => {
        setLoading(true);
        console.log(error)
      }
      )
  }

  return (
    loading ?
    <Loader/> :
    (<Router>
      <Header active={modalActive} setActive={setModalActive} likes={likes} setLikes={setLikes}/>
      {ReactDOM.createPortal(<Modal active={modalActive} setActive={setModalActive}></Modal>, document.getElementById('modal'))}
      <Routes>
        <Route path="/" element={<RandomDish randomRecipe={recipe} getRandomRecipe={getRandomRecipe} likes={likes} setLikes={setLikes}/>} />
        <Route path="/favourites" element={<Favourites active={modalActive} setActive={setModalActive}/>} />
      </Routes>
    </Router>)
  );
}

export default App;
