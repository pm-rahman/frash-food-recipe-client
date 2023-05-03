import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layouts/Main/Main';
import Home from '../../Pages/Home/Home/Home';
import ChefsLayout from '../../Layouts/ChefsLayout/ChefsLayout';
import ChefsDetails from '../../Pages/ChefsDetails/ChefsDetails';
import ErrorPage from '../../Pages/ErrorPage/ErrorPage';

const Routes = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element: <Home/>,
                loader: ()=>fetch('https://favourite-food-recipes-server-pm-rahman.vercel.app/chefs')
            }
        ]
    },
    {
        path:'chefs',
        element: <ChefsLayout/>,
        children:[
            {
                path: ':id',
                element:<ChefsDetails/>,
                loader: ({params})=> fetch(`https://favourite-food-recipes-server-pm-rahman.vercel.app/recipes/${params.id}`)
            }
        ]
    },
    {
        path:'/*',
        element: <ErrorPage/>
    }
])
export default Routes;