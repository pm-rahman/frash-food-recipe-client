import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import NavMenu from "../../Components/NavMenu/NavMenu";

const Main = () => {
    return (
        <>
            <NavMenu />
            <Outlet />
            <Footer />
        </>
    );
};

export default Main;