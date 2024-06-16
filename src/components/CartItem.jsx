import React, { useEffect, useState } from "react";
import {
  addQuantity,
  removeQuantity,
  updateItemPrice,
} from "../Store/CartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ product, onClick }) => {
  const { id, name, price, currency, thumbnail, quantity } = product;
  const [totalPrice,setTotalPrice] = useState(price*quantity)

  const dispatch = useDispatch();

  const handleIncreasequantity = () => {
    dispatch(addQuantity({ id: id }));
  };

  const handledecressqunatity = () => {
    dispatch(removeQuantity({ id: id }));
   
  };

  const updatePrice = ()=>{
    setTotalPrice(price*quantity)
  }

  useEffect(()=>{
    updatePrice()
  },[quantity])

  return (
    <main id={id} className="py-3 border bg-gray-100">
      <div className="grid grid-cols-5  items-center">
        <div className=" flex justify-end px-10">
          <img src={thumbnail} alt={name} width={50} />
        </div>
        <div>
          <h2 className="text-lg font-bold">{name}</h2>
        </div>

        <div>
          <h2 className="text-lg font-semibold">
            {totalPrice} {currency}
          </h2>
        </div>

        <div className="flex gap-2 items-center">
          <button onClick={handledecressqunatity} className="outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="black"
              class="bi bi-dash"
              viewBox="0 0 16 16"
            >
              <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
            </svg>
          </button>

          <h2 className="text-xl border-b border-b-black px-1.5 font-semibold">
            {quantity}
          </h2>
          <button onClick={handleIncreasequantity} className="outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="black"
              class="bi bi-plus-lg"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
              />
            </svg>
          </button>
        </div>

        <div>
          <button onClick={onClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="cblack"
              class="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg>
          </button>
        </div>
      </div>
    </main>
  );
};

export default CartItem;
