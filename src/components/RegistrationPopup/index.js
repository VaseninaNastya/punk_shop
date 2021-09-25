import React, { useEffect } from "react";
import s from "./RegistrationPopup.module.scss";
import cl from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { closeRegistrationPopupAction } from "../../actions/registrationAction";
import {
  checkNameFieldRegistrationPopupAction,
  checkEmailFieldRegistrationPopupAction,
  checkDateFieldRegistrationPopupAction,
  checkPasswordFieldRegistrationPopupAction,
  checkAllFieldRegistrationPopupAction
} from "../../actions/checkRegistrationFieldAction";
import registrationItems from "../../utils/registrationItems.utils";
import RegistrationPopupListItem from "../RegistrationPopupListItem";

const RegistrationPopup = () => {

  const checkRegistrationField = useSelector(
    (state) => state.checkRegistrationField
  );
  const registrationFieldRight = useSelector(
    (state) => state.checkRegistrationField.allFieldsRight
  );
  const registrationIsOpen = useSelector(
    (state) => state.registration.popupActive
  );
  
  const popupState = useSelector((state) => state.registration.popupActive);
  useEffect(() => {
    if(registrationFieldRight) {
      dispatch(closeRegistrationPopupAction());
    }
  })
  const dispatch = useDispatch();
  const handleClosePopup = function () {
    dispatch(closeRegistrationPopupAction());
  };
  const handleSubmit = function (e) {
    e.preventDefault();
    if (e.target.getAttribute("id") === "submit") {
      const inputs = e.currentTarget.querySelectorAll("input");
      const payload = [];
      inputs.forEach((item) => {
        payload.push({ name: item.getAttribute("id"), value: item.value });
      });
      payload.map((item) => {
        if (item.name === "name")
          dispatch(checkNameFieldRegistrationPopupAction(item));
        if (item.name === "dateOfBirth")
          dispatch(checkDateFieldRegistrationPopupAction(item));
        if (item.name === "email")
          dispatch(checkEmailFieldRegistrationPopupAction(item));
        if (item.name === "password")
          dispatch(checkPasswordFieldRegistrationPopupAction(item));
      });
      dispatch(checkAllFieldRegistrationPopupAction(payload));
    }
  };
  const fragment = [];
  registrationItems.map((item) => {
    if (item.inputId) {
      const popupListItemInfo = {
        ...checkRegistrationField[item.inputId],
        ...item,
      };
      fragment.push(
        <RegistrationPopupListItem
          labelInnerText={popupListItemInfo.labelInnerText}
          inputId={popupListItemInfo.inputId}
          errorMessage={popupListItemInfo.errorMessage}
          emptyErrorMessage={popupListItemInfo.emptyErrorMessage}
          wrongValue={popupListItemInfo.wrongValue}
          emptyInput={popupListItemInfo.emptyInput}
        />
      );
    }
  });

  const popupWrapperClass = cl(s.popup_wrapper, {
    [s.popup_wrapper_hidden]: popupState === false,
  });

  return (
    <div className={popupWrapperClass}>
      <div className={s.popup_overlay} onClick={handleClosePopup}></div>
      <form className={s.popup_container} onClick={handleSubmit}>
        <ul>
          <li>
            <div
              className={s.popup_closeButton}
              onClick={handleClosePopup}
            ></div>
          </li>
          {fragment}
          <li>
            <button id="submit" className={s.popup_submitButton}>
              Submit
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default RegistrationPopup;
