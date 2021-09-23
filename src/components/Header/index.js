import React from "react";
import s from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productSearchAction } from "../../actions/productSearchAction";
const Header = (props) => {
  const { button, link } = props;
  const allFetchedProducts = useSelector(
    (state) => state.productsList.products
  );

  const dispatch = useDispatch();
  const search = function (e) {
    const value = e.target.value;
    console.log("allFetchedProducts", allFetchedProducts)
    console.log("value", value)
    dispatch(productSearchAction(
        {
            products:allFetchedProducts,
            str:value
        }
    ));
  };

  return (
    <div className={s.container}>
      <header>
        <h2>Punk Shop</h2>
        <Link to={link}>
          <div className={s.header_button}>{button} </div>
        </Link>
        <input className={s.search_input} onChange={search} type="text" />
      </header>
    </div>
  );
};

export default Header;
