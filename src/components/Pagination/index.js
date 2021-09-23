import React from "react";
import s from "./Pagination.module.scss";
import PaginationItem from "../PaginationItem/index";
import PaginationButton from "../PaginationButton";
import { useSelector } from "react-redux";

const Pagination = () => {
  const numbersOfPage = useSelector(
    (state) => state.numbersOfPage.numbersOfPage
  );
  const fragment = [];
  for (let index = 1; index <= numbersOfPage; index++) {
    fragment.push(<PaginationItem id={index} />);
  }
  return (
    <div className={s.container}>
      <div className={s.pagination_container}>
        <PaginationButton id="0" innerText="<" />
        {fragment}
        <PaginationButton id="5" innerText=">" />
      </div>
    </div>
  );
};

export default Pagination;
