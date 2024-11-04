import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import Rating from "../components/Rating";
import Container from "../components/Container";
import BreadCrumb from "../components/BreadCrumb";

const ProductDetail = () => {
  const { productId } = useParams();
  const currentProduct = products.find(({ id }) => id == productId);
  console.log(currentProduct);
  return (
    
    <div className="p-5">
      <Container>
        <BreadCrumb currentTitle="Product-detail" />
        
         <div className="border border-black p-10  ">
          <div className="grid grid-cols-2  gap-3 ">
            <div className="col-span-1 ">
              <img
                src={currentProduct.image}
                alt=""
                className="w-3/4 block mx-auto"
              />
            </div>
            <div className="col-span-1 flex flex-col gap-5 items-start">
              <h3 className="text-3xl font-bold">{currentProduct.title}</h3>
              <p className="bg-gray-200 text-gray-700 inline-block px-5 py-1 border rounded-lg ">
                {currentProduct.category}
              </p>
              <p>{currentProduct.description}</p>
              <Rating rate={currentProduct.rating.rate} />
              <div className="flex justify-between items-center w-full">
                <p className="">Price ({currentProduct.price} $)</p>
                <button className="border border-black px-3 py-1 text-sm ">
                  Add Card
                </button>
              </div>
            </div>
            {/* <h3 className="col-span-1 text-3xl line-clamp-2 ">
        {currentProduct.title}
      </h3>

      <p className="col-span-1">Price ({currentProduct.price} $)</p> */}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetail;
//
