import { Link } from "react-router-dom";
import Button from "../../../Components/Button/Button";
import { Icon } from '@iconify/react';

const Chefs = ({ chefs }) => {
    const { id, ChefName, chefPicture, experience, NumberOfRecipes, Likes } = chefs;
    return (
        <div className="chef-card w-full cursor-pointer relative rounded-sm bg-base-100 shadow overflow-hidden">
            <figure className="h-40 overflow-hidden relative"> <img className="absolute top-0 w-full" src={chefPicture} alt="chefs" /></figure>
            <div className="chef-card-inner p-1 absolute w-full h-full top-[78%] bg-emerald-100">
                <h2 className="card-title">{ChefName}</h2>
                <div className="flex items-end justify-between mb-1">
                    <div>
                        <p className="text-sm  font-medium">{experience}</p>
                        <p className="font-medium">{NumberOfRecipes} Recipes Available</p>
                    </div>
                    <span className="text-xs flex flex-col items-center gap-1"><Icon className="text-xl" icon="fa-regular:thumbs-up" />{Likes}</span>
                </div>
                <Link to={`/chefs/${id}`}>
                    <Button fullWidth={true}>View Recipes</Button>
                </Link>
            </div>
        </div>
    );
};

export default Chefs;