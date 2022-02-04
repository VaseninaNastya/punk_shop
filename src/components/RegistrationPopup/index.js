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
  checkAllFieldRegistrationPopupAction,
} from "../../actions/checkRegistrationFieldAction";
import { inputsData, inputsIds } from "../../constants/registration.constants";
import RegistrationPopupListItem from "../RegistrationPopupListItem";

const RegistrationPopup = () => {
  const checkRegistrationField = useSelector(
    ({ checkRegistrationField }) => checkRegistrationField
  );

  const registrationFieldRight = useSelector(
    ({ checkRegistrationField }) => checkRegistrationField.allFieldsRight
  );

  const popupState = useSelector(
    ({ registration }) => registration.popupActive
  );

  useEffect(() => {
    if (registrationFieldRight) {
      dispatch(closeRegistrationPopupAction());
    }
  }, []);

  const dispatch = useDispatch();

  const handleClosePopup = function () {
    dispatch(closeRegistrationPopupAction());
  };

  const handleSubmit = function (e) {
    e.preventDefault();
    if (e.target.getAttribute("id") === "submit") {
      const inputs = e.currentTarget.querySelectorAll("input");
      const payload = [];

      inputs.forEach((input) => {
        payload.push({ name: input.getAttribute("id"), value: input.value });
      });
      const { nameId, dateOfBirthId, emailId, passwordId } = inputsIds;
      payload.map((input) => {
        const { name } = input;
        switch (name) {
          case nameId:
            dispatch(checkNameFieldRegistrationPopupAction(input));
            break;
          case dateOfBirthId:
            dispatch(checkDateFieldRegistrationPopupAction(input));
            break;
          case emailId:
            dispatch(checkEmailFieldRegistrationPopupAction(input));
            break;
          case passwordId:
            dispatch(checkPasswordFieldRegistrationPopupAction(input));
            break;
          default:
            return input;
        }
      });
      dispatch(checkAllFieldRegistrationPopupAction(payload));
    }
  };

  const registrationItemsElements = inputsData.map((registrationItem) => {
    if (registrationItem.inputId) {
      const popupListItemInfo = {
        ...checkRegistrationField[registrationItem.inputId],
        ...registrationItem,
      };

      const {
        labelInnerText,
        inputId,
        errorMessage,
        emptyErrorMessage,
        wrongValue,
        emptyInput,
      } = popupListItemInfo;

      return (
        <RegistrationPopupListItem
          labelInnerText={labelInnerText}
          inputId={inputId}
          errorMessage={errorMessage}
          emptyErrorMessage={emptyErrorMessage}
          wrongValue={wrongValue}
          emptyInput={emptyInput}
          key={inputId}
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
          <li key="1">
            <div
              className={s.popup_closeButton}
              onClick={handleClosePopup}
            ></div>
          </li>
          {registrationItemsElements}
          <li key="2">
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
