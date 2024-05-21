import { Helmet } from "react-helmet-async";
import Cover from "../../Pages/Shared/Cover/Cover";
import menuImage from '../../assets/menu/banner3.jpg'
import pizzaImage from '../../assets/menu/pizza.jpg'
import dessertImage from '../../assets/menu/dessert.jpg'
import saladImage from '../../assets/menu/salad-bg.jpg'
import soupImage from '../../assets/menu/soup.jpg'
import drinksImage from '../../assets/menu/drinks.jpg'
import { UseMenu } from "../../Hooks/UseMenu";
import SectionTitle from "../SectionTitle";
import MenuCategory from "../../Pages/Shared/MenuCategory/MenuCategory";

const Menu = () => {
    const [menu] = UseMenu();
    let desserts= menu.filter(items => items.category === 'dessert')
    let soup = menu.filter(items => items.category === 'soup')
    let salad = menu.filter(items => items.category === 'salad')
    let drinks = menu.filter(items => items.category === 'drinks')
    let pizza = menu.filter(items => items.category === 'pizza')
    let offered = menu.filter(items => items.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>
                    Bistro || Menu
                </title>
            </Helmet>
            {/* main cover */}
            <Cover img={menuImage} title={'our menu'}/>
            <SectionTitle heading={'Today offer'} subHeading={' Do not miss'}/>

            {/* offered items */}
            <MenuCategory items={offered}/>

            {/* dessert items */}
            <MenuCategory 
            items={desserts}
            coverImage={dessertImage}
            title={"Dessert"}
            />

            {/* pizza items */}
            <MenuCategory 
             items={pizza}
             title={"pizza"}
             coverImage={pizzaImage}
             />
            {/* salad items */}
            <MenuCategory 
             items={salad}
             title={"salad"}
             coverImage={saladImage}
             />
            {/* soup items */}
            <MenuCategory 
             items={soup}
             title={"soup"}
             coverImage={soupImage}
             />
            {/* drinks items */}
            <MenuCategory 
             items={drinks}
             title={"drinks"}
             coverImage={drinksImage}
             />
        </div>
    );
};

export default Menu;