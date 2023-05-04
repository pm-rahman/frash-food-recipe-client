import { useLoaderData } from "react-router-dom";
import Chefs from "../Chefs/Chefs";
import { useEffect, useState } from "react";
import ExtraSection from "../ExtraTwoSections/ExtraSection";
import Banner from "../../../Components/Banner/Banner";
import Button from "../../../Components/Button/Button";
import { Icon } from "@iconify/react";
import Spinner from "../../../Components/spinner/spinner";

const Home = () => {
    const theChefs = useLoaderData();
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch('https://favourite-food-recipes-server-pm-rahman.vercel.app/recipes')
            .then(res => res.json())
            .then(data => setRecipes(data));
    }, [])
    return (
        <>
            <Banner>
                <span className="text-semibold text-sm font-normal flex items-center gap-2">EXCLUSIVE RECIPES <span className="bg-sky-500 py-1 px-2 md:px-4 rounded-full">25% OFF</span></span>
                <h4 className="text-2xl md:text-4xl font-semibold py-3">Our Spatial Discount<p className="flex gap-2"> Week is <span className="flex items-end"><Icon className="text-2xl" icon="fa-solid:running" /><Icon className="text-3xl" icon="fa-solid:running" /><Icon icon="fa-solid:running" /></span></p></h4>
                <p className="font-medium text-lg mb-4">Only this week. Don't miss</p>
                <Button><span className="flex items-center gap-2">Go To Prime <Icon icon="fa-solid:long-arrow-alt-right" /></span></Button>
            </Banner>

            {
                recipes.length === 0 && <div className="text-center mt-8"><Spinner /></div>
            }

            <div className="px-6 sm:px-20 md:px-32 py-4 md:py-12">
                <div>
                    <h4 className="text-2xl text-center md:text-4xl text-sky-600 font-bold mb-6">Our Chefs</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                        {
                            theChefs.map(chefs => <Chefs
                                key={chefs.id}
                                chefs={chefs}
                            ></Chefs>)
                        }
                    </div>
                </div>
                <div className="py-4 md:py-12">
                    <h4 className="text-2xl text-center text-sky-600 md:text-4xl mb-2 font-bold">Spatial Discounted Recipes</h4>
                    <p className="text-center mb-4">Only this week. Don't miss</p>
                    <div className="grid md:grid-cols-3 gap-4">
                        {recipes.slice(0, 6).map(recipe => <ExtraSection
                            key={recipe.id}
                            recipe={recipe}
                        ></ExtraSection>)}
                    </div>
                </div>
                <div className="py-4 md:py-12">
                    <h4 className="text-2xl text-center md:text-4xl text-sky-600 font-bold mb-2">Top Rated Recipes</h4>
                    <p className="text-center mb-4">Base on your reviews</p>
                    <div className="grid md:grid-cols-2 gap-4">
                        {recipes.slice(5, 9).map(recipe => <ExtraSection
                            key={recipe.id}
                            recipe={recipe}
                        >
                            {true}
                        </ExtraSection>)}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;