import { Outlet } from "react-router-dom";
import Background from "../../Components/Bannar/Bannar";
import Footer from "../../Components/Footer/Footer";
import NavMenu from "../../Components/NavMenu/NavMenu";

const Main = () => {
    return (
        <div>
            <NavMenu/>
            <Background/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;