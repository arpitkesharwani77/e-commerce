import React, { useContext, useMemo } from "react";
import ShopContext from "../context/shop-context";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const bestSeller = useMemo(
    () => products.filter((item) => item.bestseller).slice(0, 5),
    [products]
  );
  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"BEST"} text2={"SELLERS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi maxime
          sit tempore quas, qui et totam recusandae dolorum, soluta, ducimus
          cumque minima est praesentium error?
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSeller.map((item, idx) => (
          <ProductItem
            key={item._id ?? idx}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
