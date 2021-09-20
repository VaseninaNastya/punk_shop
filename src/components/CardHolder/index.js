import React, { useEffect } from "react";
import s from "./CardHolder.module.scss";
import cl from "classnames";
import { cardListAction } from "../../actions/cardListActions";
import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card";
import axios from "axios";
import ProductsAPI from "../../servises/punkAPI";

const CardHolder = () => {
  const products = useSelector((state) => state.cardList.products);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://api.punkapi.com/v2/beers/")
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(cardListAction(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  console.log("products111", products);
  return (
    <div className={s.CardHolder}>{

        products.map(({  id, name, tagline })=>{
            return     <Card id = {id} name = {name} tagline = {tagline }/>;
        })
    }</div>

  )

};

export default CardHolder;
