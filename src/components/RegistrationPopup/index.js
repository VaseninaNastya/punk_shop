import React from "react";
import s from "./RegistrationPopup.module.scss";
import cl from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { closeRegistrationPopupAction } from "../../actions/registrationAction";
import { checkNameFieldRegistrationPopupAction,  checkEmailFieldRegistrationPopupAction, checkDateFieldRegistrationPopupAction,  checkPasswordFieldRegistrationPopupAction } from "../../actions/checkRegistrationFieldAction";
import registrationItems from "../../utils/registrationItems.utils";
import RegistrationPopupListItem from "../RegistrationPopupListItem";

const RegistrationPopup = () => {
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
      });;
      payload.map((item)=>{
        if(item.name === 'name') dispatch(checkNameFieldRegistrationPopupAction(item))
        if(item.name === 'dateOfBirth') dispatch(checkDateFieldRegistrationPopupAction(item))
        if(item.name === 'email') dispatch(checkEmailFieldRegistrationPopupAction(item))
        if(item.name === 'password') dispatch(checkPasswordFieldRegistrationPopupAction(item))
      })

    }
  };

  const popupState = useSelector((state) => state.registration.popupActive);
  const popupWrapperClass = cl(s.popup_wrapper, {
    [s.popup_wrapper_hidden]: popupState === false,
  });
  const fragment = [];
  registrationItems.map((item) => {
    fragment.push(
      <RegistrationPopupListItem
        labelInnerText={item.labelInnerText}
        inputId={item.inputId}
        errorMessage={item.errorMessage}
        emptyErrorMessage={item.emptyErrorMessage}
      />
    );
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
