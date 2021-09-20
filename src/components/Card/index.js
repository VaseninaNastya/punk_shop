import React from 'react';
import s from './Card.module.scss'
import cl from "classnames";

const Card = (props) => {
    const {id, name, tagline} = props
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