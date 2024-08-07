

const MenuItems = ({item}) => {
    const { name ,image , price , recipe } = item
    return (
        <div className="lg:flex md:flex space-x-4 mx-2">
            <img style={{borderRadius : `0 200px 200px 200px`}} className="w-[105px]" src={image} />
            <div>
                <h3 className="uppercase">{name}----------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-500">
                &{price}
            </p>
        </div>
    );
};

export default MenuItems;