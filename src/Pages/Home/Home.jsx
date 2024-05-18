import BistroBoss from "../../componentes/BistroBoss/BistroBoss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimonial from "./Testimonial/Testimonial";


const Home = () => {
    return (
        <div>
            <Banner/>
            <Category/>
            <BistroBoss/>
            <PopularMenu/>
            <Featured/>
            <Testimonial/>
        </div>
    );
};

export default Home;