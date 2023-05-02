import Button from "../Button/Button";

const NavMenu = () => {
    return (
        <div className="px-32">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <a className="normal-case text-xl font-bold">Favorite <span className="text-2xl text-sky-500 px-1">Food</span> Zone </a>
                    <h4 className=""></h4>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>Blogs</a></li>
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