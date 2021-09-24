import React from "react";
import s from "./RegistrationPopup.module.scss";
import cl from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { closeRegistrationPopupAction } from "../../actions/registrationAction";


const RegistrationPopup = () => {
  const dispatch = useDispatch();
  const handleClosePopup = function () {
    dispatch(closeRegistrationPopupAction())
  }
  const popupState = useSelector(
    (state) => state.registration.popupActive
  );
  const popupWrapperClass = cl(s.popup_wrapper, { [s.popup_wrapper_hidden]: popupState===false});
  return (
      <div className={popupWrapperClass} onClick={handleClosePopup}>
        <div className={s.popup_container}>dd</div>
      </div>

  );
};

export default RegistrationPopup;