import React from "react";
import s from "./Header.module.scss";
import { Link } from "react-router-dom";
const Header = (props) => {
    const {button, link} = props
  return (
    <div className={s.container}>
      <h2>Punk Shop</h2>
      <Link to={link}>{button}</Link>

    </div>
  );
};

export default Header;
