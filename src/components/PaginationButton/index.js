import React from 'react';
import s from './PaginationButton.module.scss'
import cl from "classnames";
import { addCardProductAction } from "../../actions/cardProductAction";
import { useDispatch, useSelector } from "react-redux";
const PaginationButton = (props) => {
    const productsInCard = useSelector((state) => state.cardProduct.productsInCard);

    const dispatch = useDispatch();
    const {id, innerText} = props
    
    const addCard = function(){
      dispatch(addCardProductAction(id))
    }
    const handleСhangePage = function(){
        dispatch(addCardProductAction(id))
    }

    return (
        <div className = {s.pagination_item} onClick={handleСhangePage}>
            {innerText}
        </div>
    )
}

export default PaginationButton;