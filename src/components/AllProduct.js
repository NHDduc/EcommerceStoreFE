import React, { useEffect, useState } from "react";
import FilterProduct from "./FilterProduct";
import CardFeature from "./CardFeature";
import { useSelector } from "react-redux";

const AllProduct = ({ heading }) => {
  const productData = useSelector((state) => state.product.productList);
  const categoryList = [...new Set(productData.map((el) => el.category))];
  // console.log(categoryList);

  //filter data display
  const [filterby, setFilterby] = useState("");
  const [dataFilter, setDataFilter] = useState([]);

  useEffect(() => {
    setDataFilter(productData);
  }, [productData]);
  // console.log(productData)
  const handleFilterProduct = (category) => {
    setFilterby(category)
    const filter = productData.filter(
      (el) => el.category.toLowerCase() === category.toLowerCase()
    );
    setDataFilter(() => {
      return [...filter];
    });
  };
  const loadingArrayFeature = new Array(10).fill(null);
  return (
    <div>
      <div className="my-5">
        <h2 className="font-bold text-2xl text-slate-800 mb-4">{heading}</h2>

        <div className=" flex gap-4 justify-center overflow-scroll scrollbar-none">
          {categoryList[0] ? (
            categoryList.map((el) => {
              return (
                <FilterProduct
                  category={el}
                  key={el}
                  isActive={el.toLowerCase()===filterby.toLowerCase()}
                  onClick={() => handleFilterProduct(el)}
                />
              );
            })
          ) : (
            <div>
              <p className="min-h-[150px] flex justify-center items-center">
                Loading...
              </p>
            </div>
          )}
        </div>

        <div className=" flex flex-wrap justify-center gap-4 my-4">
          {dataFilter[0]
            ? dataFilter.map((el) => {
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
            : loadingArrayFeature.map((el,index) => (
                <CardFeature loading="Loading..." key={index}/>
              ))}
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
