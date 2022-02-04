import React from "react";
import s from "./Card.module.scss";
import {
  addCardProductAction,
  removeCardProductAction,
} from "../../actions/cardProductAction";
import { useDispatch, useSelector } from "react-redux";
import { cardPropertiesConstants } from "../../constants/card.constants";

const Card = ({
  id,
  name,
  tagline,
  description,
  image_url,
  first_brewed,
  volume,
  abv,
}) => {
  const basket = useSelector(({ cardProduct }) => cardProduct.productsInCard);

  const checkboxBasketAttr = basket.includes(id) && "checked";

  const dispatch = useDispatch();

  const handleAddCard = function () {
    basket.includes(id)
      ? dispatch(removeCardProductAction(id))
      : dispatch(addCardProductAction(id));
  };

  const {
    taglinePropName,
    firstBrewedPropName,
    volumePropName,
    abvPropName,
    addToCardPropName,
  } = cardPropertiesConstants;

  return (
    <div data_id={id} className={s.productCard}>
      <h4 className={s.productCard_title}>{name}</h4>
      <div className={s.productCard_headInfo}>
        <div className={s.productCard_imgWrapper}>
          <img className={s.productCard_img} src={image_url} alt={name} />
        </div>
        <ul className={s.productCard_list}>
          <li key={taglinePropName}>
            <span>{taglinePropName}</span>
            {tagline}
          </li>
          <li key={firstBrewedPropName}>
            <span>{firstBrewedPropName}</span>
            {first_brewed}
          </li>
          <li key={volumePropName}>
            <span>{volumePropName}</span>
            {volume.value} {volume.unit}
          </li>
          <li key={abvPropName}>
            <span>{abvPropName}</span>
            {abv}%
          </li>
          <li key={addToCardPropName} className={s.productCard_checkboxItem}>
            <span>{addToCardPropName}</span>
            <input
              checked={checkboxBasketAttr}
              type="checkbox"
              onChange={handleAddCard}
            />
          </li>
        </ul>
      </div>
      <p className={s.productCard_description}>{description}</p>
    </div>
  );
};
export default Card;
