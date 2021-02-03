import styled from 'styled-components';
import { Avatar } from 'antd';
import { AvatarProps } from 'antd/lib/avatar';
import colors from '@/utils/colors';
import { AnyAaaaRecord } from 'dns';

export const AvatarStyled = styled.div`
  width: ${({ size }: any) => (size === 'small' ? '30px' : '43px')};
  height: ${({ size }: any) => (size === 'small' ? '30px' : '43px')};
  border-radius: 100%;
  box-sizing: border-box;

  div {
    width: 100%;
    height: 100%;
    border-radius: 100%;
    background: ${({ src }: any) => (src ? `url(${src})` : `${colors.smsFrom}`)};
  }
`;
