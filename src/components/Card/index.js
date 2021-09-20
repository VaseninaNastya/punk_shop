import React from 'react';
import s from './Card.module.scss'
import cl from "classnames";
import { useSelector } from "react-redux";
const Card = (props) => {
    const products = useSelector((state) => state);
    const {id, name, tagline} = props
    console.log("this.props", props)
    console.log("products", products)
    return (
        <div className = {s.productCard}>
            <ul>
                <li>{id}</li>
                <li>{name}</li>
                <li>{tagline}</li>
            </ul>
        </div>
    )
}

export default Card;