import { Helmet } from "react-helmet-async";
import Cover from "../../Pages/Shared/Cover/Cover";
import menuImage from '../../assets/menu/banner3.jpg'

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Bistro || Menu
                </title>
            </Helmet>
            <Cover img={menuImage} title={'our menu'}/>
        </div>
    );
};

export default Menu;