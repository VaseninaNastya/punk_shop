import React from "react";
import s from "./Card.module.scss";
import {
  addCardProductAction,
  removeCardProductAction,
} from "../../actions/cardProductAction";
import { useDispatch, useSelector } from "react-redux";
const Card = ({id,name,tagline,description, image_url,first_brewed,volume,abv}) => {
  const basket = useSelector((state) => state.cardProduct.productsInCard);
  const checkboxBasketAttr = basket.includes(id) ? "checked" : null;
  const dispatch = useDispatch();
  const handleAddCard = function () {
    basket.includes(id) ? dispatch(removeCardProductAction(id)) : dispatch(addCardProductAction(id));
  };
  return (
    <div data_id={id} className={s.productCard}>
      <h4 className={s.productCard_title}>{name}</h4>
      <div className={s.productCard_headInfo}>
        <div className={s.productCard_imgWrapper}>
          <img className={s.productCard_img} src={image_url} alt={name} />
        </div>
        <ul className={s.productCard_list}>
          <li key = '1'><span>Tagline: </span>{tagline}</li>
          <li key = '2'><span>First brewed: </span>{first_brewed}</li>
          <li key = '3'><span>Volume: </span>{volume.value} {volume.unit}</li>
          <li key = '4'><span>abv: </span>{abv}%</li>
          <li key = '5' className={s.productCard_checkboxItem}>
            <span>Add to card </span>
            <input checked={checkboxBasketAttr} type="checkbox" onChange={handleAddCard}/>
          </li>
        </ul>
      </div>
      <p className={s.productCard_description}>{description}</p>
    </div>
  );
};
export default Card;
