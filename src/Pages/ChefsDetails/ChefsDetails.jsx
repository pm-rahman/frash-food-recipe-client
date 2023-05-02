import { useLoaderData } from 'react-router-dom';

const ChefsDetails = () => {
    const recipes = useLoaderData();
    console.log(recipes);
    return (
        <div>
            This is chefs details page
        </div>
    );
};

export default ChefsDetails;