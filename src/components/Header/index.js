import React from "react";
import s from "./Header.module.scss";
import { Link } from "react-router-dom";
const Header = (props) => {
  const { button, link } = props;
  return (
    <div className={s.container}>
      <header>
        <h2>Punk Shop</h2>
        <Link to={link}>
            <div className={s.header_button} >{button} </div>  
        </Link>
      </header>
    </div>
  );
};

export default Header;
