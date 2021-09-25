import React from "react";
import s from "./Sort.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setProductListAction } from "../../actions/productListAction";

const Sort = () => {
  const allFetchedProducts = useSelector(
    (state) => state.productsList.products
  );
  const dispatch = useDispatch();
  const handleSortChoise = function (e) {
    const value = e.target.value;
    const sorted = allFetchedProducts.sort(function (a, b) {
      if (a[value] > b[value]) {
        return 1;
      }
      if (a[value] < b[value]) {
        return -1;
      }
      return 0;
    });
    dispatch(setProductListAction(sorted));
  };

  return (
    <>
      <select onClick={handleSortChoise}>
        <option value="name">Name</option>
        <option value="first_brewed">First brewed</option>
        <option value="abv">abv</option>
      </select>
    </>
  );
};

export default Sort;
