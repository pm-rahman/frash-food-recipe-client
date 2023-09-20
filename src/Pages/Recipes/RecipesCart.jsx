import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const RecipesCart = ({ recipe,isHome }) => {
  const { cookingMethod, recipeName, ingredients } = recipe;
  return (
    <Link
      to={`/recipe/${recipe?.id}`}
      className="Card relative h-full flex flex-col p-4 text-black rounded cursor-pointer bg-white shadow-md hover:shadow-lg hover:shadow-orange-200 overflow-hidden border-t-4 border-orange-500"
    >
      <h2 className="text-lg font-semibold">{recipeName}</h2>
      <h4 className="mb-1">
        <span className="border-b pb-1 border-orange-400 text-orange-400">
          Ingredients
        </span>
      </h4>
      <ul className="list-disc pl-4">
        {ingredients?.map((ingredient, index) => (
          <li key={index}>{ingredient.slice(0, 28)}</li>
        ))}
      </ul>
      <div>
        <h6 className="font-semibold mt-2 mb-1">
          <span className="border-b pb-1 border-orange-400 text-orange-400">
            Cooking
          </span>{" "}
          Method
        </h6>
        <p>{isHome?cookingMethod.slice(0,50):cookingMethod}...</p>
      </div>
      <div className="CardHover flex flex-col w-full h-full absolute left-0 top-full duration-500 bg-orange-500 bg-opacity-10 text-white">
        <button
          className={
            "flex justify-center mt-auto p-2 bg-orange-500 items-center gap-2 hover:gap-3"
          }
        >
          View More <Icon icon="fa-solid:long-arrow-alt-right" />
        </button>
      </div>
    </Link>
  );
};

export default RecipesCart;
