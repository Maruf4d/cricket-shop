import Swal from "sweetalert2";
import { useAuth } from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure/UseAxiosSecure";


const FoodCard = ({items}) => {
    const { name ,image , price , recipe , _id} = items;
    const {user} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const AxiosSecure = UseAxiosSecure()
    const handleAddToCard = food =>{
      // console.log(food , user.email);
      if(user && user.email){
        const cartItem = {
          menuId : _id,
          email : user.email,
          name,
          image,
          price
        }
        AxiosSecure.post('/carts' , cartItem)
        .then(res => {
          console.log(res.data);
          if(res.data.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} added to your cart`,
              showConfirmButton: false,
              timer: 2200
            });
          }
        })
      }
      else{
        Swal.fire({
          title: "You are not login",
          text: "Please login to add to the cart",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Login!"
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login', {state : {from: location}})
          }
        });
      }
    }
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
          <button 
          onClick={ () => handleAddToCard(items)}
           className="btn btn-outline border-0 bg-slate-100 border-orange-300 text-orange-300 border-b-4">
            Add to Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
