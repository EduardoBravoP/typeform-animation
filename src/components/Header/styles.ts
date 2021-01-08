import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.header)`
  width: 100%;
  height: 80px;
  background: rgba(0, 0, 0, 0.2);
  display: flex;

  position: fixed;
  top: 0;
  z-index: 2;

  justify-content: space-around;
  align-items: center;

  a {
    text-decoration: 0;
    color: #0f0e0e;
  }

  nav.pages a + a {
    margin-left: 20px;
  }

  nav.sign {
    display: flex;
    align-items: center;
  }

  div.signup {
    background: #0f0e0e;
    height: 40px;
    width: 100px;
    display: flex;
    margin-left: 15px;
    border-radius: 20px;

    align-items: center;
    justify-content: center;
  }

  div.signup a {
    color: #c4c1bb;
  }
`;
