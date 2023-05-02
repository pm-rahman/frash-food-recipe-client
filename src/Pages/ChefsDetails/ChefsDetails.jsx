import { useLoaderData } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Background from '../../Components/Bannar/Bannar';
import NavMenu from '../../Components/NavMenu/NavMenu';
import Footer from '../../Components/Footer/Footer';
import RecipesList from './RecipesList/RecipesList';
import { useEffect, useState } from 'react';

const ChefsDetails = () => {
    const [chefs,setChefs] = useState([]);
    useEffect(()=>{
        fetch('https://favourite-food-recipes-server-pm-rahman.vercel.app/chefs/rew1')
        .then(res=>res.json())
        .then(data=>setChefs(data))
    },[])
    const { ChefName, chefPicture, experience, Likes, bio, NumberOfRecipes } = chefs;
    return (
        <>
            <NavMenu />
            <div className='relative'>
                <Background>
                    <div className='p-12 relative items-center grid grid-cols-3 gap-8'>
                        <div className='h-52 w-full overflow-hidden'>
                            <img className='rounded-md min-h-full mx-auto max-w-full' src={chefPicture} alt="" />
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
                </Background>
                <div className='bg-stone-500 opacity-70 h-full w-full mx-auto absolute top-0 -z-20'></div>
            </div>
            <RecipesList/>
            <Footer/>
        </>
    );
};

export default ChefsDetails;