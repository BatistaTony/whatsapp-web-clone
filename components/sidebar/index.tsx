import { SiderStyled } from './style';
import Navbar from './../navbar';
import SearchBar from './../searchbar';
import ListUsers from './listMessages';

const CustomSider = () => {
  return (
    <SiderStyled>
      <Navbar />
      <SearchBar />
      <ListUsers />
    </SiderStyled>
  );
};

export default CustomSider;
