import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Button from '../../../Components/Button/Button';
const RecipesList = ({ recipe }) => {
    const [favorite, setFavorite] = useState(false);
    const { recipeName, cookingMethod, ingredients, rating } = recipe;
    const favoriteBtnHandler = () => {
        setFavorite(true);
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Add To Favorite list Successful',
            showConfirmButton: false,
            timer: 1600
        })
    }
    return (
        <div className="overflow-x-auto shadow-md w-full mb-4">
            <table className="w-full">
                <tbody >
                    <tr className='grid grid-cols-7 px-5 py-3 items-center bg-white rounded-sm gap-2'>
                        <td className='self-start'>
                            <div className="font-bold">Recipe Name</div>
                            <p className="text-sm opacity-50">{recipeName}</p>
                        </td>
                        <td className='col-span-2'>
                            <span className="font-bold">ingredients</span>
                            <br />
                            <span className="text-sm">{ingredients[0]}, </span>
                            <br />
                            <span className="text-sm">{ingredients[1]}, </span>
                            <br />
                            <span className="text-sm">{ingredients[2]}, </span>
                            <br />
                            <span className="text-sm">{ingredients[3]}, </span>
                            <br />
                            <span className="text-sm">{ingredients[4]}</span>
                        </td>
                        <td className='col-span-2 self-start'>
                            <span className="font-bold">Cooking Method</span>
                            <br />
                            <span className="text-sm">{cookingMethod.length > 100 ?
                                <>{cookingMethod.slice(0, 200)} <Link className="underline ml-1 text-emerald-600 font-semibold">See more</Link></>
                                : cookingMethod
                            }</span>
                        </td>
                        <td>
                            <Rating
                                style={{ maxWidth: 120 }}
                                value={rating}
                                readOnly
                            />
                        </td>
                        <td>
                            <Button onClick={favoriteBtnHandler} disabled={favorite}>Add favorite</Button>
                        </td>
                    </tr>
                    {/* row 2 */}
                </tbody>

            </table>
        </div>
    );
};

export default RecipesList;