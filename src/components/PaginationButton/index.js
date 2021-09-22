import React from 'react';
import s from './PaginationButton.module.scss'
import cl from "classnames";
import { setActivePageAction } from "../../actions/paginationAction";
import { useDispatch, useSelector } from "react-redux";

const PaginationButton = (props) => {
    let activePage = useSelector((state) => state.activePage.activePage);
    const numbersOfPage = useSelector((state) => state.numbersOfPage.numbersOfPage);
    const dispatch = useDispatch();
    const {id, innerText} = props
    
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
    return (
        <div className = {s.pagination_item} onClick={handleСhangePage}>
            {innerText}
        </div>
    )
}

export default PaginationButton;



