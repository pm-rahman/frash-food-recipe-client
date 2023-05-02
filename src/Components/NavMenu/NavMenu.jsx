import Button from "../Button/Button";

const NavMenu = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <a className="btn btn-ghost normal-case text-xl font-bold">Favorite <span className="text-2xl text-sky-400 px-1">Food</span> Zone </a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li tabIndex={0}>
                        <a>
                            Blogs
                        </a>
                    </li>
                </ul>
            </div>
            <div className="">
                <Button>Login</Button>
            </div>
        </div>
    );
};

export default NavMenu;