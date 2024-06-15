import React from "react";

const ProductCard = ({ product, onClick }) => {
  const {
    id,
    name,
    price,
    currency,
    delivery,
    thumbnail,
    inStock,
    categoryId,
  } = product;

  return (
    <div
      className="border py-6 px-3  w-[270px] flex flex-col rounded-2xl "
      key={id}
    >
      <div className="overflow-hidden  py-3 rounded-md  justify-center items-center flex ">
        <img src={thumbnail} className="object-contain  h-40 " />
      </div>

      <div className="flex flex-col gap-1 py-4 justify-center items-start px-2 ">
        <h2 className="text-xl font-bold">{name}</h2>
        <h3 className="text-lg font-semibold">${price}</h3>
        <p className={`${inStock ? "text-black" : "text-red-600"} font-[450]`}>
          {inStock ? "In Stock" : "Out of Stock"}
        </p>
      </div>

      <button
        onClick={onClick}
        disabled={!inStock}
        className={`${
          inStock ? "bg-black " : "bg-gray-400"
        } text-white font-bold px-3 py-2 active:bg-gray-900`}
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
