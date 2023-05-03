import { Link } from "react-router-dom";
import Button from "../Button/Button";
import ActiveLink from "../ActiveLink/ActiveLink";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";

const NavMenu = () => {
    const { user,logout } = useContext(AuthContext);
    console.log(user);
    const userLogoutHandler = ()=>{
        logout()
        .then()
        .catch()
    }
    return (
        <div className="px-32 py-3">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <a className="normal-case logo text-xl flex items-center"><span className="text-2xl text-sky-500">F</span>resh <span className="text-2xl text-sky-500">F</span>ood <span className="text-2xl text-sky-500 px-0">R</span>ecipes </a>
                    <h4 className=""></h4>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
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
    );
};

export default NavMenu;