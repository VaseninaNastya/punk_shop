import React from "react";
import s from "./MainContentBlock.module.scss";
import CardHolder from "../CardHolder/index";
import CardContentBlock from '../CardContentBlock/index'

const MainContentBlock = () => {
  return (
    <div className={s.mainContentBlock_container}>
      <CardHolder />
      <CardContentBlock/>
    </div>
  );
};

export default MainContentBlock;

