import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import ButtonLink from './components/ButtonLink';
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <a href="./">
                <img src={Logo} alt="Blacklix Logo" className="Logo"/>
            </a>
            
            {/*<ButtonLink href="./" className="ButtonLink">Cadastrar</ButtonLink> */}
            <Button href="./" className="ButtonLink">Cadastrar</Button>
        </nav>
    );
}

export default Menu;