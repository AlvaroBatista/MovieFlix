import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Logo.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src={Logo} height="40px" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado por Alvaro Batista
      </p>
    </FooterBase>
  );
}

export default Footer;
