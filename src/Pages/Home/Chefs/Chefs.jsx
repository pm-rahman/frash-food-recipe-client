import { Link } from "react-router-dom";
import Button from "../../../Components/Button/Button";
import { Icon } from '@iconify/react';

const Chefs = ({ chefs }) => {
    const { id, ChefName, chefPicture, experience, NumberOfRecipes, Likes } = chefs;
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
            <figure><img src={chefPicture} alt="chefs" /></figure>
            <div className="card-body">
                <h2 className="card-title text-sky-500">{ChefName}</h2>
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