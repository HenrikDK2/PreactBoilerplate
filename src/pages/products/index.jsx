import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Fetch from "../../Fetch";
import Image from "../../components/Image";
import Icon from "../../components/Icon";
import { useRecoilState } from "recoil";
import { ProductFormModal } from "../../Store";
import ProductForm from "./ProductForm";
const Section = styled.section`
  h1 {
    font-size: 3rem;
    text-align: center;
  }
`;
const Product = styled.li`
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
  h4 {
    text-align: center;
  }
  p {
    padding: 0 1rem;
  }
`;
const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 325px));
  place-content: center;
  grid-gap: 1rem;
  list-style: none;
  grid-auto-rows: 400px;
`;

const AddProduct = styled.li`
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
  position: relative;
  cursor: pointer;
`;

const productImage = css`
  width: 100%;
  height: 200px;
  position: relative;
  img {
    object-fit: cover;
  }
`;

const plusIcon = css`
  font-size: 7rem;
`;

const Products = () => {
  const [products, setProducts] = useState();
  const [admin, setAdmin] = useState(true);
  const [showModal, setShowModal] = useRecoilState(ProductFormModal);
  useEffect(() => {
    (async () => {
      const data = await Fetch("posts");
      setProducts(data.splice(0, 4));
    })();
  }, []);

  return (
    <Section>
      <h1>Alle produkter</h1>
      <List>
        {products &&
          products.map((data) => {
            return (
              <Product>
                <Image style={productImage} src="https://via.placeholder.com/350x150" />

                <h4>{data.title}</h4>
                <p>{data.body}</p>
              </Product>
            );
          })}
        {admin && (
          <>
            <AddProduct onClick={() => setShowModal(true)}>
              <Icon icon="plus-square" style={plusIcon} className={"center"} />
            </AddProduct>
            <ProductForm />
          </>
        )}
      </List>
    </Section>
  );
};

export default Products;
