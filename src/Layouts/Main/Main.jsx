import { Outlet, useLocation } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import NavMenu from "../../Components/NavMenu/NavMenu";
import Button from "../../Components/Button/Button";
import { Icon } from "@iconify/react";

const Main = () => {
    const { pathname } = useLocation();
    return (
        <div>
            <NavMenu />
            {
                pathname === '/login' || pathname === '/register'
                    ? <hr className="mx-32"/>
                    : <Banner>
                        <span className="text-semibold text-sm font-normal flex items-center gap-2">EXCLUSIVE RECIPES <span className="bg-sky-500 py-1 px-2 md:px-4 rounded-full">25% OFF</span></span>
                        <h4 className="text-2xl md:text-4xl font-semibold py-3">Our Spatial Discount<p className="flex gap-2"> Week is <span className="flex items-end"><Icon className="text-2xl" icon="fa-solid:running" /><Icon className="text-3xl" icon="fa-solid:running" /><Icon icon="fa-solid:running" /></span></p></h4>
                        <p className="font-medium text-lg mb-4">Only this week. Don't miss</p>
                        <Button><span className="flex items-center gap-2">Go To Prime <Icon icon="fa-solid:long-arrow-alt-right" /></span></Button>
                    </Banner>
            }
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;