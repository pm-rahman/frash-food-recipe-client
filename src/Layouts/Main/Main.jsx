import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import NavMenu from "../../Components/NavMenu/NavMenu";

const Main = () => {
  return (
    <>
      <NavMenu />
      <div className="bg-[rgb(245,251,248)]">
        <div className="container py-8">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Main;
