import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";

const App = () => {
  // const count = useSelector((state)=>state.counter.value)
  return <div>
  {/* {count}  */}
    <div>
      <Navbar/>
    </div>
    <div>
      <Routes>
        <Route path="/" element=<Home/> />
        <Route path="/cart" element=<Cart/> />
      </Routes>
    </div>
  </div>;
};

export default App;
