import React, { useEffect, useState } from "react";
import Container from "../common/Container";
import Row from "../common/Row";
import axios from "axios";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const PopularProducts = () => {
  const [products, setProducts] = useState();
  useEffect(() => {}, []);
  return (
    <Container>
      <Row className="justify-center my-[20px] uppercase">
        <h1 className="text-[30px] font-semibold text-[#1e2832]">
          Popular Products
        </h1>
      </Row>
      <Row className="gap-[24px]">
        <div className="h-[648px] w-[52px] relative">
          <p className="text-[34px] h-full w-[648px] text-black -rotate-90 absolute text-center -z-[1]">
            Explore new and popular styles
          </p>
        </div>
        <Link to="/product-detail">
          <img
            className="w-[648px] h-[648px] object-cover cursor-pointer"
            src="https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdvcmtzcGFjZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="top-popular"
          />
        </Link>
        <Row className=" flex-wrap w-1/2 gap-[24px]">
          {[...new Array(4)].map((_, idx) => (
            <Link to="/product-detail" className="w-[46%] h-[312px]" key={idx}>
              <img
                src="https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdvcmtzcGFjZXxlbnwwfHwwfHx8MA%3D%3D"
                alt="Product"
                className="w-[312px] h-full object-cover"
              />
            </Link>
          ))}
        </Row>
      </Row>
    </Container>
  );
};

export default PopularProducts;
