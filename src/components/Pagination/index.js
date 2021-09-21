import React from "react";
import s from "./Pagination.module.scss";

const Pagination = () => {
  return (
    <div className={s.container}>
      <div className={s.pagination_container}>
        <div className={s.pagination_item}>
          &#60;
        </div>
        <div className={s.pagination_item}>
          1
        </div>
        <div className={s.pagination_item}>
          2
        </div>
        <div className={s.pagination_item}>
          3
        </div>
        <div className={s.pagination_item}>
          4
        </div>
        <div className={s.pagination_item}>
          &#62;
        </div>
      </div>
    </div>
  );
};

export default Pagination;
