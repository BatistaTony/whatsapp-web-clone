import styled from 'styled-components';
import colors from '@/utils/colors';

export const ListStyled = styled.ul`
  display: flex;
  flex: 1;
  list-style: none;
  flex-direction: column;
`;

export const UserItemStyled = styled.li`
  width: 100%;
  height: 64px;
  display: grid;
  grid-template-columns: 15% 70% 15%;
  grid-template-rows: 100%;
  justify-content: center;
  align-items: center;
  padding: 15px;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    background: ${colors.navbar};
  }
`;

export const FirstItemData = styled.div`
  height: 100%;
`;

export const UserName = styled.div`
  color: ${colors.icons};
  font-size: 12pt;
`;

export const ItemContent = styled.div`
  color: ${colors.icons};
  font-size: 10pt;
`;

export const SecondItemData = styled.div``;

export const TimeItem = styled.div`
  color: ${colors.icons};
  font-size: 10pt;
`;
