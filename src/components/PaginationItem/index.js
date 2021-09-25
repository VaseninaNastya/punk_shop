import React from 'react';
import s from './PaginationItem.module.scss'
import cl from "classnames";
import { setActivePageAction } from "../../actions/paginationAction";
import { useDispatch, useSelector } from "react-redux";


const PaginationItem = (props) => {
    const dispatch = useDispatch();
    const {id} = props
    let activePage = useSelector((state) => state.activePage.activePage);
    const handleСhangePage = function(){
      dispatch( setActivePageAction(id))
    }
    const buttonClass = cl(s.pagination_item, { [s.pagination_item__active]: +id === +activePage});

    return (
        <div data_id = {id} className = {buttonClass}  onClick={handleСhangePage}>
            {id}
        </div>
    )
}

export default PaginationItem;