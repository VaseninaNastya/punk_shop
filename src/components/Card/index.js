import React from 'react';
import s from './Card.module.scss'
import cl from "classnames";
import { addCardProductAction } from "../../actions/cardProductAction";
import { useDispatch, useSelector } from "react-redux";
const Card = (props) => {
    const productsInCard = useSelector((state) => state.cardProduct.productsInCard);

    const dispatch = useDispatch();
    const {id, name, tagline, description, image_url, first_brewed, volume, abv} = props
    
    const handleAddCard = function(){
      dispatch(addCardProductAction(id))
    }
    return (
        <div data_id = {id} className = {s.productCard}>
            <h4  className = {s.productCard_title}>{name}</h4>
            <div className = {s.productCard_headInfo}>
            <div className = {s.productCard_imgWrapper} >
                <img className = {s.productCard_img} src={image_url}/>
            </div>
            <ul className = {s.productCard_list}>
                <li><span>Tagline: </span>{tagline}</li>
                <li><span>First brewed: </span>{first_brewed}</li>
                <li><span>Volume: </span>{volume.value} {volume.unit}</li>
                <li><span>abv: </span>{abv}%</li>
                <li className={s.productCard_checkboxItem}><span>Add to card </span><input type="checkbox" onClick={ handleAddCard }/></li>
            </ul>
            </div>

            <p className = {s.productCard_description}>{description}</p>
        </div>
    )
}

export default Card;