import { ListStyled } from './style';
import UserItem from './item';

const ListUsers = () => {
  return (
    <ListStyled>
      {[1, 2, 3, 4].map((item, index) => (
        <UserItem key={index} />
      ))}
    </ListStyled>
  );
};

export default ListUsers;
