import React, { useEffect } from "react";
import s from "./CardHolder.module.scss";
import cl from "classnames";
import { getProductListAction } from "../../actions/getProductListAction";
import { getCardProductsAction } from "../../actions/cardProductAction";
import { getNumbersOfPageAction } from "../../actions/getNumbersOfPageAction";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card";



const CardHolder = () => {
  const products = useSelector((state) => state.productsList.products);
  const numbersOfPage = useSelector((state) => state);

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getProductListAction());
    dispatch(getCardProductsAction());
    dispatch(getNumbersOfPageAction());
  }, []);
  console.log("products111", products);
  console.log("numbersOfPage", numbersOfPage)
  return (
    <div className={s.cardHolder_container}>
      {products.map(
        ({
          id,
          name,
          tagline,
          description,
          image_url,
          first_brewed,
          volume,
          abv
        }) => {
          return <Card id={id} name={name} tagline={tagline} description={description} image_url={image_url} first_brewed = {first_brewed} volume={volume} abv={abv}/>;
        }
      )}
    </div>
  );
};

export default CardHolder;
