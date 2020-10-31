/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';

// eslint-disable-next-line object-curly-spacing
function Menu({buttonName, buttonRoute}) {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="CookFlix Logo" />
      </Link>
      <Button as={Link} className="ButtonLink" to={buttonRoute}>
        {buttonName}
      </Button>
      // new button to you
      <Button as={Link} className="ButtonLink2" to={buttonRoute}>
        {buttonName}
      </Button>
    </nav>
  );
}

export default Menu;
