import styled from 'styled-components';
import { Layout } from 'antd';
import colors from '@/utils/colors';
import { motion } from 'framer-motion';

const { Header } = Layout;

export const NavbarCustom = styled(Header)`
  width: 100%;
  height: 59px;
  background: ${colors.navbar};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding-left: 15px;
  padding-right: 15px;

  .menuWrapper {
  }
`;

export const MenuStyled = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ItemStyled = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 100%;

  outline: none;
  border: none;
  background: none;
  position: relative;

  &:hover {
    background: rgba(0, 0, 0, 0.3);
  }

  svg {
    width: 18px;
    height: 18px;
    fill: ${colors.icons};
  }
`;

export const OtherMenu = styled(motion.ul)`
  list-style: none;
  width: 150px;
  height: auto;
  background: ${colors.navbar};
  box-shadow: 0 0 3px black;
  position: absolute;
  right: 0;
  top: 2.2rem;

  li {
    width: 100%;
    box-sizing: border-box;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 15px;
    text-align: left;
    color: ${colors.icons};
    cursor: pointer;
    transition: 0.5s;
    font-size: 11pt;

    &:hover {
      color: white;
    }
  }
`;

export const ItemWrapper = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  margin-right: 20px;
`;
