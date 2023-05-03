import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
    return (
        <NavLink
        to={to}
        className={({isActive})=>isActive?'text-sky-400 underline':''}
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;