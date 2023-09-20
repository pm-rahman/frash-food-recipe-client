import { useEffect } from "react";
import { useState } from "react";
import RecipesCart from "./RecipesCart";
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const Recipes = ({isHome}) => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("https://favourite-food-recipes-server-pm-rahman.vercel.app/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);
  return (
    <div className="py-2">
      <h4 className="text-2xl font-bold mb-3">
        <span className="border-b-2 pb-1 text-orange-500 border-orange-500">Our</span> Recipes
      </h4>
      <div className="grid md:grid-cols-3 gap-4">
        {isHome?
        recipes.splice(0,3)?.map((recipe) => (
          <RecipesCart key={recipe.id} recipe={recipe}  isHome={true}/>
        ))
        :
        recipes?.map((recipe) => (
          <RecipesCart key={recipe.id} recipe={recipe}/>
        ))
        }
      </div>
      <div className="flex justify-end"><Link to="/recipes"><Button className="mt-3">See More<Icon icon="fa-solid:long-arrow-alt-right" /></Button></Link></div>
    </div>
  );
};

export default Recipes;
