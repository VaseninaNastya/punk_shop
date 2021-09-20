import React from 'react';
import s from './Card.module.scss'
import cl from "classnames";

const Card = (props) => {
    const {id, name, tagline, description, image_url, first_brewed, volume, abv} = props
    return (
        <div className = {s.productCard}>
            <h4  className = {s.productCard_title}>{name}</h4>
            <div className = {s.productCard_headInfo}>

            <img className = {s.productCard_img} src={image_url}/>
            <ul className = {s.productCard_list}>
                <li><span>Tagline: </span>{tagline}</li>
                <li><span>First brewed: </span>{first_brewed}</li>
                <li><span>Volume: </span>{volume.value} {volume.unit}</li>
                <li><span>abv: </span>{abv}%</li>
            </ul>
            </div>

            <p className = {s.productCard_description}> <span>Description: </span>{description}</p>
        </div>
    )
}

export default Card;