import { Link } from "react-router-dom";
import MenuItems from "../../Home/MenuItems/MenuItems";
import Cover from "../Cover/Cover";

const MenuCategory = ({items , title , coverImage}) => {
    return (
        <div>
            {
                title && <Cover img={coverImage} title={title}/>
            }
             <div className="md:grid lg:grid grid-cols-2 gap-10 my-10">
        {
            items.map(item => <MenuItems
            key={item._id}
            item={item}
            >
            </MenuItems>)
        }
     </div>
        <Link to={`/order/${title}`}>
        <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
        </Link>
        </div>
    );
};

export default MenuCategory;