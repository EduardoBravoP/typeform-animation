import { useTransform, useViewportScroll } from 'framer-motion';
import React from 'react';

import { Container } from './styles';

import LogoImg from '../../assets/images/logoEdu.png';

const Header: React.FC = () => {
  const {scrollYProgress } = useViewportScroll();

  const headerY = useTransform(scrollYProgress, [0.05, 0.09], ['0%', '-100%']);
  
  return (
    <Container style={{ y: headerY }}>
      <img src={LogoImg} alt="MySite" style={{ width: 200 }}/>

      <nav className="pages">
        <a href="/documentation">Documentation</a>
        <a href="/solutions">Solutions</a>
        <a href="/pricing">Pricing</a>
        <a href="/contract">Contact</a>
      </nav>

      <nav className="sign">
        <a href="/login">Log In</a>
        <div className="signup">
          <a href="/signup">Sign Up</a>
        </div>
      </nav>
    </Container>
  );
};

export default Header;
