import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const Chef = ({ chefs }) => {
  const { id, ChefName, chefPicture, experience, NumberOfRecipes, bio } =
    chefs;
  return (
    <Link
      to={`/chef/${id}`}
      className=" sm:col-span-2 md:col-span-3 p-2 border-l-4 border-emerald-300 rounded-t bg-base-100 duration-500 shadow-md hover:bg-emerald-600 hover:text-white hover:shadow-emerald-500 hover:shadow-lg"
    >
      <div className="flex gap-2 items-baseline">
        <figure className="h-12 w-12 rounded-full overflow-hidden relative flex justify-center items-top">
          {" "}
          <img
            className="rounded-full h-16 w-auto"
            src={chefPicture}
            alt="chefs"
          />
        </figure>
        <h2 className="mt-2 relative bottom-2 font-semibold leading-none text-base">
          {ChefName}
        </h2>
      </div>
      <div>
        <h4 className="text-lg"><span className="border-b border-emerald-500">About</span> Chefs</h4>
        <p className="text-sm  font-medium">{experience} experience</p>
        <p className="font-medium">{NumberOfRecipes} Recipes Available</p>
      </div>
      <h4 className="text-lg mt-1"><span className="border-b border-emerald-500">Description</span></h4>
      <p>{bio.slice(0, 100)}...</p>
    </Link>
  );
};

export default Chef;
