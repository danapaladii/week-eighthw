import { useState, useEffect} from "react";
import video from './food3.mp4';
import './App.css';
import MyRecipesComponents from "./MyRecipesComponent";

//https://api.edamam.com/api/recipes/v2?type=public&q=lemon&app_id=c5672d05&app_key=27869ca26c89836358330f6202da18a7


function App() {

  const MY_ID = "c5672d05";
  const MY_KEY = "27869ca26c89836358330f6202da18a7";

  const [mySearch, setMySearch] = useState("");
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState("lemon")

  useEffect (() => {
    const getRecipe = async() =>{
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await response.json();
      
      setMyRecipes(data.hits);
    }
    getRecipe()
  }, [wordSubmitted])

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value)
  }

  const finalSearch = (e) => {
    e.preventDefault()
    setWordSubmitted(mySearch)
  }

  return (
    <div className="App">

      <div className="container">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>

      <h1>What's your Ingredients?</h1>
      </div>

      <div className="container">
        <form onSubmit={finalSearch}>
          <input className="search" onChange={myRecipeSearch} value={mySearch} />
        </form>
      </div>

      <div className="container">
        <button onClick={finalSearch}>Find your Recipe</button>
      </div>

      {myRecipes.map((element, index) =>(
        <MyRecipesComponents key={index} label={element.recipe.label}
        image={element.recipe.image}
        cuisineType={element.recipe.cuisineType}
        dishType={element.recipe.dishType}
        ingredients={element.recipe.ingredientLines}/>
      ))}


    
    </div>
  );
}

export default App;
