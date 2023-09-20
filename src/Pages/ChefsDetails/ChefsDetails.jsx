import { useLoaderData, useParams } from "react-router-dom";
import { Icon } from "@iconify/react";
import Banner from "../../Components/Banner/Banner";
import RecipesList from "./RecipesList/RecipesList";
import { useEffect, useState } from "react";
import LazyLoad from "react-lazy-load";
import Spinner from "../../Components/spinner/spinner";

const ChefsDetails = () => {
  const [chefs, setChefs] = useState([]);
  const recipes = useLoaderData();
  const { id } = useParams();
  useEffect(() => {
    fetch(
      `https://favourite-food-recipes-server-pm-rahman.vercel.app/chefs/${id}`
    )
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, [id]);
  const { ChefName, chefPicture, experience, Likes, bio, NumberOfRecipes } =
    chefs;
  return (
    <>
      <div className="relative">
        <Banner>
          <div className="p-12 backdrop-brightness-50 rounded items-center grid grid-cols-3 gap-4">
            <div className="h-52 w-full overflow-hidden">
              <LazyLoad className="h-full w-full" threshold={0.95}>
                <img
                  className="rounded-md min-h-full mx-auto max-w-full"
                  src={chefPicture}
                />
              </LazyLoad>
            </div>
            <div className="col-span-2 border-l-2 pl-2 border-orange-500 text-white flex flex-col gap-2">
              <div className="flex items-end justify-between mb-1">
                <h4 className="font-bold">
                  <span className="text-orange-400 border-b pb-1 border-orange-500">
                    {ChefName}
                  </span>
                </h4>
                <span className="text-xs cursor-pointer flex items-center gap-1">
                  <Icon className="text-xl" icon="fa-regular:thumbs-up" />
                  {Likes}
                </span>
              </div>
              <p className="text-sm text-justify">{bio}</p>
              <div>
                <h4><span className="text-orange-400 border-b border-orange-500">Extra</span> Info</h4>
                <p className="text-sm  font-medium">{experience} experience</p>
                <p className="font-medium">
                  {NumberOfRecipes} Recipes Available
                </p>
              </div>
            </div>
          </div>
        </Banner>
      </div>
      {recipes.length === 0 && (
        <div className="text-center mt-8">
          <Spinner />
        </div>
      )}
      <div className="py-12 bg-slate-50">
        <h4 className="text-2xl font-normal mb-6">
          <span className="text-orange-400 border-b border-orange-400">
            Hare Some
          </span>{" "}
          Recipes
        </h4>
        {recipes.map((recipe) => (
          <RecipesList key={recipe.id} recipe={recipe}></RecipesList>
        ))}
      </div>
    </>
  );
};

export default ChefsDetails;
