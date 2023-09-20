import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import ActiveLink from "../ActiveLink/ActiveLink";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";

const NavMenu = () => {
  const { user, logout } = useContext(AuthContext);
  const naviGate = useNavigate();
  const location = useLocation();
  const from = location.pathname === "/chefs" ? "/" : location.pathname;
  const userLogoutHandler = () => {
    logout()
      .then(() => {
        naviGate(from);
      })
      .catch();
  };
  return (
    <>
      <nav className="flex items-center justify-between gap-6 overflow-x-auto backdrop-blur shadow-lg py-1 sticky top-0 z-50">
        <div className="navbar container md:py-1 flex-col md:flex-row gap-1">
          <div className="md:navbar-start">
            <Link
              to="/"
              className="normal-case logo text-xl text-orange-600 flex md:items-center"
            >
              <span className="text-2xl text-orange-500">F</span>resh{" "}
              <span className="text-2xl text-orange-500">F</span>ood{" "}
            </Link>
            <h4></h4>
          </div>
          <div className="md:navbar-end flex items-center gap-4">
            <div className="">
              <ul className="flex gap-2 text-orange-400 md:gap-4 md:px-1">
                <li>
                  <ActiveLink to="/">Home</ActiveLink>
                </li>
                <li>
                  <ActiveLink to="/recipes">Recipes</ActiveLink>
                </li>
              </ul>
            </div>
            <div>
              {user ? (
                <div className="flex gap-3 items-center">
                  <Link onClick={userLogoutHandler}>
                    <Button>logout</Button>
                  </Link>
                  <img
                    title={user?.displayName}
                    className="cursor-pointer h-10 w-10 rounded-full"
                    src={user?.photoURL}
                    alt=""
                  />
                </div>
              ) : (
                <Link to="/login">
                  <Button>Login/Register</Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavMenu;
