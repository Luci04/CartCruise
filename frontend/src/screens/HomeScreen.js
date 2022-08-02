import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
// import products from "../products";
import Product from "../components/Product";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");

      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <h1 className="my-3">Latest Products</h1>
      <Row>
        {products.map((element) => (
          <Col key={element._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={element} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
