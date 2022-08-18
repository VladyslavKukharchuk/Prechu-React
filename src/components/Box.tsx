import React from 'react';
import './Box.scss';

type BoxProps = {
    img: string,
    color: string
  }

function Box(props: BoxProps) {
    return (
        <div className="box">
            <div className={`circle ${props.color}`}>
                <img src={`img/${props.img}.png`} alt={props.img} />
            </div>
            <div className="box__text">
                <h3>Contrary to popular</h3>
                <p>Lorem Ipsum is not simply random text. It has roots in s piese</p>
            </div>
        </div>
    );
}

export default Box;