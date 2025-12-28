import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShopContext from "../context/shop-context";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";
import { toast } from "react-toastify";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);

  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState();

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);
  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* ======================Product data========================= */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* -------------------product image---------------------- */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, idx) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={idx}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrik-0 cursor-pointer"
              />
            ))}
          </div>

          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} />
          </div>
        </div>

        {/*------------------- Product info---------------------------- */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center mt-2 gap-1">
            <img src={assets.star_icon} className="w-3 5" />
            <img src={assets.star_icon} className="w-3 5" />
            <img src={assets.star_icon} className="w-3 5" />
            <img src={assets.star_icon} className="w-3 5" />
            <img src={assets.star_dull_icon} className="w-3 5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {" "}
            {currency} {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>

          <div className="flex flex-col my-8 gap-4">
            <p>Select size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, idx) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border bg-gray-100 py-2 px-4 ${
                    item === size ? "border-orange-500" : ""
                  }`}
                  key={idx}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => {
              if (typeof addToCart !== "function") return;
              const res = addToCart(productData._id, size);
              if (res && res.success === false) {
                toast.error(res.message);
                return;
              }
              toast.success("Added to cart");
            }}
            className={`bg-black text-white px-8 py-3 text-sm active:bg-gray-700`}
          >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="mt-5 flex flex-col gap-1 text-sm text-gray-500 ">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Eash return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/*--------------- description and review section-------------------- */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Review (122)</p>
        </div>
        <div className="flex flex-col gap-4  border px-6 py-6 text-gray-500">
          <p>
            An Ecommerse platform , Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Reiciendis deleniti sint doloremque tempore
            voluptates optio repellat, quas, voluptatum, harum consectetur quos
            omnis tempora excepturi maiores.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores,
            molestias? Ipsa maxime omnis, reprehenderit ducimus itaque aliquam
            inventore deleniti assumenda necessitatibus, corrupti, sunt velit
            saepe atque? Voluptatum aperiam velit numquam.
          </p>
        </div>
      </div>

      {/* -------------------display related products------------------ */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
