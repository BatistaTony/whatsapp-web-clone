import App from 'next/app';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

* {
  padding:0;
  margin:0;
}

`;

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
