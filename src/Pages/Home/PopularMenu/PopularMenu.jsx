
import SectionTitle from "../../../componentes/SectionTitle";
import MenuItems from "../MenuItems/MenuItems";
import { UseMenu } from "../../../Hooks/UseMenu";

const PopularMenu = () => {

    const [menu] = UseMenu();
    let popular = menu.filter(items => items.category === 'popular')

    return (
        <section className="mb-5">
            <SectionTitle 
            subHeading='---Check it out---'
            heading='Popular Items'
            />

     <div className="md:grid lg:grid grid-cols-2 gap-10">
        {
            popular.map(item => <MenuItems
            key={item._id}
            item={item}
            >
            </MenuItems>)
        }
     </div>
       <button className="btn btn-outline w-1/6 border-0 border-b-4 my-5">See All</button>

            
        </section>
    );
};

export default PopularMenu;