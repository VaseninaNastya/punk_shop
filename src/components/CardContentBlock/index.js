import React from "react";
import s from "./CardContentBlock.module.scss";
import { useSelector } from "react-redux";
import Card from "../Card";

const CardContentBlock = () => {
  const allFetchedProducts = useSelector(
    ({ productsList }) => productsList.products
  );
  const basket = useSelector(({ cardProduct }) => cardProduct.productsInCard);
  const productFromCard = allFetchedProducts.filter((item) =>
    basket.includes(item.id)
  );
  return (
    <div className={s.container}>
      <div className={s.cardHolder_container}>
        {productFromCard.map(
          ({
            id,
            name,
            tagline,
            description,
            image_url,
            first_brewed,
            volume,
            abv,
          }) => {
            return (
              <Card
                id={id}
                name={name}
                tagline={tagline}
                description={description}
                image_url={image_url}
                first_brewed={first_brewed}
                volume={volume}
                abv={abv}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default CardContentBlock;
