import React from 'react';
import { Container } from './styles';
import Logo from '../../assets/images/logo.png'

export default function header() {
  return (
    <Container>
      <img className="logo" src={Logo} alt="Logo" />
    </Container>
  );
}
