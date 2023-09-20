import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layouts/Main/Main';
import Home from '../../Pages/Home/Home/Home';
import ChefsDetails from '../../Pages/ChefsDetails/ChefsDetails';
import ErrorPage from '../../Pages/ErrorPage/ErrorPage';
import Login from '../../Pages/Login/Login/Login';
import Register from '../../Pages/Login/Register/Register';
import PrivateRouter from '../PrivateRouter/PrivateRouter';
import Recipes from '../../Pages/Recipes/Recipes';
import Recipe from '../../Pages/Recipe/Recipe';

const Routes = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element: <Home/>,
                loader: ()=>fetch('https://favourite-food-recipes-server-pm-rahman.vercel.app/chefs')
            },
            {
                path:"recipes",
                element:<Recipes/>
        
            },
            {
                path:"recipe/:id",
                element:<PrivateRouter><Recipe/></PrivateRouter>,
                loader: ({params})=> fetch(`https://favourite-food-recipes-server-pm-rahman.vercel.app/recipe/${params.id}`)
        
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            },
            {
                path:'chef/:id',
                element: <PrivateRouter><ChefsDetails/></PrivateRouter>,
                loader: ({params})=> fetch(`https://favourite-food-recipes-server-pm-rahman.vercel.app/chef-recipes/${params.id}`)
            },
        ]
    },
    {
        path:'/*',
        element: <ErrorPage/>
    }
])
export default Routes;