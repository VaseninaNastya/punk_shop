import React, { useEffect } from "react";
import s from "./CardContentBlock.module.scss";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card";
const CardContentBlock = () => {
  const products = useSelector((state) => state);
console.log("Cardproducts", products)
const productFromCard = products.productsList.products.filter(item=>item.id === products.cardProduct.productsInCard)
console.log("productFromCard", productFromCard)
  return (
    <div className={s.container}>

{productFromCard.map(
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

export default CardContentBlock;



