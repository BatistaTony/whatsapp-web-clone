import styled from 'styled-components';
import { Input } from 'antd';
import { InputProps } from 'antd/lib/input';
import colors from '@/utils/colors';

export const SearchBarStyled = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SearchInput = styled(Input)<InputProps>`
  width: 90%;
  border-radius: 50px;
  display: grid;
  grid-template-columns: 10% 90%;
  grid-template-rows: 100%;
  align-items: center;
  justify-content: center;

  input {
    width: 100%;
    height: 30px;
    border: none;
    outline: none;
    background: ${colors.navbar};
    padding-left: 10px;
    box-sizing: border-box;
    border-radius: 50px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    font-size: 10pt;
    color: ${colors.icons};
  }

  .ant-input-prefix {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    background: ${colors.navbar};
  }

  svg {
    width: 13px;
    height: 13px;
    fill: ${colors.icons};
  }
`;
