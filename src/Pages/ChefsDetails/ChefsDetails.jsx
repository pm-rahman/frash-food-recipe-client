import { useLoaderData, useParams } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Banner from '../../Components/Banner/Banner';
import RecipesList from './RecipesList/RecipesList';
import { useEffect, useState } from 'react';
import LazyLoad from 'react-lazy-load';
import Spinner from '../../Components/spinner/spinner';

const ChefsDetails = () => {
    const [chefs, setChefs] = useState([]);
    const recipes = useLoaderData();
    const { id } = useParams();
    useEffect(() => {
        fetch(`https://favourite-food-recipes-server-pm-rahman.vercel.app/chefs/${id}`)
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [id])
    const { ChefName, chefPicture, experience, Likes, bio, NumberOfRecipes } = chefs;
    return (
        <>
            <div className='relative'>

                <Banner>
                    <div className='p-12 relative items-center grid grid-cols-3 gap-8'>
                        <div className='h-52 w-full overflow-hidden'>
                            <LazyLoad className='h-full w-full' threshold={0.95}>
                                <img className='rounded-md min-h-full mx-auto max-w-full' src={chefPicture} />
                            </LazyLoad>
                        </div>
                        <div className='col-span-2 flex flex-col gap-2'>
                            <h4 className='font-bold'>{ChefName}</h4>
                            <p className='text-sm text-justify'>{bio}</p>
                            <div className="flex items-end justify-between mb-1">
                                <div>
                                    <p className="text-sm  font-medium">{experience}</p>
                                    <p className="font-medium">{NumberOfRecipes} Recipes Available</p>
                                </div>
                                <span className="text-xs flex items-center gap-1"><Icon className="text-xl" icon="fa-regular:thumbs-up" />{Likes}</span>
                            </div>
                        </div>
                        <div className='bg-stone-100 opacity-30 rounded-lg -z-10 h-full w-full mx-auto absolute top-0'></div>
                    </div>
                </Banner>
                <div className='bg-stone-500 opacity-70 h-full w-full mx-auto absolute top-0 -z-20'></div>
            </div>
            {
                recipes.length === 0 && <div className="text-center mt-8"><Spinner /></div>
            }
            <div className='px-12 sm:px-20 md:px-32 py-12 bg-slate-50'>
                <h4 className='text-2xl font-normal mb-6'>Hare Some Recipes</h4>
                {
                    recipes.map(recipe => <RecipesList
                        key={recipe.id}
                        recipe={recipe}
                    >
                    </RecipesList>
                    )
                }
            </div>
        </>
    );
};

export default ChefsDetails;