import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
    return (
        <NavLink
        to={to}
        className={({isActive})=>isActive?'text-emerald-400 underline':''}
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;