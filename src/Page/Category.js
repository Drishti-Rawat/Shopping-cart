import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import products from "../data/products.json";
import ProductCard from "../components/ProductCard";
import { useDispatch } from "react-redux";
import { addtocart } from "../Store/CartSlice";

const Category = () => {
  const { categoryId } = useParams();
  const [filters, setfilters] = useState({
    bestSelling: false,
    expensive: false,
    delivery: false,
  });

  const handlefilterchange = (e) => {
    const { name, checked } = e.target;
    setfilters((prev) => ({ ...prev, [name]: checked }));
  };

  const [filterProduct, setFilterProduct] = useState([]);

  useEffect(() => {
    const applyFilters = () => {
      let filteredData = products.filter(
        (product) => product.categoryId === categoryId
      );

      if (filters.bestSelling) {
        filteredData = filteredData.filter((product) => product.bestSelling);
      }
      if (filters.expensive) {
        filteredData = filteredData.filter((product) => product.price >= 100);
      }
      if (filters.delivery) {
        filteredData = filteredData.filter((product) => product.delivery);
      }

      setFilterProduct(filteredData);
    };
    console.log(filterProduct);

    applyFilters();
  }, [filters, categoryId]);

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addtocart(product)); // Dispatch addToCart action
  };

  return (
    <main className="py-10 flex justify-around gap-28 items-center px-10  h-screen">
      {/* filtter */}
      <div className="  h-full border-r px-10  ">
        <div className="flex flex-col gap-6 py-5">
          <h2 className="text-4xl font-bold">Filters</h2>

          <div className="flex flex-col gap-2">
            <label className="text-xl font-semibold text-gray-900">
              <input
                type="checkbox"
                name="bestSelling"
                checked={filters.bestSelling}
                onChange={handlefilterchange}
              />
              <span> Best Selling</span>
            </label>
            <label className="text-xl font-semibold text-gray-900">
              <input
                type="checkbox"
                name="expensive"
                checked={filters.expensive}
                onChange={handlefilterchange}
              />
              <span> Expensive</span>
            </label>
            <label className="text-xl font-semibold text-gray-900">
              <input
                type="checkbox"
                name="delivery"
                checked={filters.delivery}
                onChange={handlefilterchange}
              />
              <span> Delivery Available</span>
            </label>
          </div>
        </div>
      </div>

      {/* product */}

      <div className="flex  justify-center items-center gap-6 overflow-hidden">
        {filterProduct.map((product) => (
          <ProductCard
            product={product}
            onClick={() => handleAddToCart(product)}
          />
        ))}
      </div>

      <div className=" self-start ">
        <Link to="/checkout">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            fill="currentColor"
            class="bi bi-cart-check-fill"
            viewBox="0 0 16 16"
          >
            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708" />
          </svg>{" "}
        </Link>
      </div>
    </main>
  );
};

export default Category;
