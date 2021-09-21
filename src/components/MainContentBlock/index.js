import React from "react";
import s from "./MainContentBlock.module.scss";
import CardHolder from "../CardHolder/index";

const MainContentBlock = () => {
  return (
    <div className={s.container}>
      <CardHolder/>
    </div>
  );
};

export default MainContentBlock;

