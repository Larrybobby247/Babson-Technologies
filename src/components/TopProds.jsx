import {
  faArrowCircleRight,
  faArrowLeft,
  faArrowRight,
  faNairaSign,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { ProductLists } from "./ProductLists";

const TopProds = () => {
  const topProds = ProductLists.filter((prod) => prod.arrival === "top");
  return (
    <div id="store">
      <div className="flex flex-col gap-2 text-center mb-12">
        <h1 className="text-3xl font-bold">Trending Products</h1>
        <p className="text-grey">View our hot and trending products we have</p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {topProds.map((product) => {
          return (
            <div
              key={product.id}
              className="shadow-lg rounded-lg "
              data-aos="fade-right"
            >
              <img
                src={product.image}
                alt=""
                className="rounded-lg h-[360px] w-full object-cover"
              />
              <div className="flex flex-col gap-4 my-6 mx-2">
                <h3 className="text-2xl font-bold">{product.name}</h3>
                <p className="text-grey">{product.description}</p>
                <div className="flex gap-4">
                  <h3 className="text-2xl font-bold flex items-center">
                    <FontAwesomeIcon icon={faNairaSign} />
                    {product.price}
                  </h3>
                  <button className="btn-primary">
                    <a href="https://wa.me/2348110947408">Buy Now</a>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopProds;
