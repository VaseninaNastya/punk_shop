import React from "react";
import s from "./RegistrationPopupListItem.module.scss";
import cl from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { closeRegistrationPopupAction } from "../../actions/registrationAction";

const RegistrationPopupListItem = (props) => {
  const { labelInnerText, inputId, errorMessage, emptyErrorMessage, wrongValue, emptyInput} = props;
  const errorMessageClass = cl(s.errorMessage, {[s.errorMessage_hidden]: wrongValue === false,});
  const emptyErrorMessageClass = cl(s.errorMessage, {[s.errorMessage_hidden]: emptyInput === false,});
  return (
    <li>
      <div className={s.popup_item}>
        <span className={errorMessageClass}>{errorMessage}</span>
        <span className={emptyErrorMessageClass}>{emptyErrorMessage}</span>
        <div className={s.popup_item_maincontent}>
          <label htmlFor={inputId}>{labelInnerText}</label>{" "}
          <input id={inputId} />
        </div>
      </div>
    </li>
  );
};

export default RegistrationPopupListItem;
