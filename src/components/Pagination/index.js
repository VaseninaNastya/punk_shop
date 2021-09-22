import React, { useEffect } from "react";
import s from "./Pagination.module.scss";
import PaginationItem from '../PaginationItem/index'
import PaginationButton from '../PaginationButton'
import { useDispatch, useSelector } from "react-redux";

const Pagination = () => {
  const activePage = useSelector((state) => state.activePage.activePage);
  const numbersOfPage = useSelector((state) => state.numbersOfPage.numbersOfPage);
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
