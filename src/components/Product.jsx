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
    <div className="flex flex-col items-center">
    <div>
      {post.title}
    </div>
    <div>
      <p>{post.description.split(" ").slice(0,10).join(" ")+"..."}</p>
    </div>
    <div>
      <img src={post.image} alt="" />
    </div>
    <div>
      <p>{post.price}</p>
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
);
};

export default Product;