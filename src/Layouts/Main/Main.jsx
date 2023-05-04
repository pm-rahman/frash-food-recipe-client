import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import NavMenu from "../../Components/NavMenu/NavMenu";

const Main = () => {
    return (
        <div>
            <NavMenu />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;