import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const Recipe = () => {
    const recipe = useLoaderData();
    const [chef,setChef]=useState({})
    useEffect(()=>{
        fetch(`https://favourite-food-recipes-server-pm-rahman.vercel.app/chefs/${recipe?.chefId}`)
        .then(res=>res.json())
        .then(data=>setChef(data))
    },[recipe])
    // console.log(recipe,chef);
    return (
        <div className="sm:w-3/4 md:w-3/4 border-t-4 leading-none border-emerald-500 mx-auto bg-white text-black rounded p-4 shadow-lg">
            <h4><span className="border-b-2 text-lg border-emerald-500 pb-1">{recipe?.recipeName}</span></h4>
            <h6 className="mt-2 mb-1"><span className="border-b-2 text-lg border-emerald-500">Ingredients</span></h6>
            <ul className="list-disc list-inside text-sm">
                {recipe.ingredients.map((ingredient,index)=><li key={index}>{ingredient}</li>)}
            </ul>
            <h6 className="mt-2 mb-1 font-normal"><span className="border-b-2 text-lg border-emerald-500">Cooking</span> Method</h6>
            <p className="text-sm">{recipe.cookingMethod}</p>
            <h4 className="mt-2 mb-4 border-b-2 text-lg border-emerald-500 pb-1">Chef Information</h4>
            <img className="h-14 rounded" src={chef?.chefPicture} alt="chef picture" />
            <p className="mt-1">{chef.ChefName}</p>
            <p className="mt-1">{chef.experience} experience</p>
            <p className="mt-1"><span className="border-b-2 border-emerald-500">About</span></p>
            <p className="mt-[2px] text-sm">{chef.bio}</p>
        </div>
    );
};

export default Recipe;