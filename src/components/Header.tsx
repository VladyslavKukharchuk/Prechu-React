import React from 'react';
import './Header.scss';

function Header(props: any) {
    return (
        <header className="header">
            <div className="container">
                <div className="header__img">
                    <img src="./img/prechu-logo.png" alt="logo" />
                </div>
                <nav className="nav">
                    <input id="nav__toggle" type="checkbox" />
                    <label className="nav__btn" htmlFor="nav__toggle">
                        <span>Menu</span>
                    </label>
                    <ul className="nav__box">
                        <li>
                            <a href="#">
                                Home
                            </a>
                        </li>
                        <li className="active">
                            <a href="#">
                                Products
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Contacts
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;