import React from 'react';
import s from './PaginationItem.module.scss'
import cl from "classnames";
import { setActivePage } from "../../actions/setActivePageAction.js";
import { useDispatch, useSelector } from "react-redux";
const PaginationItem = (props) => {
    const productsInCard = useSelector((state) => state);
console.log("productsInCard ", productsInCard )
    const dispatch = useDispatch();
    const {id} = props
    
    const handleСhangePage = function(){
      dispatch( setActivePage(id))
    }
    return (
        <div data_id = {id} className = {s.pagination_item}  onClick={handleСhangePage}>
            {id}
        </div>
    )
}

export default PaginationItem;