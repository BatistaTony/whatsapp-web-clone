import Layout from '@/components/layout';
import { Layout as AntLayout } from 'antd';
import Sider from '@/components/sidebar';
import CustomChat from '@/components/chat';
const Index = () => {
  return (
    <Layout title="WhatsApp">
      <Sider />
      <CustomChat />
    </Layout>
  );
};

export default Index;
