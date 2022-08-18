import React from 'react';
import './Shopping.scss';

function Shopping(props: any) {
    return (
        <section className="shopping container">
            <h2>The Shoping cart</h2>
            <div className="shopping__content">
                <div className="shopping__img">
                    <img src="img/shop-box.png" alt="shop box" />
                </div>
                <div className="shopping__text">
                    <h3>Some Bullet text here</h3>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        Lorem Ipsum has been the industry's standard dummy text ever When an
                        unknown printer took a galley of type and scrambled It to make a
                        type specimen book. It has survived not only five centuries But also
                        the leap into electronic typesetting, Remaining essentially
                        unchanged. It was popularised The release of Letraset sheets
                        containing Lorem Ipsum passages
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Shopping;