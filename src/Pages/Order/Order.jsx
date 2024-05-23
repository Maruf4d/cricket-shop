import orderCoverImg from "../../assets/shop/banner2.jpg";

import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import { UseMenu } from "../../Hooks/UseMenu";
import FoodCard from "../../componentes/FoodCard/FoodCard";
import { useParams } from "react-router-dom";


const Order = () => {

    const categories = ['salad ' , 'soup' , 'dessert' , 'drinks','pizza' , 'offered']
    const {category} = useParams();
    const initialIndex = categories.indexOf(category)

    let [tabIndex , setTabIndex ] = useState(initialIndex)
    const [menu] = UseMenu()
    let desserts= menu.filter(items => items.category === 'dessert')
    let soup = menu.filter(items => items.category === 'soup')
    let salad = menu.filter(items => items.category === 'salad')
    let drinks = menu.filter(items => items.category === 'drinks')
    let pizza = menu.filter(items => items.category === 'pizza')
    let offered = menu.filter(items => items.category === 'offered')

  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Order</title>
      </Helmet>
      <Cover img={orderCoverImg} title={"Order now"} />

      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList>
    <Tab>Salad</Tab>
    <Tab>Soup</Tab>
    <Tab>Dessert</Tab>
    <Tab>Drinks</Tab>
    <Tab>Pizza</Tab>
    <Tab>offered</Tab>
  </TabList>
  <TabPanel>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
            salad.map(items => <FoodCard 
                key={items._id}
                items={items}
                />)
        }
    </div>
  </TabPanel>
  <TabPanel>
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
            soup.map(items => <FoodCard 
                key={items._id}
                items={items}
                />)
        }
    </div>
  </TabPanel>
  <TabPanel>
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
            desserts.map(items => <FoodCard 
                key={items._id}
                items={items}
                />)
        }
    </div>
  </TabPanel>
  <TabPanel>
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
            drinks.map(items => <FoodCard 
                key={items._id}
                items={items}
                />)
        }
    </div>
  </TabPanel>
  <TabPanel>
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
            pizza.map(items => <FoodCard 
                key={items._id}
                items={items}
                />)
        }
    </div>
  </TabPanel>
  <TabPanel>
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
            offered.map(items => <FoodCard 
                key={items._id}
                items={items}
                />)
        }
    </div>
  </TabPanel>
</Tabs>
    </div>
  );
};

export default Order;
