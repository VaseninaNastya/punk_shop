import React from "react";
import s from "./RegistrationPopup.module.scss";
import cl from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { closeRegistrationPopupAction } from "../../actions/registrationAction";

const RegistrationPopup = () => {
  const dispatch = useDispatch();
  const handleClosePopup = function () {
    dispatch(closeRegistrationPopupAction());
  };
  const popupState = useSelector((state) => state.registration.popupActive);
  const popupWrapperClass = cl(s.popup_wrapper, {
    [s.popup_wrapper_hidden]: popupState === false,
  });
  return (
    <div className={popupWrapperClass}>
      <div className={s.popup_overlay} onClick={handleClosePopup}></div>
      <form className={s.popup_container}>
        <ul>
          <li><div className={s.popup_closeButton} onClick={handleClosePopup}></div></li>
          <li><label for="name">Full name: </label> <input required id="name" /></li>
          <li><label for="dateOfBirth">Date of birth: </label> <input required id='dateOfBirth' /></li>
          <li><label for="email">Email:</label> <input type="email" required id="email" /></li>
          <li><label for="password">Password:</label><input  minlength="6" required id="password" /></li>
          <li><button className={s.popup_submitButton} >Submit</button></li>
        </ul>
      </form>
    </div>
  );
};

export default RegistrationPopup;
