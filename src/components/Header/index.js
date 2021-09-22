import React from "react";
import s from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const Header = (props) => {
  const { button, link } = props;

  const allFetchedProducts = useSelector(
    (state) => state.productsList.products
  );

  const search = function(){
      console.log("111")
  }

  return (
    <div className={s.container}>
      <header>
        <h2>Punk Shop</h2>
        <Link to={link}>
            <div className={s.header_button} >{button} </div>  
        </Link>
        <input
            className={s.search_input}
            onChange={search}
            type="text"
        />
      </header>
    </div>
  );
};

export default Header;
