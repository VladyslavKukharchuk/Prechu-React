import React from 'react';
import './Visual.scss';

function Visual(props: any) {
    return (
        <section className="visual">
            <div className="container">
                <div className="visual__img">
                    <img src="./img/phone.png" alt="phone img" />
                </div>
                <div className="visual__text">
                    <h1>Lorem Ipsum is simoly</h1>
                    <div className="visual__textholder">
                        <p>dummy text of the printing &amp; typesetting</p>
                    </div>
                    <div className="button">
                        <a href="#">Sing up now</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Visual;