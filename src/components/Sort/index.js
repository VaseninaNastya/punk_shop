import React from "react";
import s from "./Sort.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { productSortAction } from "../../actions/productSortAction";
import fitler from "../../utils/fitler.utils";
const Sort = () => {

  const allFetchedProducts = useSelector(
    (state) => state.productsList.products
  );
  const searchProducts = useSelector(
    (state) => state.productSearch.products
  );
  const productsForSort = searchProducts.length ? searchProducts : allFetchedProducts
  const disabledSelect = searchProducts.length ? "disabled" : null
  const dispatch = useDispatch();
  const handleSortChoise = function ({target: {value}}) {
    let sorted = []
    productsForSort.map(item=>sorted.push(item))
    if(value !== 'without_sorting'){
      sorted = fitler(sorted, value) 
    } 
    dispatch(productSortAction(sorted));
  };

  return (
    <div className= {s.sort_container}>
    <span className = {s.sort_title}>Sort:</span>
      <select disabled = {disabledSelect} onChange={handleSortChoise}>
        <option value="without_sorting">Without sorting</option>
        <option value="first_brewed">First brewed</option>
        <option value="name">Name</option>
        <option value="abv">abv</option>
      </select>
    </div>
  );
};

export default Sort;
