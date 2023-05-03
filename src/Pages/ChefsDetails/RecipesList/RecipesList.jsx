import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
const RecipesList = ({ recipe }) => {
    const [favorite, setFavorite] = useState(false);
    const { recipeName, cookingMethod, ingredients, rating } = recipe;
    const favoriteBtnHandler = ()=>{
        setFavorite(true);
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Add To Favorite list Successful',
            showConfirmButton: false,
            timer: 1500
          })
    }
    return (
        <div className="overflow-x-auto w-full mb-4">
            <table className="table w-full">
                <tbody>
                    {/* row 1 */}
                    <tr>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div>
                                    <div className="font-bold">Recipe Name</div>
                                    <div className="text-sm opacity-50">{recipeName}</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <span className="font-bold">ingredients</span>
                            <br />
                            <span className="text-sm">{ingredients[0]}, </span>
                            <span className="text-sm">{ingredients[1]}, </span>
                            <span className="text-sm">{ingredients[2]}, </span>
                            <br />
                            <span className="text-sm">{ingredients[3]}, </span>
                            <span className="text-sm">{ingredients[4]}</span>
                        </td>
                        <td>
                            <span className="font-bold">Cooking Method</span>
                            <br />
                            <span className="text-sm">{cookingMethod.length && cookingMethod.slice(0,25)}<Link className="ml-2 font-medium text-sky-500 underline">See More</Link></span>
                        </td>
                        <td>
                            <Rating
                                style={{ maxWidth: 120 }}
                                value={rating}
                                readOnly
                            />
                        </td>
                        <td>
                            <button onClick={favoriteBtnHandler} disabled={favorite} className="btn  btn-info text-white">Add favorite</button>
                        </td>
                    </tr>
                    {/* row 2 */}
                </tbody>

            </table>
        </div>
    );
};

export default RecipesList;