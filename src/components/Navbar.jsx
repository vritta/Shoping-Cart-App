import {FaShoppingCart} from "react-icons/fa"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const cart = useSelector((state)=> state.cart);
  return (
  <div className="">
    <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
      <NavLink to="/">
        <div className="ml-5">
          <img src="../logo.png" alt="" className="h-12"/>
        </div>
      </NavLink>
      
      <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
        <NavLink to="/">
          <p>Home</p>
        </NavLink>
        <NavLink to="/cart" className="relative">
          <FaShoppingCart className="text-2xl"/>
          {
            cart.length>0 && 
            <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 
            rounded-full flex justify-center animate-bounce items-center text-white">
              {cart.length}
            </span>
          }
        </NavLink>
      </div>
    </nav>
  </div>
  )
};

export default Navbar;
