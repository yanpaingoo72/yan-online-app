import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="px-5 py-5">
      <Container>
        <div className="flex justify-between items-center ">
          <Link to={"./"} className="text-3xl font-bold">Online Shop</Link>
          <Link to={"./my-cart"} className="border border-black px-5 py-2  relative">
            My Cart
            <span className="inline-block text-xs px-2 bg-red-400 text-white py-1 absolute translate-x-1/2 -translate-y-1/2 top-0 right-0">
              0
            </span>
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
