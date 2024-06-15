import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ categories }) => {
  const { id, name, description } = categories;
  return (
    <Link to={`/category/${id}`}>
      {" "}
      <div
        className=" px-5 border py-5 w-[300px] flex flex-col gap-7 justify-center items-start rounded-md bg-gray-100 "
        key={id}
      >
        <h2 className="text-3xl font-bold  ">{name}</h2>
        <p className="">{description}</p>
      </div>
    </Link>
  );
};

export default CategoryCard;
