import React from "react";
import s from "./Sort.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { productSortAction } from "../../actions/productSortAction";
import fitler from "../../utils/fitler.utils";
import {
  sortConstants,
  sortConstantsKeys,
} from "../../constants/sort.constants";

const Sort = () => {
  const allFetchedProducts = useSelector(
    ({ productsList }) => productsList.products
  );

  const searchProducts = useSelector(
    ({ productSearch }) => productSearch.products
  );

  const { sort, without_sorting, first_brewed, name, abv } = sortConstants;
  const { without_sorting_key, first_brewed_key, name_key, abv_key } =
    sortConstantsKeys;

  const productsForSort = searchProducts.length
    ? searchProducts
    : allFetchedProducts;

  const disabledSelect = searchProducts.length && "disabled";

  const dispatch = useDispatch();

  const handleSortChoise = function ({ target: { value } }) {
    if (value !== { without_sorting_key }) {
      dispatch(productSortAction(fitler([...productsForSort], value)));
    }
  };
  return (
    <div className={s.sort_container}>
      <span className={s.sort_title}>{sort}</span>
      <select disabled={disabledSelect} onChange={handleSortChoise}>
        <option value={without_sorting_key}>{without_sorting}</option>
        <option value={first_brewed_key}>{first_brewed}</option>
        <option value={name_key}>{name}</option>
        <option value={abv_key}>{abv}</option>
      </select>
    </div>
  );
};

export default Sort;
