import { Icon } from "@iconify/react";
import Button from "../../../Components/Button/Button";
import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";

const ExtraSection = ({ recipe, children }) => {
    const { cookingMethod, rating, recipeName, ingredients } = recipe;
    return (
        <div className="card flex flex-col bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{recipeName}</h2>
                <div>
                    <h4 className="text-lg font-semibold">Ingredients</h4>
                    <span>{ingredients?.[0] ? ingredients?.[0] : 'Ingredients in recipes bio'}, </span>
                    <span>{ingredients?.[1]}, </span>
                    <span>{ingredients?.[2]}, </span>
                    <span>{ingredients?.[3]}, </span>
                    <span>{ingredients?.[4]}, </span>
                    <span>{ingredients?.[5]}</span>
                </div>
                {children
                    ? <div> <p className="font-semibold">Cooking Method</p>< p > {cookingMethod.length > 100 ?
                        <>{cookingMethod.slice(0, 150)} <Link className="underline text-sky-500 font-semibold">See more</Link></>
                        :cookingMethod
                     } </p></div>
                    : ''
                }
                <Rating
                    className="mt-auto mb-1"
                    style={{ width: 120 }}
                    value={rating}
                    readOnly
                />
                {children
                    ? <Button><span className="flex items-center gap-2">View More <Icon icon="fa-solid:long-arrow-alt-right" /></span></Button>
                    : <Button><span className="flex items-center gap-2">Go To Prime <Icon icon="fa-solid:long-arrow-alt-right" /></span></Button>
                }
            </div >
        </div >
    );
};

export default ExtraSection;