import React, { useEffect } from "react";
import s from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productSearchAction } from "../../actions/productSearchAction";
import { changeNumbersOfPageAction } from "../../actions/numbersOfPageAction";
const Header = (props) => {
  const { button, link } = props;
  const allFetchedProducts = useSelector(
    (state) => state.productsList.products
  );
  const searchProducts = useSelector(
    (state) => state.productSearch.products
  );
  const productsForSorting = searchProducts.length ? searchProducts : allFetchedProducts
  const dispatch = useDispatch();
  const handleSearch = function (e) {
    const value = e.target.value;
    dispatch(productSearchAction(
        {
            products: allFetchedProducts,
            str: value
        }
    ));
  };
  useEffect(() => {
    dispatch(changeNumbersOfPageAction(productsForSorting));
  })
  return (
    <div className={s.container}>
      <header>
        <h2>Punk Shop</h2>
        <Link to={link}>
          <div className={s.header_button}>{button} </div>
        </Link>
        <input className={s.search_input} onChange={handleSearch} type="text" />
      </header>
    </div>
  );
};

export default Header;
