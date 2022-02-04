import React, { useEffect } from "react";
import s from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productSearchAction } from "../../actions/productSearchAction";
import { setActivePageAction } from "../../actions/paginationAction";
import { openRegistrationPopupAction } from "../../actions/registrationAction";
import { changeNumbersOfPageAction } from "../../actions/numbersOfPageAction";
import Sort from "../Sort";
import cl from "classnames";
import { registrationText, shopName } from "../../constants/header.constants";

const Header = (props) => {
  const { button, link, muteInput } = props;

  const allFetchedProducts = useSelector(
    ({ productsList }) => productsList.products
  );

  const searchProducts = useSelector(
    ({ productSearch }) => productSearch.products
  );

  const registrationFieldRight = useSelector(
    ({ checkRegistrationField }) => checkRegistrationField.allFieldsRight
  );

  const searchSortContainerClass = cl(s.searchSort_container, {
    [s.searchSort_container_hidden]: muteInput === "true",
  });

  const popupButtonClass = cl(
    { [s.search_popupButton]: !registrationFieldRight },
    { [s.search_popupButton_afterRegistration]: registrationFieldRight },
    { [s.search_popupButton_hidden]: muteInput === "true" }
  );
  const { isRegistrated, isNotRegistrated } = registrationText;
  const popupButtonInnerText = registrationFieldRight
    ? isRegistrated
    : isNotRegistrated;

  const productsForSorting = searchProducts.length
    ? searchProducts
    : allFetchedProducts;

  const dispatch = useDispatch();

  const handleSearch = function ({ target: { value } }) {
    dispatch(setActivePageAction(1));
    dispatch(
      productSearchAction({
        products: allFetchedProducts,
        str: value,
      })
    );
  };

  const handleOpenPopup = function () {
    if (!registrationFieldRight) {
      dispatch(openRegistrationPopupAction());
    }
  };

  useEffect(() => {
    dispatch(changeNumbersOfPageAction(productsForSorting));
  }, []);
  const { name } = shopName;
  return (
    <div className={s.container}>
      <header>
        <h2>{name}</h2>
        <Link to={link}>
          <div className={s.header_button}>{button} </div>
        </Link>
        <div className={popupButtonClass} onClick={handleOpenPopup}>
          {popupButtonInnerText}
        </div>
        <div className={searchSortContainerClass}>
          <div className={s.input_container}>
            <span className={s.input_title}> Search: </span>
            <input
              className={s.search_input}
              onChange={handleSearch}
              type="text"
            />
          </div>
          <Sort />
        </div>
      </header>
    </div>
  );
};

export default Header;
