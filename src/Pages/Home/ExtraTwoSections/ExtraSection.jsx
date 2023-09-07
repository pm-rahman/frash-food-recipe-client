import { Icon } from "@iconify/react";
import Button from "../../../Components/Button/Button";
import { Link } from "react-router-dom";

const ExtraSection = ({ recipe, children }) => {
  const { cookingMethod, recipeName, ingredients } = recipe;
  return (
    <div className="flex flex-col p-4 rounded bg-white shadow">
      <h2 className="text-lg mb-1 font-semibold">{recipeName}</h2>
      <h4 className="font-semibold">Ingredients</h4>
      <ul className="list-disc pl-4">
        {ingredients?.map((ingredient, index) => (
          <li key={index}>{ingredient.slice(0,28)}</li>
        ))}
      </ul>
      {children ? (
        <div>
          {" "}
          <p className="font-semibold mt-2">Cooking Method</p>
          <p>
            {" "}
            {cookingMethod.length > 100 ? (
              <>
                {cookingMethod.slice(0, 150)}{" "}
                <Link className="underline text-emerald-600 font-semibold">
                  See more
                </Link>
              </>
            ) : (
              cookingMethod
            )}{" "}
          </p>
        </div>
      ) : (
        ""
      )}
      <div className="mt-auto">
        {children ? (
          <Button className={"mt-1"}>
            <span className="flex items-center gap-2">
              View More <Icon icon="fa-solid:long-arrow-alt-right" />
            </span>
          </Button>
        ) : (
          <Button className="mt-1">
            <span className="flex items-center gap-2">
              Go To Prime <Icon icon="fa-solid:long-arrow-alt-right" />
            </span>
          </Button>
        )}
      </div>
    </div>
  );
};

export default ExtraSection;
