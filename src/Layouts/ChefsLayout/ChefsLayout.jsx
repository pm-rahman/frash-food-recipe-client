import { Outlet } from 'react-router-dom';
import NavMenu from '../../Components/NavMenu/NavMenu';
import Footer from '../../Components/Footer/Footer';

const ChefsLayout = () => {
    return (
        <div>
            <NavMenu />
            <Outlet />
            <Footer />
        </div>
    );
};

export default ChefsLayout;