import React from "react";
import s from "./RegistrationPopup.module.scss";
import cl from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { closeRegistrationPopupAction } from "../../actions/registrationAction";

const RegistrationPopupListItem = (props) => {
  const { labelInnerText, inputId, errorMessage, emptyErrorMessage} = props;
  return (
    <li>
      <div className={s.popup_item}>
        <span>{errorMessage}</span>
        <span>{emptyErrorMessage}</span>
        <div className={s.popup_item_maincontent}>
          <label htmlFor={inputId}>{labelInnerText}</label>{" "}
          <input id={inputId} />
        </div>
      </div>
    </li>
  );
};

export default RegistrationPopupListItem;
