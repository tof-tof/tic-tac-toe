import React from 'react';

const Square = ({ value, onClick }) => {
    const style = value ? `squares ${value}` : `squares`;
    return (
        <button className={style} onClick={onClick}>
            {value}
        </button>
    )
}

export default Square;
/*
export default function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    )
}
*/