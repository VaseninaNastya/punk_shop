import React from "react";
import HomePage from "../../Pages/HomePage";
import s from "./Header.module.scss";
import { Link } from "react-router-dom";
const Header = (props) => {
    const {button} = props
  return (
    <div className={s.container}>
      <h2>Punk Shop</h2>
      <Link to={`/card`}>      <button>{button}</button></Link>

    </div>
  );
};

export default Header;
