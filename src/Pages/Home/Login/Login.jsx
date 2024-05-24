import { Helmet } from "react-helmet-async";
import bgLogin from "../../../assets/others/authentication.png";
import loginPng from "../../../assets/others/authentication2.png";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useEffect, useRef, useState } from "react";
import { useAuth } from "../../../Hooks/useAuth";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";


const Login = () => {

    const [disable , setDisable] = useState(true);
    const validateRef = useRef();

    // auth Context
    const {singIn , googleLogin} = useAuth();

  // form submit
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password };
    console.log(user);
    singIn(email , password)
    .then(result =>{
      console.log(result.user);
    })
  }

  function handleGoogleLogin(){
    googleLogin()
    .then(result =>{
      console.log(result.user);
    })
    .catch(err => {
      console.error(err)
    })
  }

// captcha handle 
  function handleValidateCaptcha () {
    const user_captcha_value = validateRef.current.value;
    console.log(user_captcha_value);
    if(validateCaptcha(user_captcha_value)){
        setDisable(false)
    }
    else{
        setDisable(true)
    }
  }

  useEffect( () =>{
    loadCaptchaEnginge(6); 
  } , []);

  return (
    <div className="h-full border-4" style={{backgroundImage: `url('${bgLogin}')`}}>
      <div 
      className={`hero min-h-screen shadow-2xl border-4 w-[1000px] mx-auto my-10`}>
        <Helmet>
          <title>Bistro Boss || Login</title>
        </Helmet>
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left w-1/2">
            <img src={loginPng} />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl">
            <form onSubmit={handleSubmit} className="card-body">
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
                <label className="label">
                  <a className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  name="captcha"
                  ref={validateRef}
                  required
                  placeholder="type the text above"
                  className="input input-bordered"
                />
                <button 
             
                onClick={handleValidateCaptcha}
                className="btn btn-xs mt-4">
                VALIDATE</button>
              </div>

              <div className="form-control mt-6">
                <input disabled={disable} className="btn bg-[#D1A054B3]" type="submit" value="Sing in" />
              </div>
            </form>
           <div className="text-center">
           <p className="text-[#D1A054B3] "><small>New here? <Link to='/singUp' className="font-bold "> Create a new Account </Link> </small></p>
           <p>Or sing in with</p>
          
         <div className="flex items-center justify-center gap-5 my-2">
         <button onClick={handleGoogleLogin}>
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

export default Login;
