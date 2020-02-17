import React from 'react';
import './Header.css';
import LinkWrapper from '../../utils/LinkWrapper.jsx';


const Header = () => {

    return (
        <nav>
            <div className="nav-wrapper indigo lighten-2">
                <LinkWrapper to="/" className="brand-logo" activeStyle={{}} >Alura React</LinkWrapper>
                <ul className="right">
                    <li>
                        <LinkWrapper to='/autores'>Autores</LinkWrapper>
                    </li>
                    <li>
                        <LinkWrapper to="/livros">Livros</LinkWrapper>
                    </li>
                    <li>
                        <LinkWrapper to="/sobre">Sobre</LinkWrapper>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;