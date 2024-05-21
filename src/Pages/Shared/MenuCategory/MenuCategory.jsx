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
        </div>
    );
};

export default MenuCategory;