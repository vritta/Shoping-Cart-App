import {toast} from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";

const Product = ({post}) => {

  const {cart} = useSelector((state)=> state);
  // console.log(cart);
  console.log(typeof(cart));
  
  const dispatch = useDispatch();
  
  const removeFromCart= ()=>{
    dispatch(remove(post.id));
    toast.error("Item removed from Cart");
  }
  const addToCart = ()=>{
    dispatch(add(post));
    toast.success("Item added to cart");
  }
  
  return (
    <div className="flex flex-col items-center hover:scale-110 transition 
    duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline hover:shadow-[0px_0px_20px_10px_#667eea]">
    <div className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
      {post.title}
    </div>
    <div>
      <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{post.description.split(" ").slice(0,10).join(" ")+"..."}</p>
    </div>
    <div className="h-[180px]">
      <img src={post.image} alt="" className="h-full w-full"/>
    </div>

    <div className="flex justify-between items-center w-full mt-5">
      <div>
        <p className="text-green-600 font-semibold">${post.price}</p>
      </div>
      <button>
        {
          cart.some((p) => p.id === post.id) ? (
            <button onClick={removeFromCart}>
              Remove Item
            </button>
          ) :(
            <button onClick={addToCart}>
              Add to Cart
            </button>
          )
        }
      </button>
    </div>
  </div>
);
};

export default Product;