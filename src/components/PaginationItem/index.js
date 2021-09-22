import React from 'react';
import s from './PaginationItem.module.scss'
import cl from "classnames";
import { setActivePageAction } from "../../actions/paginationAction";
import { useDispatch, useSelector } from "react-redux";
const PaginationItem = (props) => {
    const dispatch = useDispatch();
    const {id} = props
    
    const handleСhangePage = function(){
      dispatch( setActivePageAction(id))
    }
    return (
        <div data_id = {id} className = {s.pagination_item}  onClick={handleСhangePage}>
            {id}
        </div>
    )
}

export default PaginationItem;