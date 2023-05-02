import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layouts/Main/Main';
import Home from '../../Pages/Home/Home/Home';

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
    }
])
export default Routes;