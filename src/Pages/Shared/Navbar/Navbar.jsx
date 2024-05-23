import { Link } from "react-router-dom";

const Navbar = () => {
  let navLink = (
    <>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='menu'>Our Menu</Link>
      </li>
      <li>
        <Link to='order/salad'>Order</Link>
      </li>
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
        <a className="btn btn-ghost text-xl">Bistro Boss</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
         {navLink}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
