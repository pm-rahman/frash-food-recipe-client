import { Icon } from "@iconify/react";
import Button from "../../../Components/Button/Button";
import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";

const ExtraSection = ({ recipe, children }) => {
    const { cookingMethod, rating, recipeName,ingredients } = recipe;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{recipeName}</h2>
                <p>{cookingMethod.length && cookingMethod.slice(0,100)}<Link className="ml-2 font-medium text-sky-500 underline">See More</Link></p>
                {children
                    ? <div>
                        <p></p>
                        <h4 className="text-lg font-medium">Ingredients</h4>
                        <span>{ingredients?.[0]}, </span>
                        <span>{ingredients?.[1]}, </span>
                        <span>{ingredients?.[2]}, </span>
                        <span>{ingredients?.[3]}, </span>
                        <span>{ingredients?.[4]}, </span>
                        <span>{ingredients?.[5]}</span>
                    </div>
                    : ''
                }
                <Rating
                    style={{ width: 120 }}
                    value={rating}
                    readOnly
                />
                <Button><span className="flex items-center gap-2">Go To Prime <Icon icon="fa-solid:long-arrow-alt-right" /></span></Button>
            </div>
        </div>
    );
};

export default ExtraSection;