import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const RecipesList = () => {

    const recipes = useLoaderData()
    console.log(recipes);
    return (
        <div className="px-32 py-12">
            <h4 className="text-2xl font-normal">Chefs Recipes</h4>
            {

            }
        </div>
    );
};

export default RecipesList;