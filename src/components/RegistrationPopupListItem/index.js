import React from "react";
import s from "./RegistrationPopupListItem.module.scss";
import cl from "classnames";


const RegistrationPopupListItem = ({ labelInnerText, inputId, errorMessage, emptyErrorMessage, wrongValue, emptyInput}) => {
  const errorMessageClass = cl(s.errorMessage, {[s.errorMessage_hidden]: wrongValue === false,});
  const emptyErrorMessageClass = cl(s.errorMessage, {[s.errorMessage_hidden]: emptyInput === false,});
  return (
    <li key = {inputId}>
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
