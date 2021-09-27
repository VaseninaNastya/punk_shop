import React from 'react';
import s from './PaginationButton.module.scss'
import cl from "classnames";
import { setActivePageAction } from "../../actions/paginationAction";
import { useDispatch, useSelector } from "react-redux";

const PaginationButton = ({id, innerText}) => {
    let activePage = useSelector((state) => state.activePage.activePage);
    const numbersOfPage = useSelector((state) => state.numbersOfPage.numbersOfPage);
    const dispatch = useDispatch();
    const handleСhangePage = function(){
        if(id === "0" && activePage > 1){
            activePage = Number(activePage) - 1
            dispatch( setActivePageAction(activePage))
        } 
        if(id !== "0" && activePage < numbersOfPage){
            activePage = Number(activePage) + 1
            dispatch( setActivePageAction(activePage))
        }
    }
    const buttonClass = cl(s.pagination_item, { [s.pagination_item__inactive]: (+id === 0 && +activePage === 1) || (+id !== 0 && +activePage === +numbersOfPage)});
    return (
        <div className = {buttonClass}   onClick={handleСhangePage}>
            {innerText}
        </div>
    )
}

export default PaginationButton;



