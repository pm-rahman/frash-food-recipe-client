import { Link } from "react-router-dom";
import Button from "../Button/Button";

const NavMenu = () => {
    return (
        <div className="px-32 py-3">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <a className="normal-case text-xl font-bold flex items-center"><span className="text-2xl text-sky-500">F</span>resh <span className="text-2xl text-sky-500">F</span>ood <span className="text-2xl text-sky-500 px-0">Z</span>one </a>
                    <h4 className=""></h4>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link>Blogs</Link></li>
                    </ul>
                </div>
                <div className="">
                    <Button>Login</Button>
                </div>
            </div>
        </div>
    );
};

export default NavMenu;