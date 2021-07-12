import React from 'react';

export default function Ingredient(props) {

    

    return (
        <div className="ingredient" style={{backgroundColor: `#${props.color}`}}>
            <div onClick={props.pickIngredient} className="ing-type">{props.name}</div>
            <span className="ing-price">{props.price}$</span>
        </div>
    )
}
