import Chefs from "../Chefs/Chefs";
import { useEffect, useState } from "react";
import Banner from "../../../Components/Banner/Banner";
import Button from "../../../Components/Button/Button";
import { Icon } from "@iconify/react";
import Spinner from "../../../Components/spinner/spinner";
import Recipes from "../../Recipes/Recipes";
import DiscountRecipes from "../DiscountRecipes/DiscountRecipes";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("https://favourite-food-recipes-server-pm-rahman.vercel.app/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);
  return (
    <>
      <Banner>
        <span className="text-semibold text-sm font-normal flex items-center gap-2">
          EXCLUSIVE RECIPES{" "}
          <span className="bg-white text-emerald-500 border-b-2 rounded border-emerald-500 py-1 px-2 md:px-4">
            25% OFF
          </span>
        </span>
        <h4 className="text-2xl md:text-4xl font-semibold py-3">
          Our Spatial Discount
          <p className="flex gap-2">
            {" "}
            Week is{" "}
            <span className="flex items-end">
              <Icon className="text-2xl" icon="fa-solid:running" />
              <Icon className="text-3xl" icon="fa-solid:running" />
              <Icon icon="fa-solid:running" />
            </span>
          </p>
        </h4>
        <p className="font-medium text-lg mb-4">
          {"Only this week. Don't miss"}
        </p>
        <Button>
          Go To Prime <Icon icon="fa-solid:long-arrow-alt-right" />
        </Button>
      </Banner>

      {recipes.length === 0 && (
        <div className="text-center mt-8">
          <Spinner />
        </div>
      )}

      <div className="mt-8">
        {/* discount section */}
        <DiscountRecipes/>
        {/* Our products */}
        <Recipes isHome={true} />
        <Chefs />
      </div>
    </>
  );
};

export default Home;
