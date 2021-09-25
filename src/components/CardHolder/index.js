import React, { useEffect } from "react";
import s from "./CardHolder.module.scss";
import { getProductListAction } from "../../actions/getProductListAction";
import { initActivePageAction } from "../../actions/paginationAction";
import { getCardProductsAction } from "../../actions/cardProductAction";
import { initNumbersOfPageAction  } from "../../actions/numbersOfPageAction";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card";
import numbers from "../../utils/numbers.utils";

const CardHolder = () => {
  const allFetchedProducts = useSelector(
    (state) => state.productsList.products
  );

  const sortedProducts = useSelector(
    (state) => state.productSort.products
  );
  const searchProducts = useSelector(
    (state) => state.productSearch.products
  );
  const productsForSorting = searchProducts.length ? searchProducts : sortedProducts.length ? sortedProducts :  allFetchedProducts



  const activePage = useSelector((state) => state.activePage.activePage);
  const structureProducts = [];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductListAction());
    dispatch(getCardProductsAction());
    dispatch(initNumbersOfPageAction ());
    dispatch(initActivePageAction());
  }, []);
  for (let i = 0; i < productsForSorting.length; i += numbers.numberOfPageProducts) {
    structureProducts.push(
        productsForSorting.slice(i, i + numbers.numberOfPageProducts)
    );
  }

  if (structureProducts.length > 0) {
    return (
      <div className={s.cardHolder_container}>
        {structureProducts[activePage - 1].map(
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
              key={id}
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
