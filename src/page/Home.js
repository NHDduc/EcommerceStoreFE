import React, { useEffect, useRef, useState } from "react";
import HomeCard from "../components/HomeCard";
import { useSelector } from "react-redux";
import CardFeature from "../components/CardFeature";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import AllProduct from "../components/AllProduct";

const Home = () => {
  const productData = useSelector((state) => state.product.productList);
  // console.log(productData);
  const homeProductCartList = productData.slice(1, 5);
  const homeProductCarListVegetables = productData.filter(
    (el) => el.category === "vegetable",
    []
  );
  // console.log(homeProductCarListVegetables);
  const loadingArray = new Array(4).fill(null);
  const loadingArrayFeature = new Array(10).fill(null);

  const slideProductRef = useRef();
  const preveProduct = () => {
    slideProductRef.current.scrollLeft += 200;
  };
  const nextProduct = () => {
    slideProductRef.current.scrollRight -= 200;
  };

  return (
    <div className="p-2 md:p-4">
      <div className="md:flex gap-4 py-2">
        <div className="md:w-1/2">
          <div className="flex gap-3 bg-slate-300 w-36 px-2 rounded-full">
            <p className="text-sm font-medium text-slate-900">Bike Delivery</p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png"
              className="h-7"
            />
          </div>
          <h2 className="text-x4l md:text-7xl font-bold py-3">
            The Fasted Delivery in{" "}
            <span className="text-red-700">Your Home</span>
          </h2>
          <p className="py-3 text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <button className="font-bold bg-red-500 text-slate-200 x-4 py-2 rounded-md">
            Order Now
          </button>
        </div>
        <div className="md:w-1/2 flex flex-wrap gap-3 p-4 justify-center">
          {homeProductCartList[0]
            ? homeProductCartList.map((el) => {
                return (
                  <HomeCard
                    key={el._id}
                    id={el._id}
                    image={el.image}
                    name={el.name}
                    price={el.price}
                    category={el.category}
                  />
                );
              })
            : loadingArray.map((el, index) => {
                return <HomeCard key={index} loading={"Loading..."} />;
              })}
        </div>
      </div>
      <div>
        <div className="">
          <div className="flex w-full">
            <h2 className="font-bold text-2xl text-slate-800 mb-4">
              Fresh Vegetables
            </h2>
            <div className="ml-auto flex gap-4">
              <button
                onClick={preveProduct}
                className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded">
                <GrPrevious />
              </button>
              <button
                onClick={nextProduct}
                className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded">
                <GrNext />
              </button>
            </div>
          </div>
          <div
            className="flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all"
            ref={slideProductRef}>
            {homeProductCarListVegetables[0]
              ? homeProductCarListVegetables.map((el) => {
                  return (
                    <CardFeature
                      key={el._id}
                      id={el._id}
                      name={el.name}
                      category={el.category}
                      price={el.price}
                      image={el.image}
                    />
                  );
                })
              : loadingArrayFeature.map((el, index) => (
                  <CardFeature loading={"Loading..."} key={index} />
                ))}
          </div>
        </div>
        <AllProduct heading={"Your Product"} />
      </div>
    </div>
  );
};

export default Home;
