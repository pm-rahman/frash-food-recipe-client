import { Icon } from "@iconify/react";

const DiscountCart = ({ recipe }) => {
  const { recipeName, ingredients } = recipe;
  return (
    <div className="Card relative flex flex-col p-4 text-black rounded cursor-pointer bg-white shadow-md hover:shadow-lg hover:shadow-orange-200 overflow-hidden">
      <h2 className="text-lg font-semibold">{recipeName}</h2>
      <h4 className="">Ingredients</h4>
      <ul className="list-disc pl-4">
        {ingredients?.map((ingredient, index) => (
          <li key={index}>{ingredient.slice(0, 28)}</li>
        ))}
      </ul>
      <span className="absolute top-6 -right-8 rotate-45 px-10 bg-orange-500 text-white">
        25% off
      </span>
      <div className="CardHover flex flex-col w-full h-full absolute left-0 top-full duration-500 bg-orange-500 bg-opacity-10 text-white">
        <span className="flex mt-auto p-2 bg-orange-500 items-center gap-2 hover:gap-3">
          Go To Prime <Icon icon="fa-solid:long-arrow-alt-right" />
        </span>
      </div>
    </div>
  );
};

export default DiscountCart;
