import { useLoaderData } from "react-router-dom";
import Chefs from "../Chefs/Chefs";

const Home = () => {
    const theChefs = useLoaderData();
    return (
        <div className="px-32 py-12 grid md:grid-cols-3 gap-4">
            {
                theChefs.map(chefs => <Chefs
                key={chefs.id}
                chefs={chefs}
                ></Chefs>)
            }
        </div>
    );
};

export default Home;