import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import ActiveLink from "../ActiveLink/ActiveLink";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";

const NavMenu = () => {
    const { user, logout } = useContext(AuthContext);
    const naviGate = useNavigate()
    const location = useLocation()
    const from = location.pathname === '/chefs' ? '/' : location.pathname
    const userLogoutHandler = () => {
        logout()
            .then(() => {
                naviGate(from)
            }
            )
            .catch()
    }
    return (
        <div className="px-6 sm:px-20 md:px-32 py-1 md:py-2">
            <div className="navbar p-0 md:p-1 flex-col md:flex-row gap-1 bg-base-100">
                <div className="md:navbar-start">
                    <a className="normal-case logo text-xl flex md:items-center"><span className="text-2xl text-emerald-600">F</span>resh <span className="text-2xl text-emerald-600">F</span>ood </a>
                    <h4></h4>
                </div>
                <div className="md:navbar-end flex items-center gap-4">
                    <div className="">
                        <ul className="flex gap-2 md:gap-4 md:px-1">
                            <li><ActiveLink to='/'>Home</ActiveLink></li>
                            <li><ActiveLink to='/blogs'>Blogs</ActiveLink></li>
                        </ul>
                    </div>
                    <div>
                        {
                            user ? <div className="flex gap-3 items-center">
                                <img title={user?.displayName} className="cursor-pointer h-10 w-10 rounded-full" src={user?.photoURL} alt="" />
                                <Link onClick={userLogoutHandler}>
                                    <Button>logout</Button>
                                </Link>
                            </div>
                                : <Link to='/login'>
                                    <Button>Login</Button>
                                </Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavMenu;