import { NavbarCustom } from './style';
import CustomAvatar from './../avatar';
import CustomMenu from './menu';
import { MoreOutlined } from '@ant-design/icons';
import { MenuItemProps } from './navbat.types';

const Navbar = () => {
  return (
    <NavbarCustom>
      <CustomAvatar size="small" src="./avatar.jpg" />
      <div className="menuWrapper">
        <CustomMenu />
      </div>
    </NavbarCustom>
  );
};

export default Navbar;
