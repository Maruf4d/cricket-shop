import { Link } from "react-router-dom";
import { useAuth } from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useAuth();
  // logout
  function handleLogout() {
    logOut().then(() => {
      Swal.fire({
        position: "top-start",
        icon: "success",
        title: "user logout success",
        showConfirmButton: false,
        timer: 1500,
      });
    });
  }
  let navLink = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="menu">Our Menu</Link>
      </li>
      <li>
        <Link to="order/salad">Order</Link>
      </li>
      <li>
        <Link to="order/salad">
          <button className="btn btn-sm">
            <FaShoppingCart/>
            <div className="badge badge-error">+0</div>
          </button>
        </Link>
      </li>
      {user ? (
        <>
          <button onClick={handleLogout} className="btn btn-sm btn-accent">
            {" "}
            Logout{" "}
          </button>
        </>
      ) : (
        <>
          <li>
            <Link to="login">Login</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar fixed z-10 opacity-60 font-extrabold bg-blue-700 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          ></div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
        <Link to="/">
          <a className="btn btn-ghost text-xl">Bistro Boss</a>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
