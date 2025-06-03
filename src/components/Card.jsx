import React from "react";
import Rating from "./Rating";

const Card = ({ type, product, user, article }) => {
  return (
    <>
      <div className=" hover:translate-y-[-10px] cursor-pointer w-[fit-content] p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
        {type === "articles" ? (
          <div className="w-[400px] h-[200px] flex justify-center items-center overflow-hidden">
            <img src={article.img} alt={article.img} />
          </div>
        ) : (
          <div className="w-[200px] flex justify-center items-center overflow-hidden">
            <img
              src={type === "products" ? product.img : user.img}
              alt={type === "products" ? product.img : user.img}
              className={`hover:scale-105 transition-all duration-300 m-4 ${
                type === "users" && "rounded-full"
              }`}
            />
          </div>
        )}

        {type === "products" && (
          <>
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <div>
              <Rating rate={product.rate} />
            </div>
            <p className="text-gray-500">{product.description}</p>
            <h2>{product.price}</h2>
          </>
        )}

        {type === "users" && (
          <div className="flex items-center justify-center flex-col gap-3">
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-500">{user.email}</p>
          </div>
        )}

        {type === "articles" && (
          <div className="flex flex-col gap-3">
            <p className="flex justify-between items-center text-gray-400 mt-1">Posted at: <span>{article.history}</span></p>
            <h1 className="text-2xl font-bold">{article.title}</h1>
            <p className="text-gray-500">{article.description}</p>
            <hr />
            <div className="flex items-center justify-between">
              <p>READ ARTICLE:</p>
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Card;
