import React, { useEffect } from "react";
import s from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productSearchAction } from "../../actions/productSearchAction";
import { setActivePageAction } from "../../actions/paginationAction";

import { openRegistrationPopupAction } from "../../actions/registrationAction";
import { changeNumbersOfPageAction } from "../../actions/numbersOfPageAction";
import cl from "classnames";
const Header = (props) => {
  const { button, link, muteInput } = props;
  const allFetchedProducts = useSelector(
    (state) => state.productsList.products
  );
  const searchProducts = useSelector(
    (state) => state.productSearch.products
  );
  const registrationFieldRight = useSelector(
    (state) => state.checkRegistrationField.allFieldsRight
  );
  const inputClass = cl(s.search_input, { [s.search_input_hidden]: muteInput==="true"});
  const popupButtonClass = cl({[s.search_popupButton]: !registrationFieldRight},{[s.search_popupButton_afterRegistration]: registrationFieldRight}, { [s.search_popupButton_hidden]: muteInput==="true"}, );
  const popupButtonInnerText = registrationFieldRight ? "You are registered.": "Registration"
  const productsForSorting = searchProducts.length ? searchProducts : allFetchedProducts
  const dispatch = useDispatch();
  const handleSearch = function (e) {
      const value = e.target.value;
      dispatch(setActivePageAction(1))
      dispatch(productSearchAction(
          {
              products: allFetchedProducts,
              str: value
          }
      ));
  };
  const handleOpenPopup = function(){
    if(!registrationFieldRight){

      dispatch(openRegistrationPopupAction())
    }
  }
  useEffect(() => {
    dispatch(changeNumbersOfPageAction(productsForSorting));
  })
  return (
    <div className={s.container}>
      <header>
        <h2>Punk Shop</h2>
        <Link to={link}>
          <div className={s.header_button}>{button} </div>
        </Link>
        <div className={popupButtonClass} onClick={handleOpenPopup}>{popupButtonInnerText}</div>
        <input className={inputClass} onChange={handleSearch} type="text" />
      </header>
    </div>
  );
};

export default Header;
