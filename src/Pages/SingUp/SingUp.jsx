import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Helmet } from "react-helmet";
import bgLogin from "../../assets/others/authentication.png";
import loginPng from "../../assets/others/authentication2.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuth";
import Swal from "sweetalert2";



const SingUp = () => {

    const {createUser , updateUserProfile} = useAuth();
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

       createUser( email , password)
        .then((result) =>{
          updateUserProfile(result.name , result.photoURL)
          .then(() => {
            console.log("data is update");
          })
            Swal.fire({
              position: "top",
              icon: "success",
              title: "Account create successfully",
              showConfirmButton: false,
              timer: 1500
            });
            navigate('/login')
        })
       
      }


    return (
        <div className="h-full border-4" style={{backgroundImage: `url('${bgLogin}')`}}>
          <button className="btn-sm"><Link to='/'>home</Link></button>
        <div 
        className={`hero min-h-screen shadow-2xl border-4 w-[1000px] mx-auto my-10`}>
          <Helmet>
            <title>Bistro Boss || Sing_Up</title>
          </Helmet>
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left w-1/2">
              <img src={loginPng} />
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl">
              <form onSubmit={handleSubmit} className="card-body">

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="photoURL"
                    placeholder="Photo"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
  
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                <input className="btn bg-[#D1A054B3]" type="submit" value="Sing up" />
              </div>
              </form>
             <div className="text-center">
             <p className="text-[#D1A054B3] "><small>Already register?<Link to='/login' className="font-bold "> Go to log in </Link> </small></p>
            
           <div className="flex items-center justify-center gap-5 my-2">
           <button>
            <FcGoogle  className="text-3xl"/>
            </button>
            <button className="text-3xl">  <FaGithub /></button>
           </div>
     
             </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SingUp;