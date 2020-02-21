import App from 'next/app';
import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import { Header, NavigationFooter } from '../components';
import { theme } from '../theme';

const GlobalStyle = createGlobalStyle`
  html {
    background: ${(props) => props.theme.colors.primary};
  }
  body {
    font-family: 'Open Sans', sans-serif;
    min-height: 100vh;
    position: relative;
  }
  * {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
        <NavigationFooter />
      </ThemeProvider>
    );
  }
}
