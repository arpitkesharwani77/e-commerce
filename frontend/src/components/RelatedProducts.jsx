import React, { useContext, useMemo } from "react";
import ShopContext from "../context/shop-context";
import Title from "./Title";
import ProductItem from "./ProductItem";

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);

  const related = useMemo(() => {
    if (!products || products.length === 0) return [];

    let productsCopy = products.slice();

    // Filter only when props are provided
    if (category) {
      productsCopy = productsCopy.filter((item) => item.category === category);
    }

    if (subCategory) {
      productsCopy = productsCopy.filter(
        (item) => item.subCategory === subCategory
      );
    }

    return productsCopy.slice(0, 5);
  }, [products, category, subCategory]);
  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Title text1={"RELATED"} text2={"PRODUCTS"} />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {related.map((item, idx) => (
          <ProductItem
            key={item._id ?? idx}
            id={item._id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
