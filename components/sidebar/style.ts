import styled from 'styled-components';
import { Layout } from 'antd';
import colors from '@/utils/colors';

const { Sider } = Layout;

export const SiderStyled = styled.div`
  width: 100%;
  height: 100vh;
  background: ${colors.sider};
  overflow: hidden;
  position: relative;
  border-right: 1px solid ${colors.icons};
`;
