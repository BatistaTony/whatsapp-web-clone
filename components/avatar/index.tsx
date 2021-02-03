import { AvatarStyled } from './style';
import { UserOutlined } from '@ant-design/icons';

interface CustomAvatarProps {
  src: string;
  size: string;
}

const CustomAvatar = ({ src,size, ...props }: CustomAvatarProps) => {
  return (
    <AvatarStyled size={size} src={src} {...props}>
      <div></div>
    </AvatarStyled>
  );
};

export default CustomAvatar;
