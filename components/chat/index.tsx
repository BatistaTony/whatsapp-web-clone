import { CustomContent } from './style';
import Navbar from '@/components/navbar';
import CustomAvatar from '../avatar';

const CustomChat = () => {
  return (
    <CustomContent>
      <Navbar>
        <CustomAvatar src="./avatar.jpg" />
      </Navbar>
    </CustomContent>
  );
};

export default CustomChat;
