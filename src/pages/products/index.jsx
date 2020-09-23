import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { myFetch } from "../../utils";
import Image from "../../components/Image";
import Icon from "../../components/Icon";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { ProductFormModal, AdminModeState } from "../../Store";
import ProductForm from "./ProductForm";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader";
const Section = styled.section`
  h1 {
    font-size: 3rem;
    text-align: center;
  }
`;
const Product = styled.li`
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
  h4 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
  }
  p,
  h4,
  a {
    padding: 0 1rem;
  }
`;
const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 325px));
  place-content: center;
  grid-gap: 1rem;
  padding: 0;
  list-style: none;
  grid-auto-rows: 400px;
`;

const AddProduct = styled.li`
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
  position: relative;
  cursor: pointer;
`;

const ItemLink = styled(Link)``;

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
  const admin = useRecoilValue(AdminModeState);
  const setShowModal = useSetRecoilState(ProductFormModal);
  useEffect(() => {
    (async () => {
      const data = await myFetch("posts");
      setProducts(data.splice(0, 4));
    })();
  }, []);

  return (
    <Section>
      <h1>Alle produkter</h1>
      <List>
        {products ? (
          products.map((data) => {
            return (
              <Product>
                <Image style={productImage} src="/placeholder-image.jpg" />
                <h4>{data.title}</h4>
                <p>{data.body.substring(0, 90)}</p>
                <ItemLink to={`/products/${data.id}`}>Read more</ItemLink>
              </Product>
            );
          })
        ) : (
          <Loader />
        )}

        {admin && products && (
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
