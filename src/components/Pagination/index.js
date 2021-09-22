import React, { useEffect } from "react";
import s from "./Pagination.module.scss";
import PaginationItem from '../PaginationItem/index'
import PaginationButton from '../PaginationButton'
const Pagination = () => {

  return (
    <div className={s.container}>
      <div className={s.pagination_container}>
        <PaginationButton id="0" innerText = '<'/>
        <PaginationItem id="1"/> 
        <PaginationItem id="2"/> 
        <PaginationItem id="3"/> 
        <PaginationItem id="4"/> 
        <PaginationButton id="5" innerText = '>'/>
      </div>
    </div>
  );
};

export default Pagination;
