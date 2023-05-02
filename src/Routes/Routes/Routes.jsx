import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layouts/Main/Main';

const Routes = createBrowserRouter([
    {
        path:'/',
        element:<Main/>
    }
])
export default Routes;