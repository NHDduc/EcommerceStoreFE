import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { setDataProduct } from "./redux/productSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  // const productData = useSelector((stack) => stack.product);
  
  useEffect(() => {
   (async () => {
      const res = await fetch(
        `${process.env.REACT_APP_SERVER_DOMIM}/getProduct`
      );
      const resData = await res.json();
      // console.log(resData);
      dispatch(setDataProduct(resData));
    })()
  }, []);

  return (
    <>
      <Toaster />
      <div className="">
        <Header />
        <main className="pt-16 bg-slate-100 min-h-[calc(100vh)]">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
