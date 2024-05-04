const Product = ({post}) => {
  let selected = false;
  // console.log(post);
  return (
  <div>
    <div>
      {post.title}
    </div>
    <div>
      <p>{post.description}</p>
    </div>
    <div>
      <img src={post.image} alt="" />
    </div>
    <div>
      <p>{post.price}</p>
    </div>
    <button>
      {
        selected ? <p>Remove Item</p> : <p>Add To Cart</p>
      }
    </button>
  </div>
);
};

export default Product;
