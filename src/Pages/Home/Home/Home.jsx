import { useLoaderData } from "react-router-dom";
import Chefs from "../Chefs/Chefs";
import { useEffect, useState } from "react";
import ExtraSection from "../ExtraTwoSections/ExtraSection";

const Home = () => {
    const theChefs = useLoaderData();
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch('https://favourite-food-recipes-server-pm-rahman.vercel.app/recipes')
            .then(res => res.json())
            .then(data => setRecipes(data));
    }, [])
    return (
        <div className="px-6 sm:px-20 md:px-32 py-4 md:py-12">
            <div className="md:py-12">
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
    );
};

export default Home;