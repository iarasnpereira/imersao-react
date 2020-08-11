import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import Logo from '../../assets/img/Logo.png';
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img src={Logo} alt="Blacklix Logo" className="Logo"/>
            </Link>
            
            {/*<ButtonLink href="./" className="ButtonLink">Cadastrar</ButtonLink> */}
            <Button as={Link} to="/cadastro/video" className="ButtonLink">
                Cadastrar vídeo
            </Button>
        </nav>
    );
}

export default Menu;