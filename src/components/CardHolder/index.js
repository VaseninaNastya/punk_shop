import React, { useEffect } from "react";
import s from "./CardHolder.module.scss";
import cl from "classnames";
import { cardListAction } from "../../actions/cardListActions";
import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card";


const CardHolder = () => {
  const products = useSelector((state) => state.cardList.products);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(cardListAction());
  }, []);
  console.log("products111", products);
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
