import React from "react";
import FormContainer from "../components/FormContainer";
import ProductContainer from "../components/ProductContainer";

const Home = () => {
  return (
    <main className="py-16">
      <div className="productWrapper">
        <ProductContainer></ProductContainer>
        <FormContainer></FormContainer>
      </div>
    </main>
  );
};

export default Home;
