import SectionTitle from "../../../componentes/SectionTitle";
import featuredImage from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="features-item mb-10 text-white p-4 bg-fixed">
            <SectionTitle subHeading={'Check it out'} heading={'Featured Items'}/>
        <div className="md:flex lg:flex justify-center items-center pb-20 pt-12 px-36 mt-8 bg-slate-600 opacity-80 rounded-3xl">
        <div>
                <img src={featuredImage}/>
            </div>
            <div className="lg:ml-10">
                <p className="">Aug , 20, 2029</p>
                <p className="uppercase">Where can i get some</p>
                <p>Indulge in the cozy ambiance of our bistro, where classic comfort meets culinary finesse. Our menu showcases a delightful array of dishes crafted from fresh, locally-sourced ingredients. Start with a crisp, vibrant salad or a hearty soup, and savor mains like succulent steak frites, creamy risotto, or our signature coq au vin. Each plate is thoughtfully prepared to tantalize your taste buds. Complement your meal with a selection from our curated wine list or a craft cocktail. For dessert, enjoy a decadent chocolate mousse or a slice of velvety cheesecake. Experience the warmth and flavor of bistro dining at its finest.</p>
                <button className="btn btn-outline border-0 border-b-4">Order Now</button>
            </div>
        </div>
        </div>
    );
};

export default Featured;