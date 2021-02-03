import { DownSquareTwoTone, MoreOutlined, MessageOutlined } from '@ant-design/icons';
import ItemMenu from './item';
import { MenuStyled } from './style';

interface CustomMenuProps {
  icon: HTMLElement | string;
  items: Array<string>;
}

const CustomMenu = () => {
  return (
    <MenuStyled>
      <ItemMenu menuId={1} icon={<MessageOutlined />} />
      <ItemMenu menuId={2} icon={<MoreOutlined />} />
    </MenuStyled>
  );
};

export default CustomMenu;
