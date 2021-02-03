import { SearchBarStyled, SearchInput } from './style';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const { Search } = Input;

const Prefix = <SearchOutlined style={{ fontSize: 16 }} />;

const SearchBar = () => {
  return (
    <SearchBarStyled>
      <SearchInput prefix={Prefix} className="" placeholder="Search here contacts or message" />
    </SearchBarStyled>
  );
};

export default SearchBar;
