import { useState } from 'react';
import { useEffect } from 'react';
import DiscountCart from './DiscountCart';

const DiscountRecipes = () => {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
      fetch("https://favourite-food-recipes-server-pm-rahman.vercel.app/recipes")
        .then((res) => res.json())
        .then((data) => setRecipes(data));
    }, []);
    return (
<div className="py-2">
          <h4 className="text-2xl mb-3 font-bold">
            <span className="border-b-2 pb-1 text-emerald-500 border-emerald-500">
              Spatial Discounted
            </span>{" "}
            Recipes
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {recipes.slice(0, 3).map((recipe) => (
              <DiscountCart key={recipe.id} recipe={recipe}></DiscountCart>
            ))}
          </div>
        </div>
    );
};

export default DiscountRecipes;