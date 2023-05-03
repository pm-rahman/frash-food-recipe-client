import { useNavigate } from "react-router-dom";
import NavMenu from "../../Components/NavMenu/NavMenu";

const ErrorPage = () => {
    const navigate = useNavigate();
    const goBackHandler = ()=>{
        navigate(-1);
    }
    return (
        <div>
            <NavMenu />
            <hr className="mx-32" />
            <div className="px-32 pt-24 text-center">
                <img className="mx-auto h-64" src="https://i.ibb.co/gS97Hjr/404-page.jpg" alt="404-page" />
                <button onClick={goBackHandler} className="btn btn-outline btn-info">Go Back</button>
            </div>
        </div>
    );
};

export default ErrorPage;