import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
    return (
        <NavLink
        to={to}
        className={({isActive})=>isActive?'text-orange-500 font-semibold':''}
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;