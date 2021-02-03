import { UserItemStyled, FirstItemData, TimeItem, UserName, ItemContent } from './style';
import CustomAvatar from './../../avatar';

const UserItem = () => {
  return (
    <UserItemStyled>
      <CustomAvatar size="large" src="./avatar.jpg" />
      <FirstItemData>
        <UserName>Batist Tony</UserName>
        <ItemContent> Just bue bzy to talk </ItemContent>
      </FirstItemData>
      <TimeItem>yesterday</TimeItem>
    </UserItemStyled>
  );
};

export default UserItem;
