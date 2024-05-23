

const FoodCard = ({items}) => {
    const { name ,image , price , recipe } = items
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img
          src={image} />
      </figure>
      <p className="absolute right-0 mr-16 mt-5 px-3 rounded-lg bg-slate-800 text-yellow-300">{price}</p>
      <div className="card-body flex flex-col text-center items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline border-0 bg-slate-100 border-orange-300 text-orange-300 border-b-4">Add to Card</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
