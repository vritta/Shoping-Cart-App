import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
// import { useSelector } from "react-redux";

const App = () => {
  // const count = useSelector((state)=>state.counter.value)
  return <div>
  {/* {count}  */}
    <div className="bg-slate-900">
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
