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
        <a href="#">Documentation</a>
        <a href="#">Solutions</a>
        <a href="#">Pricing</a>
        <a href="#">Contact</a>
      </nav>

      <nav className="sign">
        <a href="#">Log In</a>
        <div className="signup">
          <a href="#">Sign Up</a>
        </div>
      </nav>
    </Container>
  );
};

export default Header;
