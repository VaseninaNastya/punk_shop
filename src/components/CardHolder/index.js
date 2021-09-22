import React, { useEffect } from "react";
import s from "./CardHolder.module.scss";
import cl from "classnames";
import { getProductListAction } from "../../actions/getProductListAction";
import { initActivePageAction } from "../../actions/paginationAction";
import { getCardProductsAction } from "../../actions/cardProductAction";
import { getNumbersOfPageAction } from "../../actions/getNumbersOfPageAction";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card";
import numbers from "../../utils/numbers.utils";

const CardHolder = () => {
  const allFetchedProducts = useSelector(
    (state) => state.productsList.products
  );
  const activePage = useSelector((state) => state.activePage.activePage);
  const sortedProducts = [];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductListAction());
    dispatch(getCardProductsAction());
    dispatch(getNumbersOfPageAction());
    dispatch(initActivePageAction());
  }, []);
  for (let i = 0; i < allFetchedProducts.length; i += numbers.numberOfPageProducts) {
    sortedProducts.push(
      allFetchedProducts.slice(i, i + numbers.numberOfPageProducts)
    );
  }

  if (sortedProducts.length > 0) {
    return (
      <div className={s.cardHolder_container}>
        {sortedProducts[activePage - 1].map(
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
    );
  } else {
    return <div>...waiting</div>;
  }
};

export default CardHolder;
