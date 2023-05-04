import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../../Components/spinner/spinner";

const PrivateRouter = ({ children }) => {
    const { user, isLoading } = useContext(AuthContext);
    const location = useLocation();
    if (isLoading) {
        return <Spinner/>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace ></Navigate>;
};

export default PrivateRouter;