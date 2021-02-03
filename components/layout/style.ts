import styled from 'styled-components';
import { Layout } from 'antd';
import { LayoutProps } from 'antd/lib/layout';

export const LayoutStyled = styled(Layout)<LayoutProps>`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 30% 70%;
  grid-template-rows: 100%;
`;
