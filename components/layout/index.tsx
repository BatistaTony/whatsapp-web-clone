import { Layout as AntLayout } from 'antd';
import Head from 'next/head';
import { LayoutStyled } from './style';

interface LayoutProps {
  title?: string;
  children?: any;
}

const Layout = ({ children, title }: LayoutProps) => {
  return (
    <AntLayout>
      <Head>
        <title>{title ? title : 'WhatsApp'}</title>
      </Head>
      <LayoutStyled>{children}</LayoutStyled>
    </AntLayout>
  );
};

export default Layout;
