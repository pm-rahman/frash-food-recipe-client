import { useNavigate } from "react-router-dom";
import NavMenu from "../../Components/NavMenu/NavMenu";
import Footer from "../../Components/Footer/Footer";
import Button from "../../Components/Button/Button";

const ErrorPage = () => {
    const navigate = useNavigate();
    const goBackHandler = () => {
        navigate(-1);
    }
    return (
        <div className="flex flex-col min-h-screen">
            <NavMenu />
            <hr className="mx-32" />
            <div className="px-12 flex flex-col items-center sm:px-20 md:px-32 pt-24 text-center">
                <img className="mx-auto h-64" src="https://i.ibb.co/gS97Hjr/404-page.jpg" alt="404-page" />
                <Button onClick={goBackHandler}>Go Back</Button>
            </div>
            <div className="mt-auto">
                <Footer />
            </div>
        </div>
    );
};

export default ErrorPage;