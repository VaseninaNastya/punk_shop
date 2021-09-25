import React from "react";
import s from "./Sort.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { productSortAction } from "../../actions/productSortAction";

const Sort = () => {
  const allFetchedProducts = useSelector(
    (state) => state.productsList.products
  );
  const searchProducts = useSelector(
    (state) => state.productSearch.products
  );
  const productsForSort = searchProducts.length ? searchProducts : allFetchedProducts
  const dispatch = useDispatch();
  const handleSortChoise = function (e) {
    const value = e.target.value;
    const sorted = []
    productsForSort.map(item=>sorted.push(item))
    sorted.sort(function (a, b) {
      let sortItem = value
      if(value === "first_brewed"){
        if (Number(a[sortItem].split("/")[0])+ Number(a[sortItem].split("/")[1])*12 > Number(b[sortItem].split("/")[0])+ Number(b[sortItem].split("/")[1])*12) {
          return 1;
        }
        if (Number(a[sortItem].split("/")[0])+ Number(a[sortItem].split("/")[1])*12 < Number(b[sortItem].split("/")[0])+ Number(b[sortItem].split("/")[1])*12) {
          return -1;
        }
        return 0;

      }
      if (a[sortItem] > b[sortItem]) {
        return 1;
      }
      if (a[sortItem] < b[sortItem]) {
        return -1;
      }
      return 0;
    });
    dispatch(productSortAction(sorted));
  };

  return (
    <>
      <select onChange={handleSortChoise}>
        <option value="first_brewed">First brewed</option>
        <option value="name">Name</option>
        <option value="abv">abv</option>
      </select>
    </>
  );
};

export default Sort;
