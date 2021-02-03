import { Fragment, useEffect, useState } from 'react';
import { ItemStyled, OtherMenu, ItemWrapper } from './style';

interface ItemMenuProps {
  icon?: any;
  menuId: number;
}

const ItemMenu = ({ icon, menuId }: ItemMenuProps) => {
  const [showMenu, setShowMenu] = useState(false);

  const closeMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    document.addEventListener('click', HideOpenedDiv, true);

    const regex = RegExp('menu' + menuId, 'gi');

    function HideOpenedDiv(event: MouseEvent) {
      if (event.target) {
        if ((event.target as Element).className) {
          if (!(event.target as Element).className.match(regex)) {
            setShowMenu(false);
          }
        }
      }
    }
  }, []);

  return (
    <ItemWrapper>
      <ItemStyled onClick={closeMenu}>{icon}</ItemStyled>
      {showMenu && (
        <OtherMenu className={'menu' + menuId} initial={{ scale: 0 }} animate={{ scale: 1 }}>
          <li>New group</li>
          <li>Create a room</li>
          <li>Profile</li>
          <li>Archived</li>
          <li>Starred</li>
          <li>Settings</li>
          <li>Log out</li>
        </OtherMenu>
      )}
    </ItemWrapper>
  );
};

export default ItemMenu;
