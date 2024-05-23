import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../Pages/Shared/Footer/Footer";
import Navbar from "../../Pages/Shared/Navbar/Navbar";

const Root = () => {
    const location = useLocation()
    const isLogin = location.pathname.includes('login')
    return (
        <div>
            {isLogin || <Navbar/>}
            <Outlet/>
            { isLogin || <Footer/>}
        </div>
    );
};

export default Root;