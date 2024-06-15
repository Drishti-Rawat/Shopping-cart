import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../components/CartItem";
import { removefromCart } from "../Store/CartSlice";

const CheckOut = () => {
  const cartItem = useSelector((state) => state.items);
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);

  const calculateTotalPrice = () => {
    let total = 0;
    cartItem ? cartItem.map((item) => (total += item.price)) : (total = 0);
    setTotalPrice(total);
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [cartItem]);

  const handleRemoveItem = (product) => {
    dispatch(removefromCart(product));
  };

  return (
    <main className="flex flex-col justify-center px-16 ">
      <div className="grid grid-cols-5  items-center  border-b py-4">
        <h2></h2>
        <h2 className=" ">Name</h2>
        <h2>Price</h2>
        <h2>Quantity</h2>
      </div>

      <div className="">
        {cartItem ? (
          cartItem.map((item) => (
            <CartItem
              product={item}
              onClick={() => handleRemoveItem(item.id)}
            />
          ))
        ) : (
          <div className="flex justify-center items-center mt-10 text-4xl font-bold">
            {" "}
            No items are added
          </div>
        )}
      </div>

      <div className="mt-6 px-3 py-3">
        {cartItem ? (
          <h2 className="text-3xl font-semibold">
            Total Price : {totalPrice} USD
          </h2>
        ) : (
          ""
        )}
      </div>
    </main>
  );
};

export default CheckOut;
