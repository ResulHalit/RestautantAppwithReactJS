import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";

const App = () =>{
  const APP_ID={};
  const APP_KEY={};

  const exampleReq = {/*url gelecek */}

 const [recipes, setRecipes] = useState([]);
 const [search, setSearch] = useState("");
 const [query, setQuery] = useState("chicken");

 useEffect(()=>{
  getRecipes();
 }, []);

 const getRecipes = async() => {
  const response = await fetch(
    `https://api.edemam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
  );
  const data = await response.json();
  console.log(data.hits);
 };

 const updateSearch = e => {
  setSearch(e.target.value);
  console.log(search);
 };

 const getSearch = e => {
  e.preventdefault();
  setQuery(search);
 }

  return(
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" placeholder="search" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {recipes.map(recipe => (
        <Recipe
        key={recipe.recipe.label}
        title={recipe.recipe.label}
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        />
      ))}
    </div>
  );
};






export default App;
